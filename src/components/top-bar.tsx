"use client"

import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-white py-2 px-4 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="mailto:info@company.com" className="text-sm text-gray-600 hover:text-[#01c38d] flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
              <i className="fi fi-rr-envelope text-sm flex items-center justify-center w-full h-full"></i>
            </span>
            <span className="hidden md:inline">info@company.com</span>
          </Link>
          <Link href="tel:+123456789" className="text-sm text-gray-600 hover:text-[#01c38d] flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
              <i className="fi fi-rr-phone-call text-sm flex items-center justify-center w-full h-full"></i>
            </span>
            <span className="hidden md:inline">+123 456 789</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm text-gray-600 hover:text-[#01c38d] flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
              <i className="fi fi-brands-facebook text-sm flex items-center justify-center w-full h-full"></i>
            </span>
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-[#01c38d] flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
              <i className="fi fi-brands-twitter text-sm flex items-center justify-center w-full h-full"></i>
            </span>
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-[#01c38d] flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
              <i className="fi fi-brands-instagram text-sm flex items-center justify-center w-full h-full"></i>
            </span>
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-[#01c38d] flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-[#01c38d]/10 text-[#01c38d] inline-flex items-center justify-center">
              <i className="fi fi-brands-linkedin text-sm flex items-center justify-center w-full h-full"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

