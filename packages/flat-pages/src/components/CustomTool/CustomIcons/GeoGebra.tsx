// import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGGeoGebra: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M12.7074 25.9628C9.00665 25.9628 5.65885 24.3543 3.93159 21.3477C1.11415 16.4451 3.65528 9.65229 9.59594 6.20624C15.5366 2.76019 22.6617 3.94506 25.4792 8.84835C28.2959 13.7516 25.7548 20.5437 19.8148 23.9905C17.5172 25.3227 15.0416 25.9628 12.7074 25.9628ZM16.7171 5.54242C14.6042 5.54242 12.3492 6.12861 10.2507 7.34571C4.93534 10.4293 2.60897 16.4155 5.06564 20.6898C7.52165 24.9641 13.8447 25.9339 19.16 22.8503C24.4754 19.7668 26.8011 13.7806 24.3451 9.50558C22.8588 6.91874 19.9556 5.54242 16.7171 5.54242Z"
                fill="url(#paint0_linear_518_3389)"
            />
            <path
                d="M10.3005 7.3194C12.3852 6.12137 14.6212 5.54242 16.7171 5.54242C16.8062 5.54242 16.8926 5.55427 16.981 5.5569C16.9823 5.52466 16.9862 5.49374 16.9862 5.4615C16.9862 5.03321 16.9077 4.624 16.7715 4.24242C14.4981 4.22992 12.0925 4.82532 9.84016 6.07729C9.91677 6.52532 10.0752 6.94374 10.3005 7.3194Z"
                fill="#6F3393"
            />
            <path
                d="M10.1564 5.9115C10.2186 6.36414 10.3686 6.78585 10.5958 7.16019C12.5731 6.08585 14.6717 5.55624 16.6503 5.54506C16.651 5.51611 16.6589 5.48979 16.6589 5.4615C16.6589 5.02861 16.5705 4.61808 16.4186 4.23913C14.3567 4.28453 12.1999 4.83716 10.1564 5.9115Z"
                fill="#6F3393"
            />
            <path
                d="M26.6106 12.7233C26.5359 11.3694 26.1712 10.0516 25.4798 8.84769C24.9082 7.85361 24.1526 7.02071 23.2726 6.33979C22.8928 6.57795 22.5609 6.88453 22.2931 7.24308C23.1181 7.84571 23.8233 8.59637 24.3458 9.50558C24.9697 10.5918 25.2821 11.7885 25.3181 13.0194C25.7751 13.001 26.2118 12.899 26.6106 12.7233Z"
                fill="#6F3393"
            />
            <path
                d="M25.4798 8.84769C24.9704 7.9615 24.3163 7.20164 23.5581 6.56348C23.1652 6.78914 22.8234 7.08979 22.5543 7.45229C23.2634 8.0194 23.8802 8.69571 24.3451 9.50558C24.9121 10.4924 25.2133 11.5727 25.2925 12.6858C25.7509 12.6687 26.1817 12.5569 26.5733 12.3687C26.458 11.1405 26.1103 9.94572 25.4798 8.84769Z"
                fill="#6F3393"
            />
            <path
                d="M13.385 7.76414C14.6507 7.76414 15.6767 6.73321 15.6767 5.4615C15.6767 4.18979 14.6507 3.15887 13.385 3.15887C12.1194 3.15887 11.0934 4.18979 11.0934 5.4615C11.0934 6.73321 12.1194 7.76414 13.385 7.76414Z"
                fill="white"
            />
            <path
                d="M13.385 8.42203C11.7606 8.42203 10.4386 7.09374 10.4386 5.4615C10.4386 3.82927 11.7606 2.50098 13.385 2.50098C15.0095 2.50098 16.3315 3.82927 16.3315 5.4615C16.3315 7.09374 15.0095 8.42203 13.385 8.42203ZM13.385 3.81677C12.4828 3.81677 11.7481 4.55492 11.7481 5.4615C11.7481 6.36808 12.4828 7.10624 13.385 7.10624C14.2873 7.10624 15.0219 6.36808 15.0219 5.4615C15.0219 4.55492 14.2873 3.81677 13.385 3.81677Z"
                fill="url(#paint1_linear_518_3389)"
            />
            <path
                d="M25.1072 18.7049C24.7989 18.3931 24.4341 18.1391 24.0302 17.9556C22.9996 19.8207 21.3856 21.522 19.2877 22.7701C19.4743 23.174 19.731 23.5378 20.0453 23.8444C22.2603 22.5043 23.9811 20.699 25.1072 18.7049Z"
                fill="#6F3393"
            />
            <path
                d="M24.937 19.0128C24.6371 18.6898 24.277 18.426 23.8697 18.2451C22.885 19.9122 21.4216 21.428 19.5686 22.5911C19.7506 22.999 20.0145 23.3582 20.3367 23.6582C22.299 22.4102 23.8639 20.7977 24.937 19.0128Z"
                fill="#6F3393"
            />
            <path
                d="M6.51463 22.4609C6.25207 22.8352 6.05891 23.2609 5.95219 23.7207C7.7554 25.1918 10.1459 25.9635 12.7074 25.9635C12.7277 25.9635 12.748 25.9615 12.7683 25.9615C12.9411 25.5562 13.0393 25.1122 13.0531 24.647C10.525 24.7247 8.18362 23.9648 6.51463 22.4609Z"
                fill="#6F3393"
            />
            <path
                d="M12.7198 24.6444C10.4432 24.649 8.33159 23.9799 6.75885 22.6826C6.50415 23.0549 6.32737 23.4819 6.2429 23.9424C7.9335 25.2102 10.089 25.8977 12.3996 25.9543C12.5908 25.5543 12.7047 25.1135 12.7198 24.6444Z"
                fill="#6F3393"
            />
            <path
                d="M5.39302 12.2187C5.0185 11.9957 4.60141 11.8398 4.15617 11.7648C2.93177 14.0615 2.49701 16.5773 3.00445 18.9003C3.18713 18.9293 3.37308 18.9483 3.56362 18.9483C3.82748 18.9483 4.08415 18.9174 4.33231 18.8635C3.78623 16.7266 4.19939 14.3661 5.39302 12.2187Z"
                fill="#6F3393"
            />
            <path
                d="M5.22933 12.5135C4.85546 12.2891 4.4351 12.1418 3.98463 12.0832C2.94421 14.178 2.55332 16.4378 2.92784 18.5549C3.13344 18.5957 3.34558 18.6194 3.56362 18.6194C3.80391 18.6194 4.03701 18.5898 4.2629 18.5398C3.85498 16.5885 4.21576 14.4727 5.22933 12.5135Z"
                fill="#6F3393"
            />
            <path
                d="M25.1708 11.7115C26.4364 11.7115 27.4624 10.6806 27.4624 9.40887C27.4624 8.13716 26.4364 7.10624 25.1708 7.10624C23.9051 7.10624 22.8791 8.13716 22.8791 9.40887C22.8791 10.6806 23.9051 11.7115 25.1708 11.7115Z"
                fill="white"
            />
            <path
                d="M25.1708 12.3694C23.5463 12.3694 22.2243 11.0411 22.2243 9.40887C22.2243 7.77664 23.5463 6.44835 25.1708 6.44835C26.7952 6.44835 28.1172 7.77664 28.1172 9.40887C28.1172 11.0411 26.7952 12.3694 25.1708 12.3694ZM25.1708 7.76414C24.2685 7.76414 23.5339 8.50229 23.5339 9.40887C23.5339 10.3155 24.2685 11.0536 25.1708 11.0536C26.073 11.0536 26.8077 10.3155 26.8077 9.40887C26.8077 8.50229 26.073 7.76414 25.1708 7.76414Z"
                fill="url(#paint2_linear_518_3389)"
            />
            <path
                d="M22.5517 23.5536C23.8174 23.5536 24.8434 22.5227 24.8434 21.251C24.8434 19.9793 23.8174 18.9483 22.5517 18.9483C21.2861 18.9483 20.26 19.9793 20.26 21.251C20.26 22.5227 21.2861 23.5536 22.5517 23.5536Z"
                fill="white"
            />
            <path
                d="M22.5517 24.2115C20.9272 24.2115 19.6053 22.8832 19.6053 21.251C19.6053 19.6187 20.9272 18.2905 22.5517 18.2905C24.1762 18.2905 25.4981 19.6187 25.4981 21.251C25.4981 22.8832 24.1762 24.2115 22.5517 24.2115ZM22.5517 19.6062C21.6494 19.6062 20.9148 20.3444 20.9148 21.251C20.9148 22.1576 21.6494 22.8957 22.5517 22.8957C23.454 22.8957 24.1886 22.1576 24.1886 21.251C24.1886 20.3444 23.454 19.6062 22.5517 19.6062Z"
                fill="url(#paint3_linear_518_3389)"
            />
            <path
                d="M9.45647 26.8431C10.7221 26.8431 11.7481 25.8122 11.7481 24.5405C11.7481 23.2687 10.7221 22.2378 9.45647 22.2378C8.19082 22.2378 7.16481 23.2687 7.16481 24.5405C7.16481 25.8122 8.19082 26.8431 9.45647 26.8431Z"
                fill="white"
            />
            <path
                d="M9.45647 27.501C7.83201 27.501 6.51004 26.1727 6.51004 24.5405C6.51004 22.9082 7.83201 21.5799 9.45647 21.5799C11.0809 21.5799 12.4029 22.9082 12.4029 24.5405C12.4029 26.1727 11.0809 27.501 9.45647 27.501ZM9.45647 22.8957C8.55421 22.8957 7.81957 23.6339 7.81957 24.5405C7.81957 25.447 8.55421 26.1852 9.45647 26.1852C10.3587 26.1852 11.0934 25.447 11.0934 24.5405C11.0934 23.6339 10.3587 22.8957 9.45647 22.8957Z"
                fill="url(#paint4_linear_518_3389)"
            />
            <path
                d="M3.56362 17.6326C4.82927 17.6326 5.85528 16.6016 5.85528 15.3299C5.85528 14.0582 4.82927 13.0273 3.56362 13.0273C2.29796 13.0273 1.27195 14.0582 1.27195 15.3299C1.27195 16.6016 2.29796 17.6326 3.56362 17.6326Z"
                fill="white"
            />
            <path
                d="M3.56362 18.2905C1.93915 18.2905 0.617188 16.9622 0.617188 15.3299C0.617188 13.6977 1.93915 12.3694 3.56362 12.3694C5.18808 12.3694 6.51004 13.6977 6.51004 15.3299C6.51004 16.9622 5.18808 18.2905 3.56362 18.2905ZM3.56362 13.6852C2.66135 13.6852 1.92671 14.4233 1.92671 15.3299C1.92671 16.2365 2.66135 16.9747 3.56362 16.9747C4.46588 16.9747 5.20052 16.2365 5.20052 15.3299C5.20052 14.4233 4.46588 13.6852 3.56362 13.6852Z"
                fill="url(#paint5_linear_518_3389)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_518_3389"
                    x1="-0.562615"
                    y1="0.125065"
                    x2="20.8878"
                    y2="21.3956"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F3393" />
                    <stop offset="0.473" stopColor="#6F3393" />
                    <stop offset="1" stopColor="#6F3393" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_518_3389"
                    x1="0.847008"
                    y1="12.4799"
                    x2="5.94274"
                    y2="17.7747"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F3393" />
                    <stop offset="1" stopColor="#6F3393" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_518_3389"
                    x1="0.847008"
                    y1="12.4799"
                    x2="5.94274"
                    y2="17.7747"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F3393" />
                    <stop offset="1" stopColor="#6F3393" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_518_3389"
                    x1="0.847008"
                    y1="12.4799"
                    x2="5.94274"
                    y2="17.7747"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F3393" />
                    <stop offset="1" stopColor="#6F3393" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_518_3389"
                    x1="0.847008"
                    y1="12.4799"
                    x2="5.94274"
                    y2="17.7747"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F3393" />
                    <stop offset="1" stopColor="#6F3393" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_518_3389"
                    x1="0.847008"
                    y1="12.4799"
                    x2="5.94274"
                    y2="17.7747"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F3393" />
                    <stop offset="1" stopColor="#6F3393" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SVGGeoGebra;
