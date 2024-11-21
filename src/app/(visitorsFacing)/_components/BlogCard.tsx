"use client"
import Image from "next/image";

export default function BlogCard(title: any,desc: any,image:any){
    return(
        <div className="w-1/3 h-72 flex-row">
            <div>{title}</div>
            <div><Image src={image} width={300} height={300} alt="" /></div>
            <div>{desc}</div>
        </div>
    )
}