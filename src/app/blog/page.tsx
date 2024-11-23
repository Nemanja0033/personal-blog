import { ArrowDown } from "lucide-react";
import BlogPost from "./_components/BlogPost";

export default function blog() {
    return(
        <div className="h-full w-full flex justify-center">
            <div className="flex-row mt-12 w-1/3">
                <h1 className="text-center text-md flex justify-center items-center gap-1">Blog <ArrowDown size={18} /></h1>
                <BlogPost />
            </div>
        </div>
    )
}