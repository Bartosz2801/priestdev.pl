"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"

const Homepage = () => {
  return <motion.div className="h-full" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.3, duration: 1}}>
    <div className='h-full flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
    {/* IMAGE CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
      <Image src='/apps.webp' alt='' fill className='object-contain' />
    </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
      {/* TITLE */}
      <h1 className='text-4xl md:text-6xl font-bold text-white'>Aplikacje mobilne oraz strony internetowe dla parafii</h1>

        {/* BUTTONS */}
        <div className='w-full flex gap-4'>
          <Link href="/portfolio"><button className="p-4 rounded-lg  text-white bg-gray-600">Zobacz więcej</button></Link>
          <Link href="/contact"><button className="p-4 rounded-lg ring-1 ring-white ring-inset text-white">Napisz do mnie</button></Link>
        </div>
    </div>
  </div>
  </motion.div>
};

export default Homepage;
