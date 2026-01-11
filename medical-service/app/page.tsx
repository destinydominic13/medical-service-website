import { Hero } from "@/components/hero"
import WhatWeDo from "@/components/generalComponents/whatwedo"
import { WorkShop } from "@/components/generalComponents/workshop"
import { HowItWorks } from "@/components/generalComponents/howitworks"
import { ContactUs } from "@/components/generalComponents/contact"


export default function Page() {
  return (
    <div className="relative">
      <Hero />
      <WhatWeDo />
      <HowItWorks/>
      <WorkShop/>
      <ContactUs />
    </div>
  )
}
