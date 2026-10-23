'use client'

import { useState } from 'react'
import Navbar from './Navbar'
import JoinModal from './JoinModal'

export default function ClientLayoutWrapper({
    children
}: {
    children: React.ReactNode
}) {
    // Global state for the Join Now modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* 1. Navbar is global. The prop allows any page to open the modal */}
            <Navbar onJoinClick={() => setIsModalOpen(true)} />

            {/* 2. Render children directly. 
               The <main> tag should stay in layout.tsx to avoid 
               double-nesting or CSS conflicts.
            */}
            {children}

            {/* 3. Global Modal logic */}
            {isModalOpen && (
                <JoinModal onClose={() => setIsModalOpen(false)} />
            )}
        </>
    )
}