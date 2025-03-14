// import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGSelectorApp: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <circle cx="13.0156" cy="12.5" r="12.5" fill="#6F3393" />
            {/* <mask
                id="mask0_818_1033"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="20"
                height="19"
            >
                <rect x="3.64844" y="3.125" width="18.75" height="18.75" fill="#FEF7FF" />
            </mask> */}
            <path
                d="M11.9355 15.625C11.9355 14.5703 12.0299 13.8119 12.2188 13.3496C12.4076 12.8874 12.8079 12.3828 13.4199 11.8359C13.9538 11.3672 14.3607 10.9603 14.6406 10.6152C14.9206 10.2702 15.0605 9.8763 15.0605 9.43359C15.0605 8.89974 14.8815 8.45703 14.5234 8.10547C14.1654 7.75391 13.6673 7.57813 13.0293 7.57813C12.3652 7.57813 11.8607 7.77995 11.5156 8.18359C11.1706 8.58724 10.9264 8.9974 10.7832 9.41406L8.77148 8.55469C9.04492 7.72135 9.54622 6.9987 10.2754 6.38672C11.0046 5.77474 11.9225 5.46875 13.0293 5.46875C14.3965 5.46875 15.4479 5.84961 16.1836 6.61133C16.9193 7.37305 17.2871 8.28776 17.2871 9.35547C17.2871 10.0065 17.1471 10.5632 16.8672 11.0254C16.5872 11.4876 16.1478 12.0117 15.5488 12.5977C14.9108 13.2096 14.5234 13.6751 14.3867 13.9941C14.25 14.3132 14.1816 14.8568 14.1816 15.625H11.9355ZM13.0293 20.3125C12.5996 20.3125 12.2318 20.1595 11.9258 19.8535C11.6198 19.5475 11.4668 19.1797 11.4668 18.75C11.4668 18.3203 11.6198 17.9525 11.9258 17.6465C12.2318 17.3405 12.5996 17.1875 13.0293 17.1875C13.459 17.1875 13.8268 17.3405 14.1328 17.6465C14.4388 17.9525 14.5918 18.3203 14.5918 18.75C14.5918 19.1797 14.4388 19.5475 14.1328 19.8535C13.8268 20.1595 13.459 20.3125 13.0293 20.3125Z"
                fill="#FEF7FF"
            />
        </svg>
    );
};

export default SVGSelectorApp;
