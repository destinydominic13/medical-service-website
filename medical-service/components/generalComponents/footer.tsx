
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
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="white" />
                <path d="M19.4638 27V18.7894H22.3585L22.7919 15.5895H19.4637V13.5465C19.4637 12.6201 19.7339 11.9888 21.1293 11.9888L22.909 11.988V9.12607C22.6012 9.08715 21.5447 9 20.3157 9C17.7497 9 15.9929 10.4912 15.9929 13.2297V15.5895H13.0908V18.7894H15.9929V26.9999H19.4638V27Z" fill="#553938" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="white" />
                <path d="M9.5 27.0371L17.0484 19.4887M17.0484 19.4887L9.5 9.03711H14.5L19.9516 16.5855M17.0484 19.4887L22.5 27.0371H27.5L19.9516 16.5855M27.5 9.03711L19.9516 16.5855" stroke="#553938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="white" />
                <path d="M18 9C21.5951 9 23.3928 8.9998 24.6875 9.85645C25.2657 10.239 25.761 10.7343 26.1436 11.3125C27.0002 12.6072 27 14.4049 27 18C27 21.5951 27.0002 23.3928 26.1436 24.6875C25.761 25.2657 25.2657 25.761 24.6875 26.1436C23.3928 27.0002 21.5951 27 18 27C14.4049 27 12.6072 27.0002 11.3125 26.1436C10.7343 25.761 10.239 25.2657 9.85645 24.6875C8.9998 23.3928 9 21.5951 9 18C9 14.4049 8.9998 12.6072 9.85645 11.3125C10.239 10.7343 10.7343 10.239 11.3125 9.85645C12.6072 8.9998 14.4049 9 18 9ZM18 13.3408C15.4268 13.3408 13.3409 15.4268 13.3408 18C13.3408 20.5733 15.4267 22.6592 18 22.6592C20.5732 22.6591 22.6592 20.5733 22.6592 18C22.6591 15.4268 20.5732 13.3409 18 13.3408ZM18 14.917C19.7025 14.9171 21.0829 16.2975 21.083 18C21.083 19.7026 19.7026 21.0829 18 21.083C16.2973 21.083 14.917 19.7027 14.917 18C14.9171 16.2974 16.2974 14.917 18 14.917ZM22.8438 12.0117C22.2392 12.0117 21.7482 12.5019 21.748 13.1064C21.748 13.7111 22.2391 14.2012 22.8438 14.2012C23.4482 14.2009 23.9385 13.7109 23.9385 13.1064C23.9383 12.5021 23.4481 12.012 22.8438 12.0117Z" fill="#553938" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-white rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="white" />
                <path d="M9 11.4201C9 10.8428 9.20271 10.3666 9.60811 9.99148C10.0135 9.6163 10.5405 9.42871 11.1892 9.42871C11.8263 9.42871 12.3417 9.6134 12.7355 9.98282C13.1409 10.3638 13.3436 10.8602 13.3436 11.472C13.3436 12.0261 13.1467 12.4879 12.7529 12.8573C12.3475 13.2382 11.8147 13.4287 11.1544 13.4287H11.1371C10.5 13.4287 9.98456 13.2382 9.59073 12.8573C9.19691 12.4763 9 11.9972 9 11.4201ZM9.22587 26.5716V15.0045H13.083V26.5716H9.22587ZM15.2201 26.5716H19.0772V20.1127C19.0772 19.7086 19.1236 19.3969 19.2162 19.1776C19.3784 18.7851 19.6245 18.4532 19.9546 18.182C20.2847 17.9107 20.6988 17.775 21.1969 17.775C22.4942 17.775 23.1429 18.6466 23.1429 20.3897V26.5716H27V19.9395C27 18.231 26.5946 16.9352 25.7838 16.0521C24.973 15.169 23.9015 14.7274 22.5695 14.7274C21.0753 14.7274 19.9112 15.3681 19.0772 16.6495V16.6841H19.0598L19.0772 16.6495V15.0045H15.2201C15.2432 15.3739 15.2548 16.5225 15.2548 18.4504C15.2548 20.3782 15.2432 23.0853 15.2201 26.5716Z" fill="#553938" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};