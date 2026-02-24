"use client";
import "aos/dist/aos.css";
import Image from "next/image";
import { AOSInit } from "./AOSInit";
import CosmeticSurgery from "./../public/assets/CosmeticSurgery.png"
import PatientResources from "./../public/assets/PatientResources.png"
import Providers from "./../public/assets/Providers.png"
import { Facebook, Linkedin, Mail } from "lucide-react";
import NetBackground from "@/public/assets/NetBackground.png";
import Jeffrey from "@/public/assets/CEO_Jeffery 1.png";
import Susan from "@/public/assets/Ken Pawlowski 1.png";
import Scott from "@/public/assets/Hector_salazar 1.png";

const teams = [
  {
    title: "Jeffrey Aull",
    description:
      "Chief Executive officer",
    image: Jeffrey,
    linkedin: "",
    facebook: ""
  },
  {
    title: "Susan Reece",
    description: "Director of Operations",
    image: Susan,
    linkedin: "",
    facebook: ""
  },
  {
    title: "Scott Aull",
    description: "Director of International Sales",
    image: Scott,
    linkedin: "",
    facebook: ""
  },
];

export default function ExpertSection() {
    AOSInit();

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:pt-24 overflow-hidden">

    {/* Background Pattern */}
    <div
        style={{ backgroundImage: `url(${NetBackground.src})` }}
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.18] z-0"
    />

    <div className="relative z-10 max-w-325 mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Meet Our Expert Team
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            Our team of highly skilled ENT specialists and plastic surgeons is
            dedicated to providing personalized care. With years of experience and
            a commitment to excellence, we ensure every patient receives the best
            treatment in a comfortable, caring environment.
        </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        {teams.map((service, index) => (
            <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="bg-[#F9F9F9] border border-gray-100 rounded-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.05)]
            hover:shadow-xl transition-all duration-300
            hover:-translate-y-2 p-6 sm:p-8
            flex flex-col items-center text-center"
            >
            {/* Avatar */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px,
                        (max-width: 768px) 96px,
                        112px"
                />
            </div>

            {/* Content */}
            <div className="mt-5 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
                </p>

                {/* Social Icons */}
                <div className="mt-5 flex justify-center gap-3">
                {[Linkedin, Facebook, Mail].map((Icon, i) => (
                    <button
                    key={i}
                    className="w-9 h-9 flex items-center justify-center
                    rounded-full text-blue-500
                    hover:bg-sky-600 hover:text-white
                    transition-all duration-300"
                    >
                    <Icon size={16} />
                    </button>
                ))}
                </div>
            </div>
            </div>
        ))}

        {/* CTA Row */}

        </div>
        <div className="flex justify-center mt-20">
                 <button className="bg-[#298DBC] text-[#] px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300">
            View All Our Teams
            <span>↗</span>
          </button>
        </div>
    </div>
    </section>
  );
}