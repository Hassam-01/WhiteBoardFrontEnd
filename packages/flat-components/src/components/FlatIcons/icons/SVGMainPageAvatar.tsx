import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGMainPageAvatar: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M9.81254 10.4991C8.49998 10.4991 7.37634 10.0317 6.44163 9.09701C5.50693 8.1623 5.03957 7.03866 5.03957 5.7261C5.03957 4.41353 5.50693 3.28989 6.44163 2.35519C7.37634 1.42048 8.49998 0.953125 9.81254 0.953125C11.1251 0.953125 12.2487 1.42048 13.1835 2.35519C14.1182 3.28989 14.5855 4.41353 14.5855 5.7261C14.5855 7.03866 14.1182 8.1623 13.1835 9.09701C12.2487 10.0317 11.1251 10.4991 9.81254 10.4991ZM0.266602 20.045V16.7039C0.266602 16.0278 0.440616 15.4063 0.788645 14.8395C1.13667 14.2727 1.59906 13.8401 2.17579 13.5418C3.40881 12.9253 4.66171 12.4629 5.9345 12.1547C7.2073 11.8464 8.49998 11.6923 9.81254 11.6923C11.1251 11.6923 12.4178 11.8464 13.6906 12.1547C14.9634 12.4629 16.2163 12.9253 17.4493 13.5418C18.026 13.8401 18.4884 14.2727 18.8364 14.8395C19.1845 15.4063 19.3585 16.0278 19.3585 16.7039V20.045H0.266602ZM2.65309 17.6585H16.972V16.7039C16.972 16.4852 16.9173 16.2863 16.8079 16.1073C16.6985 15.9283 16.5544 15.7891 16.3754 15.6897C15.3015 15.1527 14.2176 14.75 13.1238 14.4815C12.03 14.213 10.9262 14.0788 9.81254 14.0788C8.69885 14.0788 7.5951 14.213 6.50129 14.4815C5.40749 14.75 4.32363 15.1527 3.24971 15.6897C3.07072 15.7891 2.92654 15.9283 2.81716 16.1073C2.70778 16.2863 2.65309 16.4852 2.65309 16.7039V17.6585ZM9.81254 8.11258C10.4688 8.11258 11.0306 7.8789 11.498 7.41155C11.9654 6.9442 12.199 6.38238 12.199 5.7261C12.199 5.06981 11.9654 4.50799 11.498 4.04064C11.0306 3.57329 10.4688 3.33961 9.81254 3.33961C9.15626 3.33961 8.59444 3.57329 8.12709 4.04064C7.65973 4.50799 7.42606 5.06981 7.42606 5.7261C7.42606 6.38238 7.65973 6.9442 8.12709 7.41155C8.59444 7.8789 9.15626 8.11258 9.81254 8.11258Z"
                fill="#F5EFF7"
            />
        </svg>
    );
};

export default SVGMainPageAvatar;
