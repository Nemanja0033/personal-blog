import BlogCard from "./_components/blogCard/BlogCards";
import Heading from "./_components/blogCard/Heading";
import { IsHiddenProvider } from "../context/isHiddenContext";
import { db } from "@/lib/firebaseconfig";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";

async function getFeaturedPosts(){
      const postCollectionRef = collection(db, 'posts');
      const q = query(postCollectionRef, where("feautured", "==", true));
      const data = await getDocs(q);
      const post = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      return post;
}

export default async function home(){
  const featuredPosts = await getFeaturedPosts();
  return(
    <main className='w-full p-10 flex-row justify-center items-center'>
      <IsHiddenProvider>
          <section>
            <Heading />
          </section>
          <section className="grid md:grid-cols-3 grid-cols-1">
            <BlogCard />
          </section>
      </IsHiddenProvider>
    </main>
  )
}