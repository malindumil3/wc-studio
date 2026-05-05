"use client";

import { motion } from "framer-motion";
import { Video, Camera, Plane, Palette } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expertise</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Card 1: Cinematography */}
          <Link href="/works#cinematography" className="group block focus:outline-none overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
              style={{ perspective: 1000 }}
              className="h-full"
            >
              <div className="bg-white group-hover:bg-[#4d5c6b] border border-gray-100 rounded-2xl p-6 text-center h-full shadow-md transition-all duration-500">
                <motion.div 
                  className="mx-auto w-16 h-16 flex items-center justify-center mb-4 text-gray-800 group-hover:text-white transition-colors duration-500"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Video size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">Cinematography</h3>
                <p className="text-gray-500 group-hover:text-gray-200 mb-4 text-xs transition-colors duration-500">
                  Immersive storytelling through motion
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-[10px] font-semibold">
                  <span className="text-brand-orange uppercase">Wedding</span>
                  <span className="text-gray-300 group-hover:text-gray-400">|</span>
                  <span className="text-brand-orange uppercase">Commercial</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Card 2: Photography */}
          <Link href="/works#photography" className="group block focus:outline-none overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.03 }}
              style={{ perspective: 1000 }}
              className="h-full"
            >
              <div className="bg-white group-hover:bg-[#4d5c6b] border border-gray-100 rounded-2xl p-6 text-center h-full shadow-md transition-all duration-500">
                <motion.div 
                  className="mx-auto w-16 h-16 flex items-center justify-center mb-4 text-gray-800 group-hover:text-white transition-colors duration-500"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "easeInOut" }}
                >
                  <Camera size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">Photography</h3>
                <p className="text-gray-600 group-hover:text-gray-200 mb-4 text-xs transition-colors duration-500">
                  Capturing timeless moments perfectly
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-[10px] font-semibold">
                  <span className="text-yellow-500 uppercase">Portraits</span>
                  <span className="text-gray-300 group-hover:text-gray-400">|</span>
                  <span className="text-yellow-500 uppercase">Events</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Card 3: Droneography */}
          <Link href="/works#droneography" className="group block focus:outline-none overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ rotateX: -5, rotateY: -5, scale: 1.03 }}
              style={{ perspective: 1000 }}
              className="h-full"
            >
              <div className="bg-white group-hover:bg-[#4d5c6b] border border-gray-100 rounded-2xl p-6 text-center h-full shadow-md transition-all duration-500">
                <motion.div 
                  className="mx-auto w-16 h-16 flex items-center justify-center mb-4 text-gray-800 group-hover:text-white transition-colors duration-500"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: "easeInOut" }}
                >
                  <Plane size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">Droneography</h3>
                <p className="text-gray-600 group-hover:text-gray-200 mb-4 text-xs transition-colors duration-500">
                  Breathtaking 4K aerial perspectives
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-[10px] font-semibold">
                  <span className="text-blue-500 uppercase">Architectural</span>
                  <span className="text-gray-300 group-hover:text-gray-400">|</span>
                  <span className="text-blue-500 uppercase">Scenic</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Card 4: Graphics */}
          <Link href="/works#graphics" className="group block focus:outline-none overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ rotateX: -5, rotateY: 5, scale: 1.03 }}
              style={{ perspective: 1000 }}
              className="h-full"
            >
              <div className="bg-white group-hover:bg-[#4d5c6b] border border-gray-100 rounded-2xl p-6 text-center h-full shadow-md transition-all duration-500">
                <motion.div 
                  className="mx-auto w-16 h-16 flex items-center justify-center mb-4 text-gray-800 group-hover:text-white transition-colors duration-500"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1.5, ease: "easeInOut" }}
                >
                  <Palette size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">Graphic Design</h3>
                <p className="text-gray-600 group-hover:text-gray-200 mb-4 text-xs transition-colors duration-500">
                  Logo design and brand identities
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-[10px] font-semibold">
                  <span className="text-purple-500 uppercase">Logos</span>
                  <span className="text-gray-300 group-hover:text-gray-400">|</span>
                  <span className="text-purple-500 uppercase">Custom Art</span>
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
