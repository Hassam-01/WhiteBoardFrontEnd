import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGUserInvite: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
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
            <circle
                className="svg-tool-icon-stroke"
                cx="8.2636"
                cy="7.94524"
                r="4.29524"
                strokeLinejoin="round"
                strokeWidth="1.3"
            />
            <path
                className="svg-tool-icon-fill"
                d="M14.8576 19.4839C14.8576 21.3047 13.6953 20.8026 8.26398 20.8026C3.31873 20.8026 2 21.3047 2 19.4839C2 17.3272 4.30778 14.209 8.26398 14.209C12.5499 14.209 15.1873 17.8355 14.8576 19.4839Z"
            />
            <mask
                height="10"
                id="mask0_498_2526"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="10"
                x="13"
                y="3"
            >
                <rect className="svg-tool-icon-fill" height="10" width="10" x="13" y="3" />
            </mask>
            <g mask="url(#mask0_498_2526)">
                <path
                    className="svg-tool-icon-fill"
                    d="M17.3451 8.6556H15.3867C15.2062 8.6556 15.0516 8.59136 14.9232 8.46289C14.7947 8.33442 14.7305 8.1799 14.7305 7.99935C14.7305 7.81879 14.7947 7.66428 14.9232 7.53581C15.0516 7.40734 15.2062 7.3431 15.3867 7.3431H17.3451V5.38477C17.3451 5.20421 17.4093 5.0497 17.5378 4.92122C17.6662 4.79275 17.8207 4.72852 18.0013 4.72852C18.1819 4.72852 18.3364 4.79275 18.4648 4.92122C18.5933 5.0497 18.6576 5.20421 18.6576 5.38477V7.3431H20.6159C20.7964 7.3431 20.951 7.40734 21.0794 7.53581C21.2079 7.66428 21.2721 7.81879 21.2721 7.99935C21.2721 8.1799 21.2079 8.33442 21.0794 8.46289C20.951 8.59136 20.7964 8.6556 20.6159 8.6556H18.6576V10.6139C18.6576 10.7945 18.5933 10.949 18.4648 11.0775C18.3364 11.2059 18.1819 11.2702 18.0013 11.2702C17.8207 11.2702 17.6662 11.2059 17.5378 11.0775C17.4093 10.949 17.3451 10.7945 17.3451 10.6139V8.6556Z"
                />
            </g>
        </svg>
    );
};

export default SVGUserInvite;
