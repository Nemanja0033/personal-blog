"use client"
import { db } from "@/lib/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import { Send, X } from "lucide-react";
import { useState } from "react";


export default function ContactForm(){

    const [contactData, setContactData] = useState({email: '', message: ''});

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setContactData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try{
            const messagesCollectionRef = collection(db, 'messages');
            await addDoc(messagesCollectionRef, {
                email: contactData.email,
                message: contactData.message
            });
            alert('Your message is submited!');
        }
        catch(err){
            console.log('Error while sending message', err);
        }
    }

        return(
            <form className="w-full py-7 flex-row items-center">
                <div className="mb-5">
                    <h1 className="text-xl font-bold">Employer or Client?</h1>
                    <p>Leave email and i will contact you shortly</p>
                </div>
                <div className="flex items-center mb-12">
                    <input className="bg-white h-10 border border-gray-500  p-1" placeholder="Your Email. . ." type="text" />
                    <button className="flex btn h-10 btn-neutral btn-sm hover:bg-white hover:text-black items-center gap-1">Send <Send size={14} /></button>
                </div>
            </form>
            
        )
    }
