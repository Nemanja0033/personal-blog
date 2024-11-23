"use client"
import { db } from "@/firebaseconfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function BlogCard(){

  const [postList, setPostList] = useState<any[]>([]);
  const postCollectionRef = collection(db, "posts")
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPosts = async () => {
      const q = query(postCollectionRef, orderBy("createdAt", "desc"));
      const data = await getDocs(q);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false)
    };

    getPosts();
  })

    if(loading){
      return(
        <div className="w-full flex justify-center">
          <span className="loading loading-dots loading-md"></span>
        </div>
      )
    }

    return(
        <div>
        {postList.map((post, index) => (
          <Link key={uuidv4()} href={`/blog/${post.blogID}`}>
            <div className="scale-90 flex-row w-full h-[320px] shadow-md rounded-md cursor-pointer">
            <div className="flex justify-center mt-3">
              <img className="rounded w-[90%] h-60" src={post.imgUrl} alt="" />
            </div>
            <div className="flex justify-start mb-2 ml-6 mt-3">
              <h1 className="text-xl font-semibold">{post.title}</h1>
            </div>
            <div className="flex justify-between font-sans ml-6 mr-6">
              <span>{post.desc}</span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    )
}