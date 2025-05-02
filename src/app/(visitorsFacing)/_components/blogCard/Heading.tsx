"use client"
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export default function Heading(){
    
    return(
        <div className="flex-row w-full my-32">
            <div className="flex md:justify-start justify-center mb-3 text-center">
                <h1 className="font-bold text-4xl">Welcome to my blog!</h1>
            </div>
            <div className="flex md:justify-start justify-center mb-3">
                <p>I am Nemanja, a frontend developer from Serbia. Thanks for stopping by :)</p>
            </div>
            <div className="flex md:justify-start gap-4 justify-center mb-3">
                <Link href={'/blog'}><button className="btn btn-active btn-neutral bg-neutral hover:text-white btn-sm">View Posts <ArrowRight size={16} /></button></Link>
                <Link href='https://nemanja-antonijevic-portfolio.vercel.app/'><button className="btn btn-active btn-neutral bg-primary text-neutral hover:text-white btn-sm">My Portfoilo <ArrowUpRight size={16} /></button></Link>
            </div>
        </div>
    )
}