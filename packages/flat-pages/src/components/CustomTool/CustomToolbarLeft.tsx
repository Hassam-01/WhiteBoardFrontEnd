import React from "react";
import "./CustomToolbarLeft.less";
import SVGCustomUndoSVG from "./CustomIcons/SVGCustomUndo.svg";
import SVGCustomRedoSVG from "./CustomIcons/SVGCustomRedo.svg";
import fastboardSingleton from "../../../../../service-providers/fastboard/src/fastboardSingleton";
const app = fastboardSingleton.getFastboardApp();
const CustomToolbarLeft: React.FC = () => {
    return (
        <div className="toolbar-left">
            <div className="toolbar-left-item-box" onClick={() => app?.undo()}>
                <img className="toolbar-left-item" src={SVGCustomUndoSVG} alt="Undo" />
                <span className="toolbar-left-item-label">Undo</span>
            </div>
            <div className="toolbar-left-item-box" onClick={() => app?.redo()}>
                <img className="toolbar-left-item" src={SVGCustomRedoSVG} alt="Redo" />
                <span className="toolbar-left-item-label">Redo</span>
            </div>
        </div>
    );
};

export default CustomToolbarLeft;
