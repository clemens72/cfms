import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="CFMS Logo"
                width={40}
                height={40}
                className="h-10 w-20 object-contain"
              />
              <div className="font-serif">
                <span className="font-bold text-xl text-primary">Columbus</span>
                <br />
                <span className="text-lg text-foreground/80">Folk Music Society</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Preserving, promoting, and presenting folk music in central Ohio since 1985.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/festival" className="text-muted-foreground hover:text-primary transition-colors">
                  Festival
                </Link>
              </li>
              <li>
                <Link href="/join-donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Join/Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-primary transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="text-muted-foreground hover:text-primary transition-colors">
                  Outreach
                </Link>
              </li>
              <li>
                <Link href="/links" className="text-muted-foreground hover:text-primary transition-colors">
                  Links
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our newsletter for the latest events and news.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Columbus Folk Music Society. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            A 501(c)(3) not-for-profit organization
          </p>
        </div>
      </div>
    </footer>
  );
}