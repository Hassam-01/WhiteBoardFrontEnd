import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGWhiteboardAdd: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} ${active ? "is-active" : ""}`}
            fill="none"
            // height="24"
            viewBox="0 0 29 29"
            // width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <circle cx="16.5" cy="15.5" fill="#595397" fillOpacity="0.15" r="6.5" />
            <circle
                className="svg-tool-icon-stroke "
                cx="14.5"
                cy="13.5"
                r="11.5"
                strokeWidth="2"
            />
            <path
                className="svg-tool-icon-stroke"
                d="M8 13.5H21M14.5 20V7"
                // stroke="#595397"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default SVGWhiteboardAdd;
