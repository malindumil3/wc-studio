"use client";

import { useState } from "react";
import Image from "next/image";
import { Facebook, Link as LinkIcon, MessageCircle, FileText, Share2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom WhatsApp SVG icon component
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function FounderAndContact() {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const SHARE_URL = "https://wc-studio-tau.vercel.app/#home";

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(SHARE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                className="absolute top-5 right-5 z-20 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors flex items-center justify-center"
                title="Close"
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
                <div className="p-8 md:p-10 flex-1 relative flex flex-col">
                  <div>
                    <span className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Founder & Lead Cinematographer</span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-5">Methul Asmina</h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Founder Methul Asmina is a seasoned visionary and engaging storyteller, orchestrating compelling planning and executing renowned campaigns across Sri Lanka. His passion for cinematography started at a young age and has since evolved into a full-fledged creative studio.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      We intertwine disciplines of photography and direct pioneering of the studio. Methul&apos;s keen eye for detail and his ability to capture raw, authentic emotions make every project a masterpiece.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      With years of experience in wedding videography, commercial productions, and event coverage, WC Studio has become a trusted name in the industry.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Our mission is to capture life&apos;s most precious moments with a cinematic touch that transforms ordinary footage into extraordinary visual stories. Every frame tells a story, and every story deserves to be told beautifully.
                    </p>
                  </div>

                  <div className="mt-auto border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                      <div>
                        <span className="font-serif text-2xl text-brand-orange flex items-center gap-2">Methul Asmina</span>
                        <p className="text-gray-400 text-xs mt-1">Founder, WC Studio</p>
                      </div>

                      {/* Bubble Style Social Icons */}
                      <div className="flex items-center gap-4">
                        <a 
                          href="https://wa.me/94771234567" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full border border-gray-200 shadow-sm text-[#25D366] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white flex items-center justify-center transition-all hover:shadow-[0_4px_15px_rgba(37,211,102,0.4)]"
                          title="WhatsApp"
                        >
                          <WhatsAppIcon size={24} />
                        </a>
                        <a 
                          href="https://www.facebook.com/methul.asmina.92" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full border border-gray-200 shadow-sm text-[#1877F2] hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white flex items-center justify-center transition-all hover:shadow-[0_4px_15px_rgba(24,119,242,0.4)]"
                          title="Facebook"
                        >
                          <Facebook size={22} fill="currentColor" strokeWidth={0} />
                        </a>
                        <a 
                          href="https://fiverr.com/wcstudio" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full border border-gray-200 shadow-sm text-[#1DBF73] hover:bg-[#1DBF73] hover:border-[#1DBF73] hover:text-white flex items-center justify-center transition-all hover:shadow-[0_4px_15px_rgba(29,191,115,0.4)]"
                          title="Fiverr"
                        >
                          <LinkIcon size={22} />
                        </a>
                      </div>
                    </div>

                    {/* Or copy link section matching screenshot */}
                    <div className="w-full">
                      <p className="text-gray-500 font-semibold text-sm mb-2">Or copy link</p>
                      <div className="bg-[#1c1c1e] rounded-xl p-2 flex items-center justify-between border border-gray-800 shadow-inner">
                        <div className="text-gray-300 text-sm px-3 truncate max-w-[200px] sm:max-w-[300px]">
                          {SHARE_URL}
                        </div>
                        <button
                          onClick={handleShare}
                          className="bg-brand-orange text-white font-bold px-6 py-2 rounded-lg text-sm transition-colors hover:bg-brand-orange-light active:scale-95"
                        >
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
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
