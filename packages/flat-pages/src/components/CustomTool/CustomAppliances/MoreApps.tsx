import React from "react";
import "./MoreApps.less";
import { SVGCode } from "../CustomIcons/Code";
import { SVGDice } from "../CustomIcons/Dice";
import { SVGGeoGebra } from "../CustomIcons/GeoGebra";
import { SVGMindMap } from "../CustomIcons/MindMap";

import { SVGPresets } from "../CustomIcons/Presets";
import { SVGSelectorApp } from "../CustomIcons/Selector";
import { SVGStopWatch } from "../CustomIcons/StopWatch";
import { SVGSaveAnnotation } from "../CustomIcons/SaveAnnotations";
import { FlatServices } from "@netless/flat-services";
import { type FastboardApp } from "@netless/fastboard";
const flatServices = FlatServices.getInstance();
let service = await flatServices.requestService("whiteboard");

const handleEmitEvent = async (eventName: string): Promise<void> => {
    service = await flatServices.requestService("whiteboard");
    switch (eventName) {
        case "insertPresets": {
            service?.events.emit("insertPresets");
            break;
        }
        case "exportAnnotations": {
            service?.events.emit("exportAnnotations");
            break;
        }
        default: {
            break;
        }
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
                onClick={() =>
                    app?.manager.addApp({ kind: "Monaco", options: { title: "Code Editor" } })
                }
            >
                <SVGCode />
                <span className="toolbar-apps-label">Code</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() => app?.manager.addApp({ kind: "Dice", options: { title: "Dice" } })}
            >
                <SVGDice />
                <span className="toolbar-apps-label">Dice</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() =>
                    app?.manager.addApp({
                        kind: "GeoGebra",
                        attributes: { uid: app.room.uid },
                        options: { title: "Graphing Tool" },
                    })
                }
            >
                <SVGGeoGebra />
                <span className="toolbar-apps-label">Geo Gebra</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() => {
                    // console.log("MindMap");
                    (window as any).define = undefined;
                    console.log((window as any).define);
                    app?.manager.addApp({ kind: "MindMap", options: { title: "MindMap" } });
                    console.log("1", (window as any).define);
                }}
            >
                <SVGMindMap />
                <span className="toolbar-apps-label">MindMap</span>
            </div>
            <div className="toolbar-apps-box" onClick={() => handleEmitEvent("insertPresets")}>
                <SVGPresets />
                <span className="toolbar-apps-label">Presets</span>
            </div>
            <div className="toolbar-apps-box" onClick={() => handleEmitEvent("exportAnnotations")}>
                <SVGSaveAnnotation />
                <span className="toolbar-apps-label">Save Annotations</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() =>
                    app?.manager.addApp({ kind: "Selector", options: { title: "Selector" } })
                }
            >
                <SVGSelectorApp />
                <span className="toolbar-apps-label">Selector</span>
            </div>
            <div
                className="toolbar-apps-box"
                onClick={() =>
                    app?.manager.addApp({ kind: "Countdown", options: { title: "Count Down" } })
                }
            >
                <SVGStopWatch />
                <span className="toolbar-apps-label">Count Down</span>
            </div>{" "}
        </div>
    );
};
export default MoreApps;
