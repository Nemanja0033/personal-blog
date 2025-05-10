import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="w-full h-screen grid place-items-center items-center">
            <h1 className="text-3xl">Opps looks like this page dont exist. . .</h1>
            <Link className="btn btn-md" href={'/'}>Back to home <ArrowLeft /></Link>
        </div>
    )
}