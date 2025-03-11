import React, { useState } from "react";
import "./Shapes.less";
import { type FastboardApp } from "@netless/fastboard";
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

    return (
        <div className="shape-box">
            <div className="shape-type-box">
                {/* rectangle, circle, triangle, star, rhombus, line, balloon, arrow */}
                <div className="shape-type" onClick={() => app?.setAppliance("rectangle")}>
                    <img src="/path/to/rectangle.svg" alt="Rectangle" />
                </div>
                <div className="shape-type" onClick={() => app?.setAppliance("ellipse")}>
                    <img src="/path/to/circle.svg" alt="Circle" />
                </div>
                <div className="shape-type" onClick={() => app?.setAppliance("shape", "triangle")}>
                    <img src="/path/to/triangle.svg" alt="Triangle" />
                </div>
                <div className="shape-type" onClick={() => app?.setAppliance("shape", "pentagram")}>
                    <img src="/path/to/star.svg" alt="Star" />
                </div>
                <div className="shape-type" onClick={() => app?.setAppliance("shape", "rhombus")}>
                    <img src="/path/to/rhombus.svg" alt="Rhombus" />
                </div>
                <div className="shape-type" onClick={() => app?.setAppliance("straight")}>
                    <img src="/path/to/line.svg" alt="Line" />
                </div>
                <div
                    className="shape-type"
                    onClick={() => app?.setAppliance("shape", "speechBalloon")}
                >
                    <img src="/path/to/balloon.svg" alt="Balloon" />
                </div>
                <div className="shape-type" onClick={() => app?.setAppliance("arrow")}>
                    <img src="/path/to/arrow.svg" alt="Arrow" />
                </div>
            </div>
            <input
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
