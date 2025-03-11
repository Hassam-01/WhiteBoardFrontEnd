import React from "react";

interface PopupProps {
    children: React.ReactNode;
    position: { bottom: number; left: number } | null;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, position, onClose }) => {
    if (!position) return null;

    return (
        <div
            className="popup"
            style={{
                top: position.bottom,
                left: position.left,
                position: "fixed",
                zIndex: 100,
                background: "white",
                border: "1px solid #ccc",
                padding: "5px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
        >
            {children}
            <button onClick={onClose} style={{ display: "block", marginTop: "5px" }}>
                Close
            </button>
        </div>
    );
};

export default Popup;
