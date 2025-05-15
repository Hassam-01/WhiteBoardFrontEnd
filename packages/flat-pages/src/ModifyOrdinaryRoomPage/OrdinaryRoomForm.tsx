import { message } from "antd";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {
    EditRoomFormInitialValues,
    EditRoomFormValues,
    LoadingPage,
    errorTips,
} from "flat-components";
import { useTranslate } from "@netless/flat-i18n";
import { ordinaryRoomInfo, updateOrdinaryRoom } from "@netless/flat-server-api";
import EditRoomPage from "../components/EditRoomPage";
import { useSafePromise } from "../utils/hooks/lifecycle";

export interface OrdinaryRoomFormProps {
    roomUUID: string;
    onClose?: () => void;
}

export const OrdinaryRoomForm = observer<OrdinaryRoomFormProps>(function RoomForm({
    roomUUID,
    onClose,
}) {
    const [isLoading, setLoading] = useState(false);

    const sp = useSafePromise();
    const t = useTranslate();

    const [initialValues, setInitialValues] = useState<EditRoomFormInitialValues>();

    useEffect(() => {
        sp(ordinaryRoomInfo(roomUUID))
            .then(({ roomInfo }) => {
                setInitialValues({
                    title: roomInfo.title,
                    type: roomInfo.roomType,
                    beginTime: new Date(roomInfo.beginTime),
                    endTime: new Date(roomInfo.endTime),
                    isPeriodic: false,
                    region: roomInfo.region,
                });
            })
            .catch(e => {
                console.error(e);
                errorTips(e);
                // history.goBack();
                onClose?.();
            });
        // Only listen to roomUUID
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomUUID]);

    if (!initialValues) {
        return <LoadingPage />;
    }

    return (
        <EditRoomPage
            initialValues={initialValues}
            loading={isLoading}
            type="ordinary"
            onClose={onClose}
            onSubmit={editOrdinaryRoom}
        />
    );

    async function editOrdinaryRoom(values: EditRoomFormValues): Promise<void> {
        setLoading(true);

        try {
            await sp(
                updateOrdinaryRoom({
                    roomUUID: roomUUID,
                    beginTime: values.beginTime.valueOf(),
                    endTime: values.endTime.valueOf(),
                    title: values.title,
                    type: values.type,
                }),
            );
            void message.success(t("edit-success"));
            // history.goBack();
            onClose?.();
        } catch (e) {
            console.error(e);
            errorTips(e);
            setLoading(false);
        }
    }
});
