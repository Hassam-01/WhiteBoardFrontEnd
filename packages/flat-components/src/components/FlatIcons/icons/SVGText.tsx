import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGText: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            // height="22"
            viewBox="0 0 29 29"
            // width="19"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-fill"
                d="M23.3584 5.13672L23.5781 9.79492H23.0215C22.9141 8.97461 22.7676 8.38867 22.582 8.03711C22.2793 7.4707 21.874 7.05566 21.3662 6.79199C20.8682 6.51855 20.209 6.38184 19.3887 6.38184H16.5908V21.5576C16.5908 22.7783 16.7227 23.54 16.9863 23.8428C17.3574 24.2529 17.9287 24.458 18.7002 24.458H19.3887V25H10.9658V24.458H11.6689C12.5088 24.458 13.1045 24.2041 13.4561 23.6963C13.6709 23.3838 13.7783 22.6709 13.7783 21.5576V6.38184H11.3906C10.4629 6.38184 9.80371 6.4502 9.41309 6.58691C8.90527 6.77246 8.4707 7.12891 8.10938 7.65625C7.74805 8.18359 7.5332 8.89648 7.46484 9.79492H6.9082L7.14258 5.13672H23.3584Z"
                strokeLinejoin="round"
                strokeWidth="1.25"
            />
        </svg>
    );
};

export default SVGText;
