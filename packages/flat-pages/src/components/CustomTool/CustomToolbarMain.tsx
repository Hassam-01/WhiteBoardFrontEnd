import React from "react";
import "./CustomToolbarMain.less";
import SVGCustomPencilSVG from "./CustomIcons/SVGCustomPencil.svg";
import TSVG from "./CustomIcons/T.svg";
import SVGCustomShapeSVG from "./CustomIcons/SVGCustomShape.svg";
import SVGCustomEraserSVG from "./CustomIcons/SVGCustomEraser.svg";
import SVGCustomMoreSVG from "./CustomIcons/SVGCustomMore.svg";
import SVGCustomSelectSVG from "./CustomIcons/SVGCustomSelect.svg";
import SVGCustomClickSVG from "./CustomIcons/SVGCustomClick.svg";

const CustomToolbarMain: React.FC = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-item-box">
                <img alt="Click" className="toolbar-item" src={SVGCustomClickSVG} />
                Click
            </div>
            <div className="toolbar-item-box">
                <img alt="Selector" className="toolbar-item" src={SVGCustomSelectSVG} />
                Selector
            </div>
            <div className="toolbar-item-box">
                <img alt="Pencil Icon" className="toolbar-item" src={SVGCustomPencilSVG} />
                Pencil
            </div>
            <div className="toolbar-item-box">
                <img alt="Text" className="toolbar-item" src={TSVG} />
                Text
            </div>
            <div className="toolbar-item-box">
                <img alt="Shape" className="toolbar-item" src={SVGCustomShapeSVG} />
                Shape
            </div>
            <div className="toolbar-item-box">
                <img alt="Eraser" className="toolbar-item" src={SVGCustomEraserSVG} />
                Eraser
            </div>
            <div className="toolbar-item-box">
                <img alt="More" className="toolbar-item" src={SVGCustomMoreSVG} />
                More
            </div>
        </div>
    );
};

export default CustomToolbarMain;
