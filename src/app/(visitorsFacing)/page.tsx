"use client"

import { db } from "@/firebaseconfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import BlogCard from "./_components/BlogCard";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

export default function home(){

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
    <div className="flex justify-evenly">
      {postList.map((post, index) => (
        <div key={uuidv4()} className="flex-row w-1/3 h-[320px] shadow-md rounded-2xl">
          <div className="flex justify-center">
            <h1 className="text-xl font-semibold">{post.title}</h1>
          </div>
          <div className="flex justify-center">
            <img className="rounded-xl w-[90%]" src={post.imgUrl} alt="" />
          </div>
          <div className="flex justify-center">
            <h3>{post.desc}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}