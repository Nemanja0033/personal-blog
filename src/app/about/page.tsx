import { about } from "@/utils/about";
import { Link } from "lucide-react";

export default function About() {
    const aboutData = about;

    return (
        <div className="md:flex flex-row justify-start h-full w-full border-r ">
            <div className="flex justify-self-center w-1/4 mt-12 md:ml-12">
                <div className="flex justify-center">
                    <div className="flex-row">
                        <a className="flex items-center" href="#about"><Link size={12} />About Me</a>
                        <br />
                        <a className="flex items-center" href="#certifications"><Link size={12} />Education & Certifications</a>
                        <br />
                        <a className="flex items-center" href="#contact"><Link size={12} />Contact Me</a>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full mt-12 border-l border-gray-700">
                <h1 className="text-center font-bold text-2xl mt-6" id="about">About Me</h1>
                <div className="flex justify-center p-6">
                    <p>{aboutData.aboutMe}</p>
                </div>
                <h1 className="text-center font-bold text-2xl mt-6" id="certifications">Education & Certifications</h1>
                <div className="flex justify-center p-6">
                    <div>
                        <h2 className="font-bold text-xl">{aboutData.certificate1.name}</h2>
                        <p>{aboutData.certificate1.text}</p>
                        <a href={aboutData.certificate1.link} target="_blank" className="text-blue-500">View Certificate</a>
                        <br /><br />
                        <h2 className="font-bold text-xl">{aboutData.certificate2.name}</h2>
                        <p>{aboutData.certificate2.text}</p>
                        <a href={aboutData.certificate2.link} target="_blank" className="text-blue-500">View Certificate</a>
                    </div>
                </div>
                <h1 className="text-center font-bold text-2xl mt-6" id="contact">Contact Me</h1>
                <div className="flex justify-center p-6">
                    <div>
                        <p className="font-bold">Email: <a href={`mailto:${aboutData.contact.email}`} className="text-blue-500">{aboutData.contact.email}</a></p>
                        <br />
                        <p className="font-bold">LinkedIn: <a href={aboutData.contact.linkedin} target="_blank" className="text-blue-500">View Profile</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
