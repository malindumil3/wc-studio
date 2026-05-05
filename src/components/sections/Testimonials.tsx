"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

const reviews = [
  { id: 1, name: "Mina Sahon", type: "Client Transfer", text: "Love etacein is ames ve extremiang and haw cleanred ared ona eitoonen ave eschildonx. We mere quets for them.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=150&h=150&fit=crop" },
  { id: 2, name: "Mora Sahon", type: "Client Transfer", text: "Hacommens is teal aoamoexenly when the sea radility. Serves a parvor and patagewias and them rest raoskoa.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
  { id: 3, name: "Saman Kumara", type: "Client Transfer", text: "Love etacein is ames ve extremiang and haw cleanred ared ona eitoonen ave eschildonx.", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=150&h=150&fit=crop" },
  { id: 4, name: "Kavi & Ruwan", type: "Client Transfer", text: "Amazing dedication by the team. They were everywhere capturing the best moments without being intrusive.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=150&h=150&fit=crop" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white relative">
       <div className="max-w-[85rem] mx-auto px-6 md:px-12 relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="px-4"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="w-full pb-16"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto pb-4">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full flex flex-col justify-between">
                  <div>
                    <p className="text-orange-500 font-medium font-serif mb-4 text-lg leading-snug">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image 
                        src={review.image} 
                        alt={review.name} 
                        width={48} 
                        height={48} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-bold text-sm tracking-wide">{review.name}</span>
                      <span className="text-gray-500 text-xs">{review.type}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
       </div>
    </section>
  );
}
