import React, { useEffect, useRef, useState } from "react";
import "./Shapes.less";
import { type FastboardApp } from "@netless/fastboard";
import { SVGTriangle } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGTriangle";
import { SVGArrow } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGArrow";
import { SVGBalloon } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGBalloon";
import { SVGCircle } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGCircle";
import { SVGRhombus } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGRhombus";
import { SVGLine } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGLine";
import { SVGRectangle } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGRectangle";
import { SVGStar } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGStar";

const hexToRgb = (hex: string): string => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
};

const colorOptions = [
    "#FF3B30",
    "#FFCC00",
    "#34C759",
    "#00C7FF",
    "#007AFF",
    "#AF52DE",
    "#FF2D55",
    "#8E8E93",
];

interface ShapeProps {
    app: FastboardApp | null;
}

const Shape: React.FC<ShapeProps> = ({ app }) => {
    const localItem = localStorage.getItem("FastboardMemberState");
    const FastboardMemberState = localItem ? JSON.parse(localItem) : {};
    const DefaultStrokeWidth = FastboardMemberState.strokeWidth;
    const [strokeWidth, setStrokeWidth] = useState(DefaultStrokeWidth || 2);
    const [shape, setShape] = useState("");
    const [strokeColor, setStrokeColor] = useState("#000000");
    const handleColorChange = (color: string): void => {
        setStrokeColor(color);
        const rgbColor = hexToRgb(color);
        const [r, g, b] = rgbColor.split(",").map(Number);
        app?.setStrokeColor([r, g, b]);
    };

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const width = parseInt(event.target.value, 10);
        setStrokeWidth(width);
        app?.setStrokeWidth(width);
    };
    const shapeStrokeSizeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const shapeStrokeSize = shapeStrokeSizeRef.current;
        if (shapeStrokeSize) {
            const progress =
                ((strokeWidth - parseFloat(shapeStrokeSize.min)) /
                    (parseFloat(shapeStrokeSize.max) - parseFloat(shapeStrokeSize.min))) *
                100;
            shapeStrokeSize.style.setProperty("--range-progress", `${progress}%`);
        }
    }, [strokeWidth]);

    return (
        <div className="shape-box">
            <div className="shape-type-box">
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("rectangle");
                        setShape("rectangle");
                    }}
                >
                    <SVGRectangle active={"rectangle" === shape} />
                </div>
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("ellipse");
                        setShape("ellipse");
                    }}
                >
                    <SVGCircle active={"ellipse" === shape} />
                </div>
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("shape", "triangle");
                        setShape("triangle");
                    }}
                >
                    <SVGTriangle active={"triangle" === shape} />
                </div>
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("shape", "pentagram");
                        setShape("pentagram");
                    }}
                >
                    <SVGStar active={"star" === shape} />
                </div>
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("shape", "rhombus");
                        setShape("rhombus");
                    }}
                >
                    <SVGRhombus active={"rhombus" === shape} />
                </div>
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("straight");
                        setShape("straight");
                    }}
                >
                    <SVGLine active={"straight" === shape} />
                </div>
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("shape", "speechBalloon");
                        setShape("speechBalloon");
                    }}
                >
                    <SVGBalloon active={"speechBalloon" === shape} />
                </div>
                <div
                    className="shape-type"
                    onClick={() => {
                        app?.setAppliance("arrow");
                        setShape("arrow");
                    }}
                >
                    <SVGArrow active={"arrow" === shape} color="#B620E0" />
                </div>
            </div>
            <input
                ref={shapeStrokeSizeRef}
                className="shape-stroke-size"
                max="32"
                min="1"
                type="range"
                value={strokeWidth}
                onChange={handleWidthChange}
            />
            <div className="color-picker">
                {colorOptions.map(color => (
                    <div
                        key={color}
                        className={`color-box ${strokeColor === color ? "selected" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(color)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shape;
