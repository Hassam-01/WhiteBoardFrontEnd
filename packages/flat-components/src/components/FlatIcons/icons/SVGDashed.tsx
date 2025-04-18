import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGDashed: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 26 27"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="purple-6F3393-stroke"
                d="M1.25597 1.32499C23.3604 1.3233 2.86806 25.793 24.5012 25.7936"
                strokeDasharray="4 4"
                strokeLinecap="round"
                strokeWidth="2"
            />
        </svg>
    );
};

export default SVGDashed;
