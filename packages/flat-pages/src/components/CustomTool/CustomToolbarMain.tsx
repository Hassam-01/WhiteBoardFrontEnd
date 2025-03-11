import React, { useState, useRef, useEffect } from "react";
import "./CustomToolbarMain.less";
import SVGCustomPencilSVG from "./CustomIcons/SVGCustomPencil.svg";
import TSVG from "./CustomIcons/T.svg";
import SVGCustomShapeSVG from "./CustomIcons/SVGCustomShape.svg";
import SVGCustomEraserSVG from "./CustomIcons/SVGCustomEraser.svg";
import SVGCustomMoreSVG from "./CustomIcons/SVGCustomMore.svg";
import SVGCustomSelectSVG from "./CustomIcons/SVGCustomSelect.svg";
import SVGCustomClickSVG from "./CustomIcons/SVGCustomClick.svg";
import fastboardSingleton from "../../../../../service-providers/fastboard/src/fastboardSingleton";
import Pencil from "./CustomAppliances/Pencil";
import MoreApps from "./CustomAppliances/MoreApps";
import Eraser from "./CustomAppliances/Eraser";
import Shape from "./CustomAppliances/Shapes";

const app = fastboardSingleton.getFastboardApp();

interface PopupProps {
    children: React.ReactNode;
    position: { bottom: number; left: number };
}

const Popup: React.FC<PopupProps> = ({ children, position }) => {
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
            const popupBottom = toolbarRect.top - 10;
            setPopupPosition({ bottom: popupBottom, left: rect.left });
            setActivePopup(tool);
        }
    };

    useEffect(() => {
        if (activePopup && popupPosition && toolbarRef.current) {
            const popupElement = document.querySelector(".popup") as HTMLElement;
            if (popupElement) {
                const popupHeight = popupElement.offsetHeight;
                const toolbarRect = toolbarRef.current.getBoundingClientRect();
                const newBottom = toolbarRect.top - popupHeight - 20;

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

    // Update popup position on window resize or scroll
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

    return (
        <div ref={toolbarRef} className="toolbar" style={{ position: "relative" }}>
            {/* Click Tool */}
            <div className="toolbar-item-box" onClick={() => app?.setAppliance("clicker")}>
                <img alt="Click" className="toolbar-item" src={SVGCustomClickSVG} />
                Click
            </div>

            {/* Selector Tool */}
            <div className="toolbar-item-box" onClick={() => app?.setAppliance("selector")}>
                <img alt="Selector" className="toolbar-item" src={SVGCustomSelectSVG} />
                Selector
            </div>

            {/* Pencil Tool */}
            <div
                className="toolbar-item-box"
                onClick={e => {
                    handlePopupToggle("pencil", e);
                    app?.setAppliance("pencil");
                }}
            >
                <img alt="Pencil" className="toolbar-item" src={SVGCustomPencilSVG} />
                Pencil
            </div>

            {/* Text Tool */}
            <div className="toolbar-item-box" onClick={() => app?.setAppliance("text")}>
                <img alt="Text" className="toolbar-item" src={TSVG} />
                Text
            </div>

            {/* Shape Tool */}
            <div
                className="toolbar-item-box"
                onClick={e => {
                    handlePopupToggle("shape", e);
                    app?.setAppliance("shape");
                }}
            >
                <img alt="Shape" className="toolbar-item" src={SVGCustomShapeSVG} />
                Shape
            </div>

            {/* Eraser Tool */}
            <div
                className="toolbar-item-box"
                onClick={e => {
                    handlePopupToggle("eraser", e);
                    app?.setAppliance("eraser");
                }}
            >
                <img alt="Eraser" className="toolbar-item" src={SVGCustomEraserSVG} />
                Eraser
            </div>

            {/* More Options */}
            <div className="toolbar-item-box" onClick={e => handlePopupToggle("more", e)}>
                <img alt="More" className="toolbar-item" src={SVGCustomMoreSVG} />
                More
            </div>

            {activePopup === "pencil" && popupPosition && (
                <Popup position={popupPosition}>
                    <Pencil app={app} />
                </Popup>
            )}

            {activePopup === "shape" && popupPosition && (
                <Popup position={popupPosition}>
                    <Shape app={app} />
                </Popup>
            )}

            {activePopup === "eraser" && popupPosition && (
                <Popup position={popupPosition}>
                    <Eraser app={app} />
                </Popup>
            )}

            {activePopup === "more" && popupPosition && (
                <Popup position={popupPosition}>
                    <MoreApps app={app} />
                </Popup>
            )}
        </div>
    );
};

export default CustomToolbarMain;
