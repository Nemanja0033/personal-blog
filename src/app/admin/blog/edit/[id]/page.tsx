"use client" //use this when your component is client-side 
import { db } from "@/lib/firebaseconfig";
import { PostType } from "@/lib/validations";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { EditIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPost(){
  // This is just temporary solution, avoid using multiple states in component
    const [postData, setPostData] = useState<any>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetchPost(id);
    }, []);

    async function fetchPost(id: any) {
        try{
          const postRef = collection(db, "posts");
          const q = query(postRef, where("blogID", "==", id));
          const snapshot = await getDocs(q);
          const post: PostType | undefined = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0] as unknown as PostType;
          setPostData(post)
          setLoading(false);
        }
        catch(err){
          console.log(err);
          return [];
        }
      }

      async function updatePost(id: string) {
        try {
          if(!title || !content || !imgUrl){
            alert('Please dont leave fields empty!')
            return;
          }
          else{
            const postRef = doc(db, 'posts', id);
            await updateDoc(postRef, {
            title: title,
            content: content,
            imgUrl: imgUrl 
          });
      
          await fetchPost(id); 
          alert("Post updated!");
          setLoading(false);
          }
        } catch (err) {
          console.log(err);
          alert("Error while updating post!");
        }
      }
      
    if(loading){
      return(
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      )
    }

    return(
        <div className="w-full h-screen flex justify-center p-12">
            <div className="gird w-full place-items-center">
                <div className="grid place-items-center gap-5 w-full items-center">
                  <label className="flex items-center gap-2" htmlFor="title"><EditIcon /> Title</label>
                  <input name="title" className="h-10 w-[90%] px-3" type="text" defaultValue={postData?.title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="grid place-items-center gap-5 w-full items-center mt-12">
                  <label className="flex items-center gap-2" htmlFor="title"><EditIcon /> Content</label>
                  <textarea name="title" className="h-96 w-[90%] px-3"  defaultValue={postData?.content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="grid place-items-center w-full items-center mt-12">
                  <label htmlFor="img" className="flex items-center gap-2"><EditIcon /> Image URL</label>
                  <input type="text" name="img" className="h-10 w-[90%] px-3" defaultValue={postData?.imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                </div>
                <div className="grid place-items-center w-full items-center mt-12">
                  <button onClick={() => updatePost(postData?.id)} className="btn btn-neutral px-3 w-1/3">Update Post</button>
                </div>
            </div>
        </div>
    )
}