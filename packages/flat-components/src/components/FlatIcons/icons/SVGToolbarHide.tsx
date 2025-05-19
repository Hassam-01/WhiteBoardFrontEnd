import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGToolBarHide: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`${className} purple-6F3393 flat-icon ${active ? "is-active" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            // fill="#6f3393"
        >
            <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>
    );
};

export default SVGToolBarHide;
