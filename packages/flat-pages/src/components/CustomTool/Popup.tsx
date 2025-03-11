import React, { forwardRef } from "react";
import "./CustomToolbarMain.less";

interface PopupProps {
    position: { top: number; left: number };
    children: React.ReactNode;
}

const Popup = forwardRef<HTMLDivElement, PopupProps>(({ position, children }, ref) => {
    return (
        <div
            ref={ref}
            className="popup"
            style={{
                position: "absolute",
                top: `${position.top}px`,
                left: `${position.left}px`,
                opacity: 1,
                transform: "scale(1)",
            }}
        >
            {children}
        </div>
    );
});
Popup.displayName = "Popup";
export default Popup;
