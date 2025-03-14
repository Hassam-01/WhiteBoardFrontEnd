import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGClick: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="22"
            viewBox="0 0 22 22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M8.42734 20.5536L3.68888 4.86643C3.56914 4.47005 3.95553 4.10824 4.3432 4.25373L19.3275 9.87722L14.2586 12.5881L19.3275 17.295L16.3929 20.1266L11.362 15.4289L8.42734 20.5536Z"
                fill="#6F3393"
                fillOpacity="0.1"
            />
            <path
                d="M6.64831 19.8548L0.820248 1.98209C0.690669 1.58472 1.07689 1.2132 1.46894 1.35809L19.3349 7.96072C20.156 8.26419 20.2185 9.40163 19.4355 9.79314L14.1957 12.413L18.904 16.729C19.3237 17.1138 19.338 17.7707 18.9354 18.1733L17.1553 19.9534C16.7767 20.332 16.1671 20.3452 15.7725 19.9835L11 15.6087L8.46729 20.0409C8.03689 20.7941 6.91725 20.6796 6.64831 19.8548Z"
                stroke="#6F3393"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default SVGClick;
