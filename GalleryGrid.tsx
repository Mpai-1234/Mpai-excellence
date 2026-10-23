'use client'

// 1. Define the "Rules" (Interface)
interface GalleryItem {
    src: string;
    alt: string;
    title: string;
    link?: string; // The '?' means links are optional
}

// 2. Add 'items' to the function so it can receive your project list
export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto py-12">
            {items.map((img, i) => (
                /* 3. Wrap in an <a> tag so it's clickable */
                <a
                    href={img.link || '#'}
                    target={img.link ? "_blank" : undefined}
                    key={i}
                    className="group relative h-80 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                        <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">
                            {img.title}
                        </span>
                        <h3 className="text-white font-black text-2xl">
                            {img.alt}
                        </h3>
                    </div>
                </a>
            ))}
        </div>
    )
}