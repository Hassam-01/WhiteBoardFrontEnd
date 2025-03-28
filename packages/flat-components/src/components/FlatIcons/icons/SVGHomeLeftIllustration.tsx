import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGHomeLeftIllustration: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`${className} purple-6F3393 flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="539"
            viewBox="0 0 323 539"
            width="323"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M259 229C259 229 261.521 331.214 265.404 372.639C270.445 426.66 259.691 509.266 259.691 509.266L274.584 512C274.584 512 304.096 438.5 290.927 376.014C308.87 309.571 294.661 234.933 294.661 234.933L259 229Z"
                fill="#FFB6B6"
            />
            <path
                d="M239.499 533.5C241.406 532.351 244.809 531.389 247 531C247 531 254.352 526.281 260.007 508.002L268.509 507.032C269.955 506.894 271.408 507.209 272.667 507.933C273.926 508.658 275.292 508.887 275.901 510.207C276.082 510.57 276.5 511 277 512C277 514.5 277 516.5 276.5 519C275.983 525.904 274.454 532.207 273.114 539L271.619 538.778L272.872 525.796C273.275 521.388 269.196 526.059 267.56 530.629C265.924 535.199 263.198 539.93 253.564 538.818C242.375 537.362 236.288 535.846 239.499 533.5Z"
                fill="#2E353A"
            />
            <path
                d="M261.968 502C261.968 502 258.974 510.107 254.983 519.004C253.155 523.614 250.444 527.831 247 531.421C247 531.421 253.945 533.655 257.677 529.345C261.409 525.035 268.315 508.3 275.5 510C275.118 508.734 274.082 508.792 273.403 507.655C272.326 505.954 261.968 502 261.968 502Z"
                fill="#FFB6B6"
            />
            <path
                d="M159.23 137.229L127.049 126.275C122.529 127.546 117.873 128.267 113.18 128.421C105.463 128.644 103.844 128.894 103.551 122.84C103.257 116.786 100.424 109.209 102.476 107.939C104.529 106.67 121.566 110.112 125.197 114.054L156.345 118.561L159.23 137.229Z"
                fill="#FFB6B6"
            />
            <path d="M238.754 91.5436L245.544 125.102C245.544 125.102 238.864 128.919 230.473 133.198C220.848 138.095 208.979 143.602 202.446 144.691C190.207 146.547 144.883 133.555 144.883 133.555L149.465 117.84C149.465 117.84 197.296 124.036 202.667 121.804C208.037 119.573 238.754 91.5436 238.754 91.5436Z" />
            <path
                d="M293.54 9.0638C293.54 9.0638 299.514 8.18483 306.457 16.8909C313.401 25.5969 309.358 37.6516 309.154 43.0687C308.95 48.4857 303.666 54.3097 315.5 60.0465C327.335 65.7832 335.166 72.8347 328.56 82.9628C321.954 93.091 332.399 97.7117 321.66 106.406C310.921 115.099 264.782 114.674 256.737 103.687C248.691 92.7008 253.577 82.1252 253.199 78.4366C252.821 74.7481 244.613 72.547 240.353 61.0856C236.093 49.6241 245.126 45.157 245.318 39.4901C245.51 33.8231 238.145 28.2105 240.516 15.7567C242.886 3.30289 289.292 -8.66854 293.54 9.0638Z"
                fill="#2E353A"
            />
            <path d="M355.949 164.322C349.068 166.665 338.11 154.521 329.597 142.853C322.338 132.969 316.739 123.428 316.739 123.428L322.519 82.7455C322.519 82.7455 331.244 90.8581 348.791 124.918C351.608 130.403 354.901 136.51 358.181 143.415C358.539 145.255 359.47 146.935 360.84 148.214C361.946 153.676 364.209 161.505 355.949 164.322Z" />
            <path
                d="M329.467 142.879C322.226 132.991 316.684 123.438 316.684 123.438L318.285 112.169C322.366 118.912 328.855 131.319 329.467 142.879Z"
                fill="#865959"
            />
            <path
                d="M360.842 148.22C357.612 151.436 353.707 152.187 350.617 148.135C344.361 139.95 346.812 130.1 348.901 124.884C351.737 130.365 354.955 136.487 358.235 143.392C358.548 145.245 359.464 146.942 360.842 148.22Z"
                fill="#865959"
            />
            <path d="M251.828 181.662C251.828 181.662 291.816 187.466 326.849 177.796C326.849 177.796 314.72 134.449 294.492 130.392C274.264 126.334 244.218 144.058 251.828 181.662Z" />
            <path d="M251.828 181.662C251.828 181.662 291.816 187.466 326.849 177.796C326.849 177.796 314.72 134.449 294.492 130.392C274.264 126.334 244.218 144.058 251.828 181.662Z" />
            <path d="M257.173 182.28L320.337 176.6C317.849 161.227 316.978 145.637 317.736 130.083C318.016 123.894 318.53 116.939 319.359 108.853C319.804 104.533 320.32 99.887 320.95 94.9464C321.404 91.1478 321.906 87.1066 322.497 82.8339C313.603 81.8572 304.649 81.5221 295.707 81.8314C286.249 82.0574 276.819 82.9538 267.488 84.5139C255.519 86.9359 242.013 90.9692 242.013 90.9692C242.013 90.9692 240.149 91.8314 241.488 104.777C242.784 116.838 245.941 139.432 257.173 182.28Z" />
            <path
                d="M259.905 192.904L322.455 185.526C320.331 170.042 316.878 149.238 317.793 130.072C318.074 123.883 318.588 116.928 319.416 108.843C319.862 104.522 320.377 99.8761 321.008 94.9356C321.462 91.137 321.964 87.0958 322.555 82.8231C313.66 81.8464 304.707 81.5113 295.764 81.8205C286.306 82.0465 276.877 82.943 267.546 84.5031C255.576 86.9251 242.07 90.9584 242.07 90.9584C242.07 90.9584 240.207 91.8206 241.546 104.766C242.785 116.839 248.654 150.06 259.905 192.904Z"
                fill="#2E353A"
            />
            <path
                d="M275.317 97.015C290.116 92.0798 293.337 84.5967 293.337 84.5967C281.88 77.4639 286.694 60.1102 286.694 60.1102L269.132 67.2154C270.076 69.6739 270.833 72.1999 271.399 74.7718C273.789 85.816 268.796 86.9427 268.796 86.9427C266.8 93.5762 275.317 97.015 275.317 97.015Z"
                fill="#FFB6B6"
            />
            <path
                d="M269.134 67.2145C270.077 69.6731 270.835 72.199 271.4 74.771C283.724 72.2773 286.68 60.0348 286.68 60.0348L269.134 67.2145Z"
                fill="#865959"
            />
            <path
                d="M268.886 14.1088C252.847 16.4616 248.936 25.8115 250.179 42.5023C251.726 63.3818 258.442 77.3931 277.858 70.0487C304.202 60.1184 295.543 10.2285 268.886 14.1088Z"
                fill="#FFB6B6"
            />
            <path
                d="M260.408 40.1027C259.477 42.6861 258.235 45.1466 256.71 47.4302C257.279 48.0253 258.001 48.4523 258.797 48.6643C259.593 48.8764 260.432 48.8653 261.222 48.6324L260.408 40.1027Z"
                fill="#A24E3F"
            />
            <path
                d="M270.035 37.3555C270.299 38.6605 271.044 39.6548 271.935 39.5521C272.827 39.4494 273.387 38.2879 273.235 36.9603C273.083 35.6326 272.227 34.6609 271.335 34.7636C270.444 34.8663 269.879 36.0091 270.035 37.3555Z"
                fill="#2E353A"
            />
            <path
                d="M271.73 34.7835L268.699 33.9995C268.699 33.9995 270.435 36.2488 271.73 34.7835Z"
                fill="#2E353A"
            />
            <path
                d="M253.562 39.083C253.732 40.4069 254.574 41.401 255.462 41.2796C256.349 41.1583 256.914 40.0154 256.761 38.6878C256.609 37.3601 255.753 36.3884 254.88 36.4873C254.007 36.5863 253.409 37.7553 253.562 39.083Z"
                fill="#2E353A"
            />
            <path
                d="M255.253 36.5107L252.226 35.7454C252.226 35.7454 253.962 37.9946 255.253 36.5107Z"
                fill="#2E353A"
            />
            <path
                d="M264.461 54.5717C265.482 56.2635 266.378 58.0282 267.14 59.8516C267.491 59.7999 267.84 59.7294 268.184 59.6404C272.785 58.4959 274.518 56.4179 275.085 54.5178C275.333 53.5689 275.345 52.5737 275.119 51.6192C275.025 51.0743 274.846 50.5474 274.59 50.0573C272.103 52.0359 269.221 53.4594 266.139 54.2321C265.076 54.4472 264.461 54.5717 264.461 54.5717Z"
                fill="#2E353A"
            />
            <path
                d="M266.136 54.2307L266.972 55.7695C271.311 54.6778 274.237 53.3096 275.225 51.6735C275.131 51.1286 274.952 50.6017 274.696 50.1116C272.172 52.0841 269.252 53.4891 266.136 54.2307Z"
                fill="white"
            />
            <path
                d="M268.183 59.6481C272.784 58.5037 274.518 56.4256 275.084 54.5256C273.343 54.9929 271.699 55.7659 270.229 56.8084C269.266 57.5174 268.551 58.5107 268.183 59.6481Z"
                fill="#DE5753"
            />
            <path
                d="M290.379 38.6026C290.379 38.6026 280.947 26.5186 280.599 16.1675C280.599 16.1675 246.909 7.82779 250.049 40.3202C250.049 40.3202 242.752 12.1235 270.239 7.45425C297.725 2.78502 303.509 43.165 291.01 57.2608C291.01 57.2608 296.227 46.2106 290.379 38.6026Z"
                fill="#2E353A"
            />
            <path
                d="M288.247 42.3728C288.187 41.4414 288.311 40.5073 288.613 39.6242C288.915 38.741 289.388 37.9261 290.006 37.2261C290.623 36.5261 291.372 35.9547 292.211 35.5448C293.049 35.1349 293.96 34.8944 294.892 34.8372C299.939 34.6505 303.796 44.505 291.887 48.7585C290.057 49.4006 288.785 47.7173 288.247 42.3728Z"
                fill="#FFB6B6"
            />
            <path
                d="M307.755 83.4307C307.755 83.4307 292.856 101.486 276.326 104.579C259.796 107.671 250.136 90.2384 250.136 90.2384C250.136 90.2384 274.19 77.4334 307.755 83.4307Z"
                fill="#FFB6B6"
            />
            <path d="M305.673 81.0075C305.673 81.0075 287.684 139.48 327.5 178C327.5 178 320.506 121.951 323.152 82.9509L305.673 81.0075Z" />
            <path d="M251.201 87.7304C251.201 87.7304 258.436 124.828 255.888 139.666C253.34 154.504 251.794 181.676 251.794 181.676C251.794 181.676 234.161 121.007 238.72 91.5562L251.201 87.7304Z" />
            <path
                d="M385.835 53.5364L380.384 51.7282L363.422 60.2645L337.914 58.886L336.045 78.419C336.045 78.419 339.039 99.1609 340.244 99.1694C341.449 99.1779 368.314 95.1778 368.314 95.1778L380.087 83.8293L385.835 53.5364Z"
                fill="#E0E0E0"
            />
            <path d="M331.667 61.5876L329.537 106.208L363.381 103.222L384.944 92.2992L388.53 50.0812L363.799 62.1305L331.667 61.5876Z" />
            <path
                d="M363.799 62.1305L363.381 103.222L329.537 106.208L331.667 61.5876L363.799 62.1305Z"
                fill="white"
            />
            <path
                d="M363.802 62.1262L363.383 103.218L384.947 92.2949L388.533 50.077L363.802 62.1262Z"
                fill="white"
            />
            <path
                d="M350.502 145.841L359.907 113.198C358.424 108.741 357.49 104.121 357.123 99.4385C356.546 91.7925 356.21 90.1332 362.226 89.5563C368.242 88.9794 375.711 85.7991 377.084 87.7918C378.458 89.7844 375.781 106.958 372.029 110.764L368.959 142.107L350.502 145.841Z"
                fill="#FFB6B6"
            />
            <path d="M348.811 163.074C360.285 169.427 370.023 160.004 371.391 134.828L351.63 136.246L348.811 163.074Z" />
            <path
                d="M351.548 130.783L349.018 138.514L374.068 136.861L372.623 129.72L351.548 130.783Z"
                fill="#2E353A"
            />
            <path
                d="M144.245 135.474L151.854 138.359L151.375 113.266L144.167 114.375L144.245 135.474Z"
                fill="#2E353A"
            />
            <path
                d="M112.401 118.495L95.1723 107.745C84.8752 101.234 70.962 92.7934 57.1222 84.2849L6.23227 53.5245C4.71014 52.6085 3.49102 51.8972 2.69169 51.3938C2.37014 51.3064 2.03006 51.2823 1.69311 51.323C1.35615 51.3637 1.02967 51.4683 0.734375 51.6302L3.93613 47.2037C3.88738 47.514 3.90885 47.828 3.99913 48.1258C4.08941 48.4236 4.24656 48.6987 4.46058 48.9337L8.02911 51.0588L20.7097 58.5777L38.6184 69.2431L59.2147 81.4135C73.282 89.6098 87.3089 97.8941 97.9472 103.937L115.63 114.063L112.401 118.495Z"
                fill="#2E353A"
            />
            <path d="M260.079 192.343L221 419.437C221 419.437 315.088 430.387 346.974 423.999C346.974 423.999 355.676 247.997 322.388 185L260.079 192.343Z" />
            <path
                d="M259.399 192.506L221 419.691C221 419.691 317.586 432.445 347.579 426.35C347.579 426.35 353.362 245.107 322.05 185L259.399 192.506Z"
                fill="white"
                opacity="0.4"
            />
        </svg>
    );
};

export default SVGHomeLeftIllustration;
