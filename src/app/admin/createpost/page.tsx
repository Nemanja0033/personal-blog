"use client"
import { db } from "@/firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function CreatePost(){

    const [title, setTitle] = useState("");
    const [imgUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("")
    const [desc, setDesc] = useState("");
    const [tag, setTag] = useState("");

    const postCollectionRef = collection(db, "posts");

    const createPost = async () => {
        await addDoc(postCollectionRef, {
            title,
            content,
            imgUrl,
            desc,
            tag,
            date: new Date().toLocaleString('en-US', {
                month: 'long',   
                day: '2-digit',  
                hour: '2-digit',  
                minute: '2-digit',
              }),
            createdAt: serverTimestamp(), 
            blogID: uuidv4(),
        })
        alert('Blog post created!');
    }

    return(
        <div className="w-full h-screen justify-self-center mt-32 flex justify-center md:items-center items-start md:mt-0 shadow-md rounded-md">
            <div className="flex-row md:w-[80%] w-[95%]">
                <h1 className="text-center mb-5 text-2xl font-semibold">New Blog Post</h1>
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder="Title. . ." type="text" onChange={(e) => {setTitle(e.target.value)}} />
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder=" Image URL" type="text" onChange={(e) => {setImageUrl(e.target.value)}} />
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder=" Short Description. . ." type="text" onChange={(e) => {setDesc(e.target.value)}} />
                <input className="w-full mb-5 h-10 rounded-md border" required placeholder=" Tag. . ." type="text" onChange={(e) => {setTag(e.target.value)}} />
                <textarea className="w-full mb-5 h-32 max-h-92 rounded-md border" onChange={(e) => setContent(e.target.value)} placeholder="Enter your content. . ." />
                <button className="w-full h-12 btn btn-active btn-neutral bg-primary text-neutral hover:text-white btn-sm" onClick={createPost}>Submit</button>
            </div>
        </div>
    )
}