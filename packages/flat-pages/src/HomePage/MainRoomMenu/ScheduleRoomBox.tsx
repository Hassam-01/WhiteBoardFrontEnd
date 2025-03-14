import React from "react";

import { RouteNameType, usePushHistory } from "../../utils/routes";
import { SVGScheduleIllustration } from "../../../../flat-components/src/components/FlatIcons/icons/SVGScheduleIllustration";
// import { HomePageHeroButton } from "flat-components";
import "./ScheduleRoomBox.less";
export const ScheduleRoomBox = React.memo<{}>(function ScheduleRoomBox() {
    const pushHistory = usePushHistory();

    return (
        // <HomePageHeroButton
        //     type="schedule"
        //     onClick={() => pushHistory(RouteNameType.UserScheduledPage)}
        // />
        <div className="schedule-room-box">
            <div className="schedule-room-box-illustration">
                <SVGScheduleIllustration />
            </div>
            <button
                className="schedule-room-box-button"
                onClick={() => pushHistory(RouteNameType.UserScheduledPage)}
            >
                Schedule
            </button>
        </div>
    );
});

export default ScheduleRoomBox;
