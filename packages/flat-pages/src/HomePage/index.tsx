import "./style.less";

import React, { useCallback, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ListRoomsType } from "@netless/flat-server-api";
import { errorTips, useSafePromise } from "flat-components";
import { MainRoomMenu } from "./MainRoomMenu";
import { ActiveTabType, MainRoomListPanel } from "./MainRoomListPanel";
import { MainRoomHistoryPanel } from "./MainRoomHistoryPanel";
import { useLoginCheck } from "../utils/use-login-check";
import { SVGMainPageHome } from "../../../flat-components/src/components/FlatIcons/icons/SVGMainPageHome";
import { SVGMyLibrary } from "../../../flat-components/src/components/FlatIcons/icons/SVGMyLibrary";
import {
    GlobalStoreContext,
    PageStoreContext,
    RoomStoreContext,
} from "../components/StoreProvider";
import { AppUpgradeModal } from "../components/AppUpgradeModal";
import { RoomNotBeginModal } from "../components/RoomNotBeginModal";

export const HomePage = observer(function HomePage() {
    const sp = useSafePromise();
    const pageStore = useContext(PageStoreContext);
    const roomStore = useContext(RoomStoreContext);
    const globalStore = useContext(GlobalStoreContext);

    const [activeTab, setActiveTab] = useState<ActiveTabType>(ListRoomsType.All);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => pageStore.configure(), []);

    const isLogin = useLoginCheck();

    const refreshRooms = useCallback(
        async function refreshRooms() {
            try {
                await Promise.all([
                    sp(roomStore.listRooms(activeTab)),
                    sp(roomStore.listRooms(ListRoomsType.History)),
                ]);
            } catch (e) {
                errorTips(e);
            }
        },
        [activeTab, roomStore, sp],
    );

    useEffect(() => {
        if (!isLogin) {
            return;
        }

        void refreshRooms();

        // Refresh PMI room list in case of PMI room is created or deleted in other sessions
        // this only happen once in the homepage as there's [create room] button
        void globalStore.updatePmiRoomList();

        const ticket = window.setInterval(refreshRooms, 30 * 1000);

        return () => {
            window.clearInterval(ticket);
        };
    }, [refreshRooms, isLogin]);

    useEffect(() => {
        if (isLogin && globalStore.requestRefreshRooms) {
            void refreshRooms();
            globalStore.updateRequestRefreshRooms(false);
        }
    }, [refreshRooms, isLogin, globalStore.requestRefreshRooms]);
    const [isHome, setHome] = useState(true);
    return (
        <div>
            <div className="homepage-layout-horizontal-header">
                <div
                    className={`homepage-layout-horizontal-header-button ${isHome ? "active" : ""}`}
                    onClick={() => setHome(true)}
                >
                    <SVGMainPageHome />
                    Home
                </div>
                <div
                    className={`homepage-layout-horizontal-header-button ${isHome ? "" : "active"}`}
                    onClick={() => setHome(false)}
                >
                    <SVGMyLibrary />
                    Library
                </div>
                <div
                    className="homepage-layout-horizontal-header-slider"
                    data-active={isHome ? "home" : "library"}
                ></div>
                <div className="homepage-layout-horizontal-header-slider-bg"></div>
            </div>
            <div className="homepage-layout-horizontal-container">
                {isHome ? (
                    <div className="homepage-layout-main-menu">
                        <h1 className="homepage-layout-main-menu-heading">
                            Collaborative White Board
                        </h1>
                        <p className="homepage-layout-main-menu-subheading">
                            Write, collaborate and Innovate together!
                        </p>
                        <MainRoomMenu />
                    </div>
                ) : (
                    <MyLibrary
                        activeTab={activeTab}
                        refreshRooms={refreshRooms}
                        setActiveTab={setActiveTab}
                    />
                )}

                <RoomNotBeginModal />
                <AppUpgradeModal />
            </div>
        </div>
    );
});

export default HomePage;

// type for MYLibraryProps
export interface MyLibraryProps {
    activeTab: ActiveTabType;
    refreshRooms: () => Promise<void>;
    setActiveTab: (activeTab: ActiveTabType) => void;
}

export const MyLibrary: React.FC<MyLibraryProps> = ({ activeTab, refreshRooms, setActiveTab }) => {
    const roomStore = useContext(RoomStoreContext);
    return (
        <div className="homepage-layout-horizontal-content">
            <MainRoomListPanel
                activeTab={activeTab}
                refreshRooms={refreshRooms}
                roomStore={roomStore}
                setActiveTab={setActiveTab}
            />
            <MainRoomHistoryPanel refreshRooms={refreshRooms} roomStore={roomStore} />
        </div>
    );
};
