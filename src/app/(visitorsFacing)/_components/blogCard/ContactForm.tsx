"use client"
import { IsHiddenContext } from "@/app/context/isHiddenContext";
import { db } from "@/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import { Send, X } from "lucide-react";
import { useContext, useState } from "react";


export default function ContactForm(){

    const {isHidden, handleHide} = useContext(IsHiddenContext);
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
            handleHide();
            alert('Your message is submited!');
        }
        catch(err){
            console.log('Error while sending message', err);
        }
    }

    if(isHidden){
        return;
    }

    else{
        return(
            <form onSubmit={handleSubmit} className="w-full flex md:justify-start justify-center">
                <div className="flex-row ">
                    
                    <button onClick={handleHide}
                            className="md:m-0 m-3 hover:text-primary">
                            <X />
                    </button>
    
                    <div className="flex justify-center items-center text-3xl font-bold">
                        <h1 className="md:text-start animate-pulse text-center">Are you a client or employer? Feel free to contact!</h1>
                    </div>
                    
                    <div className="flex md:justify-start justify-center items-center mt-3 mb-5">
                        <input type="email"
                               name="email" 
                               required
                               className="w-[90%] h-10 rounded-md border shadow-md bg-primary"
                               placeholder="Enter your email. . ."
                               onChange={handleChange}
                               
                                />
                    </div>
    
                    <div className="flex md:justify-start justify-center items-center mt-3 mb-5">
                        <textarea className="w-[90%] min-h-20 max-h-20 rounded-md border shadow-md bg-primary "
                                  name="message" 
                                  placeholder="Enter your messasge. . ." 
                                  required
                                  onChange={handleChange}
                                />
                    </div>
    
                    <div className="flex md:justify-start justify-center items-center mt-3 mb-5">
                        <button type="submit" className="btn w-[90%] h-12 btn-active btn-neutral bg-neutral animate-bounce hover:bg-primary hover:text-black btn-sm">Submit <Send size={16} /></button>
                    </div>
                </div>
            </form>
        )
    }

}