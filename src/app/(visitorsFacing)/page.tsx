import { ArrowDown } from "lucide-react";
import BlogCard from "./_components/blogCard/BlogCards";
import Heading from "./_components/blogCard/Heading";
import ContactForm from "@/app/(visitorsFacing)/_components/blogCard/ContactForm";
import { IsHiddenProvider } from "../context/isHiddenContext";

export default function home(){
  
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