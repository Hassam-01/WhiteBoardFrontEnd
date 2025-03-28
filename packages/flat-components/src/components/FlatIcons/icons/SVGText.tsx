import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGText: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="22"
            viewBox="0 0 19 22"
            width="19"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="svg-tool-icon-fill"
                d="M18.0156 0.8125L18.25 5.78125H17.6562C17.5417 4.90625 17.3854 4.28125 17.1875 3.90625C16.8646 3.30208 16.4323 2.85938 15.8906 2.57812C15.3594 2.28646 14.6562 2.14062 13.7812 2.14062H10.7969V18.3281C10.7969 19.6302 10.9375 20.4427 11.2188 20.7656C11.6146 21.2031 12.224 21.4219 13.0469 21.4219H13.7812V22H4.79688V21.4219H5.54688C6.44271 21.4219 7.07812 21.151 7.45312 20.6094C7.68229 20.276 7.79688 19.5156 7.79688 18.3281V2.14062H5.25C4.26042 2.14062 3.55729 2.21354 3.14062 2.35938C2.59896 2.55729 2.13542 2.9375 1.75 3.5C1.36458 4.0625 1.13542 4.82292 1.0625 5.78125H0.46875L0.71875 0.8125H18.0156Z"
                strokeLinejoin="round"
                strokeWidth="1.25"
            />
        </svg>
    );
};

export default SVGText;
