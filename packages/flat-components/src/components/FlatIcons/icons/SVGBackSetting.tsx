import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGBackSetting: React.FC<FlatIconProps> = ({ active, className = "" }) => {
    return (
        <svg
            className={`${className} purple-6F3393 flat-icon ${active ? "is-active" : ""}`}
            height="19px"
            viewBox="0 -960 960 960"
            width="19px"
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // fill="#EA3323"
        >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
    );
};

export default SVGBackSetting;
