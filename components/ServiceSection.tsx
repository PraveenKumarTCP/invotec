"use client";
import "aos/dist/aos.css";
import Image from "next/image";
import { AOSInit } from "./AOSInit";
import CosmeticSurgery from "./../public/assets/CosmeticSurgery.png"
import PatientResources from "./../public/assets/PatientResources.png"
import Providers from "./../public/assets/Providers.png"


const services = [
  {
    title: "Providers",
    description:
      "Invotec International has partnered with the ENT and Plastic Surgery Community for over two decades to provide medical devices and supplies in Jacksonville, Fl.",
    image: Providers,
  },
  {
    title: "Patient Resources",
    description:
      "Learn more about Middle Ear Infections and the treatment options available to patients. To understand hearing loss, we must know some about the way we hear.",
    image: PatientResources,
  },
  {
    title: "Cosmetic Surgery",
    description:
      "We offer many different types of medical instruments for your cosmetic surgery needs. The medical instruments we carry include but are not limited to brain and facelifts...",
    image: CosmeticSurgery,
  },
];

export default function ServicesSection() {
    AOSInit();

  return (
    <section className="bg-[#f3f4f6] py-24">
      <div className="max-w-300 mx-auto">

        {/* Header */}
        <div className="text-center max-w-6xl mx-auto ">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 px-3">
            Your Trusted Partner in Advanced ENT Care and Cosmetic Plastic Surgery
          </h2>

          <p className="mt-4 text-gray-600 px-4 leading-relaxed text-sm md:text-base md:px-0">
            Our team of highly skilled ENT specialists and plastic surgeons is dedicated to providing personalized care. With years of experience and a commitment to excellence, we ensure every patient receives the best treatment in a comfortable, caring environment.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col grow text-center mt-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed grow">
                  {service.description}
                </p>

                <div className="mt-6">
                  <button className="text-sky-600 text-sm font-medium hover:underline inline-flex items-center gap-1 cursor-pointer">
                    Read More <span>↗</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}