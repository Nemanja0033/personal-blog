import { db } from "@/lib/firebaseconfig";
import { PostType } from "@/types/PostType";
import { collection, query, where, getDocs } from "firebase/firestore";
import { unstable_cache } from "next/cache";

interface Params {
  params: {
    id: string;
  };
}

async function fetchPost(id: string) {
  try{
    const postRef = collection(db, "posts");
    const q = query(postRef, where("blogID", "==", id));
    const snapshot = await getDocs(q);
    const post: PostType | undefined = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0] as PostType;
    return post;
  }
  catch(err){
    console.log(err);
    return [];
  }
}

export default async function ReadPost({ params }: Params) {
  const { id } = params;

  const getPost = unstable_cache(() => fetchPost(id), [`post ${id}`], { revalidate: 86400 });

  const post: any = await getPost();

  
  return (
    <div className="w-full h-full flex justify-center">
      <div className="md:w-1/2 flex-row md:mt-12 w-full h-full rounded">
        <div className="flex justify-start items-center mt-8">
          <span className="font-bold text-3xl">{post.title}</span>
        </div>
        <div className="flex justify-start md:ml-0 ml-3 mb-3 mt-4">
          <span className="text-sm mr-6 text-gray-500">{post.date}</span>
        </div>
        <div className="flex justify-center mt-0 md:m-0 m-2">
          <p className="md:text-md text-xl">
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