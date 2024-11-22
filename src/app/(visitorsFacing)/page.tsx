"use client"

import { db } from "@/firebaseconfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import BlogCard from "./_components/BlogCard";

export default function home(){


  return(
    <div className="flex justify-start">
      <BlogCard />
    </div>
  )
}