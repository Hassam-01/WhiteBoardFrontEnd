import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";
import { type } from "os";

export const SVGMyLibraryFilled: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`${className} purple-libSVG flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="21"
            viewBox="0 0 19 21"
            width="19"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                height="19"
                id="mask0_786_2932"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="19"
                x="0"
                y="0"
            >
                <rect fill="#D9D9D9" height="19" width="19" />
            </mask>
            <g mask="url(#mask0_786_2932)">
                <path
                    d="M3.16732 17.4154C2.7319 17.4154 2.35916 17.2603 2.04909 16.9503C1.73902 16.6402 1.58398 16.2674 1.58398 15.832V4.7487H3.16732V15.832H14.2507V17.4154H3.16732ZM6.33398 14.2487C5.89857 14.2487 5.52582 14.0937 5.21575 13.7836C4.90569 13.4735 4.75065 13.1008 4.75065 12.6654V3.16536C4.75065 2.72995 4.90569 2.3572 5.21575 2.04714C5.52582 1.73707 5.89857 1.58203 6.33398 1.58203H15.834C16.2694 1.58203 16.6421 1.73707 16.9522 2.04714C17.2623 2.3572 17.4173 2.72995 17.4173 3.16536V12.6654C17.4173 13.1008 17.2623 13.4735 16.9522 13.7836C16.6421 14.0937 16.2694 14.2487 15.834 14.2487H6.33398ZM10.2923 8.70703L12.2715 7.51953L14.2507 8.70703V3.16536H10.2923V8.70703Z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
};

export default SVGMyLibraryFilled;
