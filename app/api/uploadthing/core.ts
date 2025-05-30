import { currentUser } from "@clerk/nextjs/server";
import {  UploadThingError} from "uploadthing/server"
import { createUploadthing,type FileRouter} from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
        .middleware(async (req) => {
            // Midre logic here
            const user=await currentUser();
            if(!user) throw new UploadThingError("Unauthorized");
            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload completed for User Id", metadata.userId);
            console.log("File URL", file.ufsUrl); // Using the 'url' property instead
            return { userId: metadata.userId, file: file.ufsUrl };
          }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;