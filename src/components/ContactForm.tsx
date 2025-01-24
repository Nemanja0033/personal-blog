import { Send } from "lucide-react";


export default function ContactForm(){
    return(
        <div className="w-full flex justify-start mt-20">
            <div className="flex-row ">
                <div className="flex justify-center items-center text-3xl font-bold">
                    <h1>Are you a client or employer? Feel free to contact!</h1>
                </div>
                
                <div className="flex justify-start items-center mt-3 mb-5">
                    <input type="text" 
                           className="w-[90%] h-10 rounded-md border shadow-md bg-primary"
                           placeholder="Enter your email. . ." 
                            />
                </div>

                <div className="flex justify-start items-center mt-3 mb-5">
                    <textarea className="w-[90%] h-20 rounded-md border shadow-md bg-primary "
                                placeholder="Enter your messasge. . ." 
                                />
                </div>

                <div className="flex justify-start items-center mt-3 mb-5">
                    <button className="btn w-[90%] h-12 btn-active btn-neutral bg-neutral hover:text-white btn-sm">Submit <Send size={16} /></button>
                </div>
            </div>
        </div>
    )
}