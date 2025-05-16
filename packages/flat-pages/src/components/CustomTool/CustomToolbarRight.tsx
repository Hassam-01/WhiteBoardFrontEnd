import React, { useEffect, useRef, useState } from "react";
import "./CustomToolbarRight.less";
import FastboardSingleton from "../../../../../service-providers/fastboard/src/fastboardSingleton";
import { RoomPhase } from "white-web-sdk";
import { SVGWhiteboardAdd } from "../../../../flat-components/src/components/FlatIcons/icons/SVGWhiteboardAdd";
import { SVGNextPage } from "../../../../flat-components/src/components/FlatIcons/icons/SVGNextPage";
import { SVGPrevPage } from "../../../../flat-components/src/components/FlatIcons/icons/SVGPrevPage";
import deleteSVG from "../../../../flat-components/src/components/SaveAnnotationModal/icons/SVGDelete.svg";
// import { SaveAnnotationModalProps } from "flat-components";
import { WhiteboardStore } from "@netless/flat-stores";

type CustomToolbarRightProps = {
    whiteboardStore: WhiteboardStore;
};
const CustomToolbarRight: React.FC<CustomToolbarRightProps> = ({ whiteboardStore }) => {
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [updateTrigger, setUpdateTrigger] = useState(0);
    const [saveAnnotationImages, setSaveAnnotationImages] = useState<
        Array<HTMLCanvasElement | null>
    >([]);
    const [showAnnotations, setShowAnnotations] = useState(false);
    const annotationsRef = useRef<HTMLDivElement>(null);

    let app = FastboardSingleton.getFastboardApp();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (annotationsRef.current && !annotationsRef.current.contains(event.target as Node)) {
                setShowAnnotations(false);
            }
        };

        if (showAnnotations) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showAnnotations]);

    useEffect(() => {
        app = FastboardSingleton.getFastboardApp();
        if (!app) {
            console.log("app", app);
            return;
        }

        const writable = app?.writable;
        const phase = app?.phase;
        const disable = !(writable && phase?.value === RoomPhase.Connected);

        const currentPage =
            (typeof app?.pageIndex.value === "number" ? app.pageIndex.value : 0) + 1;
        const total = typeof app?.pageLength.value === "number" ? app.pageLength.value : 0;
        console.log("total pages", total);
        setPageNumber(currentPage);
        setTotalPages(total);
        setPrevDisabled(disable || total === 0 || currentPage <= 1);
        setNextDisabled(disable || total === 0 || currentPage >= total);
    }, [app?.pageIndex.value, app?.pageLength.value, app?.phase?.value, updateTrigger]);

    const handleAddPage = (): void => {
        console.log("clicked add page", app?.pageLength);
        app?.addPage();
        setUpdateTrigger(prev => prev + 1);
    };

    const handlePrevPage = (): void => {
        if (!prevDisabled) {
            app?.prevPage();
            setUpdateTrigger(prev => prev + 1);
        }
    };

    const handleNextPage = (): void => {
        if (!nextDisabled) {
            app?.nextPage();
            // app?.jumpPage(4);
            setUpdateTrigger(prev => prev + 1);
        }
    };

    const handlePagePreview = async (): Promise<void> => {
        try {
            const images = whiteboardStore.getSaveAnnotationImages();
            const resolvedImages = await Promise.all(images);
            setSaveAnnotationImages(resolvedImages);
            setShowAnnotations(!showAnnotations); // Toggle visibility
        } catch (error) {
            console.error("Error loading annotation images:", error);
        }
    };
    const handleJumpPage = (pageNumber: number): void => {
        app?.jumpPage(pageNumber);
    };
    const handlePageDelete = (pageNumber: number): void => {
        app?.removePage(pageNumber);
        setShowAnnotations(false);
    };
    return (
        <div className="toolbar-right">
            <div className="toolbar-right-item-box" onClick={handleAddPage}>
                <SVGWhiteboardAdd />
                <span className="page-preview-label">Add</span>
            </div>
            <div className="toolbar-right-page-control">
                <div
                    className={`page-navigation ${prevDisabled ? "disabled" : ""}`}
                    onClick={handlePrevPage}
                >
                    <SVGPrevPage />
                    {/* <span className="page-preview-label">Previous</span> */}
                </div>
                <div className="toolbar-right-item-box" onClick={handlePagePreview}>
                    <span className="page-number">
                        {pageNumber}/{totalPages}
                    </span>
                    <span className="page-preview-label">Page</span>
                </div>
                <div
                    className={` page-navigation ${nextDisabled ? "disabled" : ""}`}
                    onClick={handleNextPage}
                >
                    <SVGNextPage />
                    {/* <span className="page-preview-label">Next</span> */}
                </div>
            </div>
            {showAnnotations && (
                <div ref={annotationsRef} className="annotation-images-container">
                    {saveAnnotationImages.length > 0 ? (
                        saveAnnotationImages.map((canvas, index) => (
                            <div
                                key={index}
                                className="annotation-image-wrapper"
                                onClick={() => handleJumpPage(index)}
                            >
                                {canvas && canvas.toDataURL() ? (
                                    <>
                                        <span className="annotation-label">{index + 1}</span>
                                        <span
                                            className="annotation-delete"
                                            onClick={() => handlePageDelete(index)}
                                        >
                                            <img alt="delete" src={deleteSVG} />
                                        </span>
                                        <img
                                            alt={`Annotation ${index + 1}`}
                                            className="annotation-image"
                                            src={canvas.toDataURL()}
                                            onError={e => {
                                                (e.target as HTMLImageElement).style.display =
                                                    "none";
                                            }}
                                        />
                                    </>
                                ) : (
                                    <div className="annotation-image-placeholder">Blank Page</div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="annotation-image-wrapper">
                            <div className="annotation-image-placeholder">No annotations found</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CustomToolbarRight;
