"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Dr. Aris V.",
    text: "As a family physician in a busy Alberta practice, I was spending three hours every night on EMR data entry. Since partnering with MVA, I've reclaimed my evenings. My assistant handles the charts and referrals with such precision that I can finally focus entirely on the patient in front of me. It has been a life-changer for my work-life balance.",
    image: "/testimonial-1.jpg", // Placeholder - update with actual image path
  },
  {
    name: "Dr. James K.",
    text: "Billing errors and referral delays were costing my surgical practice significant revenue. The MVA team stepped in and audited our workflow, taking over the complex billing codes and follow-ups. Within the first month, our claim rejection rate dropped by 40%. They are an investment that pays for itself.",
    image: "/testimonial-2.jpg", // Placeholder - update with actual image path
  },
  {
    name: "Clearwater Clinic",
    text: "MedicalVirtualAssistant took on the administrative workload that was overwhelming our small practice. The transition was seamless, and within weeks, we saw a significant reduction in stress across the team. Our patients have noticed the improved efficiency too.",
    image: "/testimonial-3.jpg", // Placeholder - update with actual image path
  },
  {
    name: "Dr. Sarah M.",
    text: "The HIPAA-compliant processes and healthcare-trained assistants gave me confidence from day one. I can trust them with sensitive patient information, and they understand the medical terminology and workflows perfectly.",
    image: "/testimonial-4.jpg", // Placeholder - update with actual image path
  },
  {
    name: "Dr. Michael T.",
    text: "What impressed me most was how quickly they adapted to our EMR system. Within days, they were handling appointment scheduling, patient follow-ups, and insurance verifications like they'd been part of our team for years.",
    image: "/testimonial-5.jpg", // Placeholder - update with actual image path
  },
];

export const HappyMedic = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <section className="bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 lg:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
              Happy Medical Users
            </h2>
            <p className="text-base sm:text-lg text-black">
              Our customers speak for us.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                "bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",
                "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              )}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                "bg-[#553938] hover:bg-[#7A3A0A] disabled:opacity-50 disabled:cursor-not-allowed",
                "focus:outline-none focus:ring-2 focus:ring-[#553938] focus:ring-offset-2"
              )}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Profile Image */}
                  <div className="mb-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          if (target.parentElement) {
                            const fallback = document.createElement("div");
                            fallback.className = "w-full h-full bg-[#66D7D1] flex items-center justify-center";
                            fallback.innerHTML = `<span class="text-white font-bold text-xl">${testimonial.name.charAt(0)}</span>`;
                            target.parentElement.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-black mb-4">
                    {testimonial.name}
                  </h3>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {testimonial.text}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
