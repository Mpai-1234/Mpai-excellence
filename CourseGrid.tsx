'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import CourseCard from './CourseCard'

interface Course {
    id: string | number
    title: string
    description: string
    category: string
    image_url?: string
}

export default function CourseGrid() {
    const [courses, setCourses] = useState<Course[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchCourses() {
            const { data, error } = await supabase.from('courses').select('*')
            if (!error) setCourses(data || [])
            setIsLoading(false)
        }
        fetchCourses()
    }, [])

    if (isLoading) return <div className="text-center py-20 text-slate-400">Loading courses...</div>

    return (
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    category={course.category}
                    icon={course.image_url}
                />
            ))}
        </div>
    )
}