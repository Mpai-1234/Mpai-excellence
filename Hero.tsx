'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link' // Moved import to the top
import { ArrowRight, Zap, GraduationCap } from 'lucide-react'

// Added onJoinClick prop so this component can open your modal
interface HeroProps {
    onJoinClick?: () => void
}

export default function Hero({ onJoinClick }: HeroProps) {
    return (
        <section className="bg-white px-6 py-10">
            {/* Main Hero Container */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-12 items-center rounded-[3.5rem] bg-amber-400 p-12 md:p-20 relative overflow-hidden">

                {/* --- Left Column: Text Content --- */}
                <div className="relative z-10">
                    <span className="flex items-center gap-3 bg-slate-900/10 text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm self-start mb-8 tracking-wide w-fit">
                        <GraduationCap className="text-slate-900" size={18} /> Ludhiana's Trusted Institute
                    </span>

                    <h1 className="text-6xl md:text-7xl font-[950] text-slate-900 leading-[1.05] mb-8 tracking-tighter">
                        Strive for <span className="text-white">Excellence</span>,<br />
                        Success will follow.
                    </h1>

                    <p className="text-slate-900/80 text-xl font-medium max-w-xl mb-12 leading-relaxed">
                        Empowering students with quality education, expert mentorship, and a path to a brighter future.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        {/* Book a Demo - Triggers the popup */}
                        <button
                            onClick={onJoinClick}
                            className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all group active:scale-95 shadow-lg shadow-slate-900/20"
                        >
                            Book a Free Demo <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        {/* CORRECTED: Explore Courses - No button tag inside Link */}
                        <Link
                            href="#courses-section"
                            className="bg-white text-slate-900 px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-lg flex items-center justify-center"
                        >
                            Explore Courses
                        </Link>
                    </div>
                </div>

                {/* --- Right Column: Image Container --- */}
                <div className="relative h-full flex items-end justify-center group/img">
                    <div className="absolute inset-y-8 inset-x-0 bg-white/20 rounded-[4rem] backdrop-blur-sm shadow-inner group-hover/img:scale-105 transition-all duration-500 shadow-amber-300/50" />

                    <div className="relative z-10 h-[500px] w-full mt-auto group-hover/img:-translate-y-4 transition-transform duration-500 ease-out">
                        <Image
                            src="/students/director.png"
                            alt="Excellence Group Lecturer"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-10 -right-5 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-3 z-20 group-hover/img:scale-110 transition-transform shadow-amber-500/10">
                        <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Expert Faculty</p>
                            <p className="text-xs text-slate-500">Ludhiana's Best Mentors</p>
                        </div>
                    </div>
                </div>

                {/* Subtle pattern */}
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-repeat pointer-events-none" />
            </div>
        </section>
    )
}