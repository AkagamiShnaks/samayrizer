import {Sparkles, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BgGradient from "../common/bg-gradient";

export default function UploadHeader() {
    return ( 
        <section>
                <BgGradient/>
        <div className="flex flex-col items-center justify-center gap-4 text-center">

        <div className="relative p-[1px] rounded-full  overflow-hidden bg-linear-to-r from-violet-200 via-violet-500 to-violet-800 animate-gradient-x group">
        <Badge variant={'secondary'} 
        className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"><Sparkles className='h-6 w-6 mr-2 text-violet-600 animate-pulse'/>
        <p className="text-base text-violet-600 animate-pulse">
            AI-Powered Content Creation
        </p>
        </Badge>
        </div>
        <div className='capitalize text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl  text-gray-900'>
       
        
               Start Uploading {' '} 
                <span className="relative inline-block"><span className="relative z-10 px-2">Your PDF'S</span> <span className="absolute inset-0 bg-violet-200/50 -rotete-2 rounded-lg transform -skew-y-1"aria-hidden="true"></span> 
                </span>{' '}
        </div>
        <div className="mt-2 text-lg leading-8 max-w-2xl text center text-gray-600">
            <p>Upload your PDF to See the magic <WandSparkles className="inline h-5 w-5 text-violet-600 animate-pulse" /></p>
        </div>
        </div>
        

    </section>
    );
}