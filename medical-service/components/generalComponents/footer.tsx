
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const navigationLinks = [
  { title: "What We Do", href: "#what-we-do" },
  { title: "Core Solutions", href: "#core-solutions" },
  { title: "Workshop & Trainings", href: "#workshop-trainings" },
  { title: "FAQ", href: "#faq" },
];

export const Footer = () => {
  return (
    <footer
      className="relative py-12 lg:py-16"
      style={{
        background: "linear-gradient(to right, #66D7D1, #006B6B)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg p-3 sm:p-4">
              <Image
                src="/logo-color.svg"
                alt="MOA Medical Virtual Assistant Logo"
                width={80}
                height={80}
                className="w-auto h-auto"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-white hover:text-teal-100 transition-colors text-sm sm:text-base font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#553838] text-sm sm:text-base">
            © 2026 Medical Virtual Assistant. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a
              href="#"
              className="bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            </a>
            <a
              href="#"
              className="bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            </a>
            <a
              href="#"
              className="bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            </a>
            <a
              href="#"
              className="bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};