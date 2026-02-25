"use client";

import Image from "next/image";
import FooterBg from "@/public/assets/footer-bg.png";
import { AOSInit } from "./AOSInit";

export default function KnowMore() {
  AOSInit();

  return (
    <section className="px-4 bg-white sm:px-6 lg:px-8 pb-12 md:pb-20">
      <div
        className="relative max-w-300 mx-auto rounded-2xl overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background Image */}
        <Image
          src={FooterBg}
          alt="Medical Background"
          fill
          className="object-cover"
          priority
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#298DBCBF]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-24 px-6">
          <h2 className="text-white text-md md:text-[25px]  font-semibold max-w-200">
            Are you prepared to place your order with Invotec? We’re here to assist you every step of the way!
          </h2>

          <button className="mt-6 bg-white text-[#298DBC] px-8 py-3 rounded-full text-base font-medium flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300">
            Contact Us
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}