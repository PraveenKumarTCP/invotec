"use client";
import NetBackground from "@/public/assets/NetBackground.png";
import Image from "next/image";
import AboutImage from "@/public/assets/Group 79.png";
import { AOSInit } from "./AOSInit"; 
export default function AboutSection() {
  AOSInit();

  return (
    <section className={`relative bg-white w-full  overflow-hidden py-16 md:py-24`}
  >
        <div style={{ backgroundImage: `url(${NetBackground.src})`, backgroundSize: "contain" }} className="absolute inset-0 opacity-[0.18] z-0">
        </div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.04] 
        bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] 
        bg-size-[24px_24px]" 
      />

      <div className="relative z-10 max-w-325 mx-auto px-6 md:px-10 lg:px-12 
        grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE */}
        <div data-aos="fade-right">

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            About Invotec
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
            Invotec International was founded in 1990 in Jacksonville, Florida.
            Since our beginning, we have evolved into a world class supplier of
            Instruments, Optics, Implants and supplies for ENT, Plastic and
            Cosmetic Surgery. Our mission is to provide a wide selection of
            superior quality medical devices & supplies at an excellent value
            for our customers.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
            We have domestic and international sales reps worldwide. Contact us
            today to see how we can provide a solution for you.
          </p>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            
            <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 
              hover:shadow-md transition duration-300">
              <h4 className="text-sky-600 font-medium text-sm">
                Our Mission
              </h4>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Our mission is to provide a comprehensive selection of
                high-quality medical products that combine:
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 
              hover:shadow-md transition duration-300">
              <h4 className="text-sky-600 font-medium text-sm">
                Global Reach
              </h4>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Invotec International has sales representatives worldwide,
                providing customers with personalized service and reliable support.
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-8 md:mt-10 bg-[#298DBC] hover:bg-sky-700 
            text-white px-6 py-3 rounded-full text-base font-medium 
            flex items-center gap-2 transition-transform 
            hover:-translate-y-1 duration-300 cursor-pointer">
            Know More about us
            <span>↗</span>
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">

          {/* Blue Shape (Responsive) */}
          {/* <div className="absolute 
            w-65 h-65 
            sm:w-[320px] sm:h-80
            lg:w-105 lg:h-105 
            bg-[#2f86a6] 
            rounded-xl 
            -right-6 sm:-right-10 lg:right-0 
            top-0 
            z-0" 
          /> */}

          {/* Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl 
            w-full max-w-130">
            <Image
              src={AboutImage}
              alt="Medical Team"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}