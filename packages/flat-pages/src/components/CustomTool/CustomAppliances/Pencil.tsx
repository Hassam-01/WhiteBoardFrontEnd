import React, { useState, useRef, useEffect } from "react";
import "./Pencil.less";
import { type FastboardApp } from "@netless/fastboard";
import { SVGDashed } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGDashed";
import { SVGNotDashed } from "../../../../../flat-components/src/components/FlatIcons/icons/SVGNotDashed";

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

interface PencilProps {
    app: FastboardApp | null;
}

const Pencil: React.FC<PencilProps> = ({ app }) => {
    const localItem = localStorage.getItem("FastboardMemberState");
    const FastboardMemberState = localItem ? JSON.parse(localItem) : {};
    const DefaultStrokeWidth = FastboardMemberState.strokeWidth;
    const [strokeWidth, setStrokeWidth] = useState(DefaultStrokeWidth || 2);
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [isDotted, setIsDotted] = useState(false);

    // Ref for the range input
    const pencilStrokeSizeRef = useRef<HTMLInputElement>(null);

    // Update the --range-progress CSS variable when strokeWidth changes
    useEffect(() => {
        const pencilStrokeSize = pencilStrokeSizeRef.current;
        if (pencilStrokeSize) {
            const progress =
                ((strokeWidth - parseFloat(pencilStrokeSize.min)) /
                    (parseFloat(pencilStrokeSize.max) - parseFloat(pencilStrokeSize.min))) *
                100;
            pencilStrokeSize.style.setProperty("--range-progress", `${progress}%`);
        }
    }, [strokeWidth]);

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

    const handleDottedLineToggle = (): void => {
        setIsDotted(true);
        app?.toggleDottedLine(true);
    };

    const handleSolidStroke = (): void => {
        setIsDotted(false);
        app?.toggleDottedLine(false);
    };

    return (
        <div className="pencil-box">
            <div className="pencil-type-box">
                <div
                    className={`pencil-type ${isDotted ? "active" : ""}`}
                    onClick={handleDottedLineToggle}
                >
                    <SVGDashed active={isDotted} />
                </div>
                <div
                    className={`pencil-type ${isDotted ? "active" : ""}`}
                    onClick={handleSolidStroke}
                >
                    <SVGNotDashed active={!isDotted} />
                </div>
            </div>
            <input
                ref={pencilStrokeSizeRef}
                className="pencil-stroke-size"
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

export default Pencil;
