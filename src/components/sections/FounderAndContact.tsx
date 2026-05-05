"use client";

import { useState } from "react";
import Image from "next/image";
import { Facebook, Link as LinkIcon, MessageCircle, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FounderAndContact() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section id="founder" className="py-16 bg-white relative">
        <div className="max-w-[85rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: The Founder's Journey */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">The Founder&apos;s Journey</h2>
            <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col sm:flex-row gap-6 mt-6">
              <div className="w-full sm:w-[180px] relative aspect-square sm:aspect-auto rounded-xl overflow-hidden shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
                  alt="Methul Asmina"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 py-2">
                <span className="text-gray-500 font-semibold text-xs mb-1 uppercase tracking-wider">Founder</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Methul Asmina</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Founder Methul Asmina is a seasoned visionary and engaging storytelling, orchestrating compelling planning, and executing renowned campaigns in Sri Lanka.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We intertwine disciplines of photography and direct pioneering of the studio.
                </p>
                <button
                  onClick={() => setShowPopup(true)}
                  className="text-brand-orange font-bold text-sm flex items-center gap-1.5 group self-start mt-auto cursor-pointer"
                >
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Connect & Book */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">Connect & Book</h2>
            <p className="text-gray-500 text-sm mb-6 mt-6">Ready to capture your most precious moments? Connect with us:</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] rounded-full bg-brand-orange flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(242,104,34,0.3)] hover:scale-110 transition-transform cursor-pointer">
                  <Facebook className="text-white" size={24} fill="currentColor" strokeWidth={0} />
                </div>
                <span className="text-gray-800 font-bold">Facebook & communiation</span>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] rounded-full bg-brand-orange flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(242,104,34,0.3)] hover:scale-110 transition-transform cursor-pointer">
                  <FileText className="text-white" size={22} />
                </div>
                <span className="text-gray-800 font-bold">Review Processses & links/chat</span>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] rounded-full bg-brand-orange flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(242,104,34,0.3)] hover:scale-110 transition-transform cursor-pointer">
                  <LinkIcon className="text-white" size={22} />
                </div>
                <span className="text-gray-800 font-bold">Fiverr ochat</span>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] rounded-full bg-brand-orange flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(242,104,34,0.3)] hover:scale-110 transition-transform cursor-pointer">
                  <MessageCircle className="text-white" size={24} fill="currentColor" strokeWidth={0} />
                </div>
                <span className="text-gray-800 font-bold">WhatsApp</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Founder Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-5 right-5 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="relative w-full md:w-[280px] h-[300px] md:h-auto shrink-0 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600"
                    alt="Methul Asmina"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex-1">
                  <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Founder & Lead Cinematographer</span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Methul Asmina</h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Founder Methul Asmina is a seasoned visionary and engaging storyteller, orchestrating compelling planning and executing renowned campaigns across Sri Lanka. His passion for cinematography started at a young age and has since evolved into a full-fledged creative studio.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    We intertwine disciplines of photography and direct pioneering of the studio. Methul&apos;s keen eye for detail and his ability to capture raw, authentic emotions make every project a masterpiece.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Visthul Asmina knows about engldewing ewnwoetries and nomeree funvevoment stires and enjoy padiying. With years of experience in wedding videography, commercial productions, and event coverage, WC Studio has become a trusted name in the industry.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Our mission is to capture life&apos;s most precious moments with a cinematic touch that transforms ordinary footage into extraordinary visual stories. Every frame tells a story, and every story deserves to be told beautifully.
                  </p>

                  <div className="border-t border-gray-100 pt-5">
                    <span className="font-serif text-2xl text-brand-orange">Methul Asmina</span>
                    <p className="text-gray-400 text-xs mt-1">Founder, WC Studio</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
