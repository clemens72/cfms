'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu as NavMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <NavMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                pathname === '/' && 'text-primary font-semibold'
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                pathname === '/about' && 'text-primary font-semibold'
              )}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/events" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                pathname === '/events' && 'text-primary font-semibold'
              )}
            >
              Events
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/festival" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                pathname === '/festival' && 'text-primary font-semibold'
              )}
            >
              Festival
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/newsletter" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                pathname === '/newsletter' && 'text-primary font-semibold'
              )}
            >
              Newsletter
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/outreach" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                pathname === '/outreach' && 'text-primary font-semibold'
              )}
            >
              Outreach
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/links" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                pathname === '/links' && 'text-primary font-semibold'
              )}
            >
              Links
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Button asChild>
            <Link href="/join-donate">Donate or Join</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavMenu>
  );
}