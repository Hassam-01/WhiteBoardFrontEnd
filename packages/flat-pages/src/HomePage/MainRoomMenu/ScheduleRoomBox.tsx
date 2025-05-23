import React, { useContext, useEffect, useMemo, useState } from "react";
import { RouteNameType, usePushHistory } from "../../utils/routes";
import { SVGScheduleIllustration } from "../../../../flat-components/src/components/FlatIcons/icons/SVGScheduleIllustration";
// import { HomePageHeroButton } from "flat-components";
import { observer } from "mobx-react-lite";
import { isBefore, addMinutes, roundToNearestMinutes, getDay, addWeeks } from "date-fns";
import { EditRoomFormValues } from "flat-components";
import { useTranslate } from "@netless/flat-i18n";
import { useHistory } from "react-router-dom";

import { RoomType } from "@netless/flat-server-api";
import {
    PreferencesStoreContext,
    GlobalStoreContext,
    RoomStoreContext,
} from "../../components/StoreProvider";
import { useSafePromise } from "../../utils/hooks/lifecycle";
import EditRoomPage from "../../components/EditRoomPage";
import { errorTips } from "flat-components";
import { useLoginCheck } from "../../utils/use-login-check";
import "./ScheduleRoomBox.less";
export const ScheduleRoomBox = React.memo<{}>(function ScheduleRoomBox() {
    const pushHistory = usePushHistory();
    const [isShowModal, showModal] = useState(false);
    useEffect(() => {
        if (isShowModal) {
            // showModal(false);
        }
        // console.log();
    }, [isShowModal]);
    const closeModal = (): void => {
        showModal(false);
        console.log("closeModal");
    };
    return (
        // <HomePageHeroButton
        //     type="schedule"
        //     onClick={() => pushHistory(RouteNameType.UserScheduleModal)}
        // />
        <>
            <div className="schedule-room-box">
                <div className="schedule-room-box-illustration">
                    <SVGScheduleIllustration />
                </div>
                <button
                    className="schedule-room-box-button"
                    // onClick={() => pushHistory(RouteNameType.UserScheduleModal)}
                    onClick={() => showModal(!isShowModal)}
                >
                    Schedule
                </button>
            </div>
            <div className="schedule-room-box-modal">
                {isShowModal && <UserScheduleModal onClose={closeModal} />}
            </div>
        </>
    );
});

export default ScheduleRoomBox;

const getInitialBeginTime = (): Date => {
    const now = new Date();
    let time = roundToNearestMinutes(now, { nearestTo: 30 });
    if (isBefore(time, now)) {
        time = addMinutes(time, 30);
    }
    time.setSeconds(0);
    time.setMilliseconds(0);
    return time;
};

const UserScheduleModal = observer(function UserScheduleModal({
    onClose,
}: {
    onClose: () => void;
}) {
    useLoginCheck();
    const t = useTranslate();
    const history = useHistory();
    const sp = useSafePromise();
    const roomStore = useContext(RoomStoreContext);
    const globalStore = useContext(GlobalStoreContext);
    const preferencesStore = useContext(PreferencesStoreContext);
    const [isLoading, setLoading] = useState(false);

    // if there exists pmi room, it can not be selected
    const defaultPmi = useMemo(
        () => preferencesStore.autoPmiOn && !globalStore.pmiRoomExist,
        [globalStore.pmiRoomExist, preferencesStore.autoPmiOn],
    );
    console.log("close function: ", onClose);
    const [defaultValues] = useState<EditRoomFormValues>(() => {
        const scheduleBeginTime = getInitialBeginTime();
        return {
            title: globalStore.userInfo?.name
                ? t(`${defaultPmi ? "pmi-" : ""}schedule-room-default-title`, {
                      name: globalStore.userInfo.name,
                  })
                : "",
            type: RoomType.BigClass,
            isPeriodic: false,
            region: preferencesStore.getRegion(),
            beginTime: new Date(scheduleBeginTime),
            endTime: addMinutes(scheduleBeginTime, 30),
            periodic: {
                endType: "rate",
                weeks: [getDay(scheduleBeginTime)],
                rate: 7,
                endTime: addWeeks(scheduleBeginTime, 6),
            },
            // if there exists pmi room, it can not be selected
            pmi: defaultPmi,
        };
    });

    useEffect(() => {
        const checkPmi = (): void => {
            if (!globalStore.pmi) {
                globalStore.updatePmi();
            }
        };

        checkPmi();
    }, [globalStore]);

    return (
        <EditRoomPage
            autoPmiOn={defaultPmi}
            initialValues={defaultValues}
            loading={isLoading}
            pmi={globalStore.pmi}
            pmiRoomExist={globalStore.pmiRoomExist}
            type="schedule"
            updateAutoPmiOn={preferencesStore.updateAutoPmiOn}
            onClose={onClose}
            onSubmit={createRoom}
        />
    );

    async function createRoom(values: EditRoomFormValues): Promise<void> {
        setLoading(true);

        try {
            const basePayload = {
                title: values.title,
                type: values.type,
                region: values.region,
                beginTime: values.beginTime.valueOf(),
                endTime: values.endTime.valueOf(),
            };

            if (values.isPeriodic) {
                await sp(
                    roomStore.createPeriodicRoom({
                        ...basePayload,
                        periodic:
                            values.periodic.endType === "rate"
                                ? {
                                      weeks: values.periodic.weeks,
                                      rate: values.periodic.rate,
                                  }
                                : {
                                      weeks: values.periodic.weeks,
                                      endTime: values.periodic.endTime.valueOf(),
                                  },
                    }),
                );
            } else {
                await sp(roomStore.createOrdinaryRoom({ ...basePayload, pmi: !!values.pmi }));
            }

            history.goBack();
        } catch (e) {
            console.error(e);
            errorTips(e);
            setLoading(false);
        }
    }
});

// export default UserScheduleModal;
