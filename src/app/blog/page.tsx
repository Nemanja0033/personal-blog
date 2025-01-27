"use client"
import { ArrowDown } from "lucide-react";
import BlogPost from "./_components/BlogPost";
import { db } from "@/firebaseconfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function blog() {
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
        <div className="h-screen w-full flex justify-center">
            <div className="flex-row mt-12 md:w-1/3 w-[90%]">
                <h1 className="text-center text-xl font-semibold flex justify-center items-center gap-1">Recent Posts <ArrowDown size={18} /></h1>
                {postList.map((p) => (
                    <BlogPost date={p.date}
                    title={p.title} 
                    desc={p.desc} 
                    tag={p.tag} 
                    blogID={p.blogID} 
                    />
                ))}
            </div>
        </div>
    )
}