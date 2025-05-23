import "./style.less";
// import cnSVG from "./icons/cn.svg";
import inSVG from "./icons/in.svg";
import gbSVG from "./icons/gb.svg";
import usSVG from "./icons/us.svg";
import sgSVG from "./icons/sg.svg";

import { useLanguage, useTranslate } from "@netless/flat-i18n";
import Checkbox from "antd/lib/checkbox";
import React, { useMemo, useRef, useState } from "react";
import { addWeeks, getDay } from "date-fns";
import { Button, Form, Input, Modal, Switch } from "antd";
import { useHistory } from "react-router-dom";

import { PeriodicEndType, RoomType, Week } from "../../../types/room";
import { renderBeginTimePicker } from "./renderBeginTimePicker";
import { renderEndTimePicker } from "./renderEndTimePicker";
import { renderPeriodicForm } from "./renderPeriodicForm";
// import { ClassPicker } from "../../HomePage/ClassPicker";
import { PmiDesc, PmiExistTip } from "../../Pmi";
// import { on } from "events";

export enum Region {
    CN_HZ = "sg",
    US_SV = "us-sv",
    SG = "sg",
    IN_MUM = "in-mum",
    GB_LON = "gb-lon",
}

export const regions: Region[] = [
    Region.CN_HZ,
    Region.IN_MUM,
    Region.GB_LON,
    Region.US_SV,
    Region.SG,
];

export const RegionSVG: Record<Region, string> = {
    // [Region.CN_HZ]: cnSVG,
    [Region.IN_MUM]: inSVG,
    [Region.GB_LON]: gbSVG,
    [Region.US_SV]: usSVG,
    [Region.SG]: sgSVG,
};

export interface EditRoomFormValues {
    title: string;
    type: RoomType;
    isPeriodic: boolean;
    beginTime: Date;
    endTime: Date;
    region: Region;
    periodic: {
        endType: PeriodicEndType;
        weeks: Week[];
        rate: number;
        endTime: Date;
    };
    pmi?: boolean;
}

export type EditRoomFormInitialValues =
    | ({ isPeriodic: true } & Omit<EditRoomFormValues, "isPeriodic">)
    | ({ isPeriodic: false } & Omit<EditRoomFormValues, "periodic" | "isPeriodic">);

export type EditRoomType = "schedule" | "ordinary" | "periodic" | "periodicSub";

export interface EditRoomBodyProps {
    type: EditRoomType;
    initialValues: EditRoomFormInitialValues;
    loading: boolean;
    onSubmit: (value: EditRoomFormValues) => void;
    previousPeriodicRoomBeginTime?: number | null;
    nextPeriodicRoomBeginTime?: number | null;
    nextPeriodicRoomEndTime?: number | null;
    pmi?: string | null;
    autoPmiOn?: boolean;
    pmiRoomExist?: boolean;
    updateAutoPmiOn?: (autoPmiOn: boolean) => void;
    onClose?: () => void;
}

export const EditRoomBody: React.FC<EditRoomBodyProps> = ({
    pmi,
    autoPmiOn,
    pmiRoomExist,
    type,
    initialValues,
    loading,
    onSubmit,
    updateAutoPmiOn,
    previousPeriodicRoomBeginTime,
    nextPeriodicRoomBeginTime,
    nextPeriodicRoomEndTime,
    onClose,
}) => {
    const history = useHistory();

    const [isFormVetted, setIsFormVetted] = useState(true);
    const [isShowEditSubmitConfirm, showEditSubmitConfirm] = useState(false);

    const [isPeriodic, setIsPeriodic] = useState(false);
    const enablePmi = useMemo(() => !!pmi && !isPeriodic, [isPeriodic, pmi]);

    // @TODO: need to remove
    const [region] = useState<Region>(initialValues.region);

    const t = useTranslate();
    const language = useLanguage();

    const hasInputAutoSelectedRef = useRef(false);

    const [form] = Form.useForm<EditRoomFormValues>();

    const defaultValues = useMemo<EditRoomFormValues>(() => {
        return {
            periodic: {
                endType: "rate",
                weeks: [getDay(initialValues.beginTime)],
                rate: 7,
                endTime: addWeeks(initialValues.beginTime, 6),
            },
            ...initialValues,
        };
    }, [initialValues]);
    return (
        <>
            <div className="edit-room-body">
                <div className="edit-room-mid">
                    <div className="edit-room-header">
                        <span className="edit-room-heading">Schedule</span>
                        <span className="edit-room-close" onClick={onClose}>
                            X
                        </span>
                    </div>
                    <Form
                        className="edit-room-form"
                        form={form}
                        initialValues={defaultValues}
                        layout="vertical"
                        name="createRoom"
                        onFieldsChange={formValidateStatus}
                    >
                        <Form.Item
                            label={t("Title")}
                            name="title"
                            required={false}
                            rules={[
                                { required: true, message: t("enter-room-title") },
                                { max: 50, message: t("title-can-be-up-to-50-characters") },
                            ]}
                        >
                            <Input
                                ref={input => {
                                    if (!input) {
                                        return;
                                    }
                                    // select text on next cycle so that
                                    // dom is always ready
                                    setTimeout(() => {
                                        if (hasInputAutoSelectedRef.current) {
                                            return;
                                        }
                                        if (input) {
                                            input.focus();
                                            input.select();
                                            hasInputAutoSelectedRef.current = true;
                                        }
                                    }, 0);
                                }}
                                disabled={type === "periodicSub"}
                                placeholder={t("enter-room-theme")}
                            />
                        </Form.Item>
                        {/* <Form.Item label={t("type")} name="type">
                            <ClassPicker disabled={type === "periodicSub"} large={true} />
                        </Form.Item> */}
                        <div className="edit-room-time">
                            {renderBeginTimePicker(
                                t,
                                form,
                                previousPeriodicRoomBeginTime,
                                nextPeriodicRoomBeginTime,
                                nextPeriodicRoomEndTime,
                            )}
                            {renderEndTimePicker(
                                t,
                                form,
                                previousPeriodicRoomBeginTime,
                                nextPeriodicRoomBeginTime,
                                nextPeriodicRoomEndTime,
                            )}
                        </div>
                        {updateAutoPmiOn && (
                            <Form.Item
                                className="edit-room-form-item no-margin pmi"
                                // label={}
                                name="pmi"
                                valuePropName="checked"
                            >
                                <div
                                    className="periodic-cannot-use-pmi"
                                    title={t("periodic-cannot-use-pmi")}
                                >
                                    <Switch
                                        checked={enablePmi && autoPmiOn}
                                        className="periodic-cannot-use-pmi-switch"
                                        disabled={pmiRoomExist || !enablePmi}
                                        onChange={checked => updateAutoPmiOn?.(checked)}
                                    />
                                    <PmiDesc
                                        className="edit-room-cycle"
                                        pmi={pmi!}
                                        text={t("turn-on-the-pmi")}
                                    />
                                    {pmiRoomExist && <PmiExistTip />}
                                </div>
                            </Form.Item>
                        )}
                        {/* {type === "schedule" ? (
                            <Form.Item name="isPeriodic" valuePropName="checked">
                                <Checkbox onChange={onToggleIsPeriodic}>
                                    <span className="edit-room-cycle">{t("periodic-room")}</span>
                                </Checkbox>
                            </Form.Item>
                        ) : (
                            type === "periodic" && (
                                <div className="ant-form-item-label edit-room-form-label">
                                    {t("periodic-room")}
                                </div>
                            )
                        )} */}
                        <Form.Item
                            noStyle
                            shouldUpdate={(prev: EditRoomFormValues, curr: EditRoomFormValues) =>
                                prev.isPeriodic !== curr.isPeriodic
                            }
                        >
                            {renderPeriodicForm(t, language)}
                        </Form.Item>
                    </Form>
                    <div className="edit-room-under">
                        <Button className="edit-room-cancel" onClick={onCancelForm}>
                            {t("cancel")}
                        </Button>
                        <Button
                            className="edit-room-ok"
                            disabled={!loading && !isFormVetted}
                            loading={loading}
                            onClick={async () => {
                                if (!form.isFieldsTouched() && type !== "schedule") {
                                    history.goBack();
                                } else {
                                    await form.validateFields();
                                    if (!loading && isFormVetted) {
                                        if (type === "schedule") {
                                            onSubmitForm();
                                        } else {
                                            showEditSubmitConfirm(true);
                                        }
                                    }
                                }
                            }}
                        >
                            {type === "schedule" ? t("schedule") : t("modify")}
                        </Button>
                    </div>
                </div>
            </div>
            {type !== "schedule" && (
                <Modal
                    footer={[
                        <Button
                            key="Cancel"
                            className="schedule-room-cancel"
                            onClick={hideEditSubmitConfirm}
                        >
                            {t("cancel")}
                        </Button>,
                        <Button
                            key="Ok"
                            className="schedule-room-confirm"
                            disabled={!loading && !isFormVetted}
                            loading={loading}
                            type="primary"
                            onClick={onSubmitForm}
                        >
                            {t("confirm")}
                        </Button>,
                    ]}
                    open={isShowEditSubmitConfirm}
                    title={renderModalTitle(type)}
                    onCancel={hideEditSubmitConfirm}
                    onOk={onSubmitForm}
                >
                    {renderModalContent(type)}
                </Modal>
            )}
        </>
    );

    function renderModalTitle(editRoomType: EditRoomType): string {
        switch (editRoomType) {
            case "ordinary": {
                return t("modify-room");
            }
            case "periodicSub": {
                return t("modify-this-room");
            }
            case "periodic": {
                return t("modify-periodic-rooms");
            }
            default: {
                return t("modify-room");
            }
        }
    }

    function renderModalContent(editRoomType: EditRoomType): string {
        switch (editRoomType) {
            case "ordinary": {
                return t("make-sure-to-modify-room");
            }
            case "periodicSub": {
                return t("make-sure-to-modify-this-room");
            }
            case "periodic": {
                return t("make-sure-to-modify-the-series-of-periodic-rooms");
            }
            default: {
                return t("make-sure-to-modify-room");
            }
        }
    }

    // function onToggleIsPeriodic(e: CheckboxChangeEvent): void {
    //     if (e.target.checked) {
    //         const today: EditRoomFormValues["beginTime"] = form.getFieldValue("beginTime");
    //         form.setFieldsValue({
    //             periodic: {
    //                 weeks: [getDay(today)],
    //                 rate: 7,
    //                 endTime: endOfDay(addWeeks(today, 6)),
    //             },
    //         });
    //     }
    // }

    function onSubmitForm(): void {
        if (!loading && isFormVetted) {
            onSubmit({ ...(form.getFieldsValue(true) as EditRoomFormValues), region });
        }
    }

    function onCancelForm(): void {
        if (form.isFieldsTouched()) {
            Modal.confirm({
                content: t("back-tips"),
                onOk() {
                    // history.goBack();
                    onClose?.();
                },
            });
        } else {
            // history.goBack();
            if (onClose) {
                onClose();
            }
        }
    }

    function hideEditSubmitConfirm(): void {
        showEditSubmitConfirm(false);
    }

    function formValidateStatus(): void {
        // synchronize isPeriodic when periodic field changed
        setIsPeriodic(form.getFieldValue("isPeriodic"));
        setIsFormVetted(form.getFieldsError().every(field => field.errors.length <= 0));
    }
};
