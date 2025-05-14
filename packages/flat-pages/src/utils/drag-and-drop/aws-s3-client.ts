import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class AWS3Client {
    private s3: S3Client;
    private bucket: string;
    private region: string;

    public constructor() {
        this.region = "eu-north-1";
        this.bucket = "cbw-os";
        this.s3 = new S3Client({
            region: "eu-north-1",
            credentials: {
                accessKeyId: "xxxxxxxx",
                secretAccessKey: "xxxxxxxx",
            },
        });
    }

    public async uploadFile(file: File, key: string): Promise<string> {
        try {
            // Create the command for generating a pre-signed URL
            console.log("Generating pre-signed URL for file upload...");
            const command = new PutObjectCommand({
                Bucket: this.bucket,
                Key: key,
                ContentType: file.type,
                // ACL: "public-read",
            });
            const presignedUrl = await getSignedUrl(this.s3, command, { expiresIn: 900 });
            // Upload file directly to S3 using the pre-signed URL
            const response = await fetch(presignedUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": file.type,
                },
                body: file,
            });
            if (!response.ok) {
                throw new Error(`Upload failed with status: ${response.status}`);
            }
            // Return the URL to the uploaded file
            return `https://${this.bucket}.s3.${this.region}.amazonaws.com/${key}`;
        } catch (error) {
            console.error("Error uploading file to S3:", error);
            throw error;
        }
    }
}
