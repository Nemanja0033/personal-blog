"use client"
import { db } from "@/firebaseconfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function BlogCard(){

  const [postList, setPostList] = useState<any[]>([]);
  const postCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const q = query(postCollectionRef, orderBy("createdAt", "desc"));
      const data = await getDocs(q);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  })

    return(
        <div>
        {postList.map((post, index) => (
          <Link key={uuidv4()} href={`/blog/${post.blogID}`}>
            <div className="scale-90 flex-row w-full h-[320px] shadow-md rounded-2xl cursor-pointer">
            <div className="flex justify-center mt-3">
              <img className="rounded-xl w-[90%] h-60" src={post.imgUrl} alt="" />
            </div>
            <div className="flex justify-center mb-2">
              <h1 className="text-xl font-semibold">{post.title}</h1>
            </div>
            <div className="flex justify-center font-sans">
              <h3>{post.desc}</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    )
}