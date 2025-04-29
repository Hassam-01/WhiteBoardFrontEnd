import "./index.less";

import React from "react";

// import { DarkModeContext } from "../FlatThemeProvider";
import SVGLoginIllustration from "../FlatIcons/icons/SVGLoginIllustration";
export * from "./LoginWithPassword";
export * from "./LoginWithCode";
export * from "./BindingPhonePanel";
export * from "./RebindingPhonePanel";
export * from "./QRCodePanel";
export * from "./LoginAccount";
export * from "./LoginPassword";
export * from "./LoginSendCode";

export interface LoginPanelProps {}

export const LoginPanel: React.FC<LoginPanelProps> = ({ children }) => {
    return (
        <div className="login-panel-container">
            <div className="login-panel-cover">
                <div className="login-panel-cover-text">
                    <p className="panel-cover-heading">
                        Bring your team&apos;s ideas to
                        <span>life together, in real time</span>
                    </p>
                    <p className="panel-cover-subheading">
                        Sign up to schedule, host, and revisit
                        <span>every creative session in one place.</span>
                    </p>
                </div>
                <div className="login-panel-cover-illustration">
                    <SVGLoginIllustration style={{ maxWidth: "90%", height: "auto" }} />
                </div>
            </div>

            <div className="login-panel-inner">
                <div className="login-panel-content">{children}</div>
            </div>
        </div>
    );
};
