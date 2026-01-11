import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const featureBadges = [
    {
        title: "Save 20+ Hours Monthly",
        description: "Offload routine administrative tasks and reclaim valuable clinical time.",
        icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41.1129" height="41.1129" rx="20.5565" fill="#FFE6D9" />
            <path d="M18.1327 11.7888C17.8494 11.7888 17.6121 11.6928 17.4207 11.5008C17.2294 11.3088 17.1334 11.0715 17.1327 10.7888C17.1321 10.5062 17.2281 10.2688 17.4207 10.0768C17.6134 9.88482 17.8507 9.78882 18.1327 9.78882H22.1327C22.4161 9.78882 22.6537 9.88482 22.8457 10.0768C23.0377 10.2688 23.1334 10.5062 23.1327 10.7888C23.1321 11.0715 23.0361 11.3092 22.8447 11.5018C22.6534 11.6945 22.4161 11.7902 22.1327 11.7888H18.1327ZM18.1327 23.5388L17.0327 21.3388C16.9494 21.1555 16.8244 21.0178 16.6577 20.9258C16.4911 20.8338 16.3161 20.7882 16.1327 20.7888H11.1827C11.4327 18.5388 12.4077 16.6432 14.1077 15.1018C15.8077 13.5605 17.8161 12.7895 20.1327 12.7888C21.1661 12.7888 22.1577 12.9555 23.1077 13.2888C24.0577 13.6222 24.9494 14.1055 25.7827 14.7388L26.4827 14.0388C26.6661 13.8555 26.8994 13.7595 27.1827 13.7508C27.4661 13.7422 27.6994 13.8382 27.8827 14.0388C28.0661 14.2222 28.1577 14.4555 28.1577 14.7388C28.1577 15.0222 28.0661 15.2555 27.8827 15.4388L27.1827 16.1388C27.7161 16.8388 28.1411 17.5765 28.4577 18.3518C28.7744 19.1272 28.9827 19.9395 29.0827 20.7888H24.7577L23.0327 17.3388C22.8494 16.9555 22.5494 16.7638 22.1327 16.7638C21.7161 16.7638 21.4161 16.9555 21.2327 17.3388L18.1327 23.5388ZM20.1327 30.7888C17.8161 30.7888 15.8077 30.0182 14.1077 28.4768C12.4077 26.9355 11.4327 25.0395 11.1827 22.7888H15.5077L17.2327 26.2388C17.4161 26.6222 17.7161 26.8138 18.1327 26.8138C18.5494 26.8138 18.8494 26.6222 19.0327 26.2388L22.1327 20.0388L23.2327 22.2388C23.3161 22.4222 23.4411 22.5598 23.6077 22.6518C23.7744 22.7438 23.9494 22.7895 24.1327 22.7888H29.0827C28.8327 25.0388 27.8621 26.9345 26.1707 28.4758C24.4794 30.0172 22.4667 30.7882 20.1327 30.7888Z" fill="#553938" />
        </svg>
        ,
        iconBg: "bg-[#FFE6D9]",
        iconColor: "text-[#8B4513]",
        position: "top-left",
    },
    {
        title: "EMR / EHR Ready",
        description: "Experienced with electronic medical record systems used in modern clinics.",
        icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41.1129" height="41.1129" rx="20.5565" fill="url(#paint0_linear_489_2096)" />
            <path d="M28.6346 12.432C27.9888 11.7862 27.1449 11.4633 26.3083 11.4633C25.4644 11.4633 24.6132 11.7862 23.9674 12.4393L20.1369 16.2772L16.299 12.4393C15.6459 11.7789 14.802 11.456 13.9581 11.456C13.1142 11.456 12.2702 11.7789 11.6245 12.4246L6.95735 17.0918C5.67315 18.376 5.67315 20.4674 6.96469 21.7589L20.1295 34.9237L33.2944 21.7589C34.5859 20.4747 34.5786 18.3833 33.2944 17.0918L28.6346 12.432Z" fill="#7D3F98" />
            <defs>
                <linearGradient id="paint0_linear_489_2096" x1="20.5565" y1="0" x2="20.5565" y2="41.1129" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F1E0F9" />
                    <stop offset="1" stop-color="white" stop-opacity="0.81" />
                </linearGradient>
            </defs>
        </svg>
        ,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-700",
        position: "top-right",
    },
    {
        title: "Healthcare-Trained Assistants",
        description: "Not general VAs. Trained to work within medical workflows and systems.",
        icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41.1129" height="41.1129" rx="20.5565" fill="#DEF7C8" />
            <path d="M16.9527 20.0788C16.859 20.1717 16.7846 20.2823 16.7338 20.4042C16.6831 20.5261 16.6569 20.6568 16.6569 20.7888C16.6569 20.9208 16.6831 21.0515 16.7338 21.1734C16.7846 21.2952 16.859 21.4058 16.9527 21.4988C17.1401 21.685 17.3935 21.7896 17.6577 21.7896C17.9219 21.7896 18.1754 21.685 18.3627 21.4988C18.4565 21.4058 18.5309 21.2952 18.5816 21.1734C18.6324 21.0515 18.6585 20.9208 18.6585 20.7888C18.6585 20.6568 18.6324 20.5261 18.5816 20.4042C18.5309 20.2823 18.4565 20.1717 18.3627 20.0788C18.1754 19.8925 17.9219 19.788 17.6577 19.788C17.3935 19.788 17.1401 19.8925 16.9527 20.0788ZM19.4227 22.5588C19.2365 22.7461 19.1319 22.9996 19.1319 23.2638C19.1319 23.528 19.2365 23.7814 19.4227 23.9688C19.5157 24.0625 19.6263 24.1369 19.7482 24.1877C19.87 24.2384 20.0007 24.2646 20.1327 24.2646C20.2647 24.2646 20.3955 24.2384 20.5173 24.1877C20.6392 24.1369 20.7498 24.0625 20.8427 23.9688C21.029 23.7814 21.1335 23.528 21.1335 23.2638C21.1335 22.9996 21.029 22.7461 20.8427 22.5588C20.7498 22.465 20.6392 22.3907 20.5173 22.3399C20.3955 22.2891 20.2647 22.263 20.1327 22.263C20.0007 22.263 19.87 22.2891 19.7482 22.3399C19.6263 22.3907 19.5157 22.465 19.4227 22.5588ZM28.4227 12.5588C27.3349 11.462 25.8661 10.827 24.3219 10.786C22.7777 10.7451 21.2772 11.3012 20.1327 12.3388C18.9936 11.3134 17.5052 10.7628 15.973 10.7999C14.4407 10.8371 12.9808 11.4593 11.8927 12.5388C10.8118 13.6286 10.1896 15.0913 10.1542 16.6259C10.1189 18.1605 10.6731 19.6503 11.7027 20.7888C10.9329 21.6494 10.4278 22.7139 10.2479 23.8545C10.0681 24.9951 10.2212 26.1634 10.6889 27.2191C11.1566 28.2749 11.919 29.1732 12.8846 29.8064C13.8503 30.4396 14.9781 30.7807 16.1327 30.7888C17.613 30.7904 19.0401 30.2373 20.1327 29.2388C21.2724 30.2671 22.763 30.8195 24.2976 30.7823C25.8322 30.7451 27.2942 30.1211 28.3827 29.0388C29.4623 27.9476 30.0827 26.4842 30.1162 24.9496C30.1496 23.415 29.5937 21.926 28.5627 20.7888C29.5937 19.6516 30.1496 18.1625 30.1162 16.6279C30.0827 15.0933 29.4623 13.6299 28.3827 12.5388L28.4227 12.5588ZM26.9627 13.9588C27.6582 14.6742 28.0611 15.6236 28.0926 16.6208C28.1241 17.618 27.7817 18.591 27.1327 19.3488L21.5727 13.7888C22.3372 13.1545 23.3071 12.8217 24.2999 12.853C25.2927 12.8843 26.2398 13.2776 26.9627 13.9588ZM13.3027 27.6188C12.6073 26.9034 12.2043 25.9539 12.1729 24.9567C12.1414 23.9595 12.4838 22.9866 13.1327 22.2288L18.7327 27.8288C17.9598 28.4668 16.9792 28.798 15.9777 28.7593C14.9762 28.7206 14.024 28.3146 13.3027 27.6188ZM26.9627 27.6188C26.2035 28.3449 25.1933 28.7502 24.1427 28.7502C23.0921 28.7502 22.082 28.3449 21.3227 27.6188L13.3227 19.6188C12.5777 18.8693 12.1596 17.8555 12.1596 16.7988C12.1596 15.742 12.5777 14.7282 13.3227 13.9788C14.0722 13.2338 15.086 12.8156 16.1427 12.8156C17.1995 12.8156 18.2133 13.2338 18.9627 13.9788L26.9627 21.9788C27.7077 22.7282 28.1259 23.742 28.1259 24.7988C28.1259 25.8555 27.7077 26.8693 26.9627 27.6188ZM21.9027 20.0788C21.809 20.1717 21.7346 20.2823 21.6838 20.4042C21.6331 20.5261 21.6069 20.6568 21.6069 20.7888C21.6069 20.9208 21.6331 21.0515 21.6838 21.1734C21.7346 21.2952 21.809 21.4058 21.9027 21.4988C22.0901 21.685 22.3435 21.7896 22.6077 21.7896C22.8719 21.7896 23.1254 21.685 23.3127 21.4988C23.4065 21.4058 23.4809 21.2952 23.5316 21.1734C23.5824 21.0515 23.6085 20.9208 23.6085 20.7888C23.6085 20.6568 23.5824 20.5261 23.5316 20.4042C23.4809 20.2823 23.4065 20.1717 23.3127 20.0788C23.1254 19.8925 22.8719 19.788 22.6077 19.788C22.3435 19.788 22.0901 19.8925 21.9027 20.0788ZM19.4227 17.6088C19.2365 17.7961 19.1319 18.0496 19.1319 18.3138C19.1319 18.578 19.2365 18.8314 19.4227 19.0188C19.5157 19.1125 19.6263 19.1869 19.7482 19.2377C19.87 19.2884 20.0007 19.3146 20.1327 19.3146C20.2647 19.3146 20.3955 19.2884 20.5173 19.2377C20.6392 19.1869 20.7498 19.1125 20.8427 19.0188C21.029 18.8314 21.1335 18.578 21.1335 18.3138C21.1335 18.0496 21.029 17.7961 20.8427 17.6088C20.7498 17.515 20.6392 17.4407 20.5173 17.3899C20.3955 17.3391 20.2647 17.313 20.1327 17.313C20.0007 17.313 19.87 17.3391 19.7482 17.3899C19.6263 17.4407 19.5157 17.515 19.4227 17.6088Z" fill="#5E991C" />
        </svg>,
        iconBg: "bg-green-100",
        iconColor: "text-green-700",
        position: "bottom-left",
    },
    {
        title: "Secure & Compliant Workflows",
        description: "HIPAA-compliant processes ensuring patient data security and privacy.",
        icon: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41.1129" height="41.1129" rx="20.5565" fill="url(#paint0_linear_489_2121)" />
            <path d="M31.2418 25.3908H25.1674L25.1691 31.4541H15.499V25.3908H9.422V15.7224H15.499V9.65906H25.1674V15.7224H31.2418V25.3908Z" fill="#1355E9" />
            <path d="M14.9262 18.0238H18.9469C19.3459 18.0263 19.6656 17.9115 19.8523 17.7176C20.0902 17.4751 20.1081 17.1102 19.7807 16.7096C19.2001 16.0002 19.7014 15.3214 20.3127 15.3444C20.9214 15.3699 21.4253 16.0002 20.8472 16.7096C20.5173 17.1102 20.5352 17.4726 20.7756 17.7176C20.9598 17.9089 21.282 18.0263 21.681 18.0263H25.8065C25.3717 17.0873 25.2362 16.8372 24.4893 16.1941C23.4995 15.3393 21.6554 14.5508 20.3613 14.5508C18.7065 14.5508 17.2102 15.2219 16.1258 16.3039C15.6296 16.7989 15.2229 17.3807 14.9237 18.0238H14.9262ZM16.6143 25.1892C16.9979 24.4696 18.6732 21.3539 19.1975 20.3765C19.7781 19.2895 19.1438 18.8352 18.287 18.7842C17.4864 18.7383 16.1846 18.5239 14.7242 18.4908C14.4965 19.1236 14.3712 19.8151 14.3712 20.5271C14.3712 22.4103 15.2459 24.0919 16.6143 25.1892ZM23.6862 25.5005C23.6862 25.5005 20.993 21.6141 20.8447 21.3615C20.6912 21.1114 20.5633 20.9558 20.3101 20.9558C20.0569 20.9558 19.929 21.1089 19.7781 21.3615C19.6451 21.5835 17.4762 24.7273 16.9724 25.4572C17.9366 26.1206 19.1029 26.5034 20.3613 26.5034C21.6196 26.5034 22.7373 26.1334 23.6862 25.5005ZM26.3513 20.5271C26.3513 19.8075 26.226 19.1185 25.9932 18.4805C24.4944 18.5061 23.1542 18.7357 22.3383 18.7842C21.4764 18.8352 20.8447 19.292 21.4227 20.3765C22.0084 21.461 23.9548 25.0973 24.0315 25.2505C25.4433 24.1557 26.3513 22.4486 26.3513 20.5296V20.5271Z" fill="white" />
            <path d="M19.1207 17.2428H16.361C16.9697 16.4339 17.8547 15.8266 18.7908 15.625C18.4864 16.684 19.1207 16.7605 19.1207 17.2428ZM24.2642 17.2428C23.5685 16.5487 22.7705 15.8266 21.8318 15.625C22.1362 16.6865 21.5019 16.7631 21.5019 17.2428H24.2642ZM20.3126 22.0938C20.1361 22.0938 18.1616 25.2044 18.1616 25.2044C18.7422 25.5055 19.4788 25.6587 20.3126 25.6587C21.1464 25.6587 21.883 25.5081 22.4661 25.2044C22.4661 25.2044 20.4891 22.0938 20.3126 22.0938ZM22.415 19.593C22.1899 19.6186 21.9853 19.6415 22.1899 20.0217C22.3894 20.3994 24.2386 23.8852 24.2386 23.8852C25.1491 22.7496 25.7323 21.3334 25.3793 19.3634C25.3793 19.3634 22.594 19.5905 22.415 19.5905V19.593ZM18.2102 19.593C18.0337 19.593 15.2484 19.3659 15.2484 19.3659C14.8929 21.3359 15.476 22.7522 16.3866 23.8877C16.3866 23.8877 18.2358 20.402 18.4404 20.0243C18.6399 19.6441 18.4404 19.6186 18.2102 19.5956V19.593Z" fill="#1355E9" />
            <defs>
                <linearGradient id="paint0_linear_489_2121" x1="20.5565" y1="0" x2="20.5565" y2="41.1129" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D2DFFB" />
                    <stop offset="1" stop-color="#D2DFFB" stop-opacity="0.81" />
                </linearGradient>
            </defs>
        </svg>
        ,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-700",
        position: "bottom-right",
    },
]

export const Hero = () => {
    return (
        <div id="hero" className="bg-linear-to-r from-[#00A6A690] to-[#006B6B] min-h-[calc(100vh-150px)] relative overflow-hidden flex items-center">
            {/* background image with fade effect */}
            <div className="absolute inset-0">
                <Image
                    src="/bg_circular_lines.svg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    style={{
                        maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)"
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:py-32">
                {/* Centered Text Content */}
                <div className="text-center mb-12 mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 pt-6 leading-tight">
                        Get a Virtual Healthcare Assistant <br />When You
                        Need It Most
                    </h1>
                    <p className="text-base sm:text-lg md:text-[22px] text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                        We help healthcare professionals get administrative, billing, and operational <br />support, all delivered securely, remotely, and fully compliant.
                    </p>

                    {/* Mobile Feature Badges Grid - Using same badges as desktop */}
                    <div className="grid grid-cols-2 gap-2 sm:hidden max-w-2xl mx-auto mb-8">
                        {featureBadges.map((badge, index) => (
                            <div
                                key={`mobile-${index}`}
                                className="flex items-center rounded-full
                            bg-linear-to-r from-[#F7E9E182] to-[#FFFFFF2E] p-[10px] gap-3
                            shadow-lg hover:shadow-xl transition-all duration-300
                            w-full opacity-0"
                            style={{
                                animation: `slideInUp 0.6s ease-out ${index * 0.1}s forwards, float 3s ease-in-out ${0.6 + index * 0.1}s infinite`,
                            }}
                            >
                                <div className={`${badge.iconBg} rounded-full shadow-lg shrink-0`}>
                                    {badge.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-white text-xs leading-tight mb-1 line-clamp-1">
                                        {badge.title}
                                    </h3>
                                    <p className="text-[10px] text-white/90 leading-tight line-clamp-2">
                                        {badge.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-4 justify-center items-center mb-12 sm:mb-0 sm:flex-row">
                        <Button
                            asChild
                            className="bg-[#553938] hover:bg-[#7A3A0A] text-white rounded-md w-full sm:w-auto px-8"
                        >
                            <Link href="#book-audit">Book a Free Workflow Audit</Link>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            className="bg-white hover:bg-gray-100 text-gray-800 rounded-md w-full sm:w-auto px-8 border border-gray-200"
                        >
                            <Link href="#how-it-works">See How It Works</Link>
                        </Button>
                    </div>
                </div>

                {/* Feature Badges - Absolutely Positioned */}
                {featureBadges.map((badge, index) => {
                    const Icon = badge.icon
                    const positionClasses = {
                        "top-left": "top-10 left-4 lg:top-30 lg:left-20",
                        "top-right": "top-10 right-4 lg:top-30 lg:right-10",
                        "bottom-left": "bottom-10 left-4 lg:bottom-20 lg:left-60",
                        "bottom-right": "bottom-10 right-4 lg:bottom-20 lg:right-80",
                    }

                    // Animation direction based on position
                    const animationDirection = {
                        "top-left": "slideInLeft",
                        "top-right": "slideInRight",
                        "bottom-left": "slideInLeft",
                        "bottom-right": "slideInRight",
                    }[badge.position]

                    return (
                        <div
                            key={index}
                            className={`absolute flex items-center gap-2 ${positionClasses[badge.position as keyof typeof positionClasses]}
                            hidden lg:flex ${badge.position === "bottom-right" || badge.position === "top-right" ? "flex-row-reverse" : ""}
                            opacity-0`}
                            style={{
                                animation: `${animationDirection} 0.8s ease-out ${index * 0.15}s forwards, float 3s ease-in-out ${0.8 + index * 0.15}s infinite`,
                            }}
                        >
                            {/* Badge Card */}
                            <div className="flex items-center rounded-full
                            bg-linear-to-r from-[#F7E9E182] to-[#FFFFFF2E] p-[10px] gap-3
                            shadow-lg hover:shadow-xl transition-all duration-300
                            w-auto max-w-[400px]">
                                {/* Icon Circle */}
                                <div className={`${badge.iconBg} rounded-full shadow-lg shrink-0`}>
                                    {badge.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-white text-xs lg:text-sm leading-tight mb-1 line-clamp-1">
                                        {badge.title}
                                    </h3>
                                    <p className="text-[10px] lg:text-xs text-white/90 leading-tight line-clamp-2">
                                        {badge.description}
                                    </p>
                                </div>
                            </div>

                            {/* Circle SVG - Outside the badge card */}
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0"
                            >
                                <path d="M13.8182 9.42163C13.8182 11.8499 11.8497 13.8184 9.42139 13.8184C6.9931 13.8184 5.02458 11.8499 5.02458 9.42163C5.02458 6.99334 6.9931 5.02482 9.42139 5.02482C11.8497 5.02482 13.8182 6.99334 13.8182 9.42163Z" fill={`url(#paint0_linear_${index})`} fillOpacity="0.5" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.42172 18.4247C14.3939 18.4247 18.4247 14.3939 18.4247 9.42172C18.4247 4.44951 14.3939 0.418743 9.42172 0.418743C4.44951 0.418743 0.418743 4.44951 0.418743 9.42172C0.418743 14.3939 4.44951 18.4247 9.42172 18.4247ZM9.42172 18.8434C14.6252 18.8434 18.8434 14.6252 18.8434 9.42172C18.8434 4.21825 14.6252 0 9.42172 0C4.21825 0 0 4.21825 0 9.42172C0 14.6252 4.21825 18.8434 9.42172 18.8434Z" fill={`url(#paint1_linear_${index})`} fillOpacity="0.5" />
                                <defs>
                                    <linearGradient id={`paint0_linear_${index}`} x1="9.42172" y1="0" x2="9.87037" y2="30.9571" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id={`paint1_linear_${index}`} x1="9.42172" y1="-6.23976e-09" x2="9.63109" y2="22.8215" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="0.413266" stopColor="white" stopOpacity="0.586734" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}