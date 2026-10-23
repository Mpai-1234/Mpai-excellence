'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import CourseCard from '@/components/UI/CourseCard'
import Hero from '@/components/UI/Hero'
import ResultsMarquee from '@/components/UI/ResultsMarquee'
import VisionBatch from '@/components/UI/VisionBatch' // Using @ alias for consistency
import WebServices from '@/components/UI/WebServices'
import SuccessStories from '@/components/UI/SuccessStories'
import JoinModal from '@/components/UI/JoinModal'

interface Course {
    id: string | number
    title: string
    description: string
    category: string
    image_url?: string
}

export default function Home() {
    // 1. UI & Data States
    const [activeTab, setActiveTab] = useState('All')
    const [isHeroModalOpen, setIsHeroModalOpen] = useState(false)
    const [courses, setCourses] = useState<Course[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const departments = ['All', 'Academic', 'Language', 'Computer Centre']

    // 2. Fetch Courses from Supabase based on Active Tab
    useEffect(() => {
        async function fetchCourses() {
            setIsLoading(true)
            try {
                let query = supabase.from('courses').select('*')

                if (activeTab !== 'All') {
                    query = query.eq('category', activeTab)
                }

                const { data, error } = await query
                if (error) throw error
                setCourses(data || [])
            } catch (error) {
                console.error('Error fetching courses:', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCourses()
    }, [activeTab])

    return (
        <main className="min-h-screen bg-white">
            {/* Modal triggered by Hero and VisionBatch buttons */}
            {isHeroModalOpen && (
                <JoinModal onClose={() => setIsHeroModalOpen(false)} />
            )}

            {/* 1. Announcements Marquee */}
            <ResultsMarquee />

            {/* 2. Hero Section */}
            <Hero onJoinClick={() => setIsHeroModalOpen(true)} />

            {/* 3. Wall of Fame / Success Stories */}
            <SuccessStories />

            {/* 4. Course Catalog Section */}
            <section id="courses-section" className="max-w-6xl mx-auto py-24 px-6">
                <header className="text-center mb-12">
                    <span className="text-amber-600 font-black text-[10px] tracking-[0.3em] uppercase">
                        Our Departments
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[900] mb-4 text-slate-900 tracking-tight mt-2">
                        Choose Your <span className="text-amber-500">Path</span>
                    </h2>
                </header>

                {/* Tab Navigation */}
                <nav className="flex flex-wrap justify-center gap-3 mb-16">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setActiveTab(dept)}
                            className={`px-6 md:px-8 py-3 rounded-2xl font-bold transition-all duration-300 text-sm md:text-base ${activeTab === dept
                                ? 'bg-slate-900 text-white shadow-xl scale-105'
                                : 'bg-slate-50 text-slate-500 hover:bg-amber-50 hover:text-amber-600'
                                }`}
                        >
                            {dept}
                        </button>
                    ))}
                </nav>

                {/* Courses Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[400px] bg-slate-50 animate-pulse rounded-[2.5rem]"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {courses.length > 0 ? (
                            courses.map((course) => (
                                <div key={course.id} className="px-2 md:px-0">
                                    <CourseCard
                                        id={course.id}
                                        title={course.title}
                                        description={course.description}
                                        category={course.category}
                                        icon={course.image_url}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-slate-400">
                                No courses found in this category.
                            </div>
                        )}
                    </div>
                )}
            </section>

            {/* 5. Additional Services */}
            <WebServices />

            {/* 6. Social Mission / Vision - CORRECTED PROP PASSING */}
            <VisionBatch onJoinClick={() => setIsHeroModalOpen(true)} />
        </main>
    )
}