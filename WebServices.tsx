'use client'

import React, { useState } from 'react' // Added useState
import {
    Code, Search, ArrowRight, CheckCircle2, Shield,
    Database, Code2, Share2
} from 'lucide-react'
import JoinModal from '@/components/UI/JoinModal' // Ensure this import path is correct

const services = [
    {
        title: "Web Development",
        category: "DEVELOPMENT",
        description: "We engineer high-performance, SEO-optimized Next.js applications designed to convert visitors into customers.",
        icon: <Code className="w-8 h-8 text-amber-400" />,
        features: ["E-commerce Solutions", "Custom Admin Panels", "Cloud Integration"]
    },
    {
        title: "Software Solutions",
        category: "ENTERPRISE",
        description: "Streamline your operations with bespoke software architectures and custom APIs to automate workflows.",
        icon: <Code2 className="w-8 h-8 text-blue-400" />,
        features: ["Custom ERP Systems", "Workflow Automation", "Cloud Architecture"]
    },
    {
        title: "Digital Marketing",
        category: "GROWTH",
        description: "Expand your digital footprint with data-backed brand strategies and multi-channel authority.",
        icon: <Share2 className="w-8 h-8 text-pink-400" />,
        features: ["Brand Strategy", "Email Marketing", "Lead Generation"]
    },
    {
        title: "SEO & Marketing",
        category: "VISIBILITY",
        description: "Dominate search rankings and secure the #1 spot on Google with our technical SEO focus.",
        icon: <Search className="w-8 h-8 text-emerald-400" />,
        features: ["Keyword Research", "On-Page SEO", "Backlinking"]
    },
    {
        title: "Cybersecurity",
        category: "SECURITY",
        description: "Protect your digital assets with military-grade protocols and end-to-end encryption.",
        icon: <Shield className="w-8 h-8 text-red-400" />,
        features: ["Penetration Testing", "Threat Monitoring", "Compliance"]
    },
    {
        title: "Data Science",
        category: "INTELLIGENCE",
        description: "Leverage AI to predict market trends using custom machine learning models.",
        icon: <Database className="w-8 h-8 text-purple-400" />,
        features: ["AI Models", "Data Visualization", "Predictive Analytics"]
    }
];

export default function WebServices() {
    // 1. Initialize the state for the Quote Modal
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <section className="py-24 bg-[#0a0f1c] text-white">
            {/* 2. Add the JoinModal component */}
            <JoinModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                isQuote={true}
            />

            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-amber-400 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
                            Agency Division
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1]">
                            Digital Solutions by <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                                Excellence Group
                            </span>
                        </h2>
                    </div>

                    {/* 3. Connect the Button to the State */}
                    <button
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black hover:bg-amber-400 transition-all flex items-center gap-3 group"
                    >
                        Get a Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative p-10 rounded-[3rem] bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 hover:border-amber-400/30 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
                        >
                            <span className="absolute top-10 right-10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase group-hover:text-amber-400">
                                {service.category}
                            </span>
                            <div className="mb-10 p-5 bg-slate-900 rounded-3xl w-fit group-hover:scale-110 transition-all">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[60px]">
                                {service.description}
                            </p>
                            <ul className="space-y-4 border-t border-slate-700/50 pt-8 mt-auto">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}