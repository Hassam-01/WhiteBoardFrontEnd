import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGPrevPage: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="18"
            viewBox="0 0 13 18"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-fill fill-opacity-0-5"
                d="M5.90816 9.19452C5.68944 8.9961 5.68944 8.65234 5.90816 8.45391L9.91403 4.81952C10.2353 4.52801 10.75 4.75599 10.75 5.18983V12.4586C10.75 12.8924 10.2353 13.1204 9.91403 12.8289L5.90816 9.19452Z"
            />
            <path
                className="svg-tool-icon-fill "
                d="M9.55438 1.90928C9.98376 1.47236 9.9836 0.763922 9.55401 0.327208C9.12476 -0.109162 8.42921 -0.109056 8.00009 0.327444L0.931039 8.47929C0.79451 8.61734 0.686159 8.7815 0.612222 8.96233C0.538284 9.14315 0.50022 9.33707 0.50022 9.53292C0.50022 9.72878 0.538284 9.92269 0.612222 10.1035C0.686159 10.2843 0.79451 10.4485 0.931039 10.5866L8.17102 17.5376C8.60408 17.9021 9.23854 17.8716 9.63593 17.4673C10.0922 17.003 10.0542 16.2393 9.55425 15.8242L3.00489 9.53516L9.55438 1.90928Z"
            />
        </svg>
    );
};

export default SVGPrevPage;
