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
            className={`${className} ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 25 25"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <circle
                className="svg-tool-icon-fill"
                cx="14.5"
                cy="14.5"
                r="6.5"
                // fill=""
                fillOpacity="0.15"
            />
            <circle
                className="svg-tool-icon-stroke"
                cx="12.5"
                cy="12.5"
                r="11.5"
                stroke="#595397"
                strokeWidth="2"
            />
            <path
                className="svg-tool-icon-stroke"
                d="M6 12.5H19M12.5 19V6"
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
