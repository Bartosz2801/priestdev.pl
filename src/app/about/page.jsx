"use client";
import AppDev from "@/components/appdev";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {

    const containerRef = useRef()

    const {scrollYProgress} = useScroll({container:containerRef})
    
    const techRef = useRef()
    const techInView = useInView(techRef, {once: true, margin:"-100px"})

    const aboutRef = useRef()
    const aboutInView = useInView(aboutRef, {once: true, margin:"-100px"})

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>

        {/* CONTAINER */}    
        <div className='h-full overflow-auto lg:flex' ref={containerRef}>
            {/* TEXT CONTAINER */}
            <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3  lg:pr-0 xl:1/2 text-white'>
                {/* BIOGRAPCHY CONTAINER */}
                <div className='flex flex-col gap-10 justify-center'>
                    {/* BIOGRAPCHY TEXT */}
                    <h1 className="font-bold text-2xl">KS. BARTOSZ DULĘBA</h1>
                    <p className="text-lg">Kapłan Archidiecezji Wrocławskiej. Duszpasterz, ale też pasjonat programowania.</p>
                    <p className="text-lg italic">Jestem przekonany, iż nie mozna ignorować faktu, że w dzisiejszym świecie technologia odgrywa ogromną rolę, 
                        dlatego proponuję stworzenie zarówno strony internetowej, promującej wydarzenia parafialne, jak również aplikacji mobilnej, która umożliwia utrzymywanie łączności z parafią przy pomocy smartfona, zarówno z systemem Android, jak i iOS.</p>
                        {/* BIOGRAPCHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#FFFFFF"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#FFFFFF"
                                strokeWidth="1"
                            ></path>
                            </motion.svg>

                </div>
                    

                {/* TECHNOLOGIES CONTAINER */}
                <div id="tech" className='flex flex-col gap-12 justify-center' ref={techRef}>
                    {/* TECHNOLOGIES TEXT */}
                    <motion.h1 initial={{x:'-100vh'}} animate={techInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">NARZĘDZIA</motion.h1>
                    {/* TECHNOLOGIES LIST */}
                    <motion.div initial={{x:'-100vh'}} animate={techInView ? {x:0} : {}} className='flex gap-4 flex-wrap'>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>Flutter</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>HTML</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>CSS</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>PHP</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>Wordpress</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>Strapi</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>Next.js</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>JavaScript</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>Bootstrap CSS</div>
                        <div className='rounded p-2 text-sm cursor-pointer bg-gray-600 hover:bg-white hover:text-black'>Tailwind CSS</div>
                    </motion.div>
                    {/* TECHNOLOGIES SCROLL SVG */}
                    <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#FFFFFF"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#FFFFFF"
                                strokeWidth="1"
                            ></path>
                            </motion.svg> 
                </div>

                {/* ABOUT ME CONTAINER */}
                <div id="times" className='flex flex-col gap-12 justify-center pb-48' ref={aboutRef}>
                    {/* ABOUT ME TEXT */}
                    <motion.h1 initial={{x:'-100vh'}} animate={aboutInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">MIEJSCA POSŁUGI</motion.h1>
                    {/* ABOUT ME TIMELINE */}
                    <motion.div initial={{x:'-100vh'}} animate={aboutInView ? {x:0} : {}} className=''>
                       {/* TIMELINE ITEM */}
                       <div className='flex justify-between h-48'>
                        {/* LEFT */}
                        <div className='w-1/3'>
                            {/* TITLE */}
                            <div className='bg-gray-600 p-3 font-semibold rounded-b-lg rounded-s-lg'>Parafia św. Andrzeja Boboli we&nbsp;Wrocławiu</div>
                            {/* SUBTITLE */}
                            <div className='p-3 text-sm italic'>Wikariusz</div>
                            {/* DATE */}
                            <div className='p-3 text-sm font-semibold'>2021 - obecnie</div>
                        </div>
                        {/* CENTER */}
                        <div className='w-1/6 flex justify-center'>
                            {/* LINE */}
                            <div className='w-1 h-full bg-gray-400 relative'>
                                {/* CIRCLE */}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-300 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className='w-1/3'></div>
                        </div>

                        {/* TIMELINE ITEM */}
                       <div className='flex justify-between h-48'>
                        {/* LEFT */}
                        <div className='w-1/3'>
                            
                        </div>
                        {/* CENTER */}
                        <div className='w-1/6 flex justify-center'>
                            {/* LINE */}
                            <div className='w-1 h-full bg-gray-400 relative'>
                                {/* CIRCLE */}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-300 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className='w-1/3'>
                            {/* TITLE */}
                            <div className='bg-gray-600 p-3 font-semibold rounded-b-lg rounded-e-lg'>Parafia św. Józefa Oblubieńca NMP w&nbsp;Lutyni</div>
                            {/* SUBTITLE */}
                            <div className='p-3 text-sm italic'>Wikariusz</div>
                            {/* DATE */}
                            <div className='p-3 text-sm font-semibold'>2020 - 2021</div>
                        </div>
                        </div>

                        {/* TIMELINE ITEM */}
                       <div className='flex justify-between h-48'>
                        {/* LEFT */}
                        <div className='w-1/3'>
                            {/* TITLE */}
                            <div className='bg-gray-600 p-3 font-semibold rounded-b-lg rounded-s-lg'>Parafia św. Franciszka z Asyżu we&nbsp;Wrocławiu</div>
                            {/* SUBTITLE */}
                            <div className='p-3 text-sm italic'>Wikariusz i kapelan USK</div>
                            {/* DATE */}
                            <div className='p-3 text-sm font-semibold'>2016 - 2020</div>
                        </div>
                        {/* CENTER */}
                        <div className='w-1/6 flex justify-center'>
                            {/* LINE */}
                            <div className='w-1 h-full bg-gray-400 relative'>
                                {/* CIRCLE */}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-300 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className='w-1/3'></div>
                        </div>

                        {/* TIMELINE ITEM */}
                       <div className='flex justify-between h-48'>
                        {/* LEFT */}
                        <div className='w-1/3'>
                            
                        </div>
                        {/* CENTER */}
                        <div className='w-1/6 flex justify-center'>
                            {/* LINE */}
                            <div className='w-1 h-full bg-gray-400 relative'>
                                {/* CIRCLE */}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-300 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className='w-1/3'>
                            {/* TITLE */}
                            <div className='bg-gray-600 p-3 font-semibold rounded-b-lg rounded-e-lg'>Parafia św. Wawrzyńca w&nbsp;Wołowie</div>
                            {/* SUBTITLE */}
                            <div className='p-3 text-sm italic'>Wikariusz</div>
                            {/* DATE */}
                            <div className='p-3 text-sm font-semibold'>2014 - 2016</div>
                        </div>
                        </div>

                        {/* TIMELINE ITEM */}
                       <div className='flex justify-between h-48'>
                        {/* LEFT */}
                        <div className='w-1/3'>
                            {/* TITLE */}
                            <div className='bg-gray-600 p-3 font-semibold rounded-b-lg rounded-s-lg'>Parafia Podwyższenia Krzyża Świętego w&nbsp;Strzelinie</div>
                            {/* SUBTITLE */}
                            <div className='p-3 text-sm italic'>Wikariusz</div>
                            {/* DATE */}
                            <div className='p-3 text-sm font-semibold'>2013 - 2014</div>
                        </div>
                        {/* CENTER */}
                        <div className='w-1/6 flex justify-center'>
                            {/* LINE */}
                            <div className='w-1 h-full bg-gray-400 relative'>
                                {/* CIRCLE */}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-300 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className='w-1/3'></div>
                        </div>  
                    </motion.div>
                </div>
            </div>
            {/* SVG CONTAINER */}
            <div className='hidden lg:block w-1/3 xl:1/2 z-30 sticky top-20'>
            <AppDev scrollYProgress={scrollYProgress}/>
            </div>       
        </div>   
             
        </motion.div>
    )
}

export default AboutPage