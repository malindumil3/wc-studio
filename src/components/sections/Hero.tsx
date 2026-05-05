"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const videos = [
  "/abc.mp4",
  "https://cdn.pixabay.com/video/2021/08/11/84687-587282583_large.mp4",
  "https://cdn.pixabay.com/video/2020/04/18/36551-412217730_large.mp4",
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Play current video and pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo) {
          video.play().catch(e => console.log("Video autoplay prevented:", e));
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideo]);

  return (
    <section id="home" className="relative w-full h-[450px] lg:h-[550px] overflow-hidden flex items-center justify-center bg-brand-darker shrink-0">
      {/* Background Videos without Parallax for 100% exact match */}
      <div className="absolute inset-0 w-full h-full z-0">
        {videos.map((src, index) => (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={src}
            loop
            muted
            playsInline
            preload={index === 0 ? "auto" : "none"} // Prevent loading all 3 large videos instantly
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentVideo ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 uppercase drop-shadow-md"
        >
          Capturing Moments,<br />
          Creating Memories
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-200 mb-4 font-medium"
        >
          A moment in life, a memory forever
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-gray-300 font-light max-w-2xl mx-auto mb-8"
        >
          Premier Videography & Photography in Sri Lanka<br />by Founder Methul Asmina
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#founder">
            <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold text-sm md:text-base shadow-[0_0_20px_rgba(242,104,34,0.4)] transition-all hover:bg-brand-orange-light hover:scale-105 active:scale-95">
              View Profile
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
