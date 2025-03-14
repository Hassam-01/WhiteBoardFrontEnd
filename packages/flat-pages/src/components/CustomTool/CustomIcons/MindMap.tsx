// import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGMindMap: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <rect x="4.5" y="12" width="5" height="5" rx="1" fill="#6F3393" fillOpacity="0.3" />
            <rect
                x="17.25"
                y="9.75"
                width="8.5"
                height="6.5"
                rx="1.25"
                stroke="#6F3393"
                strokeWidth="1.5"
            />
            <rect
                x="17.25"
                y="18.75"
                width="8.5"
                height="6.5"
                rx="1.25"
                stroke="#6F3393"
                strokeWidth="1.5"
            />
            <rect
                x="1.25"
                y="8.75"
                width="8.5"
                height="8.5"
                rx="2.25"
                stroke="#6F3393"
                strokeWidth="1.5"
            />
            <rect
                x="17.25"
                y="0.75"
                width="8.5"
                height="6.5"
                rx="1.25"
                stroke="#6F3393"
                strokeWidth="1.5"
            />
            <path
                d="M16.5 3H13C12.4477 3 12 3.44772 12 4V22.5C12 23.0523 12.4477 23.5 13 23.5H17M10.5 13H17"
                stroke="#6F3393"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default SVGMindMap;
