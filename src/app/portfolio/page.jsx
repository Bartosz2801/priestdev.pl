"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { MdFilterListOff } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";

const getData = async (url) => {
        const res = await fetch(url);

        const data = await res.json();

        if (!res.ok) {
            const error = new Error(data.message);
            throw error;
        }

        return data;
  };

const PortfolioPage = () => {

    const { data } = useSWR(
        'http://localhost:3000/api/portfolio',
        getData
      );

    const [activeFilter, setActiveFilter] = useState("All");

    const filteredData = data?.filter(item => {
        if (activeFilter === "All") return true;
        return item.category === activeFilter;
    });

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            {/* CONTAINER */}
            <div className="h-full relative">
                {/* TITLE CONTAINER */}
                <div className="h-[calc(100vh-6rem)] overflow-hidden flex flex-col gap-16 items-center justify-center text-white leading-tight text-6xl text-center">
                    Dotychczas wykonane<br/>
                    strony i aplikacje
                    {/* SCROLL SVG */}
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
                     {/* ITEMS CONTAINER */}
            <div id="items" className="min-h-screen bg-gray-950 py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                    {/* FILTER BUTTONS */}
                <motion.div initial={{x:'-200vh'}} animate={{x:0}} layout transition={{delay:1}} className="flex justify-center w-1/3 mx-auto rounded-xl items-center text-center bg-gray-600/20 gap-4 mb-8">
                    <div className="w-1/3"><button
                        onClick={() => handleFilterClick("All")}
                        className={`filter-btn ${activeFilter === "All" && "active bg-white text-gray-950 "} text-white w-full flex items-center justify-center rounded-xl text-sm font-medium py-3 px-4 `}
                    >
                        <span className="hidden lg:block">Wszystko</span>
                        <MdFilterListOff className="lg:hidden"/>
                    </button></div>
                    <div className="w-1/3"><button
                        onClick={() => handleFilterClick("Strona WWW")}
                        className={`filter-btn ${activeFilter === "Strona WWW" && "active bg-white text-gray-950"} text-white w-full flex items-center justify-center rounded-xl text-sm font-medium py-3 px-4`}
                    >
                        <span className="hidden lg:block">WWW</span>
                        <TbWorldWww className="lg:hidden"/>
                    </button></div>
                    <div className="w-1/3"><button
                        onClick={() => handleFilterClick("Aplikacja mobilna")}
                        className={`filter-btn ${activeFilter === "Aplikacja mobilna" && "active bg-white text-gray-950"} text-white w-full  flex items-center justify-center rounded-xl text-sm font-medium py-3 px-4`}
                    >
                       <span className="hidden lg:block">Aplikacje</span>
                        <FaMobileAlt className="lg:hidden"/>
                    </button></div>
                </motion.div>
                    <motion.div initial={{x:'-200vh'}} animate={{x:0}} transition={{delay:1}} className="w-full h-full">
                        <motion.div layout className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredData?.map((item, index) => (
                        <AnimatePresence key={index}>   
                        <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration:0.5}} key={item.id}
                        className="bg-gray-600/20 hover:bg-gray-600/30 rounded-xl flex flex-col items-start justify-start text-start">
                            <div className="w-full h-full relative rounded-t-xl">
                            <img src={item.image} alt={item.title} className="rounded-t-xl object-cover"/>
                            </div>
                            <div className="flex flex-col w-full"><h1 className="text-white text-xl px-3 py-2 font-medium">{item.title}</h1>
                            </div>
                            <div className="flex justify-between items-center w-full"><p className="text-white text-sm py-2 px-3">{item.category}</p>
                            <Link href={item.link} target="new" className="text-blue-500 text-sm px-3 py-2 items-end">
                                <button className="text-white rounded-lg bg-blue-400/30 text-md py-1 px-3">Zobacz</button>
                            </Link>
                            </div>
    
                        </motion.div>
                        </AnimatePresence> 
                              ))}      
                    </motion.div>
                      </motion.div>      
            </div>
                                
            {/* CONTACT CONTAINER */}
            <div className="h-screen flex flex-col gap-16 items-center justify-center text-center">
                <motion.h1 initial={{x:'-200vh'}} animate={{x:0}} transition={{delay:1}} className="text-8xl">Masz pytania?</motion.h1>
                <motion.div initial={{x:'-200vh'}} animate={{x:0}} transition={{delay:1}} className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px]"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Ks. Bartosz Dulęba
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Napisz
                    </Link>
                </motion.div>
            </div>
            
            </div>

           
        </motion.div>
    )
}

export default PortfolioPage
