"use client"
import React, { useState } from 'react';
import { Menu, X, LucideIcon } from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
}

const navLinks: NavItem[] = [
    { name: "What's New", href: '/festival#whatsnew' },
    { name: "Volunteer", href: '/festival#volunteer' },
    { name: "Details", href: '/festival#details' },
    { name: "Activities", href: '/festival#activities' },
    { name: "Inquiries/Apply", href: '/festival#inquiries' },
    { name: "Donate", href: '/festival#donate' },
    { name: "FAQ", href: '/festival#faq' },
    { name: "History", href: '/festival#history' },
];


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu state
    const toggleMenu = () => setIsOpen(!isOpen);

    // Helper component for the navigation links
    const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
        <nav className={isMobile ? 'flex flex-col space-y-4' : 'hidden sm:flex sm:space-x-8'}>
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className={`
            text-lg font-body font-medium transition duration-200 
            text-brown hover:text-orange p-2
            ${isMobile
                            ? 'py-2 px-3 block rounded-lg hover:bg-white/10'
                            : ''}
          `}
                    onClick={isMobile ? toggleMenu : undefined}
                >
                    {link.name}
                </a>
            ))}
        </nav>
    );

    // Icon component used for the toggle button
    const ToggleIcon: LucideIcon = isOpen ? X : Menu;

    return (
        <header className="w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo/Brand (Now using green text) */}
                    <h3 className="flex flex-shrink-0 font-heading text-2xl font-extrabold text-brown">
                        Jump to:
                    </h3>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex sm:space-x-8">
                        <NavLinks />
                    </div>

                    {/* Mobile Menu Button (Hamburger/X Icon) */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-brown
                         hover:text-white hover:bg-white/20
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown transition duration-150"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <ToggleIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                id="mobile-menu"
                className={`lg:hidden transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? 'max-h-85 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                {/* Mobile menu panel*/}
                <div className="px-2 pt-2 space-y-1">
                    <NavLinks isMobile={true} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;