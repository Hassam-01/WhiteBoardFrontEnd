import React from "react";
import "./MoreApps.less";
import CodeSVG from "../CustomIcons/Code.svg";
import DiceSVG from "../CustomIcons/Dice.svg";
import GeoGebraSVG from "../CustomIcons/GeoGebra.svg";
import MindMapSVG from "../CustomIcons/MindMap.svg";

import PresetsSVG from "../CustomIcons/Presets.svg";
import SelectorSVG from "../CustomIcons/Selector.svg";
import StopWatchSVG from "../CustomIcons/StopWatch.svg";
import SaveAnnotationsSVG from "../CustomIcons/SaveAnnotations.svg";
import { FlatServices } from "@netless/flat-services";
import { type FastboardApp } from "@netless/fastboard";
const flatServices = FlatServices.getInstance();
let service = await flatServices.requestService("whiteboard");

const handleEmitEvent = async (eventName: string): Promise<void> => {
    service = await flatServices.requestService("whiteboard");
    switch (eventName) {
        case "insertPresets":
            service?.events.emit("insertPresets");
            break;
        case "exportAnnotations":
            service?.events.emit("exportAnnotations");
            break;
        default:
            break;
    }
};

interface MoreProps {
    app: FastboardApp | null;
}

const MoreApps: React.FC<MoreProps> = ({ app }) => {
    return (
        <div className="toolbar-apps-container">
            <div
                className="toolbar-apps-box"
                onClick={() => app?.manager.addApp({ kind: "Monaco" })}
            >
                <img className="toolbar-apps" src={CodeSVG} alt="" />
                <span className="toolbar-apps-label">Code</span>
            </div>
            <div className="toolbar-apps-box" onClick={() => app?.manager.addApp({ kind: "Dice" })}>
                <img className="toolbar-apps" src={DiceSVG} alt="" />
                <span className="toolbar-apps-label">Dice</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() =>
                    app?.manager.addApp({
                        kind: "GeoGebra",
                        attributes: { uid: app.room.uid },
                    })
                }
            >
                <img className="toolbar-apps" src={GeoGebraSVG} alt="" />
                <span className="toolbar-apps-label">Geo Gebra</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() => {
                    console.log("MindMap");
                    (window as any).define = undefined;
                    console.log((window as any).define);
                    app?.manager.addApp({ kind: "MindMap", options: { title: "MindMap" } });
                    console.log("1", (window as any).define);
                }}
            >
                <img className="toolbar-apps" src={MindMapSVG} alt="" />
                <span className="toolbar-apps-label">MindMap</span>
            </div>
            <div className="toolbar-apps-box" onClick={() => handleEmitEvent("insertPresets")}>
                <img className="toolbar-apps" src={PresetsSVG} alt="" />
                <span className="toolbar-apps-label">Presets</span>
            </div>
            <div className="toolbar-apps-box" onClick={() => handleEmitEvent("exportAnnotations")}>
                <img className="toolbar-apps" src={SaveAnnotationsSVG} alt="" />
                <span className="toolbar-apps-label">Save Annotations</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() => app?.manager.addApp({ kind: "Selector" })}
            >
                <img className="toolbar-apps" src={SelectorSVG} alt="" />
                <span className="toolbar-apps-label">Selector</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() => app?.manager.addApp({ kind: "Countdown" })}
            >
                <img className="toolbar-apps" src={StopWatchSVG} alt="" />
                <span className="toolbar-apps-label">Stop Watch</span>
            </div>{" "}
        </div>
    );
};
export default MoreApps;
