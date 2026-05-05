"use client";

import { motion } from "framer-motion";
import { Facebook, Link as LinkIcon } from "lucide-react"; 
import { useRef, useState } from "react";

// Custom WhatsApp SVG icon component
function WhatsAppIcon({ size = 36 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const SOCIALS = [
  { name: "WhatsApp", icon: WhatsAppIcon, color: "#25D366", href: "https://wa.me/94771234567" },
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
