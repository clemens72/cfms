import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-bg-brown py-12">
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
              <div className="font-heading">
                <span className="font-bold text-xl text-green">Columbus</span>
                <br />
                <span className="text-lg text-brown">Folk Music Society</span>
              </div>
            </Link>
            <p className="text-sm text-charcoal/70 font-body">
              Preserving, promoting, and presenting folk music in central Ohio since 1991.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-charcoal">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brown hover:text-green transition-colors font-body">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brown hover:text-green transition-colors font-body">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-brown hover:text-green transition-colors font-body">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/festival" className="text-brown hover:text-green transition-colors font-body">
                  Festival
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-brown hover:text-green transition-colors font-body">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-charcoal">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/newsletter" className="text-brown hover:text-green transition-colors font-body">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="text-brown hover:text-green transition-colors font-body">
                  Outreach
                </Link>
              </li>
              <li>
                <Link href="/links" className="text-brown hover:text-green transition-colors font-body">
                  Links
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brown hover:text-green transition-colors font-body">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-charcoal">Donate</h3>
            <Link href="/donate" className="text-brown hover:text-green transition-colors font-body">
                  Donate Here
                </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-sm text-charcoal/70 font-body">
            © 2026 Columbus Folk Music Society. All rights reserved.
          </p>
          <p className="text-sm text-charcoal/70 mt-2 md:mt-0 font-body">
            A 501(c)(3) not-for-profit organization
          </p>
        </div>
      </div>
    </footer>
  );
}