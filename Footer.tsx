'use client'

import React from 'react'
import Link from 'next/link'
import {
    Instagram,
    Facebook,
    Youtube,
    MapPin,
    Phone,
    Mail
} from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16 px-6 border-t border-slate-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-black tracking-tight">
                        Excellence <span className="text-amber-400">Group</span>
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Empowering students in Ludhiana with quality education and professional skill development since 2020.
                    </p>

                    {/* Social Icons with brand-specific hover colors */}
                    <div className="flex gap-5">
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <Instagram className="w-5 h-5 text-slate-400 hover:text-pink-500 transition-all transform hover:-translate-y-1" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <Facebook className="w-5 h-5 text-slate-400 hover:text-blue-500 transition-all transform hover:-translate-y-1" />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                            <Youtube className="w-5 h-5 text-slate-400 hover:text-red-500 transition-all transform hover:-translate-y-1" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul className="text-slate-400 text-sm space-y-3">
                        <li><Link href="/about" className="hover:text-amber-400 transition-colors">Vision Batch</Link></li>
                        <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Admission 2026</Link></li>
                        <li><Link href="/results" className="hover:text-amber-400 transition-colors">Student Results</Link></li>
                        <li><Link href="/services" className="hover:text-amber-400 transition-colors">Web Services</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
                    <div className="space-y-5 text-sm text-slate-400">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                            <span className="leading-relaxed">Main Branch, Near Bus Stand, Ludhiana, Punjab - 141001</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                            <span className="hover:text-white transition-colors cursor-pointer">+91 98XXX-XXXXX</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                            <span className="hover:text-white transition-colors cursor-pointer">info@excellencegroup.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
                <p>© {new Date().getFullYear()} Excellence Group of Institutes. All rights reserved.</p>
            </div>
        </footer>
    )
}