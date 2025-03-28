import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGExit: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
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
                className="svg-tool-icon-fill"
                clipRule="evenodd"
                d="M5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V20C19.5 20.2761 19.2761 20.5 19 20.5H5C4.72386 20.5 4.5 20.2761 4.5 20V16H3V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V8H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
                // fillRule="evenodd"
                strokeWidth="1"
            />

            <path
                className=" svg-tool-icon-fill"
                d="M14.0938 13.1253H7.125C6.94792 13.1253 6.79948 13.0654 6.67969 12.9456C6.5599 12.8258 6.5 12.6774 6.5 12.5003C6.5 12.3232 6.5599 12.1748 6.67969 12.055C6.79948 11.9352 6.94792 11.8753 7.125 11.8753H14.0938L12.3125 10.0941C12.1875 9.96906 12.1276 9.82323 12.1328 9.65656C12.138 9.4899 12.1979 9.34406 12.3125 9.21906C12.4375 9.09406 12.5859 9.02896 12.7578 9.02375C12.9297 9.01854 13.0781 9.07844 13.2031 9.20344L16.0625 12.0628C16.125 12.1253 16.1693 12.193 16.1953 12.2659C16.2214 12.3389 16.2344 12.417 16.2344 12.5003C16.2344 12.5836 16.2214 12.6618 16.1953 12.7347C16.1693 12.8076 16.125 12.8753 16.0625 12.9378L13.2031 15.7972C13.0781 15.9222 12.9297 15.9821 12.7578 15.9769C12.5859 15.9717 12.4375 15.9066 12.3125 15.7816C12.1979 15.6566 12.138 15.5107 12.1328 15.3441C12.1276 15.1774 12.1875 15.0316 12.3125 14.9066L14.0938 13.1253Z"
            />
        </svg>
    );
};

export default SVGExit;
