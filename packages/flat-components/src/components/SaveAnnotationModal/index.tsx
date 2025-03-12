import "./style.less";
import downloadSVG from "./icons/download.svg";
import deleteSVG from "./icons/SVGDelete.svg";
import classNames from "classnames";
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useTranslate } from "@netless/flat-i18n";
import { Modal, message, Spin } from "antd";

import { useSafePromise } from "../../utils/hooks";
import { LoadingOutlined } from "@ant-design/icons";
let downloadFormat = "PNG";
function download(
    canvas: HTMLCanvasElement,
    filename = "annotation",
    images: Array<Promise<HTMLCanvasElement | null>>,
    failText = "Save image failed",
): void {
    try {
        console.log("download", downloadFormat);
        const a = document.createElement("a");
        a.download = filename;
        a.href = canvas.toDataURL();
        a.click();
        // download the complete array of images
        switch (downloadFormat) {
            case "PNG":
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
            case "PDF":

                break;
            case "PPTX":
                break;
            case "IWB":
                // download the complete array of images
                Promise.all(images)
                    .then(canvases => {
                        canvases.forEach((canvas, index) => {
                            if (canvas) {
                                const a = document.createElement("a");
                                a.download = `annotation-${index + 1}.iwb`;
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
            default:
                break;
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

    const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const format = e.target.value;
        setSaveFormat(format);
        downloadFormat = format;
    };
    const [removeIndex, setRemoveIndex] = useState<number[]>([]);
    const t = useTranslate();
    const removeImage = (index: number) => {
        images[index] = Promise.resolve(null);
        const _: number[] = [];
        _.push(index);
        setRemoveIndex([...removeIndex, ..._]);
        setDownloadImages([...Downloadimages]);
    };
    const annotationRefs = useRef<Array<{ downloadImage: () => void } | null>>([]);
    const handleDownloadAll = () => {
        annotationRefs.current.forEach(ref => {
            if (ref) {
                ref.downloadImage();
            }
        });
    };
    useEffect (() => {
       if(visible) {
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
                                ref={el =>
                                    (annotationRefs.current[index] = el as {
                                        downloadImage: () => void;
                                    } | null)
                                } // Assign ref to each Annotation
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

const Annotation = forwardRef(
    (
        { image, footerText, failText = "Save image failed", onRemove, images }: AnnotationProps,
        ref,
    ) => {
        const sp = useSafePromise();
        const t = useTranslate();
        const refDiv = useRef<HTMLDivElement>(null);
        const [loading, setLoading] = useState(true);
        const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

        useEffect(() => {
            sp(image).then(canvas => {
                setCanvas(canvas);
                setLoading(false);
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

        const downloadImage = useCallback(() => {
            if (canvas) {
                download(canvas, "annotation", images, failText);
            }
        }, [canvas, failText, images]);

        // Expose the downloadImage function to the parent component
        useImperativeHandle(ref, () => ({
            downloadImage,
        }));

        return (
            <div
                className={classNames("save-annotation", {
                    "is-loading": !canvas,
                })}
                title={t("save")}
            >
                <img
                    alt="delete"
                    className="save-annotation-delete"
                    onClick={onRemove}
                    src={deleteSVG}
                />
                {loading && (
                    <div className="save-annotation-loader">
                        <Spin indicator={<LoadingOutlined spin />} size="large" />
                    </div>
                )}
                <div ref={refDiv} className="save-annotation-image" />
                <div className="save-annotation-actions">
                    <img
                        alt="download"
                        src={downloadSVG}
                        title={t("save")}
                        onClick={downloadImage}
                    />
                </div>
                <div className="save-annotation-footer">{footerText}</div>
            </div>
        );
    },
);

export default Annotation;
