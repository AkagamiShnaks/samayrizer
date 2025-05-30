'use client';
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";
import { toast } from "sonner";
import { generatePDfSummary } from "@/actions/upload-action";

const schema = z.object({
  file: z.instanceof(File, { message: "Invalid file" })
    .refine((file) => file.size <= 20 * 1024 * 1024, { message: "File size must be less than 20MB" })
    .refine((file) => file.type === "application/pdf", { message: "File must be a PDF" }),
});

export default function UploadForm() {
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("Uploaded successfully!");
      toast.success("Upload complete", {
        description: "Your PDF was uploaded successfully.",
      });
    },
    onUploadError: (err) => {
      console.error("Error occurred while uploading file:", err);
      toast.error("Upload failed", {
        description: err.message || "An error occurred during upload.",
      });
    },
    onUploadBegin: ({ file }) => {
      console.log("Upload has begun for", file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validatedFields = schema.safeParse({ file });

    if (!validatedFields.success) {
      toast.error("Something went wrong", {
        description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file",
      });
      return;
    }

    toast("Uploading PDF...", {
      description: "We are uploading your PDF.",
    });

    const resp = await startUpload([file]);

    if (!resp) {
      toast.error("Something went wrong", {
        description: "Failed to upload file",
      });
      return;
    }

    toast("PDF is being processed", {
      description: "Hang tight! Our AI is reading through your document.",
    });
    const summary =await generatePDfSummary(resp);
    console.log("Summary:", {summary});
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
