"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Paul Trueman",
    position: "Head Chef",
    image: "/team/chef1.jpg"
  },
  {
    name: "Emma Newman",
    position: "Senior Chef",
    image: "/team/chef2.jpg"
  },
  {
    name: "Oscar Oldman",
    position: "Chef de Partie",
    image: "/team/chef3.jpg"
  },
  {
    name: "Ed Freeman",
    position: "Pastry Chef",
    image: "/team/chef4.jpg"
  }
]

export default function teamsection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#01c38d] font-medium mb-2 block">Our Team</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#191e29] flex items-center justify-center gap-2">
            Meet our talented
            <span className="text-[#01c38d] relative">
              team
              <svg className="absolute -bottom-6 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 25 0, 50 10 Q 75 20, 100 10" stroke="#01c38d" strokeWidth="5" fill="none"/>
              </svg>
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                {/* Background Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#01c38d]/20 rounded-full filter blur-xl" />
                
                {/* Member Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Member Info */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-4 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-2"
                >
                  <h3 className="text-lg font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-sm text-[#01c38d]">{member.position}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}