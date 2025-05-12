"use client"

import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-white py-2 px-4 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link 
            href="mailto:info@kapix.co.cr" 
            target="_blank" 
            className="text-sm text-gray-600 hover:text-[#191e29] flex items-center"
            aria-label="Correo electrónico Kapix"
          >
            <span className="w-5 h-5 mr-2 rounded-full bg-[#191e29]/10 text-[#191e29] inline-flex items-center justify-center">
              <i className="fi fi-rr-envelope text-sm flex items-center justify-center w-full h-full"></i>
            </span>
            <span className="hidden md:inline">info@kapix.co.cr</span>
          </Link>
          <Link 
            href="https://wa.me/50660641906?text=Hola%20me%20gustaría%20obtener%20más%20información%20sobre%20tu%20servicio.🚀" 
            target="_blank" 
            className="text-sm text-gray-600 hover:text-[#191e29] flex items-center"
            aria-label="WhatsApp Kapix"
          >
            <span className="w-5 h-5 mr-2 rounded-full bg-[#191e29]/10 text-[#191e29] inline-flex items-center justify-center">
              <i className="fi fi-rr-phone-call text-sm flex items-center justify-center w-full h-full"></i>
            </span>
            <span className="hidden md:inline">+506 6064-1906</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="https://www.facebook.com/p/KAPIX-61558702651954/" 
            target="_blank" 
            className="text-sm text-gray-600 hover:text-[#191e29] flex items-center"
            aria-label="Facebook Kapix"
          >
            <span className="w-5 h-5 mr-2 rounded-full bg-[#191e29]/10 text-[#191e29] inline-flex items-center justify-center">
              <i className="fi fi-brands-facebook text-sm flex items-center justify-center w-full h-full"></i>
            </span>
          </Link>
          <Link 
            href="https://www.instagram.com/kapixlatam?igsh=eWtwODhhZ3ViOHhk" 
            target="_blank" 
            className="text-sm text-gray-600 hover:text-[#191e29] flex items-center"
            aria-label="Instagram Kapix"
          >
            <span className="w-5 h-5 mr-2 rounded-full bg-[#191e29]/10 text-[#191e29] inline-flex items-center justify-center">
              <i className="fi fi-brands-instagram text-sm flex items-center justify-center w-full h-full"></i>
            </span>
          </Link>
          <Link 
            href="https://www.youtube.com/@Kapix-s6d" 
            target="_blank" 
            className="text-sm text-gray-600 hover:text-[#191e29] flex items-center"
            aria-label="YouTube Kapix"
          >
            <span className="w-5 h-5 mr-2 rounded-full bg-[#191e29]/10 text-[#191e29] inline-flex items-center justify-center">
              <i className="fi fi-brands-youtube text-sm flex items-center justify-center w-full h-full"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

