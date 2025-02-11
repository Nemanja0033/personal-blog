import { ArrowDown } from "lucide-react";
import BlogPost from "./_components/BlogPost";
import { db } from "@/firebaseconfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

async function getPosts(){
      const postCollectionRef = collection(db, 'posts');
      const q = query(postCollectionRef, orderBy("createdAt", "desc"));
      const data = await getDocs(q);
      let posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      return posts
}


export default async function blog() {

  const posts = await getPosts();

    return(
        <div className="h-screen w-full flex justify-center">
            <div className="flex-row mt-12 md:w-1/3 w-[90%]">
                <h1 className="text-center text-xl font-semibold flex justify-center items-center gap-1">Recent Posts <ArrowDown size={18} /></h1>
                {posts.map((p: any) => (
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