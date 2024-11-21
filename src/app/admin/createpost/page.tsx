"use client"
import { db } from "@/firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"

export default function createPost(){

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [imgUrl, setImageUrl] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [tag, setTag] = useState<string>("");

    const postCollectionRef = collection(db, "posts");

    const createPost = async () => {
        await addDoc(postCollectionRef, {
            title,
            content,
            imgUrl,
            desc,
            tag,
            date: new Date().toLocaleString('en-US', {
                weekday: "long",
                hour: '2-digit',
                minute: '2-digit',
            }),
            createdAt: serverTimestamp(), 
        })
        location.reload();
    }

    return(
        <div className="md:w-1/2 w-full h-screen justify-self-center mt-32 flex justify-center md:items-center items-start md:mt-0 shadow-md rounded-md">
            <div className="flex-row md:w-[80%] w-[95%]">
                <h1 className="text-center mb-5 text-2xl font-semibold">New Blog Post</h1>
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder=" Title. . ." type="text" onChange={(e) => {setTitle(e.target.value)}} />
                <textarea className="w-full min-h-16 max-h-64 rounded-md border" required placeholder=" Content. .  ." onChange={(e) => {setContent(e.target.value)}} />
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder=" Image URL" type="text" onChange={(e) => {setImageUrl(e.target.value)}} />
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder=" Short Description. . ." type="text" onChange={(e) => {setDesc(e.target.value)}} />
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder=" Tag. . ." type="text" onChange={(e) => {setTag(e.target.value)}} />
                <button className="flex justify-self-center" onClick={createPost}>Submit</button>
            </div>
        </div>
    )
}