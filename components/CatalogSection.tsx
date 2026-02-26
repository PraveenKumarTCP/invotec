"use client";

import Image from "next/image";
import FooterBg from "@/public/assets/footer-bg.png";
import { AOSInit } from "./AOSInit";
import { useState } from "react";
  const categories_data = [
    {
        id: 1,
        name: "Rhinology",
    },
    {
        id: 2,
        name: "Otology",
    },
    {
        id: 3,
        name: "Laryngology",
    },
    {
        id: 4,
        name: "Cosmetic & Plastic Surgery",
    },
    {
        id: 5,
        name: "Surgical Lighting",
    },
  ];

  const services= [
    {
        id: 1,
        title: "Custom ENT Instrument Sets",
        description: "We offer custom ENT instrument sets tailored to your specific needs. Our expert team will work closely with you to create a set that includes the instruments you require for your procedures, ensuring optimal performance and efficiency in the operating room.",
    },
    {
        id: 2,
        title: "Cosmetic Surgery Instruments",
        description: "Our cosmetic surgery instruments are designed to meet the highest standards of quality and precision. We provide a wide range of instruments for various cosmetic procedures, including facelifts, rhinoplasty, and body contouring, to help you achieve the best possible outcomes for your patients.",
    },
    {
        id: 3,
        title: "Surgical Lighting Solutions",
        description: "We offer advanced surgical lighting solutions that provide optimal illumination for ENT and cosmetic surgery procedures. Our lighting systems are designed to enhance visibility, reduce shadows, and improve the overall surgical experience for both surgeons and patients.",
    },
    {
        id: 4,
        title: "Instrument Repair and Maintenance",
        description: "Our instrument repair and maintenance services ensure that your ENT and cosmetic surgery instruments remain in excellent condition. We provide comprehensive repair services, including sharpening, realignment, and refurbishment, to extend the lifespan of your instruments and maintain their performance.",
    },
    {
        id: 5,
        title: "Educational Resources and Training",
        description: "We offer educational resources and training programs to help healthcare professionals stay up-to-date with the latest techniques and advancements in ENT and cosmetic surgery. Our training sessions cover instrument handling, surgical techniques, and best practices to enhance your skills and knowledge.",
    }
  ]

export default function CatalogSection() {
    const [categories, setCategories] = useState(services[0]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/invotec/shortclips/invotec_01.webm",
    ];

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

  AOSInit();

  const handleClick = (id: number) => {
    // Handle category click, e.g., navigate to category page or filter products
    const getCategoryById = services.find((cat) => cat.id === id);
    if (getCategoryById) {
        setCategories(getCategoryById);
    }
    console.log("Clicked category ID:", id);
  }



  return (
    <section className="relative w-full">

      {/* HERO AREA */}
      <div className="relative h-105 sm:h-125 lg:h-200 overflow-hidden">

        {/* Background Image */}
        {/* <Image
          src={FooterBg}
          alt="Medical Background"
          fill
          priority
          className="object-cover"
        /> */}

              {/* Background Layer (Video in future) */}
      <div className="absolute inset-0 bg-black">
        {/* Future video example */}
        
         <video
            key={currentVideoIndex}
            src={bannerVideos[currentVideoIndex]}
            autoPlay
            muted
            loop
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
       
      </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#298dbc26]" />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-end text-center h-full px-6 animate-fadeIn bottom-10"
          data-aos="fade-up"
        >
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold animate-fadeIn delay-200">
            ENT & Cosmetic Surgery Products
          </h1>

          <p className="mt-6 max-w-3xl text-white/90 text-sm sm:text-base leading-relaxed animate-fadeIn delay-300">
            We offer a wide range of high-quality ENT and cosmetic surgery products, meticulously designed to deliver unmatched precision, 
            consistent reliability, and superior clinical outcomes, 
            empowering healthcare professionals to provide the highest standard of care to their patients.
          </p>
        </div>
      </div>

      {/* BOTTOM CATEGORY BAR */}
      <div className="bg-[#2b86ad] w-full">
        <div className="max-w-300 mx-auto px-0 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Categories */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white text-base">
            {categories_data.map((cat, index) => (
              <button
                key={index}
                className="hover:opacity-80 transition border-r border-white last:border-0 pr-4 last:pr-0"
                onClick={() => handleClick(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-white cursor-pointer text-[#2b86ad] px-8 py-3 text-base rounded-full font-medium flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300">
            Download our Catalog
            <span>↗</span>
          </button>

        </div>
      </div>
    </section>
  );
}