"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";


const ContactPage = () => {

    
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);

    const text = "Zadaj pytanie";

    const form = useRef();

    const formView = useRef();

    const formInView = useInView(formView, {once: true, margin:"-100px"})

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
    
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            () => {
              setSuccess(true);
              form.current.reset();
            },
            () => {
              setError(true);
            }
          );
      };

    return (
        <div className="h-screen py-12 md:py-24 bg-gradient-to-b from-white to-gray-200" ref={formView}>
        <motion.div id='contact' initial={{opacity:0}} animate={formInView ? {opacity:1} : {}} transition={{delay: 0.5, duration: 1}} className='h-full flex flex-col lg:flex-row px-4 pb-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
           {/* TEXT CONTAINER */}
           <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-6xl text-black">
            <div>
            {text.split("").map((letter,index)=>(
                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index*0.1}}>{letter}</motion.span>
            ))}
            </div>
           </div>

           {/* FORM CONTAINER */}
           <form ref={form} onSubmit={sendEmail} className="h-2/3 lg:h-full lg:w-1/2 bg-white drop-shadow-2xl rounded-xl text-xl flex flex-col gap-8 justify-center p-12 text-black">
            <span>Treść wiadomości:</span>
            <textarea name="user_message" rows={6} className="bg-transparent border-b-2 border-b-gray-300 outline-none resize-none"/>
            <span>Adres email:</span>
            <input name="user_email" type="text" className="bg-transparent border-b-2 border-b-gray-300 outline-none"/>
            <button className="bg-black p-3 rounded-md font-medium text-white">Wyślij</button>
            {success && <span className="bg-green-900 p-1 text-white text-sm text-center">Wiadomość została wysłana!</span>}
            {error && <span className="bg-red-900 p-1 text-white text-sm text-center">Błąd wysyłania wiadomości</span>}
            <Link href='/privacy.html' className="text-sm text-center text-red-900">Polityka prywatności aplikacji</Link>
           </form>
           
           
        </motion.div>
        
        </div>
    )
}
3
export default ContactPage
