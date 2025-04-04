import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGShapes: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 23 24"
            width="23"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <rect
                className="svg-tool-icon-stroke"
                height="10.98"
                rx="1.25"
                // stroke="#6F3393"
                strokeWidth="1.5"
                transform="rotate(45.0301 13.6283 1.06066)"
                width="10.98"
                x="13.6283"
                y="1.06066"
            />
            <rect
                className="flat-icon-stroke-color svg-tool-icon-stroke"
                fill="#E5DEF0"
                height="12.65"
                rx="1.125"
                // stroke="#6F3393"
                strokeWidth="1.75"
                width="12.65"
                x="0.875"
                y="5.67578"
            />
            <circle
                className="flat-icon-stroke-color svg-tool-icon-stroke"
                cx="13.4407"
                cy="17.2786"
                fill="#FEF7FF"
                r="5.97"
                // stroke="#6F3393"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default SVGShapes;
