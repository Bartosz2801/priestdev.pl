"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const ContactPage = () => {

    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);

    const text = "Napisz do mnie";

    const form = useRef();

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
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        <div className='h-full flex flex-col lg:flex-row px-4 pb-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
           {/* TEXT CONTAINER */}
           <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl text-white">
            <div>
            {text.split("").map((letter,index)=>(
                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index*0.1}}>{letter}</motion.span>
            ))}
            </div>
           </div>

           {/* FORM CONTAINER */}
           <form ref={form} onSubmit={sendEmail} className="h-1/2 lg:h-full lg:w-1/2 bg-gray-700/30 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 text-white">
            <span>Treść wiadomości:</span>
            <textarea name="user_message" rows={6} className="bg-transparent border-b-2 border-b-gray-300 outline-none resize-none"/>
            <span>Adres email:</span>
            <input name="user_email" type="text" className="bg-transparent border-b-2 border-b-gray-300 outline-none"/>
            <button className="bg-white p-3 rounded font-semibold text-gray-700">Wyślij</button>
            {success && <span className="bg-green-900 p-1 text-white text-sm text-center">Wiadomość została wysłana!</span>}
            {error && <span className="bg-red-900 p-1 text-white text-sm text-center">Błąd wysyłania wiadomości</span>}
           </form>
        </div>
        </motion.div>
    )
}

export default ContactPage