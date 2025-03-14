import React from "react";
import "./CustomToolbarLeft.less";
import { SVGUndo } from "../../../../flat-components/src/components/FlatIcons/icons/SVGUndo";
import { SVGRedo } from "../../../../flat-components/src/components/FlatIcons/icons/SVGRedo";
import fastboardSingleton from "../../../../../service-providers/fastboard/src/fastboardSingleton";
let app = fastboardSingleton.getFastboardApp();

const CustomToolbarLeft: React.FC = () => {
    const handleRedoUndo = (type: string): void => {
        app = fastboardSingleton.getFastboardApp();
        switch (type) {
            case "undo": {
                app?.undo();
                break;
            }
            case "redo": {
                app?.redo();
                break;
            }
            default: {
                break;
            }
        }
    };
    return (
        <div className="toolbar-left">
            <div className="toolbar-left-item-box" onClick={() => handleRedoUndo("undo")}>
                <SVGUndo />
                <span className="toolbar-left-item-label">Undo</span>
            </div>
            <div className="toolbar-left-item-box" onClick={() => handleRedoUndo("redo")}>
                <SVGRedo />
                <span className="toolbar-left-item-label">Redo</span>
            </div>
        </div>
    );
};

export default CustomToolbarLeft;
