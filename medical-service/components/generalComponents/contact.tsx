"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Instagram, MessageCircle, XIcon, Twitter } from "lucide-react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative bg-[#F7F8F8] py-16 lg:py-24 overflow-hidden">
      {/* Background Hex Patterns */}
      <div className="absolute top-0 left-0 z-0 opacity-30">
        <Image
          src="/hextop.svg"
          alt="Hex pattern top"
          width={275}
          height={194}
          className="w-auto h-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0 opacity-30">
        <Image
          src="/hex.svg"
          alt="Hex pattern bottom"
          width={327}
          height={282}
          className="w-auto h-auto"
        />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#00373E] uppercase mb-3">
            CONTACT US
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00373E] mb-4">
            We're Here to <br /> Support You
          </h2>
          <p className="text-[#00373E] text-[22px] sm:text-lg max-w-2xl mx-auto">
            Whether you're exploring options, dealing with admin overload, or
            planning a larger healthcare initiative, our team is here to help.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 mx-auto max-w-[1700px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section - Contact Details */}
            <div>
              <h3 className="md:text-[32px] text-[24px]  font-bold text-[#8B2635] mb-6">
                Contact Details:
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <p className="md:text-[20px] text-[16px] font-semibold text-[#00373E] mb-1">
                    Email:
                  </p>
                  <a
                    href="mailto:gladyswak@gmail.com"
                    className="md:text-[20px] text-[16px] text-[#00373E] hover:text-primary transition-colors"
                  >
                    virtualmoa@hotmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <p className="md:text-[20px] text-[16px] font-semibold text-[#00373E] mb-1">
                    Phone:
                  </p>
                  <a
                    href="tel:7804469013"
                    className="md:text-[20px] text-[16px] text-[#00373E] hover:text-primary transition-colors"
                  >
                    7804469013
                  </a>
                </div>
                <div className="flex  gap-2">
                  <p className="md:text-[20px] text-[16px] font-semibold text-[#00373E] mb-1">
                    Address:
                  </p>
                  <p className="md:text-[20px] text-[16px] text-[#00373E]">
                    1805 Collip View SW
                    <br />
                    Edmonton, Canada
                  </p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mb-8">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.49869 18.2082L11.8669 13.8399M11.8669 13.8399L7.49869 7.7915H10.3922L13.5471 12.1597M11.8669 13.8399L15.0218 18.2082H17.9154L13.5471 12.1597M17.9154 7.7915L13.5471 12.1597" stroke="#15ADBF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z" stroke="#15ADBF" stroke-width="2" />
                  </svg>
                </a>
              </div>

              <p className="text-sm text-gray-600">
                We typically respond within 12 hours.
              </p>
            </div>

            {/* Right Section - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-6 text-base font-semibold"
                >
                  Submit
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
