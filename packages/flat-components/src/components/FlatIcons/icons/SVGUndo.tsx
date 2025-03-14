import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGUndo: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 29 29"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M5.00781 13.7773L12.323 20.1039V15.5917C17.0245 15.4778 20.5327 17.5326 24.5605 19.7279C23.0564 14.9049 17.7922 10.8341 12.323 11.5208V8.13672L5.00781 13.7773Z"
                fill="#6F3393"
                fillOpacity="0.1"
            />
            <path
                d="M25.2668 24.3047C25.2589 24.3047 25.2499 24.3047 25.2412 24.304C24.8607 24.2915 24.6208 23.9952 24.5885 23.6147C24.5629 23.3346 23.7902 16.5587 13.2555 16.5659V20.8988C13.2555 21.1906 13.0882 21.4571 12.8246 21.5817C12.5641 21.707 12.2505 21.6685 12.0264 21.482L2.27448 13.3718C2.18829 13.301 2.11893 13.2117 2.07144 13.1106C2.02396 13.0094 1.99955 12.8989 2.00001 12.7871C2.00076 12.5606 2.10188 12.3463 2.27674 12.2032L12.0283 4.16883C12.2531 3.98465 12.5637 3.94917 12.8257 4.07222C13.0878 4.19752 13.2555 4.4629 13.2555 4.75425V8.99208C17.6257 9.13136 21.0338 10.5423 23.2274 13.12C26.7978 17.3141 26.0011 23.4097 25.9635 23.6634C25.9079 24.0329 25.6375 24.3047 25.2668 24.3047ZM12.5035 15.0444L12.505 15.0443C20.0302 15.0489 22.9059 17.5998 24.5478 19.8525C24.3076 18.0478 23.6063 15.8721 22.0801 14.0954C20.0513 11.734 16.7823 10.4895 12.5031 10.4895C12.0876 10.4895 11.7511 10.1517 11.7511 9.73458V7.40379C11.7511 6.98096 11.2589 6.74902 10.9328 7.0182L4.86889 12.0241C4.38581 12.4228 4.38413 13.1625 4.86539 13.5635L10.9311 18.6174C11.2568 18.8888 11.7511 18.6572 11.7511 18.2333V15.7997C11.7511 15.7004 11.7706 15.602 11.8086 15.5103C11.8465 15.4186 11.9021 15.3353 11.9722 15.2652C12.1132 15.1239 12.3043 15.0445 12.5035 15.0444Z"
                fill="#6F3393"
            />
        </svg>
    );
};

export default SVGUndo;
