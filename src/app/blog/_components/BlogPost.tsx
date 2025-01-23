"use client"
import { db } from "@/firebaseconfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function BlogPost(){

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

    return(
        <div>
            {postList.map((post) => (
                <div key={post.blogID} className="w-full h-56 shadow-md rounded mt-8 flex-row">
                    <div className="flex justify-start text-sm text-gray-500">
                        <span className="mt-3 ml-6">{post.date}</span>
                        <button className="mt-3 ml-6 btn btn-xs">{post.tag}</button>
                    </div>
                    <div className="flex justify-start text-xl font-semibold">
                        <span className="mt-3 ml-6">{post.title}</span>
                    </div>
                    <div className="flex justify-start text-md mt-3 text-gray-400 font-thin">
                        <span className="mt-3 ml-6 mr-3">{post.desc}</span>
                    </div>
                    <div className="flex justify-start mt-3">
                        <Link href={`/post/${post.blogID}/read`}><button className="mt-3 ml-6 btn btn-sm">Read Article <ArrowRight /></button></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}