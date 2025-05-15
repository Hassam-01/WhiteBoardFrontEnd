import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGEraser: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className}  ${active ? "is-active" : ""}`}
            fill="none"
            // height="24"
            viewBox="0 0 29 29" // width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <line
                className="svg-tool-icon-stroke stroke-width-2"
                x1="8.98836"
                x2="16.1266"
                y1="10.914"
                y2="18.0523"
            />
            <ellipse
                className="svg-tool-icon-stroke stroke-width-1-5"
                cx="14"
                cy="24"
                rx="11"
                ry="2"
                strokeDasharray="3 3"
                strokeLinecap="round"
                strokeMiterlimit="16"
            />
            <rect
                className="flat-icon-stroke-color fill-opacity-0-5"
                fill="#E5DEF0"
                height="4.82278"
                transform="rotate(45.362 8.42188 11.7227)"
                width="9.72662"
                x="8.42188"
                y="11.7227"
            />
            <rect
                className="flat-icon-stroke-color svg-tool-icon-stroke stroke-width-2"
                height="11.1177"
                rx="2"
                transform="rotate(-44.3152 4 15.082)"
                width="17.2943"
                x="4"
                y="15.082"
            />
        </svg>
    );
};

export default SVGEraser;
