"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Invotec from "@/public/assets/Invotec-Logo-Basic-FC--white-text 1.png";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer className="bg-linear-to-b from-[#1c1f24] to-[#14161a] text-gray-400 pt-20 pb-10">
      <div className="max-w-325 mx-auto px-8">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Column 1 */}
          <div data-aos="fade-up">
            <Link href="/" className="flex items-center">
          <Image
            src={Invotec}
            alt="Invotec Logo"
            width={180}
            height={24}
            priority
          />
        </Link>

            {/* Email Input */}
            <div className="mt-8 relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border-b border-gray-600 pb-2 text-sm placeholder-gray-500 focus:outline-none focus:border-sky-500 transition"
              />
              <span className="absolute right-0 bottom-2 text-gray-400">
                ↗
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#23272d] hover:bg-sky-600 transition cursor-pointer"
                >
                  <Icon size={16} className="text-gray-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-sky-500 font-medium text-sm">Quick links</h4>
            <ul className="mt-6 space-y-3 text-sm cursor-pointer">
              <li className="hover:text-white transition">Products</li>
              <li className="hover:text-white transition">Video Demonstrations</li>
              <li className="hover:text-white transition">Instructions for Use</li>
              <li className="hover:text-white transition">
                Instrument Management & Protection
              </li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-sky-500 font-medium text-sm">
              Customer Service
            </h4>
            <ul className="mt-6 space-y-3 text-sm cursor-pointer">
              <li className="hover:text-white transition">Provider Resources</li>
              <li className="hover:text-white transition">Patient Resources</li>
              <li className="hover:text-white transition">Returns</li>
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Our Guarantee</li>
              <li className="hover:text-white transition">Shipping</li>
            </ul>
          </div>

          {/* Events */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-sky-500 font-medium text-sm">
              Events & Meetings
            </h4>
            <ul className="mt-6 space-y-3 text-sm cursor-pointer">
              <li className="hover:text-white transition">ASAPS</li>
              <li className="hover:text-white transition">AAO-HNSF OTO Expo</li>
              <li className="hover:text-white transition">
                Global Aesthetics Conference
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-sky-500 font-medium text-sm">
              Contact Info
            </h4>

            <div className="mt-6 text-sm space-y-4">
              <div>
                <p className="text-gray-500">Location</p>
                <p>
                  6833 Phillips Industrial Blvd,<br />
                  Jacksonville, FL 32256
                </p>
              </div>

              <div>
                <p className="text-gray-500">Call Us On</p>
                <p>United States (800) 998 8580</p>
                <p>International (904) 880 1229</p>
              </div>

              <div>
                <p className="text-gray-500">Fax</p>
                <p>(904) 886 9517</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-sm text-gray-500">
          © Copyright © Invotec International Inc
        </div>
      </div>
    </footer>
  );
}