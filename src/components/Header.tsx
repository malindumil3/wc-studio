"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Image as ImageIcon, SlidersHorizontal, User, FileText, Search } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home", icon: Home, active: true },
  { name: "Portfolio", href: "#portfolio", icon: ImageIcon },
  { name: "Services", href: "#services", icon: SlidersHorizontal },
  { name: "Founder", href: "#founder", icon: User },

];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 py-3 bg-[#4c5a6b] shadow-md border-b border-[#3b4756]"
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
                  link.active ? "text-brand-orange" : "text-[#a2b5cd] hover:text-white"
                )}
              >
                <link.icon size={16} className={clsx(link.active ? "text-brand-orange" : "text-[#8b9cb3]", "group-hover:text-white transition-colors")} />
                {link.name}
                <span className={clsx(
                  "absolute -bottom-1.5 left-0 h-[2px] bg-brand-orange transition-all duration-300 rounded-full",
                  link.active ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: Search + CTA */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Search Bar */}
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#5b6e82] text-white placeholder:text-[#8b9cb3] rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-orange w-64 transition-all border border-transparent focus:border-brand-orange/50 hover:bg-[#687a8f]"
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

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#4c5a6b] flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={clsx(
                  "flex items-center gap-3 text-2xl transition-colors",
                  link.active ? "text-brand-orange" : "text-white hover:text-brand-orange"
                )}
              >
                <link.icon size={24} />
                {link.name}
              </Link>
            ))}
            <Link href="https://wa.me/94741301673" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-semibold text-lg max-w-xs mt-4">
                Get a Discount
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
