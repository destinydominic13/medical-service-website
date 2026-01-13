import { Hero } from "@/components/hero"
import WhatWeDo from "@/components/generalComponents/whatwedo"
import { WorkShop } from "@/components/generalComponents/workshop"
import { HowItWorks } from "@/components/generalComponents/howitworks"
import { ContactUs } from "@/components/generalComponents/contact"
import { CoreSolutions } from "@/components/generalComponents/core-solutions"
import { FAQ } from "@/components/generalComponents/faq"

export default function Page() {
  return (
    <div className="relative">
      <Hero />
      <WhatWeDo />
      <HowItWorks/>
      <CoreSolutions/>
      <WorkShop/>
      <FAQ/>	
      <ContactUs />
    </div>
  )
}
