import React from "react";

export default function WorkShop() {
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

        <div className="relative">
          <div className="h-full w-full overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src="/images/clinic-training.jpg"
              alt="Clinic training room"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-[#ffff] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
          How It Works
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 mb-8 sm:mb-12 lg:mb-16 px-4">
          Three Steps to a More <br className="hidden md:block" /> Efficient
          Clinic.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl sm:rounded-[59px] p-6 sm:p-8 lg:p-10 shadow-sm w-full max-w-[387px] min-h-[300px] sm:min-h-[350px] lg:h-[404px] flex flex-col">
            <div className="flex flex-col justify-around h-full items-center">
              <span className="inline-block rounded-full bg-yellow-400 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6">
                Step 1:
              </span>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-teal-900 mb-3 sm:mb-4 text-center">
                  The Needs Assessment.
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center px-2">
                  A 15-minute audit to identify your clinic's biggest administrative
                  bottlenecks.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl sm:rounded-[59px] p-6 sm:p-8 lg:p-10 shadow-sm w-full max-w-[387px] min-h-[300px] sm:min-h-[350px] lg:h-[404px] flex flex-col">
            <div className="flex flex-col justify-around h-full items-center">
              <span className="inline-block rounded-full bg-teal-400 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6">
                Step 2:
              </span>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-teal-900 mb-3 sm:mb-4 text-center">
                  Custom Onboarding
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center px-2">
                  We match you with a trained assistant and align them with your
                  unique SOPs and software.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl sm:rounded-[59px] p-6 sm:p-8 lg:p-10 shadow-sm w-full max-w-[387px] min-h-[300px] sm:min-h-[350px] lg:h-[404px] flex flex-col">
            <div className="flex flex-col justify-around h-full items-center">
              <span className="inline-block rounded-full bg-pink-400 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6">
                Step 3:
              </span>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-teal-900 mb-3 sm:mb-4 text-center">
                  The 30-Day Money Back Guarantee
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center px-2">
                  Start with full support. If you aren't more efficient within 30
                  days, we'll make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
