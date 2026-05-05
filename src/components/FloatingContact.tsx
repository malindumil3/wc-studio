"use client";

import { motion } from "framer-motion";
import { Facebook, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const floatTransition = {
    repeat: Infinity,
    duration: 3,
    ease: "easeInOut" as const
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-[140px] h-[170px] pointer-events-none">
      {/* Fiverr Button (Green) */}
      <motion.a
        href="https://www.fiverr.com/productivebrian?source=inbox"
        target="_blank"
        rel="noopener noreferrer"
        title="Fiverr"
        animate={{ y: [0, -6, 0] }}
        transition={{ ...floatTransition, delay: 0 }}
        whileHover={{ scale: 1.15 }}
        className="absolute top-0 right-4 w-14 h-14 rounded-full bg-[#1dbf73] text-white flex items-center justify-center font-bold text-xs shadow-[0_8px_20px_rgba(29,191,115,0.4)] pointer-events-auto cursor-pointer z-[1]"
      >
        fiverr
      </motion.a>

      {/* Facebook Button (Blue) */}
      <div className="absolute top-[60px] left-0 flex flex-col items-center gap-1.5 pointer-events-auto z-[2]">
        <motion.a
          href="https://www.facebook.com/methul.asmina.92"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          animate={{ y: [0, -8, 0] }}
          transition={{ ...floatTransition, delay: 0.5 }}
          whileHover={{ scale: 1.15 }}
          className="w-[56px] h-[56px] rounded-full bg-[#1877f2] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(24,119,242,0.4)] cursor-pointer"
        >
          <Facebook size={32} fill="currentColor" strokeWidth={0} />
        </motion.a>
        <span className="text-gray-800 font-bold text-[13px] drop-shadow-md tracking-wide">
          Contact
        </span>
      </div>

      {/* WhatsApp Button (Green) */}
      <motion.a
        href="https://wa.me/94741301673"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        animate={{ y: [0, -10, 0] }}
        transition={{ ...floatTransition, delay: 1 }}
        whileHover={{ scale: 1.15 }}
        className="absolute bottom-1 right-0 w-[68px] h-[68px] rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] pointer-events-auto cursor-pointer z-[3]"
      >
        <MessageCircle size={38} fill="currentColor" strokeWidth={0} />
      </motion.a>
    </div>
  );
}
