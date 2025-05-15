import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGPrevPage: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            // height="18"
            viewBox="0 0 30 29"
            // width="13"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-fill fill-opacity-0-5"
                d="M14.9082 14.1945C14.6894 13.9961 14.6894 13.6523 14.9082 13.4539L18.914 9.81952C19.2353 9.52801 19.75 9.75599 19.75 10.1898V17.4586C19.75 17.8924 19.2353 18.1204 18.914 17.8289L14.9082 14.1945Z"
            />
            <path
                className="svg-tool-icon-fill "
                d="M18.5544 6.90928C18.9838 6.47236 18.9836 5.76392 18.554 5.32721C18.1248 4.89084 17.4292 4.89094 17.0001 5.32744L9.93104 13.4793C9.79451 13.6173 9.68616 13.7815 9.61222 13.9623C9.53828 14.1432 9.50022 14.3371 9.50022 14.5329C9.50022 14.7288 9.53828 14.9227 9.61222 15.1035C9.68616 15.2843 9.79451 15.4485 9.93104 15.5866L17.171 22.5376C17.6041 22.9021 18.2385 22.8716 18.6359 22.4673C19.0922 22.003 19.0542 21.2393 18.5543 20.8242L12.0049 14.5352L18.5544 6.90928Z"
            />
        </svg>
    );
};

export default SVGPrevPage;
