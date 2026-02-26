"use client";
import { useState } from "react";

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/invotec/landingvideos/invotec_02.webm",
        "https://cdn.clinicalvisuals.com/medical/invotec/landingvideos/invotec_01.webm",
    ];

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };
  return (
    <section className="relative w-full h-[calc(100vh-72px)] overflow-hidden">
      
      {/* Background Layer (Video in future) */}
      <div className="absolute inset-0 bg-black">
        {/* Future video example */}
        
         <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
       
      </div>

      {/* Overlay (optional future dim) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-center text-center px-6 pb-32">
        <div className="max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white animate-fadeIn">
            Precision Medical Devices for ENT & Plastic Surgery Excellence
          </h1>

          <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed animate-fadeIn delay-200">
            Delivering high-quality instruments, implants, and surgical supplies trusted by healthcare professionals worldwide—backed by decades of expertise for reliable performance and better patient outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}