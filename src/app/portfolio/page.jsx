"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        id: 1,
        color: "from-gray-950 to-gray-900",
        title: "Parafia Wrocław-Kuźniki",
        desc: "Aplikacja mobilna wykonana dla Rzymskokatolickiej Parafii pw. św. Andrzeja Boboli we Wrocławiu.",
        img: "/portfolio/bobola_wroclaw_app.jpeg",
        link:"https://play.google.com/store/apps/details?id=com.bartoszduleba.bobola_wroclaw&hl=pl&gl=US&pli=1",
    },
    {
        id: 2,
        color: "from-gray-900 to-gray-950",
        title: "Kościół Uniwersytecki",
        desc: "Aplikacja mobilna wykonana dla Rzymskokatolickiej Parafii pw. Najświętszego Imienia Jezus we Wrocławiu.",
        img: "/portfolio/bobola_wroclaw_app.jpeg",
        link:"https://play.google.com/store/apps/details?id=com.bartoszduleba.bobola_wroclaw&hl=pl&gl=US&pli=1",
    },
    {
        id: 3,
        color: "from-gray-950 to-gray-900",
        title: "Usus Antiquior",
        desc: "Aplikacja mobilna wykonana dla Duszpasterstwa Tradycji Katolickiej w Szczecinie.",
        img: "/portfolio/bobola_wroclaw_app.jpeg",
        link:"https://play.google.com/store/apps/details?id=com.bartoszduleba.bobola_wroclaw&hl=pl&gl=US&pli=1",
    },
    {
        id: 3,
        color: "from-gray-900 to-gray-950",
        title: "Ars Celebrandi",
        desc: "Aplikacja mobilna wykonana na potrzeby warszatów Ars Celebrandi.",
        img: "/portfolio/bobola_wroclaw_app.jpeg",
        link:"https://play.google.com/store/apps/details?id=com.bartoszduleba.bobola_wroclaw&hl=pl&gl=US&pli=1",
    }
]

const PortfolioPage = () => {

    const portfolioRef = useRef()

    const {scrollYProgress} = useScroll({target:portfolioRef})
    const x = useTransform(scrollYProgress, [0,1],["0%","-80%"])

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        <div className='h-[600vh] relative' ref={portfolioRef}>
            <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-white text-8xl overflow-hidden text-center"> Moje prace</div>
            <div className="sticky top-0 flex h-screen- gap-4 items-center">
                <motion.div style={{ x }} className="flex">
                    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-950"/>
                {items.map(item=>(<div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                    <div className="flex flex-col gap-8 p-20 text-white">
                        <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                        <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                            <Image src={item.img} alt="" fill/>
                        </div>
                        <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
                        <Link href={item.link} className="flex justify-end">
                            <button className="p-4 rounded-lg ring-1 ring-gray-600 text-white bg-gray-600">Zobacz</button>
                        </Link>
                    </div>
                </div>))}
             </motion.div>
            </div>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-8xl">Masz pytania?</h1>
                <div className="relative">
                <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
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
          >Napisz</Link>
                </div>
             </div>
        </motion.div>
    )
}

export default PortfolioPage