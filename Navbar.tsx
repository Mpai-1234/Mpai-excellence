'use client'

import Link from 'next/link'
import Image from 'next/image' // Added this import
import { useState } from 'react'

// Receive onJoinClick as a prop from the parent (page.jsx)
interface NavbarProps {
    onJoinClick: () => void
}

export default function Navbar({ onJoinClick }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Tuitions', href: '/tuitions' },
        { name: 'Web Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-50">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative z-[60] bg-white">

                {/* --- LOGO SECTION --- */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Replaced the div-based "E" with the actual Image logo */}
                    <div className="relative w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Image
                            src="/students/logo.png"
                            alt="Excellence Group Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-lg font-[900] tracking-tight text-slate-900 leading-tight uppercase">
                            Excellence <span className="text-amber-500">Group</span>
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="h-[1px] w-4 bg-amber-400"></span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-nowrap">
                                Institute of Success
                            </span>
                        </div>
                    </div>
                </Link>

                {/* --- DESKTOP NAVIGATION --- */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-slate-600 hover:text-amber-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={onJoinClick}
                        className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-md"
                    >
                        Join Now
                    </button>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    className="md:hidden text-slate-900 p-2"
                    aria-label="Toggle Menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>

            {/* --- POLISHED MOBILE MENU --- */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute top-20 left-0 right-0 bg-white border-t border-slate-100 p-8 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300 z-50 md:hidden shadow-2xl rounded-b-[3rem]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-black text-slate-900 active:text-amber-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="h-[1px] bg-slate-100 my-2" />

                        <button
                            onClick={() => {
                                setIsOpen(false);
                                onJoinClick();
                            }}
                            className="bg-slate-900 text-white w-full py-5 rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 active:scale-95 transition-all"
                        >
                            Join Now
                        </button>
                    </div>
                </>
            )}
        </nav>
    )
}