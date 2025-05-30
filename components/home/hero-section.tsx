import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function Hevioletction() {
    return ( 
     <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
        <div className="">
            <div className="relative p-[1px] rounded-full  overflow-hidden bg-linear-to-r from-violet-200 via-violet-500 to-violet-800 animate-gradient-x group">
             <Badge 
              variant={'secondary'} 
              className='relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200'
            >
              <Sparkles className='h-6 w-6 mr-2 text-violet-600 animate-pulse'/>
             <p className="text-base text-violet-600">Powered by Ayon</p>
             </Badge>
          </div>
        </div>
            <h1 className="font-bold py-6 text-center">Transfrom boring PDFS into{' '} 
                <span className="relative inline-block"><span className="relative z-10 px-2">crisp</span> <span className="absolute inset-0 bg-violet-200/50 -rotete-2 rounded-lg transform -skew-y-1"aria-hidden="true"></span> 
                </span>{' '}
                summaries
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">Beautiful Summary of the <span>Docx</span> in seconds</h2>
            <Button variant={"link"} className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-violet-500 hover:from-violet-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300">
            
            <Link href="/#pricing" className="flex gap-2 items-center">
            <span>Try Sammarizer</span>
            <ArrowRight className="animate-pulse"/>
            </Link>
            </Button>
    </section>
    );
}