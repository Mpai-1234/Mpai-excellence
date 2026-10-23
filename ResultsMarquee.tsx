'use client'

const results = [
    "Arjun Singh: 98.4% (CBSE 12th)",
    "Sanya Verma: 97.2% (ICSE 10th)",
    "Rahul Sharma: A+ (Python)",
    "Priya Kaur: 95.0% (PSEB 12th)",
    "Amit Raj: 99/100 (Mathematics)",
    "Ishita: 94.8% (CBSE 10th)",
]

export default function ResultsMarquee() {
    return (
        <div className="bg-slate-900 py-3 overflow-hidden border-y border-slate-800">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Double the list to create a seamless loop */}
                {[...results, ...results].map((text, index) => (
                    <span key={index} className="flex items-center text-white font-bold mx-8">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                        {text}
                    </span>
                ))}
            </div>
        </div>
    )
}