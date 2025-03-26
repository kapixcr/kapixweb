"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Image from "next/image"



export default function Footer() {
  return (
    <footer className="w-full bg-white/70 border-t border-gray-200/50 shadow-sm z-50">
      <div className="container mx-auto px-4">
        {/* Main footer content in a single row */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start py-8 gap-8">
          {/* Logo and Contact Info */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center mb-4">
              <Image
                src="/img/Kapix Logo.png"
                alt="Kapix Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            <p className="text-slate-700 text-sm mb-4">
              When An Unknown Printer Took A Galley Of Type Aawer Awtnd Scrambled It To Make A Type Specimen Book.
            </p>

            {/* Contact icons */}
            <div className="flex items-center text-slate-700 mb-2">
              <i className="fi fi-rr-circle-phone-flip mr-2 text-[#01c38d] flex items-center justify-center w-5 h-5"></i>
              <span className="text-sm">+123 888 9999</span>
            </div>

            <div className="flex items-start text-slate-700">
              <i className="fi fi-rr-clock-three mr-2 mt-1 text-[#01c38d] flex items-center justify-center w-5 h-5"></i>
              <div className="text-sm">
                <p>Mon - Sat: 8 Am - 5 Pm,</p>
                <p>Sunday: <span className="text-[#01c38d] font-medium">CLOSED</span></p>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 relative inline-block">
              Menu
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#01c38d]"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Press media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#01c38d]"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  How it's Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-700 hover:text-[#01c38d] transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold text-[#191e29] relative inline-block mb-6">
              Newsletter
              <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d="M0 10 Q 25 0, 50 10 Q 75 20, 100 10"
                  stroke="#01c38d"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </h3>
            <p className="mb-4 text-slate-700 text-sm">
              Sign Up To Privitar's Weekly Newsletter To Get The Latest Updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md border border-gray-200 focus:outline-none focus:border-[#01c38d]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#01c38d] text-white px-8 py-3.5 rounded-r-md font-medium hover:bg-[#01c38d]/90 transition-all shadow-lg shadow-[#01c38d]/30 hover:shadow-xl hover:shadow-[#01c38d]/40 hover:-translate-y-0.5"
              >
                Subscribe
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100/80 inline-flex items-center justify-center text-slate-600 hover:bg-[#01c38d] hover:text-white transition-colors"
              >
                <i className="fi fi-brands-facebook flex items-center justify-center w-full h-full"></i>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100/80 inline-flex items-center justify-center text-slate-600 hover:bg-[#01c38d] hover:text-white transition-colors"
              >
                <i className="fi fi-brands-instagram flex items-center justify-center w-full h-full"></i>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100/80 inline-flex items-center justify-center text-slate-600 hover:bg-[#01c38d] hover:text-white transition-colors"
              >
                <i className="fi fi-brands-whatsapp text-base flex items-center justify-center w-full h-full"></i>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100/80 inline-flex items-center justify-center text-slate-600 hover:bg-[#01c38d] hover:text-white transition-colors"
              >
                <i className="fi fi-brands-youtube text-base flex items-center justify-center w-full h-full"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200/50 py-4 flex justify-between items-center">
          <p className="text-slate-600 text-sm">Copyright © Kapix | All Right Reserved</p>
          <Link href="#" className="w-8 h-8 bg-[#01c38d] text-white inline-flex items-center justify-center rounded-md">
            <i className="fi fi-rr-arrow-up text-base flex items-center justify-center w-full h-full"></i>
          </Link>
        </div>
      </div>
    </footer>
  )
}

