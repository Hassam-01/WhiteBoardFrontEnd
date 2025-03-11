import React from "react";
import "./Eraser.less";
import { type FastboardApp } from "@netless/fastboard";
interface EraserProps {
    app: FastboardApp | null;
}

const Eraser: React.FC<EraserProps> = ({ app }) => {
    return (
        <div className="eraser-box">
            <div className="eraser-type-box">
                <div className="eraser-type" onClick={() => app?.setAppliance("eraser")}>
                    1
                </div>
                <div className="eraser-type" onClick={() => app?.setAppliance("pencilEraser")}>
                    2
                </div>
                <div className="eraser-type" onClick={() => app?.cleanCurrentScene()}>
                    3
                </div>
            </div>
        </div>
    );
};
export default Eraser;
