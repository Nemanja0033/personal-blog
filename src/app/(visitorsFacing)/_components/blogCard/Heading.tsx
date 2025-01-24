"use client"
import { IsHiddenContext } from "@/app/context/isHiddenContext";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export default function Heading(){
    
    const { isHidden } = useContext(IsHiddenContext)
    
    return(
        <div className={`flex-row w-full ${!isHidden ? 'mt-0' : 'mt-32'}`}>
            <div className="flex md:justify-start justify-center mb-6 text-center">
                <h1 className="font-bold text-3xl text-primary">Welcome to my blog!</h1>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>Im <b>Nemanja</b>, an <b>Forntend Web Developer</b> from Serbia.</p>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>Thanks for visiting my website.</p>
            </div>
            <div className="flex md:justify-start gap-4 justify-center mb-6">
                <Link href={'/blog'}><button className="btn btn-active btn-neutral bg-neutral hover:text-white btn-sm">View Posts <ArrowRight size={16} /></button></Link>
                <Link href='https://nemanja-antonijevic-portfolio.vercel.app/'><button className="btn btn-active btn-neutral bg-primary text-neutral hover:text-white btn-sm">My Portfoilo <ArrowUpRight size={16} /></button></Link>
            </div>
        </div>
    )
}