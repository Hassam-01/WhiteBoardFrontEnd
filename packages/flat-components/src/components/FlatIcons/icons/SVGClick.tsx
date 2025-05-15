import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGClick: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} ${active ? "is-active" : ""}`}
            fill="none"
            // height="22"
            viewBox="0 0 30 29" // width="22"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-fill fill-opacity-0-1"
                d="M12.4273 23.5536L7.68888 7.86643C7.56914 7.47005 7.95553 7.10824 8.3432 7.25373L23.3275 12.8772L18.2586 15.5881L23.3275 20.295L20.3929 23.1266L15.362 18.4289L12.4273 23.5536Z"
            />
            <path
                className="svg-tool-icon-stroke stroke-width-1-5"
                d="M10.6483 22.8548L4.82025 4.98209C4.69067 4.58472 5.07689 4.2132 5.46894 4.35809L23.3349 10.9607C24.156 11.2642 24.2185 12.4016 23.4355 12.7931L18.1957 15.413L22.904 19.729C23.3237 20.1138 23.338 20.7707 22.9354 21.1733L21.1553 22.9534C20.7767 23.332 20.1671 23.3452 19.7725 22.9835L15 18.6087L12.4673 23.0409C12.0369 23.7941 10.9173 23.6796 10.6483 22.8548Z"
            />
            <mask
                height="29"
                id="mask0_3015_4760"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="30"
                x="0"
                y="0"
            >
                <rect fill="#595397" height="29" width="29" x="0.5" />
            </mask>
            <g mask="url(#mask0_3015_4760)"></g>
        </svg>
    );
};

export default SVGClick;
