"use client"
import React, { useState } from 'react';
import { Menu, X, LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Festival', href: '/festival' },
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
            // Default text is bYellow, hover is bright white for contrast
            text-bYellow hover:text-white
            ${isMobile 
                ? 'py-2 px-3 block rounded-lg hover:bg-white/10' // Text remains bYellow, hover background is subtle white
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
    // Set background to solid bBlue and use a stronger shadow
    <header className="fixed top-0 left-0 w-full z-30 shadow-xl bg-bBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand (Now using bYellow text) */}
          <a href="/" className="flex-shrink-0 font-heading text-2xl font-extrabold text-bYellow">
            Columbus Folk Music Society
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button (Hamburger/X Icon) */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-bYellow // Icon color is yellow
                         hover:text-white hover:bg-white/20 // Hover changes icon to white and adds a slight hover background
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bYellow transition duration-150"
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
        className={`sm:hidden transition-all ease-in-out duration-300 overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Mobile menu panel now uses bBlue with a yellow border separator */}
        <div className="px-2 pt-2 pb-3 space-y-1 bg-bBlue border-t border-bYellow/50">
          <NavLinks isMobile={true} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;