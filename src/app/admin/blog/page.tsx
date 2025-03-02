"use client"
import { db } from "@/lib/firebaseconfig";
import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogList(){
    const [postList, setPostList] = useState<any[]>([]);
    const postCollectionRef = collection(db, "posts");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
              setLoading(true);
              const q = query(postCollectionRef, orderBy("createdAt", "desc"));
              const data = await getDocs(q);
              setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
              setLoading(false);
            }
            catch(err){
              console.log(err);
            }
        }
        fetchPosts()
    }, []);

    console.log(postList)

    const deletePost = async (id: string) => {
        const post = doc(db, "posts", id);
        await deleteDoc(post);
    }

    if(loading){
      return(
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      )
    }

    if(postList.length === 0 && !loading){
      return(
        <div className="flex justify-center items-center h-screen">
          <h1>Error while fetching posts</h1>
        </div>
      )
    }
    
    return(
        <div className="flex-row mt-12">
            <h1 className="text-center text-2xl font-bold mt-3">Blog List</h1>
            <h3 className="text-center">Posts: {postList.length}</h3>
            {postList.map((post, index) => (
            <div key={post.blogID} className="scale-90 flex-row w-full h-full shadow-md rounded-md cursor-pointer">
            <div className="flex justify-between items-center mb-2 ml-6 mt-3">
              <span className="text-xl font-semibold">{post.title}</span>
              <div className="flex gap-2 mr-6">
              <button onClick={() => deletePost(post.id)} className="btn btn-sm bg-red-400"><Trash /></button>
              </div>
            </div>
            <div className="flex justify-between font-sans ml-6 mr-6">
              <span>{post.desc}</span>
            </div>
            <div className="flex justify-end ml-6 mb-3">
              <span className="text-gray-500 text-xs mr-6 mb-3">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    )
}