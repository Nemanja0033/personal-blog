import { db } from "@/firebaseconfig";
import { PostType } from "@/types/PostType";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function ReadPost({ params: { id } }: { params: { id: string } }) {
  const postRef = collection(db, "posts");
  const q = query(postRef, where("blogID", "==", id));
  const snapshot = await getDocs(q);
  const post: PostType = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0] as PostType;

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div>
        <span>{post.date}</span>
        <span>{post.tag}</span>
      </div>
    </div>
  );
}
