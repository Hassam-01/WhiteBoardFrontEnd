import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGSetting: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
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
            <mask
                height="24"
                id="mask0_754_1119"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="24"
                x="0"
                y="0"
            >
                <rect
                    className="flat-icon-stroke-color"
                    fill="#6F3393"
                    height="24"
                    stroke="#6F3393"
                    width="24"
                />
            </mask>
            <g mask="url(#mask0_754_1119)">
                <path
                    className="flat-icon-stroke-color"
                    d="M21.4246 11.501C21.7819 12.1198 21.7819 12.8822 21.4246 13.501L17.8288 19.7291C17.4715 20.3479 16.8113 20.7291 16.0968 20.7291H8.90519C8.19066 20.7291 7.5304 20.3479 7.17314 19.7291L3.57735 13.501C3.22008 12.8822 3.22008 12.1198 3.57735 11.501L7.17314 5.27289C7.5304 4.65409 8.19066 4.27289 8.90519 4.27289H16.0968C16.8113 4.27289 17.4715 4.65409 17.8288 5.27289L21.4246 11.501Z"
                    stroke="#6F3393"
                    strokeWidth="2"
                />
                <circle
                    className="flat-icon-stroke-color"
                    cx="12.5013"
                    cy="12.5013"
                    r="5.2435"
                    stroke="#6F3393"
                    strokeOpacity="0.1"
                    strokeWidth="2"
                />
                <circle
                    className="flat-icon-stroke-color"
                    cx="12.5015"
                    cy="12.5015"
                    r="2.44286"
                    stroke="#6F3393"
                    strokeWidth="2"
                />
            </g>
        </svg>
    );
};

export default SVGSetting;
