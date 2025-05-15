import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGShapes: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} ${active ? "is-active" : ""}`}
            fill="none"
            // height="24"
            viewBox="0 0 30 29" // width="23"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <rect
                className="svg-tool-icon-stroke"
                height="10.98"
                rx="1.25"
                transform="rotate(45.0301 17.1293 4.06066)"
                width="10.98"
                x="17.1293"
                y="4.06066"
            />
            <rect
                className="flat-icon-stroke-color svg-tool-icon-stroke"
                fill="#E5DEF0"
                fillOpacity={0.5}
                height="12.65"
                rx="1.125"
                strokeWidth="1.75"
                width="12.65"
                x="4.375"
                y="8.67578"
            />
            <circle
                className="flat-icon-stroke-color svg-tool-icon-stroke"
                cx="16.9407"
                cy="20.2786"
                fill="#FEF7FF"
                fillOpacity={0.9}
                r="5.97"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default SVGShapes;
