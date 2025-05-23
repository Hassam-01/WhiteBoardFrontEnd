const SupportedFileExts = [
    // ".ppt",
    // ".pptx",
    // ".doc",
    // ".docx",
    // ".pdf",
    ".png",
    ".jpg",
    ".jpeg",
    // ".gif",
    // ".mp3",
    // ".mp4",
];

export function isSupportedFileExt(file: File): boolean {
    return SupportedFileExts.some(ext => file.name.endsWith(ext));
}
