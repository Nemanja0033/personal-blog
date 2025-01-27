import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="w-full flex justify-evenly h-14 shadow-md">
            <div className="flex items-center">
               <img className="w-12" src='./avatar.png' />
               <Link href={'/'}><span className="font-bold text-md cursor-pointer text-primary">myBlog</span></Link>
            </div>
            <div className="flex justify-center md:mr-6 mr-0 items-center gap-8 text-sm">
                <Link className=" hover:text-primary border-l border-gray-800 pl-3" href={'/'}>Home</Link>
                <Link className="hover:text-primary" href={'/blog'}>Blog</Link>
                <Link className="hover:text-primary" href={'/tags'}>Tags</Link>
            </div>
        </nav>
    )
}