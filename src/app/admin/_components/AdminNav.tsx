import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function AdminNav(){
    return(
        <nav className="w-full flex justify-center items-center h-14 shadow-md">
            <div className="flex gap-12 font-semibold ">
                <Link className="flex gap-2" href={'/'}><ArrowLeft />Home</Link>
                <Link href={'/'}>New Post</Link>
            </div>
        </nav>
    )
}