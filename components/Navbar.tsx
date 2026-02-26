"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Invotec from "@/public/assets/Invotec-Logo-Basic-FC--white-text 1.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = ["Home", "About", "Services", "Contact"]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50
      bg-[#484848]/95 backdrop-blur-md
      text-base text-white
      transition-transform duration-500 ease-in-out
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-350 mx-auto flex items-center justify-between px-6 md:px-12 h-18">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Invotec}
            alt="Invotec Logo"
            width={180}
            height={24}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="cursor-pointer bg-[#298DBC] hover:bg-sky-600 transition px-6 py-2 rounded-full font-medium flex items-center gap-2">
            Contact Us
            <span>↗</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-[#4e4e4e]
        overflow-hidden transition-all duration-500
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-gray-200 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}

          <button className="mt-4 bg-[#298DBC] px-6 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2">
            Contact Us
            <span>↗</span>
          </button>
        </div>
      </div>
    </header>
  )
}