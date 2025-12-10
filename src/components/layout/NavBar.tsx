"use client"
import React, { useState } from 'react';
import { Menu, X, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Festival', href: '/festival' },
  { name: 'Members', href: '/members' },
  { name: 'Links', href: '/links' },
  { name: 'Contact', href: '/contact' },
];


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper component for the navigation links
  const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <nav className={isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex md:space-x-8'}>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`
            text-lg font-body font-medium transition duration-200 
            text-green hover:text-orange p-2
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
    // Set background to solid green and use a stronger shadow
    <header className="fixed top-0 left-0 w-full z-30 shadow-xl bg-light-brown">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand (Now using green text) */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo.png"
              alt="CFMS Logo"
              width={60}
              height={60}
              className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="hidden xl:flex flex-col leading-tight">
              <span className="font-heading text-xl font-bold text-green">Columbus Folk Music Society</span>
            </div>
            <span className="xl:hidden font-heading text-lg font-bold text-green">CFMS</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button (Hamburger/X Icon) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green
                         hover:text-white hover:bg-white/20
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green transition duration-150"
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
        className={`md:hidden transition-all ease-in-out duration-300 overflow-hidden ${
          isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Mobile menu panel now uses green with a yellow border separator */}
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLinks isMobile={true} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;