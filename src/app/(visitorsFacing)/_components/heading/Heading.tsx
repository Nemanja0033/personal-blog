import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Heading(){
    return(
        <div className="flex-row w-full md:mt-40 mt-20">
            <div className="flex md:justify-start justify-center mb-6 text-center">
                <h1 className="font-bold text-3xl text-primary">Welcome to my blog!</h1>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>Im <b>Nemanja</b>, an <b>Forntend Web Developer</b> from Serbia.</p>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>Thanks for visiting my website.</p>
            </div>
            <div className="flex md:justify-start justify-center text-center mb-8">
                <p>On this site you can read my articles, follow <b>news and projects from my programming journey.</b></p>
            </div>
            <div className="flex md:justify-start gap-4 justify-center mb-6">
                <Link href={'/blog'}><button className="btn btn-active btn-neutral bg-primary btn-sm">View Posts <ArrowRight size={16} /></button></Link>
                <Link href={'/blog'}><button className="btn btn-active btn-neutral bg-primary btn-sm">My Portfoilo</button></Link>
            </div>
        </div>
    )
}