import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { SVGMainPageMore } from "../../../FlatIcons/icons/SVGMainPageMore";
import { RoomListItemAction } from "./types";

export interface RoomListItemMenusProps<TKey extends string = string> {
    actions: Array<RoomListItemAction<TKey>>;
    onAction: (key: TKey) => void;
}

export function RoomListItemMenus<TKey extends string = string>({
    actions,
    onAction,
}: React.PropsWithChildren<RoomListItemMenusProps<TKey>>): React.ReactElement | null {
    return (
        <Dropdown
            overlay={
                <Menu
                    items={actions
                        .filter(action => action.key !== "details")
                        .map(action => ({
                            key: action.key,
                            onClick: () => onAction(action.key),
                            label: action.text,
                        }))}
                />
            }
            overlayClassName="room-list-item-sub-menu"
            trigger={["click"]}
        >
            <Button className="room-list-item-more" type="text">
                <SVGMainPageMore />
            </Button>
        </Dropdown>
    );
}
