"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import ContactPage from "./contact/page";

const Homepage = () => {

    const containerRef = useRef()
    
    const techRef = useRef()
    const techInView = useInView(techRef, {once: true, margin:"-100px"})

    

  return <motion.div className="h-full" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.3, duration: 1}} ref={containerRef}>
    <div className='h-full flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
    {/* IMAGE CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
      <Image src='/apps.webp' alt='' fill className='object-contain' />
    </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center md:items-start justify-center'>
      {/* TITLE */}
      <h1 className='text-4xl md:text-6xl font-semibold text-center md:text-left text-black'>Wsparcie modlitewne<br/>w zasięgu ręki</h1>
        {/* BUTTONS */}
        <div className='w-full flex flex-col md:flex-row gap-8 items-center'>
          <Image src='/appstore.svg' alt='' width={200} height={90} className='object-contain' />
          <Image src='/googleplay.svg' alt='' width={200} height={90} className='object-contain' />
        </div>
    </div>
  </div>
  <div className="h-screen bg-black" >
  <div id="functions" className="min-h-screen py-20 sm:px-8 md:px-12 lg:px-20 xl:px-48" ref={techRef}>
                    <motion.div initial={{x:'-200vh'}} animate={techInView ? {x:0} : {}} transition={{delay: 0.3, duration: 1}} className="w-full h-full">
                        <motion.div layout className="flex flex-col md:flex-row gap-12">
                        <AnimatePresence>   
                        <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration:0.5}}
                        className="bg-white rounded-xl w-1/3 py-8 px-10 flex flex-col items-center justify-center text-start">
                            
                            <Image src='/pray_ico.png' alt=''  width={70} height={70} className="object-cover"/>
                            
                            <div className="flex flex-col items-center py-2 w-full"><h1 className="text-black text-center text-4xl px-3 py-5 font-medium">Intencje</h1>
                            <p className="text-black leading-6 text-sm py-3">Dodawaj intencje , aby otrzymywać wsparcie modlitewne od użytkowników.
                            Oznaczaj intencje, w których chcesz się modlić i wspieraj innych w modlitwie.
                            </p>
                            </div>
    
                        </motion.div>
                        <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration:0.5}}
                        className="bg-white rounded-xl w-1/3 py-8 px-10 flex flex-col items-center justify-center text-start">
                            
                            <Image src='/eucharist_ico.png' alt=''  width={70} height={70} className="object-cover"/>
                            
                            <div className="flex flex-col items-center py-2 w-full"><h1 className="text-black text-4xl px-3 py-5 text-center font-medium">Adoracja</h1>
                            <p className="text-black leading-6 text-sm py-3">Znajdź miejsca adoracji Najświętszego Sakramentu we Wrocławiu, aby móc oddawać cześć Bogu i modlić się w ciszy i skupieniu.
                            </p>
                            </div>
    
                        </motion.div>
                        <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration:0.5}}
                        className="bg-white rounded-xl w-1/3 py-8 px-10 flex flex-col items-center justify-center text-start">
                            
                            <Image src='/confession_ico.png' alt=''  width={70} height={70} className="object-cover"/>
                            
                            <div className="flex flex-col items-center py-2 w-full"><h1 className="text-black text-4xl px-3 py-5 text-center font-medium">Spowiedź</h1>
                            <p className="text-black leading-6 text-sm py-3">Zlokalizuj miejsca, gdzie funkcjonuje tzw. stały konfesjonał we Wrocławiu, aby móc skorzystać z sakramentu pokuty i pojedniania poza czasem nabożeństw
                            </p>
                            </div>
    
                        </motion.div>
                        </AnimatePresence> 
                    </motion.div>
                      </motion.div>      
            </div>
  </div>
  <ContactPage></ContactPage>
  </motion.div>
};

export default Homepage;
