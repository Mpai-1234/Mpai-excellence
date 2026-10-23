import GalleryGrid from '@/components/UI/GalleryGrid'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PortfolioPage() {
    // These are the real projects you mentioned!
    const excellenceProjects = [
        {
            src: '/projects/aashiyana.png',
            alt: 'Aashiyana Greens',
            title: 'Real Estate Portal',
            link: 'https://aashiyanagreens.com/'
        },
        {
            src: '/projects/capital.png',
            alt: 'Capital Store',
            title: 'E-commerce Platform',
            link: 'https://www.capitalstorecs.com/'
        },
        {
            src: '/projects/divya.png',
            alt: 'Divya Agro Traders',
            title: 'B2B Trading',
            link: 'https://www.divyaagrotraders.com/'
        },
        {
            src: '/projects/wowkids.png',
            alt: 'Wow Kids Worksheets',
            title: 'Ed-Tech Platform',
            link: 'https://www.wowkidsworksheets.in/'
        }
    ]

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="py-20 bg-slate-900 px-6">
                <div className="max-w-6xl mx-auto">
                    <Link href="/services" className="text-amber-400 flex items-center gap-2 mb-8 font-bold">
                        <ArrowLeft size={20} /> Back to Services
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black text-white">
                        Our <span className="text-amber-400">Portfolio</span>
                    </h1>
                    <p className="text-slate-400 text-xl mt-4">
                        Real-world digital solutions built by Excellence Group.
                    </p>
                </div>
            </header>

            {/* The Gallery Section */}
            <section className="py-20">
                <GalleryGrid items={excellenceProjects} />
            </section>
        </main>
    )
}