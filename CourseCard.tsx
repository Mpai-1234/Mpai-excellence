'use client'

import React from 'react'
import { BookOpen, Languages, Monitor, GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// 1. Map categories to Lucide icons
const iconMap = {
    'Academic': <GraduationCap className="w-6 h-6" />,
    'Language': <Languages className="w-6 h-6" />,
    'Computer Centre': <Monitor className="w-6 h-6" />,
    'Default': <BookOpen className="w-6 h-6" />
}

interface CourseProps {
    id: string | number // Added ID for dynamic routing
    title: string
    description: string
    category: string
    icon?: string
}

export default function CourseCard({ id, title, description, category, icon }: CourseProps) {
    const displayIcon = iconMap[category as keyof typeof iconMap] || iconMap['Default']

    return (
        <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">

            {/* Icon Container */}
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors duration-300 shadow-inner">
                {icon ? (
                    <img src={icon} alt={title} className="w-10 h-10 object-contain" />
                ) : (
                    <div className="text-slate-600 group-hover:text-slate-900 transition-colors">
                        {displayIcon}
                    </div>
                )}
            </div>

            {/* Category Tag */}
            <span className="text-amber-600 font-black text-[10px] tracking-[0.2em] uppercase mb-3">
                {category}
            </span>

            {/* Content */}
            <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {title}
            </h3>

            {/* Responsive Description Polish */}
            <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow line-clamp-3 md:line-clamp-none">
                {description}
            </p>

            {/* Action Link - Linked to the Dynamic Syllabus Page */}
            <Link href={`/tuitions/${id}`} className="flex items-center gap-2 text-blue-600 font-bold group/btn self-start">
                <span className="border-b-2 border-transparent group-hover/btn:border-blue-600 transition-all">
                    View Syllabus
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
            </Link>
        </div>
    )
}