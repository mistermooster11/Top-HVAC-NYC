'use client';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';

interface TopnavProps {
    onMobileMenuClick?: () => void;
}

const Topnav = ({ onMobileMenuClick }: TopnavProps) => {
    return (
        <div className="bg-[#FFFFFF] border-b border-[rgba(165,165,165,.3)] w-full">
            <div className="inner inner-header flex flex-row items-center justify-between min-h-[4.4rem] p-0">

                {/* Mobile logo */}
                <Link href="/" className="block lg:hidden float-left" aria-label="Top HVAC NYC">
                    <img src="/logos/TOP-hvac-logo.png" alt="Top HVAC NYC" className="block h-[3.6rem]" />
                </Link>

                {/* Phone number — centered on desktop */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <a
                        href="tel:6464934904"
                        className="flex items-center gap-2 text-[#242021] text-[1.4rem] font-light tracking-[.05rem] py-[2rem] no-underline transition-colors duration-[350ms] hover:text-[#133380]"
                    >
                        <Phone size={14} strokeWidth={2} />
                        <span>(646) 493-4904 — Same-Day Service Available</span>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={onMobileMenuClick}
                    className="lg:hidden flex items-center justify-center ml-[1.3rem] bg-transparent border-0 cursor-pointer text-[#242021] p-[0.4rem]"
                    aria-label="Menu"
                >
                    <Menu size={30} strokeWidth={2.5} />
                    <em className="sr-only not-italic">Menu icon</em>
                </button>

            </div>
        </div>
    );
}

export default Topnav;
