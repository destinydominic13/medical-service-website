import Image from "next/image";

const services = [
  {
    title: "Hands-On Administrative Support",
    description: "We handle the repetitive, time-consuming tasks that slow down your clinic so your focus stays where it matters: patient care.",
    image: "/best-services.jpg",
    services: [
      "Appointment scheduling & calendar management",
      "EMR/EHR documentation support",
      "Patient follow-ups & reminders",
      "Referral coordination",
      "Inbox & phone triage"
    ]
  },
  {
    title: "Operational Management",
    description: "We streamline the financial and operational backbone of your practice to reduce errors, improve cash flow, and enhance efficiency.",
    image: "/best-services-2.jpg",
    services: [
      "Medical billing & claims processing",
      "Insurance verification & follow-ups",
      "Revenue cycle management",
      "SOP documentation & workflow audits",
      "Practice efficiency optimization"
    ]
  },
  {
    title: "Strategic Consulting",
    description: "From launching new clinics to optimizing existing systems, we provide strategic insight grounded in real healthcare operations.",
    image: "/best-services-3.jpg",
    services: [
      "Clinic setup & scaling advisory",
      "SOP development & system alignment",
      "Healthcare process consulting",
      "Virtual team structuring",
      "Long-term operational planning"
    ]
  }
];

export const CoreSolutions = () => {
  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#5539380A]">
      {/* Background decorative circles - top right */}
      <div className="absolute top-0 left-0 w-full max-w-[428px] h-[521px] overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/color-circles.svg"
            alt=""
            fill
            className="object-contain"
            style={{ opacity: 0.2 }}
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[116px] h-[70px] pointer-events-none z-20">
        <Image
          src="/brown-circle.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">CORE SOLUTION</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Our best services for your solution
              </h2>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-[#66D7D1] mr-2 mt-1">•</span>
                      <span className="text-[#66D7D1] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
