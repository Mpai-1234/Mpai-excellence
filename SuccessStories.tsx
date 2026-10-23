'use client'

import React from 'react'
import { Award, Star, Quote } from 'lucide-react'

const toppers = [
    {
        name: "Sukhman Preet",
        score: "98.4%",
        stream: "CBSE Class 12",
        image: "students/sanya-verma.png", // Ensure these images exist in your public/gallery folder
        achievement: "District Topper",
        color: "bg-amber-500"
    },
    {
        name: "Arjun Singh",
        score: "95.0%",
        stream: "ICSE Class 10",
        image: "/students/arjun-singh.png",
        achievement: "School Rank 1",
        color: "bg-blue-600"
    },
    {
        name: "Riya Sharma",
        score: "8.5 Band",
        stream: "IELTS Academic",
        image: "/students/rahul-sharma.png",
        achievement: "First Attempt",
        color: "bg-purple-600"
    }
]

export default function SuccessStories() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">
                        <Award className="w-4 h-4 text-amber-500" /> Wall of Fame
                    </div>
                    <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight">
                        Real Results. <span className="text-amber-500">Real Success.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {toppers.map((student, idx) => (
                        <div key={idx} className="group relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            {/* Image Container */}
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <div className={`absolute inset-0 ${student.color} opacity-10 group-hover:opacity-0 transition-opacity z-10`} />
                                <img
                                    src={student.image}
                                    alt={student.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1523240715181-2f0f9f225839?q=80&w=1000" }}
                                />

                                {/* Score Badge */}
                                <div className="absolute top-6 right-6 z-20">
                                    <div className={`${student.color} text-white px-4 py-2 rounded-2xl font-black text-xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
                                        {student.score}
                                    </div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="p-8 bg-white relative z-20 -mt-12 rounded-t-[2.5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">{student.name}</h3>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">{student.stream}</p>
                                    </div>
                                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                                </div>
                                <div className="mt-4 flex items-center gap-2 text-slate-600 font-medium italic">
                                    <Quote className="w-4 h-4 text-slate-300" />
                                    <span>"Excellence Group changed my life!"</span>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-black text-amber-600 uppercase tracking-widest">
                                    {student.achievement}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}