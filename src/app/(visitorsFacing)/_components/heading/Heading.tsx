import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Heading(){
    return(
        <div className="flex-row w-full mt-32 border-b border-gray-800">
            <div className="flex md:justify-start justify-center mb-6">
                <h1 className="font-semibold text-2xl">Welcome to my blog!</h1>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>I'm Nemanja, an <b>Forntend Web Developer</b> from Serbia.</p>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>Thanks for visiting my website.</p>
            </div>
            <div className="flex md:justify-start justify-center mb-6">
                <p>On this site you can read my articles, follow <b>news and projects from programming.</b></p>
            </div>
            <div className="flex md:justify-start gap-4 justify-center mb-6">
                <button className="btn btn-active btn-neutral btn-sm">View Posts <ArrowRight size={16} /></button>
                <button className="btn btn-active btn-neutral btn-sm">Contact me</button>
            </div>
            <div className="flex md:justify-start justify-center gap-4 mb-6">
                <a href="https://github.com/Nemanja0033"><Github color="gray" size={20} /></a>
                <a href="https://www.linkedin.com/in/nemanja-antonijevic-6baabb2a2/"><Linkedin color="gray" size={20} /></a>
            </div>
        </div>
    )
}