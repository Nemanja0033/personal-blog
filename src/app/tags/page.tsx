"use client"
import { db } from "@/lib/firebaseconfig";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react"

export default function tags(){
    return(
        <div className="flex-row place-items-center h-screen w-full">
            <h1 className="text-center text-2xl font-bold mt-12">
                Search Article By Tag
            </h1>
        </div>
    )
}