import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Save your Precious hours of Reading Time</h2>
            <p className="text-gray-600 mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fuga!
            </p>
          </div>
        </div>

       <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
        <div className="mt-8 flex justify-center">
          <Button
          asChild
            size="lg"
            variant={"link"}
            className="text-white w-full min-[400px]:w-auto bg-gradient-to-r from-slate-900 to-violet-500 hover:from-violet-500 hover:to-slate-900 font-bold shadow-lg transition-all duration-300 hover:no-underline"
          >
            <Link href="/#pricing">
              Get Started{" "}
              <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
            </Link>
          </Button>
        </div>
    </div>
        
     </div>
    </section>
  );
}
