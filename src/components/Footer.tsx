import { Github, Linkedin } from "lucide-react";

export default function Footer(){
    return(
        <footer className="w-[85%] flex justify-self-center justify-between h-12 border-t border-gray-800 mt-20">
            <span className="mt-2 text-sm text-gray-500">© Copyright 2024 — Nemanja Antonijevic</span>
            <div className="flex gap-2 items-center">
            <a href="https://github.com/Nemanja0033"><Github color="gray" size={20} /></a>
            <a href="https://www.linkedin.com/in/nemanja-antonijevic-6baabb2a2/"><Linkedin color="gray" size={20} /></a>
            </div>
        </footer>
    )
}