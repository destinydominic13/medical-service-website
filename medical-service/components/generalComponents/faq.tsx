"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const faqQuestions = [
  {
    question: "Who uses MedicalVirtualAssistant services?",
    answer: "Our services are designed for healthcare professionals including doctors, clinic managers, medical administrators, and healthcare facilities looking to streamline their administrative operations and improve efficiency."
  },
  {
    question: "What exactly does a virtual healthcare assistant do?",
    answer: "A virtual healthcare assistant handles administrative tasks such as appointment scheduling, EMR/EHR documentation, patient follow-ups, medical billing, insurance verification, and other time-consuming tasks that allow healthcare professionals to focus on patient care."
  },
  {
    question: "Are your assistants trained for healthcare environments?",
    answer: "Yes, all our assistants are specifically trained for healthcare environments. They understand medical terminology, HIPAA compliance requirements, and are experienced with various EMR/EHR systems used in modern clinics."
  },
  {
    question: "How do you handle patient data and privacy?",
    answer: "We maintain strict HIPAA and PIPEDA compliance standards. All our processes are designed to ensure patient data security and privacy. We use secure, encrypted systems and our assistants are trained in privacy protocols."
  },
  {
    question: "Do you offer training and workshops as well?",
    answer: "Yes, we offer comprehensive training and workshops for clinic staff, covering topics such as medical office procedures, leadership & operations training, and SOP development to help optimize your clinic's operations."
  }
];

// Custom Accordion Trigger with "+" icon
function CustomAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-end justify-between gap-4 py-4 text-left font-medium transition-all outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45",
          className
        )}
        {...props}
      >
        <span className="text-black">{children}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 transition-transform duration-200 text-black"
        >
          <path
            d="M10 4V16M4 10H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export const FAQ = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <div id="faq" className="w-full">
      {/* Newsletter Section */}
      <section className="bg-[#00A6A6] py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm uppercase tracking-wider text-white mb-3">
                JOIN OUR NEWSLETTER
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                Receive health & wellness updates and tips right to your inbox
              </h2>
            </div>

            {/* Right Content - Email Form */}
            <div className="w-full lg:w-auto bg-white rounded-lg p-4">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-black font-medium text-sm mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-md text-black bg-white border-none outline-none focus:ring-2 focus:ring-white/50 min-w-[250px] sm:min-w-[300px]"
                    required
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    type="submit"
                    className="bg-[#553938] hover:bg-[#7A3A0A] text-white rounded-md px-6 py-3 h-auto whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text and Image */}
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">
                  FREQUENTLY ASKED QUESTION
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight mb-6">
                  Find answers to common questions about our services.
                </h2>
              </div>
              
              {/* Image */}
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/accordion-side.jpg"
                  alt="Person using tablet with stylus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="flex flex-col justify-start">
              <Accordion type="single" collapsible className="w-full">
                {faqQuestions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg px-4 py-4 mb-3 transition-colors last:mb-0 bg-[#FCFCFC]"
                  >
                    <CustomAccordionTrigger className="text-base sm:text-lg font-medium text-black">
                      {faq.question}
                    </CustomAccordionTrigger>
                    <AccordionContent className="text-gray-700 text-sm sm:text-base leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
