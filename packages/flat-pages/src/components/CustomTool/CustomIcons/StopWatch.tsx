import React from "react";
import { FlatIconProps } from "../types";
// import "../style.less";
export const SVGStopWatch: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="27"
            viewBox="0 0 24 27"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-fill"
                d="M9.61719 2.74951C9.26302 2.74951 8.96615 2.62972 8.72656 2.39014C8.48698 2.15055 8.36719 1.85368 8.36719 1.49951C8.36719 1.14535 8.48698 0.84847 8.72656 0.608887C8.96615 0.369303 9.26302 0.249512 9.61719 0.249512H14.6172C14.9714 0.249512 15.2682 0.369303 15.5078 0.608887C15.7474 0.84847 15.8672 1.14535 15.8672 1.49951C15.8672 1.85368 15.7474 2.15055 15.5078 2.39014C15.2682 2.62972 14.9714 2.74951 14.6172 2.74951H9.61719ZM12.1172 16.4995C12.4714 16.4995 12.7682 16.3797 13.0078 16.1401C13.2474 15.9006 13.3672 15.6037 13.3672 15.2495V10.2495C13.3672 9.89534 13.2474 9.59847 13.0078 9.35889C12.7682 9.1193 12.4714 8.99951 12.1172 8.99951C11.763 8.99951 11.4661 9.1193 11.2266 9.35889C10.987 9.59847 10.8672 9.89534 10.8672 10.2495V15.2495C10.8672 15.6037 10.987 15.9006 11.2266 16.1401C11.4661 16.3797 11.763 16.4995 12.1172 16.4995ZM12.1172 26.4995C10.5755 26.4995 9.1224 26.2026 7.75781 25.6089C6.39323 25.0151 5.20052 24.2078 4.17969 23.187C3.15885 22.1662 2.35156 20.9735 1.75781 19.6089C1.16406 18.2443 0.867188 16.7912 0.867188 15.2495C0.867188 13.7078 1.16406 12.2547 1.75781 10.8901C2.35156 9.52555 3.15885 8.33285 4.17969 7.31201C5.20052 6.29118 6.39323 5.48389 7.75781 4.89014C9.1224 4.29639 10.5755 3.99951 12.1172 3.99951C13.4089 3.99951 14.6484 4.20784 15.8359 4.62451C17.0234 5.04118 18.138 5.64535 19.1797 6.43701L20.0547 5.56201C20.2839 5.33285 20.5755 5.21826 20.9297 5.21826C21.2839 5.21826 21.5755 5.33285 21.8047 5.56201C22.0339 5.79118 22.1484 6.08285 22.1484 6.43701C22.1484 6.79118 22.0339 7.08285 21.8047 7.31201L20.9297 8.18701C21.7214 9.22868 22.3255 10.3433 22.7422 11.5308C23.1589 12.7183 23.3672 13.9578 23.3672 15.2495C23.3672 16.7912 23.0703 18.2443 22.4766 19.6089C21.8828 20.9735 21.0755 22.1662 20.0547 23.187C19.0339 24.2078 17.8411 25.0151 16.4766 25.6089C15.112 26.2026 13.6589 26.4995 12.1172 26.4995ZM12.1172 23.9995C14.5339 23.9995 16.5964 23.1453 18.3047 21.437C20.013 19.7287 20.8672 17.6662 20.8672 15.2495C20.8672 12.8328 20.013 10.7703 18.3047 9.06201C16.5964 7.35368 14.5339 6.49951 12.1172 6.49951C9.70052 6.49951 7.63802 7.35368 5.92969 9.06201C4.22135 10.7703 3.36719 12.8328 3.36719 15.2495C3.36719 17.6662 4.22135 19.7287 5.92969 21.437C7.63802 23.1453 9.70052 23.9995 12.1172 23.9995Z"
            />
        </svg>
    );
};

export default SVGStopWatch;
