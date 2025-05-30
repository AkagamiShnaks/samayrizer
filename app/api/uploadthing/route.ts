import {createRouteHandler} from "uploadthing/next";
import {ourFileRouter} from "@/app/api/uploadthing/core";
import { clerkClient } from "@clerk/nextjs/server";

// Exporting the GET and POST handlers using the createRouteHandler function
export const { GET, POST } = createRouteHandler({
    // Specifying the router to handle file-related routes
    router: ourFileRouter,
    // Uncomment and customize the createNextContext function if additional context is needed
    // createNextContext: (opts) => {
    //     return {
    //         clerkClient, // Clerk client for authentication
    //         req: opts.req, // Incoming request object
    //         res: opts.res, // Outgoing response object
    //     };
    // },
});
