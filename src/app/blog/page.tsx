import { ArrowDown } from "lucide-react";
import BlogCard from "../(visitorsFacing)/_components/blogCard/BlogCard";

export default function blog() {
    return(
        <div className="h-full w-full flex justify-center">
            <div className="flex-row mt-12">
                <h1 className="text-center text-md flex justify-center items-center gap-1">Blog <ArrowDown size={18} /></h1>
                <BlogCard />
            </div>
        </div>
    )
}