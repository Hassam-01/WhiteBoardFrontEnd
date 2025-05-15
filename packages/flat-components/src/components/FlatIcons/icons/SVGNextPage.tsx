import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGNextPage: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29 ${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            // height="18"
            viewBox="0 0 29 29"
            // width="12"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-fill fill-opacity-0-5"
                d="M15.5918 14.1945C15.8106 13.9961 15.8106 13.6523 15.5918 13.4539L11.586 9.81952C11.2647 9.52801 10.75 9.75599 10.75 10.1898V17.4586C10.75 17.8924 11.2647 18.1204 11.586 17.8289L15.5918 14.1945Z"
            />
            <path
                className="svg-tool-icon-fill"
                d="M11.9456 6.90928C11.5162 6.47236 11.5164 5.76392 11.946 5.32721C12.3752 4.89084 13.0708 4.89094 13.4999 5.32744L20.569 13.4793C20.7055 13.6173 20.8138 13.7815 20.8878 13.9623C20.9617 14.1432 20.9998 14.3371 20.9998 14.5329C20.9998 14.7288 20.9617 14.9227 20.8878 15.1035C20.8138 15.2843 20.7055 15.4485 20.569 15.5866L13.329 22.5376C12.8959 22.9021 12.2615 22.8716 11.8641 22.4673C11.4078 22.003 11.4458 21.2393 11.9457 20.8242L18.4951 14.5352L11.9456 6.90928Z"
            />
        </svg>
    );
};

export default SVGNextPage;
