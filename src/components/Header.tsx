"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Image as ImageIcon, SlidersHorizontal, User, Search } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Portfolio", href: "#portfolio", icon: ImageIcon },
  { name: "Services", href: "#services", icon: SlidersHorizontal },
  { name: "Founder", href: "#founder", icon: User },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 py-3 bg-black/30 backdrop-blur-md border-b border-white/5 shadow-lg"
    >
      <div className="max-w-[90rem] mx-auto flex items-center justify-between">

        {/* Left side: Logo + Desktop Navigation */}
        <div className="flex items-center gap-8 xl:gap-14">
          {/* Logo */}
          <Link href="#home" className="relative z-10 flex items-center">
            <Image
              src="/WC LOGO.jpg"
              alt="WC Studio Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover shadow-sm"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex items-center gap-1.5 font-medium text-[15px] transition-colors group relative",
                  "text-gray-300 hover:text-brand-orange"
                )}
              >
                <link.icon size={16} className={clsx("text-gray-400 group-hover:text-brand-orange transition-colors")} />
                {link.name}
                <span className={clsx(
                  "absolute -bottom-1.5 left-0 h-[2px] bg-brand-orange transition-all duration-300 rounded-full w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: Search + CTA (Desktop) */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Search Bar */}
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white/10 text-white placeholder:text-gray-400 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange w-64 transition-all border border-transparent focus:border-brand-orange/50 hover:bg-white/20"
            />
          </div>

          {/* CTA Button */}
          <Link href="https://wa.me/94741301673" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(242,104,34,0.3)] transition-shadow hover:shadow-[0_0_25px_rgba(242,104,34,0.6)]"
            >
              Get a Discount
            </motion.button>
          </Link>
        </div>

        {/* Mobile Elements: Search + Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            className="text-white p-2 hover:text-brand-orange transition-colors"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          >
            <Search size={22} />
          </button>
          
          <button
            className="relative z-50 text-brand-orange p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      <AnimatePresence>
        {isMobileSearchOpen && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 px-2"
          >
            <div className="relative w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white/10 text-white placeholder:text-gray-400 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange transition-all border border-transparent focus:border-brand-orange/50 backdrop-blur-md"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#4c5a6b] flex flex-col items-center justify-center space-y-8 lg:hidden z-40"
          >
            {/* The X button is handled as absolute above through the toggle, but we placed it naturally, wait...
                The toggle button is naturally relative in the flow. Let's make sure it's absolute above the menu overlay via z-index.
                Yes, it's z-50 while this overlay is z-40.
            */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-2xl font-bold text-white hover:text-brand-orange transition-colors"
               >
                <link.icon size={26} className="text-brand-orange" />
                {link.name}
              </Link>
            ))}
            <Link href="https://wa.me/94741301673" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold text-lg max-w-xs mt-6 shadow-xl hover:scale-105 transition-transform">
                Get a Discount
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
