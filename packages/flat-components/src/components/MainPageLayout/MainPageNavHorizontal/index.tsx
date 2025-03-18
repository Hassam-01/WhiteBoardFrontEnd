import "./style.less";
import React from "react";
import classNames from "classnames";
import { MainPageLayoutItem } from "../types";
import { MainPageNavAvatar, MainPageNavAvatarProps } from "../MainPageNavAvatar";
import { Tabs } from "antd";
import { MainPageHeader, MainPageHeaderProps } from "../MainPageHeader";

export interface MainPageNavHorizontalProps extends MainPageNavAvatarProps, MainPageHeaderProps {
    /** when an item is clicked */
    onClick: (mainPageLayoutItem: MainPageLayoutItem) => void;
    /** a list of keys to highlight the items */
    activeKeys: string[];
    /** outside side menu in MainPageLayout */
    leftMenu: MainPageLayoutItem[];
    /** outside footer menu in MainPageLayout */
    rightMenu: MainPageLayoutItem;
    /** display return to previous page button if provided*/
    onBackPreviousPage?: () => void;
    /** function to generate placeholder avatar */
    generateAvatar: (uid: string) => string;
}

export const MainPageNavHorizontal: React.FC<MainPageNavHorizontalProps> = ({
    userUUID,
    avatarSrc,
    userName,
    onClick,
    activeKeys,
    leftMenu,
    rightMenu,
    popMenu,
    onBackPreviousPage,
    generateAvatar,
    title,
}) => {
    return (
        <div className="main-page-nav-horizontal-container">
            <div className="main-page-nav-horizontal-content">
                <div className="main-page-nav-horizontal-left">
                    {/* {onBackPreviousPage ? (
                        <MainPageHeader title={title} onBackPreviousPage={onBackPreviousPage} />
                    ) : (
                        <Tabs
                            activeKey={
                                activeKeys.find(key =>
                                    leftMenu.some(menuItem => menuItem.key === key),
                                ) || "none"
                            }
                            items={leftMenu.map(menuItem => ({
                                key: menuItem.key,
                                label: (
                                    <div className="main-page-nav-horizontal-left-menu-item">
                                        <div className="main-page-nav-horizontal-left-menu-item-icon">
                                            {menuItem.icon(activeKeys.includes(menuItem.key))}
                                        </div>
                                        {menuItem.title}
                                    </div>
                                ),
                            }))}
                            onChange={key => {
                                const item = leftMenu.find(e => e.key === key);
                                if (item) {
                                    onClick(item);
                                } else {
                                    if (process.env.NODE_ENV === "development") {
                                        console.warn("[MainPageNav] tab missing key", key);
                                    }
                                }
                            }}
                        ></Tabs>
                    )} */}
                    {/* later logo will be added here */}
                    Collaborative WhiteBoard
                </div>
                <div className="main-page-nav-horizontal-right">
                    <div className="main-page-nav-horizontal-right-header">
                        <MainPageNavAvatar
                            activeKeys={activeKeys}
                            avatarSrc={avatarSrc}
                            generateAvatar={generateAvatar}
                            popMenu={popMenu}
                            userName={userName}
                            userUUID={userUUID}
                            onClick={onClick}
                        />
                    </div>

                    <a
                        key={rightMenu.key}
                        className={classNames("main-page-nav-horizontal-right-item", {
                            "is-active": activeKeys.includes(rightMenu.key),
                        })}
                        href={rightMenu.route}
                        title={rightMenu.htmlTitle}
                        onClick={e => {
                            e.preventDefault();
                            onClick(rightMenu);
                        }}
                    >
                        <span className="main-page-nav-horizontal-right-item-img">
                            {rightMenu.icon(activeKeys.includes(rightMenu.key))}
                        </span>
                        <span className="main-page-nav-horizontal-right-item-title">
                            {rightMenu.title}
                        </span>
                    </a>

                </div>
            </div>
        </div>
    );
};
