'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2	w-full bg-white z-50">
            <div className="max-w-[1450px] mx-auto px-6 flex items-center justify-between py-4">
                {/* LycheeByte Name */}
                <div className="text-lg font-bold text-black">
                    <a className="flex items-center"href="#home" onClick={() => setIsOpen(false)}>
                        <Image src="/logo_color.png" alt="LycheeByte Logo" width={28} height={28} className="mr-2"/>
                        LycheeByte
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-black">
                    <li><a href="#home" className="hover:text-[#ca2976]">Home</a></li>
                    <li><a href="#competencies" className="hover:text-[#ca2976]">Core Competencies</a></li>
                    <li><a href="#strategies" className="hover:text-[#ca2976]">Development Strategies</a></li>
                    <li><a href="#projects" className="hover:text-[#ca2976]">Projects</a></li>
                    <li><a href="#about" className="hover:text-[#ca2976]">About</a></li>
                    <li><a href="#contact" className="hover:text-[#ca2976]">Contact</a></li>
                </ul>

                {/* Mobile Hamburger Menu */}
                <button
                    className="md:hidden relative w-8 h-6 flex items-center justify-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {/* Top line */}
                    <span className={`absolute h-0.5 bg-black transition-all duration-300 ease-in-out transform origin-center 
                        ${isOpen
                            ? 'w-6 rotate-45 translate-y-0'
                            : 'w-5 -translate-y-2'
                        }`} />

                    {/* Middle line */}
                    <span className={`absolute h-0.5 w-5 bg-black transition-opacity duration-200 ease-in-out transform 
                        ${isOpen
                            ? 'opacity-0'
                            : 'opacity-100 translate-y-0'
                        }`} />

                    {/* Bottom line */}
                    <span className={`absolute h-0.5 bg-black transition-all duration-300 ease-in-out transform origin-center 
                        ${isOpen
                            ? 'w-6 -rotate-45 translate-y-0'
                            : 'w-5 translate-y-2'
                        }`} />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out 
                ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <ul className="flex flex-col gap-4 px-7 pb-4 text-sm font-medium text-black">
                    <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#ca2976]">Home</a></li>
                    <li><a href="#competencies" onClick={() => setIsOpen(false)} className="hover:text-[#ca2976]">Core Competencies</a></li>
                    <li><a href="#strategies" onClick={() => setIsOpen(false)} className="hover:text-[#ca2976]">Development Strategies</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#ca2976]">Projects</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#ca2976]">About</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#ca2976]">Contact</a></li>
                </ul>
            </div>

        </nav>
    );
}