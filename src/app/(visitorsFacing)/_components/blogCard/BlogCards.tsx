import { db } from "@/lib/firebaseconfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';

// SSR rendering data for this component

async function getPosts(){
    const postCollectionRef = collection(db, 'posts');
    const q = query(postCollectionRef, orderBy("createdAt", "desc"));
    const data = await getDocs(q);
    const post = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return post;
}

export default async function BlogCard(){
  const postList = await getPosts();

    return(
        <div className="flex-row">
        {postList.map((post: any, index) => (
          <Link key={uuidv4()} href={`/post/${post.blogID}/read`}>
            <div className="scale-90 flex-row w-[400px] h-full shadow-md rounded-md cursor-pointer">
            <div className="flex justify-start ml-6 mb-3">
              <span className="text-gray-500 text-xs mr-6">{post.date}</span>
            </div>
            <div className="flex justify-center mt-3">
              <img className="rounded w-[90%] h-60" src={post.imgUrl} alt="" />
            </div>
            <div className="flex justify-center mb-2 ml-6 mt-3">
              <span className="text-xl font-bold">{post.title}</span>
            </div>
            <div className="flex justify-center font-sans ml-6 mr-6">
              <span className="mb-3">{post.desc}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    )
}