"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  { id: 1, title: "Wedding - Colombo", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", video: "https://cdn.pixabay.com/video/2020/05/21/40003-424074211_large.mp4" },
  { id: 2, title: "Commercial Event", thumbnail: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800", video: "https://cdn.pixabay.com/video/2020/05/21/40003-424074211_large.mp4" },
  { id: 3, title: "Couple Shoot", thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=800", video: "https://cdn.pixabay.com/video/2020/05/21/40003-424074211_large.mp4" },
  { id: 4, title: "Corporate Video", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", video: "https://cdn.pixabay.com/video/2020/05/21/40003-424074211_large.mp4" },
  { id: 5, title: "Destination Wedding", thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", video: "https://cdn.pixabay.com/video/2020/05/21/40003-424074211_large.mp4" },
  { id: 6, title: "Music Video", thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800", video: "https://cdn.pixabay.com/video/2020/05/21/40003-424074211_large.mp4" },
];

// Video card that auto-plays (muted) when visible, and opens modal on click
function ProjectCard({ project, onClick }: { project: typeof projects[0], onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative group overflow-hidden rounded-xl aspect-[16/10] cursor-pointer bg-black"
      onClick={onClick}
    >
      {/* Inline auto-playing muted video preview */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Fallback thumbnail poster while loading */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0 pointer-events-none"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-brand-orange text-white p-4 rounded-full mb-3 shadow-[0_0_20px_rgba(242,104,34,0.6)]"
        >
          <Play size={24} className="ml-1" />
        </motion.div>
        <span className="text-white font-medium tracking-wider uppercase text-sm">View Project</span>
      </div>
      {/* Title overlay on mobile */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent md:hidden">
        <span className="text-white font-semibold text-sm">{project.title}</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="pb-24 pt-4 md:pt-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </motion.div>

        {/* Mobile: Swiper Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.15}
            spaceBetween={16}
            loop={true}
            speed={1200}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="portfolio-swiper pb-10"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} onClick={() => setSelectedVideo(project.video)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} onClick={() => setSelectedVideo(project.video)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 text-white hover:text-brand-orange transition-colors z-50 p-2 bg-black/50 rounded-full"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative border border-white/10"
            >
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

