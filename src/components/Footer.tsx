"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/WC LOGO.jpg"
            alt="WC Studio Logo"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover shadow-sm"
          />
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            Capturing Moments, Creating Memories. Premier videography and photography studio in Sri Lanka, passionate about storytelling.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#home" className="text-gray-400 hover:text-brand-orange transition-colors">Home</Link></li>
            <li><Link href="#portfolio" className="text-gray-400 hover:text-brand-orange transition-colors">Portfolio</Link></li>
            <li><Link href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">Services</Link></li>
            <li><Link href="#founder" className="text-gray-400 hover:text-brand-orange transition-colors">Founder</Link></li>
            <li><Link href="#contact" className="text-gray-400 hover:text-brand-orange transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-orange">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <Phone size={20} className="text-brand-orange shrink-0 mt-0.5" />
              <span>+94 74 130 1673</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <Mail size={20} className="text-brand-orange shrink-0 mt-0.5" />
              <span>methulasminakumara@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin size={20} className="text-brand-orange shrink-0 mt-0.5" />
              <span> kalutara, Kalutara District, Sri Lanka</span>
            </li>
          </ul>
        </div>

        {/* Map placeholder */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-orange">Location</h3>
          <div className="w-full h-40 bg-brand-gray rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63411.48!2d79.9286!3d6.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae23712b3752e91%3A0x26030b284e0e2a09!2sKalutara%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WC Studio Location - kalutara"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400 font-medium text-sm">
            Designed by <span className="font-semibold tracking-wide text-gray-300">A. Malindu Milakshana</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} WC Studio. All Rights Reserved.
          </p>
        </div>

        <motion.button
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="bg-brand-gray hover:bg-brand-orange text-white p-3 rounded-full transition-colors flex items-center gap-2 group shadow-lg"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} className="group-hover:animate-bounce" />
        </motion.button>
      </div>
    </footer>
  );
}
