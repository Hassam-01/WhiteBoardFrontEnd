import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGMore: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
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
            <circle cx="14.6951" cy="14.697" fill="#E5DEF0" r="5.47826" />
            <circle cx="11.5" cy="11.5" r="10.5" stroke="#6F3393" strokeWidth="2" />
            <circle cx="6.15234" cy="11.3672" fill="#6F3393" r="1.5" />
            <circle cx="11.1523" cy="11.3672" fill="#6F3393" r="1.5" />
            <circle cx="17.1523" cy="11.3672" fill="#6F3393" r="1.5" />
        </svg>
    );
};

export default SVGMore;
