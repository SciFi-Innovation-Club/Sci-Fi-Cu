"use client";
import React, { useState } from 'react';

const galleryImages = [
  'https://sficcu.vercel.app/assets/gallery1-1b0UnlhH.jpg',
  'https://sficcu.vercel.app/assets/gallery2-BgfdLor_.jpg',
  'https://sficcu.vercel.app/assets/gallery3-D88p1lDU.jpg',
  'https://sficcu.vercel.app/assets/gallery4-DtrMrnVd.jpg',
  'https://sficcu.vercel.app/assets/gallery5-DmnOxHaz.png'
];

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;

  // Autoplay effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [total]);

  const prevImage = () => setCurrent((current - 1 + total) % total);
  const nextImage = () => setCurrent((current + 1) % total);

  return (
    <section className="w-full max-w-2xl mx-auto py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-yellow-400">Gallery</h2>
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-400 hover:text-black transition"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <img
          src={galleryImages[current]}
          alt={`Gallery ${current + 1}`}
          className="w-full h-64 md:h-[24rem] md:w-[750px] object-cover rounded-xl shadow-lg"
        />
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-400 hover:text-black transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-cyan-400' : 'bg-gray-600'}`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
