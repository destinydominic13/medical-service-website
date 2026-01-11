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
    { title: "Home", href: "/" },
    { title: "What We Do", href: "#what-we-do" },
    { title: "Core Solutions", href: "#core-solutions" },
    { title: "Workshop & Trainings", href: "#workshop-trainings" },
    { title: "FAQ", href: "#faq" },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full">

            {/* Navigation bar with transparent gradient background */}
            <nav
                className="relative px-4 sm:px-6 lg:px-8 backdrop-blur-sm"
                style={{
                    background: "linear-gradient(to right, rgba(45, 212, 191, 0.95), rgba(20, 184, 166, 0.95), rgba(13, 148, 136, 0.95))"
                }}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
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
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    "bg-transparent text-white hover:bg-white/20 hover:text-white data-active:bg-white/20 data-active:text-white"
                                                )}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    {/* Contact Us Button */}
                    <Button
                        asChild
                        className="bg-teal-700 hover:bg-teal-800 text-white rounded-md px-6 py-5"
                    >
                        <Link href="#contact">Contact Us</Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 z-10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={cn(
                        "lg:hidden absolute top-full left-0 right-0 bg-teal-600/95 backdrop-blur-sm border-t border-teal-700/50 transition-all duration-300 ease-in-out",
                        mobileMenuOpen
                            ? "max-h-screen opacity-100 visible"
                            : "max-h-0 opacity-0 invisible overflow-hidden"
                    )}
                >
                    <div className="px-4 py-6 space-y-4">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="block text-white hover:text-teal-100 hover:bg-white/10 rounded-md px-4 py-2 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded-md mt-4"
                        >
                            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
