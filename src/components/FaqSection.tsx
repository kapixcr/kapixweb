"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#01c38d] font-medium mb-2 block">PREGUNTAS FRECUENTES</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#191e29] flex items-center justify-center gap-2">
            Todo lo que necesitas
            <span className="text-[#01c38d] relative">
              saber
              <svg className="absolute -bottom-6 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 25 0, 50 10 Q 75 20, 100 10" stroke="#01c38d" strokeWidth="5" fill="none"/>
              </svg>
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#191e29] font-medium">{faq.question}</span>
                    <span className="text-sm text-[#01c38d] bg-[#01c38d]/10 px-2 py-0.5 rounded">Pregunta</span>
                  </div>
                  <div
                    className={`flex-shrink-0 ml-4 transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-[#01c38d]" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}