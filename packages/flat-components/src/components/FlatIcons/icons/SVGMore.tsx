import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGMore: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} ${active ? "is-active" : ""}`}
            fill="none"
            // height="24"
            viewBox="0 0 29 29" // width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <circle
                className="fill-opacity-0-5"
                cx="16.696"
                cy="16.697"
                fill="#E5DEF0"
                r="5.47826"
            />
            <circle className="svg-tool-icon-stroke" cx="13.5" cy="13.5" r="10.5" strokeWidth="2" />
            {/* <circle className="svg-tool-icon-fill" cx="13.5" cy="13.5" r="10.5" /> */}
            <circle className="svg-tool-icon-fill" cx="8.15234" cy="13.3672" r="1.5" />
            <circle className="svg-tool-icon-fill" cx="13.1523" cy="13.3672" r="1.5" />
            <circle className="svg-tool-icon-fill" cx="19.1523" cy="13.3672" r="1.5" />
        </svg>
    );
};

export default SVGMore;
