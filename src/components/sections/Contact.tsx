"use client";

import { motion } from "framer-motion";
import { MessageSquare, Facebook, Link as LinkIcon } from "lucide-react"; 
import { useRef, useState } from "react";

const SOCIALS = [
  { name: "WhatsApp", icon: MessageSquare, color: "#25D366", href: "https://wa.me/94771234567" },
  { name: "Facebook", icon: Facebook, color: "#1877F2", href: "https://www.facebook.com/methul.asmina.92" },
  { name: "Fiverr", icon: LinkIcon, color: "#1DBF73", href: "https://fiverr.com/wcstudio" },
];

function MagneticButton({ children, color, href, name }: { children: React.ReactNode, color: string, href: string, name: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.a
        href={href}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-gray/50 border border-white/10 group transition-colors duration-300 z-10"
        style={{ 
          backgroundColor: isHovered ? color : undefined,
          borderColor: isHovered ? color : undefined,
          boxShadow: isHovered ? `0 0 30px ${color}80` : 'none'
        }}
      >
        <span className="text-white transition-transform duration-300 z-20">
          {children}
        </span>
      </motion.a>
      <span className="text-gray-400 font-medium tracking-wide uppercase text-sm" style={{ color: isHovered ? color : undefined }}>{name}</span>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/5">
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03]"></div>

       <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">Let&apos;s Create Something <span className="text-brand-orange">Cinematic</span></h2>
           <p className="text-gray-400 text-lg mb-16 max-w-xl mx-auto leading-relaxed">
             Ready to book your next shoot? Reach out to us through your preferred platform and let&apos;s start planning your story.
           </p>
         </motion.div>

         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
         >
           {SOCIALS.map((social) => (
             <MagneticButton key={social.name} name={social.name} color={social.color} href={social.href}>
               <social.icon size={36} />
             </MagneticButton>
           ))}
         </motion.div>
       </div>
    </section>
  );
}
