import React from "react";

export function WorkShop() {
  return (
    <section className="bg-[#fff6ef] py-20 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-3">
            Workshops & Training
          </p>

          <h2 className="text-4xl font-bold text-black leading-tight mb-6">
            We Don’t Just Support Clinics <br /> We Strengthen Them
          </h2>

          <p className="text-gray-700 max-w-xl mb-10">
            Our education programs ensure your staff, systems, and workflows
            stay compliant, current, and confident in a rapidly evolving
            healthcare landscape.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  MOA Refresher Programs
                </h4>
                <p className="text-sm text-gray-600">
                  Hands-on refresher training for Medical Office Assistants to
                  ensure consistency, accuracy, and efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  Medical Billing Workshops
                </h4>
                <p className="text-sm text-gray-600">
                  Reduce claim rejections, improve reimbursements, and stay
                  updated with billing regulations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  EMR & Workflow Training
                </h4>
                <p className="text-sm text-gray-600">
                  Customized training aligned with your clinic’s specific EMR
                  system and operational structure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  Leadership & Operations Training
                </h4>
                <p className="text-sm text-gray-600">
                  Equip clinic managers and administrators with modern
                  healthcare operations skills.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-black">
                  Medical Office Procedures
                </h4>
                <p className="text-sm text-gray-600">
                  Comprehensive training on standardized operating procedures
                  (SOPs) designed to streamline patient flow and optimize clinic
                  administration.
                </p>
              </div>
            </div>
          </div>

          <button className="w-fit rounded-lg bg-teal-600 px-6 py-3 text-white font-medium hover:bg-teal-700 transition">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="h-full w-full overflow-hidden rounded-[2rem] shadow-lg">
            <img src="/work1.jpg" alt="Clinic training room" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
