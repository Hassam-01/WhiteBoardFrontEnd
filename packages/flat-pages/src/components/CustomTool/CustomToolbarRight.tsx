import React, { useEffect, useState } from "react";
import SVGCustomAddSVG from "./CustomIcons/SVGCustomAdd.svg";
import SVGCustomPreviousSVG from "./CustomIcons/SVGCustomPrevious.svg";
import SVGCustomNextSVG from "./CustomIcons/SVGCustomNext.svg";
import "./CustomToolbarRight.less";
import FastboardSingleton from "../../../../../service-providers/fastboard/src/fastboardSingleton";
import { RoomPhase } from "white-web-sdk";

const CustomToolbarRight: React.FC = () => {
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [updateTrigger, setUpdateTrigger] = useState(0);

    let app = FastboardSingleton.getFastboardApp();
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
            setUpdateTrigger(prev => prev + 1);
        }
    };

    return (
        <div className="toolbar-right">
            <div className="toolbar-right-item-box" onClick={handleAddPage}>
                <img alt="Add" className="toolbar-right-item" src={SVGCustomAddSVG} />
                Add
            </div>
            <div
                className={`toolbar-right-item-box ${prevDisabled ? "disabled" : ""}`}
                onClick={handlePrevPage}
            >
                <img alt="Previous" className="toolbar-right-item" src={SVGCustomPreviousSVG} />
                Previous
            </div>
            <div className="toolbar-right-item-box">
                <span className="page-number">
                    {pageNumber}/{totalPages}
                </span>
                Page
            </div>
            <div
                className={`toolbar-right-item-box ${nextDisabled ? "disabled" : ""}`}
                onClick={handleNextPage}
            >
                <img alt="Next" className="toolbar-right-item" src={SVGCustomNextSVG} />
                Next
            </div>
        </div>
    );
};

export default CustomToolbarRight;
