import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGPencil: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            // height="24"
            viewBox="0 0 29 29"
            // width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-stroke stroke-width-1-5"
                d="M4.91304 17.2391L15.8696 6.28261M4.91304 17.2391L11.7609 24.087M4.91304 17.2391L4.14911 23.3506C4.07156 23.971 4.57596 24.5096 5.20011 24.4729L11.7609 24.087M15.8696 6.28261L22.7174 13.1304M15.8696 6.28261L16.738 5.41421C17.519 4.63316 18.7853 4.63316 19.5664 5.41421L23.5858 9.43361C24.3668 10.2147 24.3668 11.481 23.5858 12.262L22.7174 13.1304M22.7174 13.1304L11.7609 24.087M14.5 16.7826L16.0978 15.1848L17.6957 13.587M16.7826 25H25"
                strokeLinecap="round"
            />
            <rect
                className="svg-tool-icon-fill fill-opacity-0-1"
                height="1.82719"
                transform="rotate(-44.9293 10.4062 21.8711)"
                width="14.2248"
                x="10.4062"
                y="21.8711"
            />
        </svg>
    );
};

export default SVGPencil;
