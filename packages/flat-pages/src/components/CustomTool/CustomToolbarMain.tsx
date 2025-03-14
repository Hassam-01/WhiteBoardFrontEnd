import React, { useState, useRef, useEffect } from "react";
import "./CustomToolbarMain.less";
import fastboardSingleton from "../../../../../service-providers/fastboard/src/fastboardSingleton";
import Pencil from "./CustomAppliances/Pencil";
import MoreApps from "./CustomAppliances/MoreApps";
import Eraser from "./CustomAppliances/Eraser";
import Shape from "./CustomAppliances/Shapes";
import { SVGPencil } from "../../../../flat-components/src/components/FlatIcons/icons/SVGPencil";
import { SVGText } from "../../../../flat-components/src/components/FlatIcons/icons/SVGText";
import { SVGShapes } from "../../../../flat-components/src/components/FlatIcons/icons/SVGShapes";
import { SVGEraser } from "../../../../flat-components/src/components/FlatIcons/icons/SVGEraser";
import { SVGInsert } from "../../../../flat-components/src/components/FlatIcons/icons/SVGInsert";
import { SVGMore } from "../../../../flat-components/src/components/FlatIcons/icons/SVGMore";
import { SVGSelector } from "../../../../flat-components/src/components/FlatIcons/icons/SVGSelector";
import { SVGClick } from "../../../../flat-components/src/components/FlatIcons/icons/SVGClick";

let app = fastboardSingleton.getFastboardApp();

interface PopupProps {
    children: React.ReactNode;
    position: { bottom: number; left: number };
    isMore: boolean;
}

const Popup: React.FC<PopupProps> = ({ children, position, isMore }) => {
    return (
        <div
            className="popup"
            style={{
                position: "fixed",
                zIndex: 100,
                top: position.bottom,
                left: position.left,
            }}
        >
            {children}
            <div className={`${isMore ? "popup-edge-more" : "popup-edge"}`}></div>
        </div>
    );
};

const CustomToolbarMain: React.FC = () => {
    const [activePopup, setActivePopup] = useState<string | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ bottom: number; left: number } | null>(
        null,
    );
    const toolbarRef = useRef<HTMLDivElement>(null);

    const handlePopupToggle = (tool: string, event: React.MouseEvent): void => {
        if (activePopup === tool) {
            setActivePopup(null);
            return;
        }

        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        const toolbarRect = toolbarRef.current?.getBoundingClientRect();

        if (toolbarRect) {
            let popupLeft = rect.left;
            const popupBottom = toolbarRect.top - 15;

            if (tool === "more") {
                const popupWidth = 280;
                popupLeft = rect.left - popupWidth + rect.width;
            }

            setPopupPosition({ bottom: popupBottom, left: popupLeft });
            setActivePopup(tool);
        }
    };

    useEffect(() => {
        if (activePopup && popupPosition && toolbarRef.current) {
            const popupElement = document.querySelector(".popup") as HTMLElement;
            if (popupElement) {
                const popupHeight = popupElement.offsetHeight;
                const toolbarRect = toolbarRef.current.getBoundingClientRect();
                const newBottom = toolbarRect.top - popupHeight - 30;

                // Only update if the position actually changes
                if (newBottom !== popupPosition.bottom) {
                    setPopupPosition(prevPosition => ({
                        bottom: newBottom,
                        left: prevPosition?.left ?? 0,
                    }));
                }
            }
        }
    }, [activePopup, popupPosition]);

    // Close popup when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (toolbarRef.current && !toolbarRef.current.contains(event.target as Node)) {
                setActivePopup(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const updatePopupPosition = (): void => {
            if (activePopup && popupPosition && toolbarRef.current) {
                const toolbarRect = toolbarRef.current.getBoundingClientRect();
                const newBottom = toolbarRect.top - 10;
                setPopupPosition(prevPosition => ({
                    bottom: newBottom,
                    left: prevPosition?.left ?? 0,
                }));
            }
        };

        window.addEventListener("resize", updatePopupPosition);
        window.addEventListener("scroll", updatePopupPosition);

        return () => {
            window.removeEventListener("resize", updatePopupPosition);
            window.removeEventListener("scroll", updatePopupPosition);
        };
    }, [activePopup, popupPosition]);
    const handleAppliance = (appliance: string): void => {
        app = fastboardSingleton.getFastboardApp();
        switch (appliance) {
            case "clicker": {
                app?.setAppliance("clicker");
                break;
            }
            case "selector": {
                app?.setAppliance("selector");
                break;
            }
            case "text": {
                app?.setAppliance("text");
                break;
            }
            case "pencil": {
                app?.setAppliance("pencil");
                break;
            }
            case "eraser": {
                app?.setAppliance("eraser");
                break;
            }
            case "shape": {
                app?.setAppliance("shape");
                break;
            }
            default: {
                break;
            }
        }
    };
    return (
        <div ref={toolbarRef} className="toolbar" style={{ position: "relative" }}>
            {/* Click Tool */}
            <div className="toolbar-item-box" onClick={() => handleAppliance("click")}>
                <SVGClick />
                <span>Clicker</span>
            </div>

            {/* Selector Tool */}
            <div className="toolbar-item-box" onClick={() => handleAppliance("selector")}>
                <SVGSelector />
                <span>Selector</span>
            </div>

            {/* Pencil Tool */}
            <div
                className="toolbar-item-box"
                onClick={e => {
                    handlePopupToggle("pencil", e);
                    handleAppliance("pencil");
                }}
            >
                <SVGPencil />
                <span>Pencil</span>
            </div>

            {/* Text Tool */}
            <div className="toolbar-item-box" onClick={() => handleAppliance("text")}>
                <SVGText />
                <span>Text</span>
            </div>

            {/* Shape Tool */}
            <div
                className="toolbar-item-box"
                onClick={e => {
                    handlePopupToggle("shape", e);
                    handleAppliance("shape");
                }}
            >
                <SVGShapes />
                <span>Shape</span>
            </div>

            {/* Eraser Tool */}
            <div
                className="toolbar-item-box"
                onClick={e => {
                    handlePopupToggle("eraser", e);
                    handleAppliance("eraser");
                }}
            >
                <SVGEraser />
                <span>Eraser</span>
            </div>

            <div
                className="toolbar-item-box"
                onClick={e => {
                    // handlePopupToggle("eraser", e);
                    // handleAppliance("eraser");
                }}
            >
                <SVGInsert />
                <span>Insert</span>
            </div>

            {/* More Options */}
            <div
                className="toolbar-item-box"
                onClick={e => {
                    handlePopupToggle("more", e);
                    handleAppliance("more");
                }}
            >
                <SVGMore />
                <span>More</span>
            </div>

            {activePopup === "pencil" && popupPosition && (
                <Popup isMore={false} position={popupPosition}>
                    <Pencil app={app} />
                </Popup>
            )}

            {activePopup === "shape" && popupPosition && (
                <Popup isMore={false} position={popupPosition}>
                    <Shape app={app} />
                </Popup>
            )}

            {activePopup === "eraser" && popupPosition && (
                <Popup isMore={false} position={popupPosition}>
                    <Eraser app={app} />
                </Popup>
            )}

            {activePopup === "more" && popupPosition && (
                <Popup isMore={true} position={popupPosition}>
                    <MoreApps app={app} />
                </Popup>
            )}
        </div>
    );
};

export default CustomToolbarMain;
