"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
    {url:'/', title:'Start'},
    {url:'#functions', title:'O aplikacji'},
    {url:'#contact', title:'Kontakt'},
];

const Navbar = () => {
    
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    const topVariants ={
        closed: {
            rotate:0,
        },
        opened: {
            rotate:45,
        }
    }

    const centerVariants ={
        closed: {
            opacity:1,
        },
        opened: {
            opacity:0,
        }
    }

    const bottomVariants ={
        closed: {
            rotate:0,
        },
        opened: {
            rotate:-45,
        }
    }

    const listVariants ={
        closed: {
            x:"100vw",
        },
        opened: {
            x:0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
            }
        }
    }

    const listItemVariants ={
        closed: {
            x:-10,
            opacity:0,
        },
        opened: {
            x:0,
            opacity:1,
        }
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-black text-xl'>
            
            {/* LOGO */}
            <div className='md:hidden lg:flex justify-center'>
                <Link href='/'>
                    <Image src='/logo.png' alt='' width={320} height={113}/>
                </Link>
            </div>

            {/* MENU */}
            {pathName !== '/privacy.html' ? <div className='hidden md:flex gap-8'>
            {links.map(link=>(
                   <NavLink link={link} key={link.title} />
                ))}
            </div> : null }

            {/* RESPONSIVE MENU */}
            {pathName !== '/privacy.html' ? <div className='md:hidden'>
            {/* MENU BUTTON */}
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
            <motion.div
                    variants={topVariants}
                    animate={open ? 'opened' : 'closed'}
                    className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded origin-left`}
                ></motion.div>
                <motion.div
                    variants={centerVariants}
                    animate={open ? 'opened' : 'closed'}
                    className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded`}
                ></motion.div>
                <motion.div
                    variants={bottomVariants}
                    animate={open ? 'opened' : 'closed'}
                    className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded origin-left`}
                ></motion.div>
            </button>
            {/* MENU LIST */}
            {open && (
                <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
                {links.map(link=>(
                    <motion.div variants={listItemVariants} key={link.title}>
                        <Link href={link.url} onClick={(()=>setOpen(false))}>{link.title}</Link>
                    </motion.div> 
                ))}
            </motion.div>
            )}
            
        </div> : null}
        </div>
    )
}

export default Navbar