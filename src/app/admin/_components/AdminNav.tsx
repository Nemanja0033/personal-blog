import Link from "next/link";

export default function AdminNav(){
    return(
        <nav className="w-full flex justify-center items-center h-14 shadow-md">
            <div className="flex gap-12 font-semibold ">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>New Post</Link>
            </div>
        </nav>
    )
}