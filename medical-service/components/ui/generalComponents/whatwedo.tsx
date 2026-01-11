import React from "react";

export default function WhatWeDo() {
  return (
    <section className="bg-to-r[#FFE6D9] py-16 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left content */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-2">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-black mb-6">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            MedicalVirtualAssistant supports healthcare professionals by
            handling the non-clinical work that keeps practices running. We
            provide healthcare-trained virtual assistants who help with
            administration, billing, workflow coordination, and operational
            tasks, working remotely as an extension of your clinic. Our focus is
            on reducing administrative burden so doctors and healthcare teams
            can spend more time on patient care.
          </p>
          <p className="text-gray-700 leading-relaxed">
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
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {/* Top large image */}
          <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-sm">
            <img src="/wat1.jpg" alt="Doctor working on laptop" className=" " />
          </div>

          {/* Top small image */}
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-sm">
            <img src="/wat2.jpg" alt="Lab scientist" className="" />
          </div>

          {/* Bottom wide image */}
          <div className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-sm">
            <img src="/wat3.jpg" alt="Clinic room" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
