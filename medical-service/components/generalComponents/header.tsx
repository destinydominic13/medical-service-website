"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigationItems = [
    { title: "Home", href: "#hero" },
    { title: "What We Do", href: "#what-we-do" },
    { title: "Core Solutions", href: "#core-solutions" },
    { title: "Workshop & Trainings", href: "#workshop-trainings" },
    { title: "FAQ", href: "#faq" },
]

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
        const headerOffset = 100 // Adjust based on your header height
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })
    }
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10">

            {/* Navigation bar with transparent gradient background */}
            <nav
                className="relative px-4 sm:px-6 lg:px-8 backdrop-blur-sm mx-auto"
                style={{
                    background: "linear-gradient(to right, #00A6A690, #006B6B)"
                }}
            >
                <div className="mx-auto flex items-center lg:justify-between lg:max-w-[1500px] justify-between py-6 max-w-8xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 z-10">
                        <Image src="/logomedic.svg" alt="Logo" width={100} height={100} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList className="gap-1">
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <Link 
                                            href={item.href} 
                                            legacyBehavior 
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    "bg-transparent text-white hover:bg-white/20 hover:text-white data-active:bg-white/20 data-active:text-white cursor-pointer"
                                                )}
                                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, item.href)}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    {/* Contact Us Button - Desktop Only */}
                    <Button
                        asChild
                        className="hidden lg:flex bg-primary hover:bg-primary/90 text-white rounded-md font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        <Link 
                            href="#contact"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, "#contact")}
                        >
                            Contact Us
                        </Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 z-50 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div
                        className="lg:hidden absolute top-full left-0 right-0 z-40 backdrop-blur-sm border-t border-[#006B6B]/50 shadow-lg"
                        style={{
                            background: "linear-gradient(to right, rgba(102, 215, 209, 0.98), rgba(0, 107, 107, 0.98))"
                        }}
                    >
                        <div className="px-4 py-6 space-y-3">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="block text-white hover:text-teal-100 hover:bg-white/10 rounded-md px-4 py-3 transition-colors text-base font-medium cursor-pointer"
                                    onClick={(e) => {
                                        handleSmoothScroll(e, item.href)
                                        setMobileMenuOpen(false)
                                    }}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            {/* Contact Us Button - Mobile Only */}
                            <Button
                                asChild
                                className="w-full bg-[#00A6A6] hover:bg-[#006B6B] text-white rounded-md mt-2 py-6 text-base font-medium"
                            >
                                <Link 
                                    href="#contact" 
                                    onClick={(e) => {
                                        handleSmoothScroll(e, "#contact")
                                        setMobileMenuOpen(false)
                                    }}
                                >
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
