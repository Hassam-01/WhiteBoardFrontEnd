import React from "react";
import { FlatIconProps } from "../types";
// import "../style.less";
export const SVGCode: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`svg-responsive-29  ${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            // height="27"
            viewBox="0 0 26 27"
            // width="26"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M26 5.10031V21.8997C26 22.7273 25.4863 23.4636 24.7125 23.7373L18.9775 26.4351L19.4977 19.3648V7.63521L18.9775 0.564875L24.7125 3.26268C25.4863 3.53637 26 4.27273 26 5.10031Z"
                fill="#29B6F6"
            />
            <path
                d="M3.2419 19.9487L19.4977 7.63521V1.3488C19.4977 0.568133 18.534 0.203213 18.0184 0.788389L0.418593 16.914C-0.166615 17.4548 -0.133453 18.3912 0.488168 18.8897C0.488168 18.8897 1.34907 19.6926 1.66054 19.9154C2.13911 20.2575 2.76788 20.2966 3.2419 19.9487Z"
                fill="#0277BD"
            />
            <path
                d="M3.2419 7.05133L19.4977 19.3648V25.6512C19.4977 26.4319 18.534 26.7968 18.0184 26.2116L0.418593 10.086C-0.166615 9.54517 -0.133453 8.60876 0.488168 8.11026C0.488168 8.11026 1.34907 7.30743 1.66054 7.08457C2.13911 6.74246 2.76788 6.70336 3.2419 7.05133Z"
                fill="#0288D1"
            />
        </svg>
    );
};

export default SVGCode;
