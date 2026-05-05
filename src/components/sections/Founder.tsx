"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="py-10 md:py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
              alt="Methul Asmina - Founder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold">Methul Asmina</h3>
              <p className="text-brand-orange">Founder & Lead Cinematographer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">The Visionary Behind the Lens</h2>
            <div className="w-16 h-1 bg-brand-orange rounded-full mb-6"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With a profound passion for visual storytelling, Methul Asmina established WC Studio to redefine how memories are preserved. Every frame captured is not just an image or a clip, but a piece of art that conveys raw emotions and authentic experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              His cinematic approach and meticulous attention to detail ensure that whether it&apos;s a grand wedding or a high-end commercial, the final product is nothing short of a masterpiece. We believe that your story deserves a cinematic treatment.
            </p>
            
            <div className="pt-6">
              <span className="font-serif italic text-3xl text-brand-orange/80 inline-block px-2 border-b border-brand-orange/30 pb-2">
                Methul Asmina
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
