import { Github, Linkedin } from "lucide-react";

export default function Footer(){
    return(
        <div className="lg:px-64">
            <footer className="w-full flex justify-between h-12 border-t border-gray-800 mt-20">
            <span className="m-3 text-sm text-gray-500">© Copyright 2025 — Nemanja Antonijevic</span>
            <div className="flex gap-2 items-center m-3">
            <a href="https://github.com/Nemanja0033"><Github color="gray" size={20} /></a>
            <a href="https://www.linkedin.com/in/nemanja-antonijevic-6baabb2a2/"><Linkedin color="gray" size={20} /></a>
            </div>
        </footer>
        </div>
    )
}