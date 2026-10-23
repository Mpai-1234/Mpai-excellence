'use client'

import React from 'react'
import { Heart, ArrowRight, Play, Users } from 'lucide-react'

interface VisionBatchProps {
    onJoinClick?: () => void; // Prop to trigger the global JoinModal
}

export default function VisionBatch({ onJoinClick }: VisionBatchProps) {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">

                    {/* Content Side */}
                    <div className="p-12 md:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                            <Heart className="w-4 h-4 fill-amber-700" /> Our Social Mission
                        </div>

                        <h2 className="text-4xl font-[900] text-slate-900 mb-6 leading-tight">
                            The <span className="text-amber-500 underline decoration-slate-200 underline-offset-8">Vision Batch</span>
                        </h2>

                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            Empowering underprivileged students through <span className="text-slate-900 font-bold">free, high-quality education</span>.
                            We believe financial barriers should never stop a bright mind from reaching their potential.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-slate-900">100%</span>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Scholarship</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-slate-900">500+</span>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Students</span>
                            </div>
                        </div>

                        {/* CORRECTED INTERACTIVE BUTTON */}
                        <button
                            onClick={onJoinClick}
                            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-amber-500 hover:text-slate-900 transition-all active:scale-95 w-fit group shadow-lg shadow-slate-200"
                        >
                            Learn More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    {/* Image Side */}
                    <div className="md:w-1/2 bg-slate-200 relative min-h-[500px] overflow-hidden group/image">
                        {/* Placeholder Pulse */}
                        <div className="absolute inset-0 bg-slate-300 animate-pulse" />

                        <img
                            src="/students/vision-batch.png"
                            alt="Excellence Group Students"
                            className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover/image:scale-110"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                        />

                        {/* Floating Stats Badge */}
                        <div className="absolute top-8 right-8 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 transform transition-transform duration-500 group-hover/image:-translate-y-2">
                            <div className="flex items-center gap-3">
                                <div className="bg-amber-500 p-2 rounded-lg">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Joined Today</p>
                                    <p className="text-sm font-black text-slate-900">+12 Students</p>
                                </div>
                            </div>
                        </div>

                        {/* Gradient Overlay & Quote */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-20 flex flex-col justify-end p-10">
                            <p className="text-white text-xl font-medium italic leading-relaxed mb-2">
                                "Education is the most powerful weapon which you can use to change the world."
                            </p>
                            <p className="text-amber-400 text-sm font-bold uppercase tracking-widest">— Nelson Mandela</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}