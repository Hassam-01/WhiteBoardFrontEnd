import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGNextPage: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="18"
            viewBox="0 0 12 18"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M6.59184 9.19452C6.81056 8.9961 6.81056 8.65234 6.59184 8.45391L2.58597 4.81952C2.26466 4.52801 1.75 4.75599 1.75 5.18983V12.4586C1.75 12.8924 2.26466 13.1204 2.58597 12.8289L6.59184 9.19452Z"
                fill="#D9D9D9"
            />
            <path
                d="M2.94562 1.90928C2.51624 1.47236 2.5164 0.763922 2.94599 0.327208C3.37524 -0.109162 4.07079 -0.109056 4.49991 0.327444L11.569 8.47929C11.7055 8.61734 11.8138 8.7815 11.8878 8.96233C11.9617 9.14315 11.9998 9.33707 11.9998 9.53292C11.9998 9.72878 11.9617 9.92269 11.8878 10.1035C11.8138 10.2843 11.7055 10.4485 11.569 10.5866L4.32898 17.5376C3.89592 17.9021 3.26146 17.8716 2.86407 17.4673C2.40781 17.003 2.44578 16.2393 2.94575 15.8242L9.49511 9.53516L2.94562 1.90928Z"
                fill="#BDB6C6"
            />
        </svg>
    );
};

export default SVGNextPage;
