"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import NavLink from "./navLink";

const links = [
    {url:'/', title:'Start'},
    {url:'/about', title:'O mnie'},
    {url:'/portfolio', title:'Portfolio'},
    {url:'/contact', title:'Kontakt'},
];

const Navbar = () => {
    
    const [open, setOpen] = useState(false)

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-white text-xl'>
            
            {/* LOGO */}
            <div className='md:hidden lg:flex justify-center'>
                <Link href='/'>
                    <Image src='/logo.svg' alt='' width={280} height={106}/>
                </Link>
            </div>

            {/* MENU */}
            <div className='hidden md:flex gap-4'>
            {links.map(link=>(
                    <NavLink link={link} key={link.title} />
                ))}
            </div>

            {/* RESPONSIVE MENU */}
            <div className='md:hidden'>
            {/* MENU BUTTON */}
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                <div className='w-10 h-1 bg-white rounded'></div>
                <div className='w-10 h-1 bg-white rounded'></div>
                <div className='w-10 h-1 bg-white rounded'></div>
            </button>
            {/* MENU LIST */}
            {open && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-4 text-xl'>
                {links.map(link=>(
                    <Link href={link.url} key={link.title}>{link.title}</Link>
                ))}
            </div>
            )}
            
        </div>
        </div>
    )
}

export default Navbar