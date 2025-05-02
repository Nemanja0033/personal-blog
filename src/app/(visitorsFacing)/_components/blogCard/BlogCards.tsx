import { BlogCardType } from "@/types/BlogCardType";
import Link from "next/link";

export default function BlogCard({date, title, imgUrl, desc, blogID}: BlogCardType){

    return(
        <Link href={`/blog/${blogID}`}>
            <div className="scale-90 flex-row border border-gray-900 hover:opacity-80 transition-all md:w-[350px] w-full h-full shadow-md rounded-md cursor-pointer">
            <div className="flex justify-center mt-3">
              <img className="rounded w-[90%] h-60" src={imgUrl} alt="" />
            </div>
            <div className="flex justify-center mb-2 ml-6 mt-3">
              <span className="text-xl font-bold">{title}</span>
            </div>
            <div className="flex justify-center font-sans mb-4 ml-6 mr-6">
              <span className="mb-3">{desc}</span>
            </div>
            <div className="flex justify-start ml-6 mb-1 fixed bottom-0">
              <span className="text-gray-500 text-xs mr-6">{date}</span>
            </div>
          </div>
        </Link>
    )
}