import "./style.less";

import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useLanguage } from "@netless/flat-i18n";
import { useWindowSize } from "react-use";

import { RouteNameType, RouteParams, usePushHistory } from "../utils/routes";
import { GlobalStoreContext, PageStoreContext } from "../components/StoreProvider";
import { loginCheck } from "@netless/flat-server-api";
import { joinRoomHandler } from "../utils/join-room-handler";
import { FLAT_REGION, SERVICE_URL_EN_EN } from "../constants/process";
import JoinPageDesktop from "./JoinPageDesktop";
import JoinPageMobile from "./JoinPageMobile";

export const JoinPage = observer(function JoinPage() {
    const language = useLanguage();
    const pushHistory = usePushHistory();
    const globalStore = useContext(GlobalStoreContext);
    const pageStore = useContext(PageStoreContext);
    const [isLogin, setIsLogin] = useState(false);
    const { width } = useWindowSize(1080);

    const params = useParams<RouteParams<RouteNameType.ReplayPage>>();
    const { roomUUID } = params;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => pageStore.configure(), []);

    useEffect(() => {
        joinRoom();
        async function checkLogin(): Promise<void> {
            const token = globalStore.userInfo?.token;
            if (token) {
                try {
                    const result = await loginCheck();
                    setIsLogin(globalStore.needPhoneBinding ? result.hasPhone : true);
                } catch (e) {
                    console.error(e);
                }
            }
        }

        void checkLogin();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function joinRoom(): Promise<void> {
        if (isLogin && roomUUID) {
            if (window.isElectron) {
                await joinRoomHandler(roomUUID, pushHistory);
            } else {
                // pushHistory(RouteNameType.BigClassPage);
                await joinRoomHandler(roomUUID, pushHistory);
                // pushHistory(RouteNameType.DevicesTestPage, { roomUUID });
            }
        } else {
            sessionStorage.setItem("roomUUID", roomUUID);
            pushHistory(RouteNameType.LoginPage);
        }
    }

    const isMobile = width <= 480;

    const serviceURL =
        FLAT_REGION === "CN"
            ? language.startsWith("zh")
                ? SERVICE_URL_EN_EN
                : SERVICE_URL_EN_EN
            : language.startsWith("zh")
              ? SERVICE_URL_EN_EN
              : SERVICE_URL_EN_EN;

    return (
        <div>
            {isMobile ? (
                <JoinPageMobile
                    privacyURL={serviceURL}
                    roomUUID={roomUUID}
                    serviceURL={serviceURL}
                />
            ) : (
                <JoinPageDesktop
                    avatar={globalStore.userInfo?.avatar ?? ""}
                    isLogin={isLogin}
                    joinRoom={joinRoom}
                    privacyURL={serviceURL}
                    roomUUID={roomUUID}
                    serviceURL={serviceURL}
                    userUUID={globalStore.userUUID ?? ""}
                />
            )}
        </div>
    );
});

export default JoinPage;
