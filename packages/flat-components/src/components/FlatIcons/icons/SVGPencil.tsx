import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGPencil: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
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
            <path
                className="svg-tool-icon-stroke stroke-width-1-5"
                d="M1.91304 13.2391L12.8696 2.28261M1.91304 13.2391L8.76087 20.087M1.91304 13.2391L1.14911 19.3506C1.07156 19.971 1.57596 20.5096 2.20011 20.4729L8.76087 20.087M12.8696 2.28261L19.7174 9.13043M12.8696 2.28261L13.738 1.41421C14.519 0.633165 15.7853 0.633165 16.5664 1.41421L20.5858 5.43361C21.3668 6.21466 21.3668 7.48099 20.5858 8.26204L19.7174 9.13043M19.7174 9.13043L8.76087 20.087M11.5 12.7826L13.0978 11.1848L14.6957 9.58696M13.7826 21H22"
                strokeLinecap="round"
            />
            <rect
                className="svg-tool-icon-fill fill-opacity-0-1"
                height="1.82719"
                transform="rotate(-44.9293 7.40625 17.8711)"
                width="14.2248"
                x="7.40625"
                y="17.8711"
            />
        </svg>
    );
};

export default SVGPencil;
