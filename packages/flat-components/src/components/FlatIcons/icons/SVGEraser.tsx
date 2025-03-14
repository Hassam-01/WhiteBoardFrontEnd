import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGEraser: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <line
                className="flat-icon-stroke-color"
                stroke="#6F3393"
                strokeWidth="2"
                x1="6.98836"
                x2="14.1266"
                y1="8.91399"
                y2="16.0523"
            />
            <ellipse
                className="flat-icon-stroke-color"
                cx="12"
                cy="22"
                rx="11"
                ry="2"
                stroke="#6F3393"
                strokeDasharray="3 3"
                strokeLinecap="round"
                strokeMiterlimit="16"
                strokeWidth="1.5"
            />
            <rect
                className="flat-icon-stroke-color"
                fill="#E5DEF0"
                height="4.82278"
                transform="rotate(45.362 6.42188 9.72266)"
                width="9.72662"
                x="6.42188"
                y="9.72266"
            />
            <rect
                className="flat-icon-stroke-color"
                height="11.1177"
                rx="2"
                stroke="#6F3393"
                strokeWidth="2"
                transform="rotate(-44.3152 2 13.082)"
                width="17.2943"
                x="2"
                y="13.082"
            />
        </svg>
    );
};

export default SVGEraser;
