import React from "react";
import "./CustomToolbarLeft.less";
import SVGCustomUndoSVG from "./CustomIcons/SVGCustomUndo.svg";
import SVGCustomRedoSVG from "./CustomIcons/SVGCustomRedo.svg";
const CustomToolbarLeft: React.FC = () => {
    return (
        <div className="toolbar-left">
            <div className="toolbar-left-item-box">
                <img src={SVGCustomUndoSVG} alt="Undo" />
                Undo
            </div>
            <div className="toolbar-left-item-box">
                <img src={SVGCustomRedoSVG} alt="Redo" />
                Redo
            </div>
        </div>
    );
};

export default CustomToolbarLeft;
