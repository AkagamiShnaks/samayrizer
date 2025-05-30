import { Cog, Pizza } from "lucide-react";

export default function DemoSection() {
    return <section className="relative ">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">

        
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                absolute inset-x-0 top-40 -z-10
                transform-gpu
                overflow-hidden
                blur-3xl"
                >
            <div
               className="
                relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-indigo-800 via-purple-800 to-blue-900 opacity-5 -sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%,27.5% 7 6.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.6%, 76.1% 97.7%,74.1% 44.1%)',
                }}
            >

            </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Cog className="h-6 w-6 text-violet-600"/>
            </div>
            <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
                Watch Sammarizer transforms <span className="bg-linear-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">this boring Machine Learning PDF</span>  into an easy to read summary!!
            </h3>
            </div>

            <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">

            </div>
        </div>
        </div>
    </section>
}