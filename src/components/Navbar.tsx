import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="w-full flex justify-evenly h-14 shadow-md">
            <div className="flex items-center">
                <span className="font-semibold">myBlog</span>
            </div>
            <div className="flex justify-center items-center gap-8 text-sm">
                <Link className="border-l border-gray-700 pl-3" href={'/'}>Home</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/about'}>About</Link>
            </div>
        </nav>
    )
}