"use client"
import { db } from "@/lib/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import { Send, X } from "lucide-react";
import { useRef, useState } from "react";


export default function ContactForm(){

    const [contactData, setContactData] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try{
            const messagesCollectionRef = collection(db, 'messages');
            await addDoc(messagesCollectionRef, {
                email: contactData,
            });
            alert('Your message is submited!');
            inputRef.current!.value = ''
        }
        catch(err){
            console.log('Error while sending message', err);
        }
    }

        return(
            <form className="w-full py-3 flex-row items-center">
                <div className="mb-5">
                    <h1 className="text-xl font-bold">Employer or Client?</h1>
                    <p>Leave email and i will contact you shortly</p>
                </div>
                <div className="flex items-center mb-12">
                    <input ref={inputRef} onChange={(e) => setContactData(e.target.value)} name="email" className="bg-white h-10 w-96 border border-gray-500  p-1" placeholder="Your Email. . ." type="text" />
                    <button onClick={handleSubmit} className="flex btn h-10 rounded-sm btn-neutral btn-sm hover:bg-white hover:text-black items-center gap-1">Send <Send size={14} /></button>
                </div>
            </form>
            
        )
    }
