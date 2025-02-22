import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Navbar(){
    return(
        <header className="flex-row md:px-64 px-5 w-full shadow-md h-auto bg-slate-700">
            <nav className="w-full flex justify-start mb-6">
            <div className="flex justify-center items-center gap-8 text-sm">
                <Link className=" hover:text-primary" href={'/'}>Home</Link>
                <Link className="hover:text-primary" href={'/blog'}>Blog</Link>
                <Link className="hover:text-primary" href={'/tags'}>Tags</Link>
            </div>
        </nav>
        <ContactForm />
        </header>
    )
}