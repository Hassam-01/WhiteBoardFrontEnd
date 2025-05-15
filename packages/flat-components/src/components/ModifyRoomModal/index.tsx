import "./index.less";

import React from "react";
import { Modal } from "antd";
import { RoomInfo } from "../../types/room";
import { useTranslate } from "@netless/flat-i18n";
// import { EditRoomBody } from "../EditRoomPage";
import { OrdinaryRoomForm } from "../../../../flat-pages/src/ModifyOrdinaryRoomPage/OrdinaryRoomForm"; // TODO: remove this import when the component is ready

export interface ModifyRoomModalProps {
    visible: boolean;
    room: RoomInfo;
    onCancel: () => void;
}

export const ModifyRoomModal: React.FC<ModifyRoomModalProps> = ({ visible, room, onCancel }) => {
    const t = useTranslate();

    return (
        <Modal
            cancelText={t("cancel")}
            className="modify-modal"
            okText={t("modify")}
            open={visible}
            width={650}
            onCancel={onCancel}
        >
            <OrdinaryRoomForm roomUUID={room.roomUUID} onClose={onCancel} />
        </Modal>
    );
};
