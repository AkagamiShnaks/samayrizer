import { cn } from "@/lib/utils";
import { Arrow } from "@radix-ui/react-context-menu";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

type PriceType ={
    name:string;
    price:number;
    description:string;
    items:string[];
    id:string;
    paymentLink:string;
    priceId:string;
}

const plans=[
    {
        name:'Basic',
        price: 5,
        description:'Basic plan for individuals',
        items:['10 summary per month','1 user','Basic support'],
        id:'basic',
        paymentLink:'',
        priceId:'',
    },
    {
        
        name:'Pro',
        price: 10,
        description:'Pro plan for teams',
        items:['Unlimited PDF summaries','Priority Processing','24/7 priorit support'],
        id:'pro',
        paymentLink:'',
        priceId:'',
    },

]
const PricingCard= ({name,price,description,items,id,paymentLink}: PriceType)=>{
    return <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300">
        <div className={cn(
        "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-{1px} border-gray-500/20 rounded-2xl border-2 ",
        id === "pro" ? "border-violet-500 gap-5 border-2" : "border-gray-500/20",
    )}>
        <div className="flex justify-between items-center gap-4">
            <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2 ">{description}</p>
            </div>
        </div>
        <div className="flex gap-2">
            <p className="text-5xl tracking-tight font-extrabold">${price}</p>
            <div className="flex flex-col justify-end mb-[4px]">
                <p className="text-xs uppercase font-semibold">USD</p>
                <p className="text-xs">/month/</p>
            </div>
        </div>
        <div className="space-y-2.5 leading-relaxed text-base flex-1">
            {items.map((item,idx)=>(
                <li key={idx} className="flex items-center gap-2">
                    <CheckIcon size={18}/>
                    <span>{item}</span>
                </li>
            ))}
        </div>
        <div className="space-y-2 flex justify-center w-full">
            <Link
             href={paymentLink}
             className={cn(
             "w-full flex items-center justify-center rounded-full gap-2 bg-linear-to-r from-violet-800 to-violet-500 hover:from-violet-500 hover:to-violet-800 border-2 py-2 text-white",
             id === "pro" ? "border-violet-900"
             : "border-violet-100", "from-violet-400 to-violet-500"
                )}
             >Buy Now <ArrowRight size={16} />
             </Link>
        </div>
        </div>
    </div>
}


export default function PricingSection() {
    return <section className="relative overflow-hidden bg-gray-50" id="pricing">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:pt-12 lg:px-8">
            <div className="relative">
                <h2 className="Uppercase text-xl mb-8 text-violet-500 font-bold text-center">Pricing</h2>
                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                  {plans.map((plan)=><PricingCard key={plan.id} {...plan} />
                )}
                </div>
              
            </div>
            {/* Pricing cards go here */}
        </div>
    </section>;
}