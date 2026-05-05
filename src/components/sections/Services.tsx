"use client";

import { motion } from "framer-motion";
import { Video, Camera } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Expertise</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            style={{ perspective: 1000 }}
            className="group block"
          >
            <div className="bg-white group-hover:bg-[#4d5c6b] border border-gray-100 rounded-3xl p-8 md:p-10 text-center h-full shadow-lg transition-all duration-500">
              <motion.div 
                className="mx-auto w-20 h-20 flex items-center justify-center mb-6 text-gray-800 group-hover:text-white transition-colors duration-500"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Video size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">Videography</h3>
              <p className="text-gray-500 group-hover:text-gray-200 mb-6 leading-relaxed text-sm transition-colors duration-500">
                Service Types: in animation
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold">
                <span className="text-brand-orange tracking-wide uppercase">Wedding</span>
                <span className="text-gray-300 group-hover:text-gray-400">|</span>
                <span className="text-brand-orange tracking-wide uppercase">Commercial</span>
                <span className="text-gray-300 group-hover:text-gray-400">|</span>
                <span className="text-brand-orange tracking-wide uppercase">Event</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
            style={{ perspective: 1000 }}
            className="group block"
          >
            <div className="bg-white group-hover:bg-[#4d5c6b] border border-gray-100 rounded-3xl p-8 md:p-10 text-center h-full shadow-lg transition-all duration-500">
              <motion.div 
                className="mx-auto w-20 h-20 flex items-center justify-center mb-6 text-gray-800 group-hover:text-white transition-colors duration-500"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "easeInOut" }}
              >
                <Camera size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">Photography</h3>
              <p className="text-gray-600 group-hover:text-gray-200 mb-6 leading-relaxed text-sm transition-colors duration-500">
                Service Types: in nnimations
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold">
                <span className="text-yellow-500 tracking-wide uppercase">Wedding</span>
                <span className="text-gray-300 group-hover:text-gray-400">|</span>
                <span className="text-yellow-500 tracking-wide uppercase">Commercial</span>
                <span className="text-gray-300 group-hover:text-gray-400">|</span>
                <span className="text-yellow-500 tracking-wide uppercase">Event</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
