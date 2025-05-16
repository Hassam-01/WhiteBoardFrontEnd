import { FLAT_SERVER_BASE_URL_AWS } from "@netless/flat-server-api";

export async function uploadFileToS3(file: File, key: string): Promise<string> {
    try {
        const res = await fetch(`${FLAT_SERVER_BASE_URL_AWS}/s3/presigned-url`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                key,
                contentType: file.type,
            }),
        });
        const { url } = await res.json();

        // 2. Upload file directly to S3
        const uploadRes = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": file.type,
            },
            body: file,
        });
        if (!uploadRes.ok) {
            throw new Error(`Upload failed with status ${uploadRes.status}`);
        }
        return `https://cbw-os.s3.eu-north-1.amazonaws.com/${key}`;
    } catch (err) {
        console.error("Upload failed:", err);
        throw err;
    }
}
