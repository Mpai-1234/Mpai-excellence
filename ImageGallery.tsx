export default function ImageGallery() {
    const galleryImages = [
        { src: '/award.jpg', title: 'Excellence Awards 2025', size: 'col-span-2 row-span-2' },
        { src: '/classroom.jpg', title: 'Interactive Learning', size: 'col-span-1 row-span-1' },
        { src: '/toppers.jpg', title: 'Our Brightest Stars', size: 'col-span-1 row-span-2' },
        { src: '/computer-lab.jpg', title: 'Modern Tech Lab', size: 'col-span-1 row-span-1' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Life at <span className="text-amber-500">Excellence</span></h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className={`relative group overflow-hidden rounded-3xl ${img.size}`}>
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-bold">{img.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}