"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, X, Camera, Plane, Video, Palette } from "lucide-react";
import Image from "next/image";

// Placeholder data - The user should replace these with real IDs/images later
const cinematographyVideos = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  youtubeId: "aqz-KE-bpKQ", // Placeholder beautiful video URL
  title: `Cinematic Masterpiece ${i + 1}`,
  description: `A beautifully crafted representation of visual storytelling, capturing the essence and emotion of the moment in stunning detail.`,
  thumbnail: `https://picsum.photos/seed/cine${i}/1280/720`
}));

const droneographyVideos = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  youtubeId: "J87J-E1tZ7A", // Placeholder Drone video
  title: `Aerial View ${i + 1}`,
  thumbnail: `https://picsum.photos/seed/drone${i}/1280/720`
}));

const photoAlbums = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Wedding Album ${i + 1}`,
  cover: `https://picsum.photos/seed/albumcover${i}/800/800`,
  photos: Array.from({ length: 15 }, (_, j) => `https://picsum.photos/seed/album${i}photo${j}/800/1000`)
}));

const graphicsWorks = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Brand Logo ${i + 1}`,
  image: `https://picsum.photos/seed/graphic${i}/800/800`
}));

// Reusable Video Player Component that hides YouTube UI via Custom Facade
function YouTubePlayer({ video }: { video: { youtubeId: string, title: string, thumbnail: string } }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-xl group border border-white/5">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer flex items-center justify-center"
          onClick={() => setIsPlaying(true)}
        >
          <Image src={video.thumbnail} alt={video.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="relative z-10 w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(242,104,34,0.6)]"
          >
            <Play size={32} className="ml-1" />
          </motion.div>
        </div>
      ) : (
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default function WorksPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<typeof photoAlbums[0] | null>(null);

  // Helper to render section headings
  const SectionHeading = ({ title, icon: Icon, id }: { title: string, icon: any, id: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center pt-24 pb-12"
      id={id}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <Icon size={32} className="text-brand-orange" />
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">{title}</h2>
      </div>
      <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
    </motion.div>
  );

  return (
    <div className="bg-brand-darker min-h-screen text-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cinematography Section */}
        <SectionHeading title="Cinematography" icon={Video} id="cinematography" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cinematographyVideos.map((video, idx) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 3 * 0.1 }}
              className="flex flex-col"
            >
              <YouTubePlayer video={video} />
              <div className="mt-4 px-2">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photography Section */}
        <SectionHeading title="Photography" icon={Camera} id="photography" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoAlbums.map((album, idx) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-[4/5] cursor-pointer border border-white/10"
              onClick={() => setSelectedAlbum(album)}
            >
              <Image src={album.cover} alt={album.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold tracking-wider uppercase text-xl mb-3">{album.title}</span>
                <span className="text-brand-orange text-sm font-semibold border border-brand-orange hover:bg-brand-orange hover:text-white transition-colors px-6 py-2 rounded-full">View Album (15)</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Droneography Section */}
        <SectionHeading title="Droneography" icon={Plane} id="droneography" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {droneographyVideos.map((video, idx) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 2 * 0.1 }}
            >
              <YouTubePlayer video={video} />
              <div className="mt-4 px-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graphics Section */}
        <SectionHeading title="Graphics" icon={Palette} id="graphics" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {graphicsWorks.map((work, idx) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden border border-white/5"
            >
              <Image src={work.image} alt={work.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-110 transition-transform duration-700 blur-0" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Album Modal Pop-up */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-darker/98 backdrop-blur-md overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-8 md:py-12 md:px-12 relative">
              <button 
                onClick={() => setSelectedAlbum(null)}
                className="fixed top-6 right-6 md:top-8 md:right-8 text-white hover:text-brand-orange transition-colors z-[110] bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
              >
                <X size={28} />
              </button>
              
              <div className="max-w-7xl mx-auto pt-10">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 text-center uppercase tracking-widest drop-shadow-lg">
                  {selectedAlbum.title}
                </h3>
                <p className="text-brand-orange text-center mb-12 font-medium tracking-wide">15 Photos Collection</p>
                
                {/* Masonry / Grid for Photos inside the Album */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {selectedAlbum.photos.map((photoSrc, pIdx) => (
                    <motion.div 
                      key={pIdx}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.05 * (pIdx % 6), duration: 0.4 }}
                      // Create an alternating masonry-like look by varying aspect ratios based on index
                      className={`relative w-full overflow-hidden rounded-xl shadow-2xl bg-brand-gray border border-white/5
                        ${pIdx % 3 === 0 ? 'aspect-[4/5]' : pIdx % 3 === 1 ? 'aspect-square' : 'aspect-[3/4]'}
                      `}
                    >
                      <Image 
                        src={photoSrc} 
                        alt={`Photo ${pIdx}`} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-700" 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
