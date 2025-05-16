import "./JoinRoomBox.less";

import React, { KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Input, Modal, Form, InputRef } from "antd";
import { useTranslate } from "@netless/flat-i18n";
// import { formatInviteCode } from "flat-components";
import { PreferencesStoreContext } from "../../components/StoreProvider";
import { useSafePromise } from "../../utils/hooks/lifecycle";
import { SVGJoinIllustration } from "../../../../flat-components/src/components/FlatIcons/icons/SVGJoinIllustration";
import { useWatch } from "antd/lib/form/Form";
interface JoinRoomFormValues {
    roomUUID: string;
    autoCameraOn: boolean;
    autoMicOn: boolean;
}

export interface JoinRoomBoxProps {
    onJoinRoom: (roomUUID: string) => Promise<void>;
}
export const JoinRoomBox = observer<JoinRoomBoxProps>(function JoinRoomBox({ onJoinRoom }) {
    const t = useTranslate();
    const sp = useSafePromise();
    const preferencesStore = useContext(PreferencesStoreContext);
    const [form] = Form.useForm<JoinRoomFormValues>();

    const [isLoading, setLoading] = useState(false);
    const [isShowModal, showModal] = useState(false);
    const [isFormValidated, setIsFormValidated] = useState(false);
    // const [dropdown, showDropdown] = useState(false);
    const roomTitleInputRef = useRef<InputRef>(null);

    useEffect(() => {
        let ticket = NaN;
        if (isShowModal) {
            // wait a cycle till antd modal updated
            ticket = window.setTimeout(() => {
                if (roomTitleInputRef.current) {
                    roomTitleInputRef.current.focus();
                    roomTitleInputRef.current.select();
                }
            }, 0);
        }
        return () => {
            window.clearTimeout(ticket);
        };
    }, [isShowModal]);

    const defaultValues: JoinRoomFormValues = {
        roomUUID: "",
        autoCameraOn: preferencesStore.autoCameraOn,
        autoMicOn: preferencesStore.autoMicOn,
    };
    const roomUUID = useWatch("roomUUID", form);
    useEffect(() => {
        const hasNoErrors = form.getFieldsError().every(field => field.errors.length <= 0);
        setIsFormValidated(hasNoErrors);
    }, [roomUUID, form]);
    return (
        <>
            <div className="join-room-box">
                <div className="join-room-box-illustration">
                    <SVGJoinIllustration />
                </div>
                <button className="join-room-box-button" onClick={handleShowModal}>
                    Join
                </button>
            </div>
            <Modal
                centered
                cancelText={t("cancel")}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        {t("cancel")}
                    </Button>,
                    <Button
                        key="submit"
                        disabled={
                            !isFormValidated || (form.getFieldValue("roomUUID") || "").trim() === ""
                        }
                        loading={isLoading}
                        type="primary"
                        onClick={handleOk}
                    >
                        {t("join")}
                    </Button>,
                ]}
                okText={t("join")}
                open={isShowModal}
                title={t("home-page-hero-button-type.join")}
                width={400}
                wrapClassName="join-room-box-container"
                onCancel={handleCancel}
                onOk={handleOk}
            >
                <Form
                    className="main-room-menu-form"
                    form={form}
                    initialValues={defaultValues}
                    layout="vertical"
                    name="createRoom"
                    onFieldsChange={formValidateStatus}
                >
                    <Form.Item
                        label={t("Username")}
                        name="userName"
                        rules={[{ required: true, message: t("enter-user-name") }]}
                    >
                        <Input
                            ref={roomTitleInputRef}
                            autoComplete="off"
                            className="join-room-box-input"
                            placeholder={t("jhon")}
                            onKeyUp={submitOnEnter}
                        />
                    </Form.Item>
                    <Form.Item
                        label={t("room-uuid")}
                        name="roomUUID"
                        rules={[{ required: true, message: t("enter-room-uuid") }]}
                    >
                        <Input
                            ref={roomTitleInputRef}
                            autoComplete="off"
                            className="join-room-box-input"
                            placeholder={t("enter-room-uuid")}
                            // suffix={
                            //     globalStore.roomHistory.length > 0 && (
                            //         <Dropdown
                            //             open={dropdown}
                            //             overlay={
                            //                 <Menu
                            //                     className="join-room-box-dropdown-menu"
                            //                     items={globalStore.roomHistory.map(room => ({
                            //                         key: room.uuid,
                            //                         label: (
                            //                             <>
                            //                                 <span className="room-title">
                            //                                     {room.title}
                            //                                 </span>
                            //                                 <span className="invite-code">
                            //                                     {formatInviteCode("", room.uuid)}
                            //                                 </span>
                            //                             </>
                            //                         ),
                            //                     }))}
                            //                     onClick={e => selectRoomFromHistory(e.key)}
                            //                 />
                            //             }
                            //             overlayClassName="join-room-box-dropdown"
                            //         >
                            //             <Button
                            //                 size="small"
                            //                 type="text"
                            //                 onClick={() => showDropdown(e => !e)}
                            //             >
                            //                 <SVGChevronDown active={dropdown} />
                            //             </Button>
                            //         </Dropdown>
                            //     )
                            // }
                            onKeyUp={submitOnEnter}
                        />
                    </Form.Item>
                    {/* <Form.Item label={t("join-options")}>
                        <Form.Item noStyle name="autoMicOn" valuePropName="checked">
                            <Checkbox>{t("turn-on-the-microphone")}</Checkbox>
                            </Form.Item>
                            <Form.Item noStyle name="autoCameraOn" valuePropName="checked">
                            <Checkbox>{t("turn-on-the-camera")}</Checkbox>
                        </Form.Item>
                        </Form.Item> */}
                </Form>
            </Modal>
        </>
    );

    // ! method to copy roomid from clipboard, uncomment if needed
    // async function extractUUIDFromClipboard(): Promise<string | undefined> {
    //     const text = await navigator.clipboard.readText();
    //     const m = ROOM_UUID_RE.exec(text);
    //     if (m) {
    //         return m[0];
    //     }
    //     const m2 = INVITE_CODE_RE.exec(text);
    //     return m2?.[0];
    // }

    async function handleShowModal(): Promise<void> {
        // * copy from clipboard method, uncomment if needed
        // try {
        //     const roomUUID = await extractUUIDFromClipboard();
        //     if (roomUUID) {
        //         form.setFieldsValue({ roomUUID });
        //         setIsFormValidated(true);
        //     }
        // } catch {
        //     // ignore
        // }
        showModal(true);
    }

    function submitOnEnter(ev: KeyboardEvent<HTMLInputElement>): void {
        if (ev.key === "Enter" && !ev.ctrlKey && !ev.shiftKey && !ev.altKey && !ev.metaKey) {
            ev.preventDefault();
            sp(form.validateFields()).then(handleOk);
        }
    }

    async function handleOk(): Promise<void> {
        try {
            await sp(form.validateFields());
        } catch (e) {
            // errors are displayed on the form
            return;
        }

        setLoading(true);

        try {
            const values = form.getFieldsValue();
            preferencesStore.updateAutoMicOn(values.autoMicOn);
            preferencesStore.updateAutoCameraOn(values.autoCameraOn);
            await sp(onJoinRoom(values.roomUUID));
            setLoading(false);
            showModal(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    }

    function handleCancel(): void {
        showModal(false);
    }

    function formValidateStatus(): void {
        const values = form.getFieldsValue();
        setIsFormValidated(form.getFieldsError().every(field => field.errors.length <= 0));
        preferencesStore.updateAutoMicOn(values.autoMicOn);
        preferencesStore.updateAutoCameraOn(values.autoCameraOn);
    }

    // function selectRoomFromHistory(uuid: string): void {
    //     form.setFieldValue("roomUUID", formatInviteCode("", uuid));
    //     showDropdown(false);
    //     void form.validateFields();
    // }
});
