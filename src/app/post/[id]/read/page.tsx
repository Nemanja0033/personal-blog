// @ts-nocheck
import { db } from "@/firebaseconfig";
import { PostType } from "@/types/PostType";
import { collection, query, where, getDocs } from "firebase/firestore";

interface Params {
  params: {
    id: string;
  };
}

export default async function ReadPost({ params }: Params) {
  const { id } = params;

  const postRef = collection(db, "posts");
  const q = query(postRef, where("blogID", "==", id));
  const snapshot = await getDocs(q);

  const post: PostType | undefined = snapshot.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))[0] as PostType;

  if (!post) {
    return (
      <div className="h-screen">
        <h1 className="text-center font-semibold text-2xl mt-32">
          Post not found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center">
      <div className="md:w-1/2 flex-row md:mt-12 w-full h-full rounded">
        <div className="flex justify-start items-center mt-8">
          <span className="font-bold text-3xl">{post.title}</span>
        </div>
        <div className="flex justify-start md:ml-0 ml-3 mb-3   mt-4">
          <span className="text-sm mr-6 text-gray-500">{post.date}</span>
        </div>
        <div className="flex justify-center mt-0 md:m-0 mx-3">
          <p className="md:tracking-wide tracking-widest md:text-md text-xl">
            {post.content}
          </p>
        </div>
        <div className="w-full mt-5">
          <img src={post.imgUrl} alt={post.title} />
          <span className="text-gray-500 mt-3">{post.title} - photo</span>
        </div>
      </div>
    </div>
  );
}
