import { Edit, NewspaperIcon } from "lucide-react";
import Link from "next/link";

export default function admin(){
    return(
        <div className="md:flex flex-row justify-center items-center gap-12 ml-6 mr-6 h-screen overflow-hidden">
            <div className="flex-row md:w-1/3 md:mb-0 mb-6 md:mt-0 mt-20 md:h-1/2 h-1/3 rounded-xl shadow-md hover:scale-110 transition">
                <div className="flex-row text-center mt-20 items-center">
                    <h1 className="text-3xl font-semibold">Edit Blogs</h1>
                    <div className="flex justify-center mt-6 cursor-pointer">
                        <Link href={'/admin/bloglist'}><Edit /></Link>
                    </div>
                </div>
            </div>

            <div className="flex-row md:w-1/3 md:h-1/2 h-1/3 rounded-xl shadow-md hover:scale-110 transition">
                <div className="flex-row mt-20 text-center h-full items-center">
                    <h1 className="text-3xl font-semibold">Add New Blog Post</h1>
                    <div className="flex justify-center mt-6 cursor-pointer">
                        <Link href={'/admin/createpost'}><NewspaperIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}