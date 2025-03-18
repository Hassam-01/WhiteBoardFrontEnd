import "./style.less";
import React, { FC, useContext } from "react";
import dateFnsGenerateConfig from "rc-picker/es/generate/dateFns";
import generatePicker, { PickerTimeProps, PickerProps } from "antd/es/date-picker/generatePicker";
import { ConfigContext } from "antd/es/config-provider";

export type DatePickerProps = PickerProps<Date>;

const DatePickerInner = /* @__PURE__ */ generatePicker<Date>(dateFnsGenerateConfig);

export const DatePicker: FC<DatePickerProps> = props => {
    // For some reason DatePickerInner does not receive configs from ConfigContext.
    // Pass them to DatePickerInner manually.
    const { getPopupContainer: getContextPopupContainer, locale: localeContext } =
        useContext(ConfigContext);

    return (
        <DatePickerInner
            {...props}
            getPopupContainer={props.getPopupContainer || getContextPopupContainer}
            locale={props.locale || localeContext?.DatePicker}
        />
    );
};

export type TimePickerProps = Omit<PickerTimeProps<Date>, "picker">;

export const TimePicker: FC<TimePickerProps> = props => {
    return <DatePicker {...props} mode={undefined} picker="time" />;
};
export interface FullTimePickerProps {
    value?: Date;
    disabledDate?: (date: Date) => boolean;
    disabledHours?: () => number[];
    disabledMinutes?: (selectedHour: number) => number[];
    onChange?: (date: Date) => void;
}

export const FullTimePicker: FC<FullTimePickerProps> = ({
    value,
    disabledDate,
    disabledHours,
    disabledMinutes,
    onChange,
}) => {
    return (
        <div className="full-time-picker">
            <div className="picker-container">
                <div className="date-picker">
                    <DatePicker
                        allowClear={false}
                        disabledDate={disabledDate}
                        value={value}
                        onChange={date => {
                            if (onChange && date) {
                                const result = new Date(date);
                                result.setSeconds(0);
                                result.setMilliseconds(0);
                                if (value) {
                                    result.setHours(value.getHours());
                                    result.setMinutes(value.getMinutes());
                                }
                                onChange(result);
                            }
                        }}
                    />
                </div>
                <div className="time-picker">
                    <TimePicker
                        allowClear={false}
                        disabledTime={() => ({ disabledHours, disabledMinutes })}
                        format="h:mm A"
                        value={value}
                        onChange={date => {
                            if (onChange && date) {
                                const result = new Date(date);
                                result.setSeconds(0);
                                result.setMilliseconds(0);
                                if (value) {
                                    result.setFullYear(value.getFullYear());
                                    result.setMonth(value.getMonth());
                                    result.setDate(value.getDate());
                                }
                                onChange(result);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
