import React from "react";
import Image from "next/image";

const stats = [
  {
    heading: "HIPAA & PIPEDA",
    description: "Compliant",
  },
  {
    heading: "+1200",
    description: "Trained Medical Virtual Assistants",
  },
  {
    heading: "EMR / EHR",
    description: "Experienced",
  },
  {
    heading: "Trusted By",
    description: "Clinics In Canada & Beyond",
  },
];

export default function WhatWeDo() {
  return (
    <div id="what-we-do" className="relative bg-linear-to-r from-[#00A6A690] to-[#006B6B] ">
      <section
        className="lg:pt-16 py-8 px-4 top-0 left-0 w-full bg-linear-to-b from-[#FFE6D9] to-[#FFFFFF] rounded-t-4xl"
      >
        <div className="mx-auto max-w-[1500px]">
          {/* Top Banner Section */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-6 sm:gap-4 md:gap-8 mb-8 rounded-xl">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <h3 className="text-primary text-base sm:text-lg md:text-xl font-semibold mb-1">
                    {stat.heading}
                  </h3>
                  <p className="text-[#333333] text-xs sm:text-sm md:text-base font-semibold">
                    {stat.description}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left content */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-2">
                ABOUT US
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                MedicalVirtualAssistant supports healthcare professionals by
                handling the non-clinical work that keeps practices running. We
                provide healthcare-trained virtual assistants who help with
                administration, billing, workflow coordination, and operational
                tasks, working remotely as an extension of your clinic. Our focus is
                on reducing administrative burden so doctors and healthcare teams
                can spend more time on patient care.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Built for healthcare environments, our approach prioritizes
                structure, security, and alignment with existing clinic workflows.
                We support practices of all sizes, as well as healthcare
                organizations and global health initiatives, with services designed
                to be efficient, compliant, and scalable. Whether for day-to-day
                support or long-term operational improvement, we help strengthen the
                systems behind healthcare delivery.
              </p>
            </div>

            {/* Right images */}
            <div className="grid grid-cols-3 gap-4">
              {/* Top left image - Doctor with laptop */}
              <div className="col-span-2 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/wat1.jpg"
                  alt="Doctor working on laptop with X-ray images"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top right image - Lab scientist */}
              <div className="col-span-1 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/wat3.jpg"
                  alt="Lab scientist working with equipment"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom wide image - Clinic room */}
              <div className="col-span-3 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/wat2.jpg"
                  alt="Modern medical examination room"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
