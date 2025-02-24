import { db } from "@/lib/firebaseconfig"
import { collection, getDocs } from "firebase/firestore"
import Link from "next/link";

async function getTags() {
    const collectionRef  = collection(db, "posts");
    const data = await getDocs(collectionRef);
    const tags = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return tags;
}

export default async function tags(){
    const tags = await getTags();

    return(
        <div className="flex-row md:px-64 px-5 place-items-center h-screen w-full">
            <h1 className="text-center text-2xl font-bold mt-12">
                All of the topics I've written about
            </h1>
            <section className="grid grid-cols-8">
                {tags.map((t: any) => (
                    <Link href={`/tags/blog/${t.tag}`} className="btn btn-active btn-neutral w-[70%] bg-primary text-neutral hover:text-white btn-sm">{t.tag}</Link>
                ))}
            </section>
        </div>
    )
}