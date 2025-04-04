import "./style.less";
import deleteSVG from "./icons/SVGDelete.svg";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useTranslate } from "@netless/flat-i18n";
import { Modal, message } from "antd";

import { useSafePromise } from "../../utils/hooks";
import jsPDF from "jspdf";
import PPTXgen from "pptxgenjs";
import JSZip from "jszip";
let downloadFormat = "PNG";
function download(
    images: Array<Promise<HTMLCanvasElement | null>>,
    failText = "Save image failed",
): void {
    try {
        switch (downloadFormat) {
            case "PNG": {
                console.log("PNG");
                Promise.all(images)
                    .then(canvases => {
                        canvases.forEach((canvas, index) => {
                            if (canvas) {
                                const a = document.createElement("a");
                                a.download = `annotation-${index + 1}.png`;
                                a.href = canvas.toDataURL();
                                a.click();
                            }
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        message.error(failText);
                    });
                break;
            }
            case "PDF": {
                console.log("PDF");
                console.log(images);
                Promise.all(images)
                    .then(canvases => {
                        const pdf = new jsPDF();
                        canvases.forEach((canvas, index) => {
                            if (canvas) {
                                const imgData = canvas.toDataURL("image/png"); //
                                if (index > 0) {
                                    pdf.addPage();
                                }
                                pdf.addImage(imgData, "PNG", 10, 10, 190, 0); //
                            }
                        });
                        pdf.save("annotations.pdf"); //
                    })
                    .catch(err => {
                        console.error(err);
                        message.error(failText);
                    });

                break;
            }
            case "PPTX": {
                console.log("PPTX");
                console.log(images);
                Promise.all(images)
                    .then(canvases => {
                        const pptx = new PPTXgen();
                        canvases.forEach(canvas => {
                            if (canvas) {
                                const slide = pptx.addSlide();
                                const imgData = canvas.toDataURL("image/png");
                                slide.addImage({ data: imgData, x: 0.5, y: 0.5, w: 9, h: 5 });
                            }
                        });
                        pptx.writeFile({ fileName: "annotations.pptx" });
                    })
                    .catch(err => {
                        console.error(err);
                        message.error(failText);
                    });
                break;
            }
            case "IWB": {
                Promise.all(images)
                    .then(canvases => {
                        const zip = new JSZip();
                        canvases.forEach((canvas, index) => {
                            if (canvas) {
                                const imgData = canvas.toDataURL("image/png").split(",")[1];
                                zip.file(`annotation-${index + 1}.iwb`, imgData, { base64: true });
                            }
                        });
                        zip.generateAsync({ type: "blob" }).then((content: Blob | MediaSource) => {
                            const a = document.createElement("a");
                            a.download = "annotations.zip";
                            a.href = URL.createObjectURL(content);
                            a.click();
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        message.error(failText);
                    });
                break;
            }
            default: {
                break;
            }
        }
    } catch (err) {
        console.error(err);
        message.error(failText);
    }
}

export interface SaveAnnotationModalProps {
    visible: boolean;
    onClose: () => void;
    images: Array<Promise<HTMLCanvasElement | null>>;
}

export const SaveAnnotationModal: React.FC<SaveAnnotationModalProps> = ({
    visible,
    onClose,
    images,
}) => {
    const [Downloadimages, setDownloadImages] = useState(images);
    const [saveFormat, setSaveFormat] = useState("PNG");

    const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const format = e.target.value;
        setSaveFormat(format);
        downloadFormat = format;
    };
    const [removeIndex, setRemoveIndex] = useState<number[]>([]);
    const t = useTranslate();
    const removeImage = (index: number): void => {
        images[index] = Promise.resolve(null);
        // images[index] = Promise.reject(null);
        const _: number[] = [];
        _.push(index);
        setRemoveIndex([...removeIndex, ..._]);
        setDownloadImages([...Downloadimages]);
    };
    const handleDownloadAll = (): void => {
        download(Downloadimages);
    };
    useEffect(() => {
        if (visible) {
            setRemoveIndex([]);
            setDownloadImages(images);
        }
    }, [visible, images]);
    return (
        <Modal
            closable
            destroyOnClose
            footer={null}
            open={visible}
            title={t("annotation.save-action")}
            width={640}
            wrapClassName="save-annotation-modal-container"
            onCancel={onClose}
        >
            {images.map((image, index) => {
                return (
                    <React.Fragment key={index}>
                        {!removeIndex.includes(index) && (
                            <Annotation
                                failText={t("annotation.save-failed")}
                                filename={`annotation-${index + 1}.png`}
                                footerText={String(index + 1)}
                                image={image}
                                images={Downloadimages}
                                onRemove={() => removeImage(index)}
                            />
                        )}
                    </React.Fragment>
                );
            })}
            <div className="save-annotation-modal-save">
                <select
                    className="save-annotation-modal-format"
                    id="format"
                    name="format"
                    value={saveFormat}
                    onChange={e => handleFormatChange(e)}
                >
                    <option value="PNG">PNG</option>
                    <option value="PDF">PDF</option>
                    <option value="PPTX">PPTX</option>
                    <option value="IWB">IWB</option>
                </select>
                <button className="save-annotation-modal-button" onClick={handleDownloadAll}>
                    {t("Save")}
                </button>
            </div>
        </Modal>
    );
};

interface AnnotationProps {
    image: Promise<HTMLCanvasElement | null>;
    filename?: string;
    footerText?: string;
    failText?: string;
    onRemove: () => void;
    images: Array<Promise<HTMLCanvasElement | null>>;
}

const Annotation: React.FC<AnnotationProps> = ({ image, footerText, onRemove }) => {
    const sp = useSafePromise();
    const refDiv = useRef<HTMLDivElement>(null);
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

    useEffect(() => {
        sp(image).then(canvas => {
            setCanvas(canvas);
        });
    }, [image, sp]);

    useEffect(() => {
        const div = refDiv.current;
        if (!div) {
            return;
        }
        if (canvas) {
            div.appendChild(canvas);
        } else if (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }, [canvas]);
    return (
        <div
            className={classNames("save-annotation", {
                "is-loading": !canvas,
            })}
        >
            <div className="save-annotation-delete" onClick={onRemove}>
                <img alt="delete" src={deleteSVG} />
            </div>

            {/* <div ref={refDiv} className="save-annotation-image" /> */}
            <div className="save-annotation-footer">{footerText}</div>
        </div>
    );
};
export default Annotation;
