import React, { useState } from "react";
import "./Eraser.less";
import { type FastboardApp } from "@netless/fastboard";
import { SVGEraserFilled } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGEraserFilled";
import { SVGEraser } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGEraser";
import { SVGClear } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGClear";

interface EraserProps {
    app: FastboardApp | null;
}

const Eraser: React.FC<EraserProps> = ({ app }) => {
    const [eraserType, setEraserType] = useState("eraser");
    return (
        <div className="eraser-box">
            <div className="eraser-type-box">
                <div
                    className="eraser-type"
                    onClick={() => {
                        app?.setAppliance("eraser");
                        setEraserType("eraser");
                    }}
                >
                    <SVGEraserFilled active={"eraser" === eraserType} />
                </div>
                <div
                    className="eraser-type"
                    onClick={() => {
                        app?.setAppliance("pencilEraser");
                        setEraserType("pencilEraser");
                    }}
                >
                    <SVGEraser active={"pencilEraser" === eraserType} />
                </div>
                <div className="eraser-type" onClick={() => app?.cleanCurrentScene()}>
                    <SVGClear />
                </div>
            </div>
        </div>
    );
};
export default Eraser;
