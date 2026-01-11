import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const programs = [
  {
    title: "MOA Refresher Programs",
    description: "Hands-on refresher training for Medical Office Assistants to ensure consistency, accuracy, and efficiency.",
  },
  {
    title: "EMR & Workflow Training",
    description: "Customized training aligned with your clinic's specific EMR system and operational structure.",
  },
  {
    title: "Medical Office Procedures",
    description: "Comprehensive training on standardized operating procedures (SOPs) designed to streamline patient flow and optimize clinic administration.",
  },
  {
    title: "Medical Billing Workshops",
    description: "Reduce claim rejections, improve reimbursements, and stay updated with billing regulations.",
  },
  {
    title: "Leadership & Operations Training",
    description: "Equip clinic managers and administrators with modern healthcare operations skills.",
  },
];

export function WorkShop() {
  return (
    <section id="workshop-trainings" className="bg-[#fff6ef] py-8 lg:py-16 relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center z-10 order-1 lg:order-1">
            <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-3">
              WORKSHOPS & TRAINING
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6">
              We Don't Just Support Clinics <br className="hidden sm:block" /> We Strengthen Them
            </h2>

            <p className="text-gray-700 text-base sm:text-lg mb-10 leading-relaxed">
              Our education programs ensure your staff, systems, and workflows
              stay compliant, current, and confident in a rapidly evolving
              healthcare landscape.
            </p>

            {/* Programs List - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-6 mb-12">
              {programs.map((program, index) => (
                <div key={index} className="flex gap-2 sm:gap-4">
                  <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-500 text-white shrink-0 mt-0.5">
                    <Check className="h-3 w-3 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-black text-xs sm:text-base lg:text-lg mb-1 leading-tight">
                      {program.title}
                    </h4>
                    <p className="text-[10px] sm:text-sm lg:text-base text-gray-600 leading-tight sm:leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="w-fit bg-primary hover:bg-primary/90 text-white rounded-lg px-8"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Right Image - Hugs right edge, curved on left (desktop) */}
          <div className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] order-2 lg:order-2">
            {/* Mobile Image */}
            <div className="lg:hidden relative w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/offer.jpg"
                alt="Modern medical examination room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Image positioned to extend to viewport edge */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%]">
        <div className="h-full w-full overflow-hidden rounded-l-[2rem] shadow-lg">
          <Image
            src="/offer.jpg"
            alt="Modern medical examination room"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
