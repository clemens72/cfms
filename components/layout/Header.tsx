'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavigationMenu } from '@/components/layout/NavigationMenu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Music className="h-6 w-6 text-primary" />
          </div>
          <div className="font-serif">
            <span className="font-bold text-xl md:text-2xl text-primary">
              Columbus
            </span>
            <span className="font-bold ml-1 text-lg md:text-xl text-foreground/80">
              Folk Music Society
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu />
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </NavLink>
              <NavLink
                href="/join-donate"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join/Donate
              </NavLink>
              <NavLink href="/events" onClick={() => setIsMobileMenuOpen(false)}>
                Events
              </NavLink>
              <NavLink
                href="/festival"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Festival
              </NavLink>
              <NavLink
                href="/newsletter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Newsletter
              </NavLink>
              <NavLink
                href="/outreach"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Outreach
              </NavLink>
              <NavLink
                href="/links"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Links
              </NavLink>
              <Button className="w-full mt-2" asChild>
                <Link href="/join-donate">Become a Member</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-foreground/80 hover:text-primary transition-colors py-2 font-medium text-lg"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}