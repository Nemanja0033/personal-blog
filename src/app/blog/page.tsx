import { ArrowDown } from "lucide-react";
import BlogPost from "./_components/BlogPost";

export default function blog() {
    return(
        <div className="h-screen w-full flex justify-center">
            <div className="flex-row mt-12 md:w-1/3 w-[90%]">
                <h1 className="text-center text-xl font-semibold flex justify-center items-center gap-1">Recent Posts <ArrowDown size={18} /></h1>
                <BlogPost />
            </div>
        </div>
    )
}