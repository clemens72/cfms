import { Hero } from "@/components/layout/Hero";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-light-brown">

      <Hero
        title="Next Concert: Holler Choir"
        subtitle="Saturday, November 22nd, 7pm"
        subtitle2="The Columbus Mennonite Church"
        imageURL="/HollerChoir.jpg"
        buttonText="Info and Tickets"
        buttonLink="/events"
      />

      {/* What's New Section */}
      <section id="whatsnew" className="bg-green py-16 text-white shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Singer-Songwriter Competition
          </h2>
          <p className="text-xl font-body mb-8 max-w-3xl">
            The first ever Singer-Songwriter Competition will take place on June 6th at the 2026 Central Ohio Folk Festival! Entries accepted through November 20th, 2025.
          </p>
          <button className="bg-white text-green font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* Pages Section */}
      <section id="pages" className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4 text-green">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
              What We Do
            </h2>
          </div>
          <p className="font-body text-gray-700 max-w-4xl mx-auto">
            Discover how the Columbus Folk Music Society preserves and promotes folk music traditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Festival */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 bg-gradient-to-br from-green/20 to-orange/20">
              <Image 
                src="/03duo.jpg" 
                alt="Central Ohio Folk Festival" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Central Ohio Folk Festival</h3>
              <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                Two days of music, workshops, and community. Join us for our annual celebration of folk music traditions.
              </p>
              <a 
                href="/festival" 
                className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 2: Outreach */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 bg-gradient-to-br from-green/20 to-orange/20">
              <Image 
                src="/07youth.jpg" 
                alt="Educational Outreach" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Educational Outreach</h3>
              <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                Bringing folk music to schools and communities through workshops, performances, and educational programs.
              </p>
              <a 
                href="/outreach" 
                className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 3: Newsletter */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 bg-gradient-to-br from-green/20 to-orange/20">
              <Image 
                src="/newsletter.jpeg" 
                alt="Monthly Newsletter" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Monthly Newsletter</h3>
              <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                Stay updated with the latest events, performances, and folk music news from central Ohio and beyond.
              </p>
              <a 
                href="/newsletter" 
                className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION #10: Festival History & Photos --- */}
      <section id="history" className="bg-light-brown py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
            Thanks for your support!
          </h2>
          <p className="font-body text-lg mb-6 text-gray-700">
            The Columbus Folk Music Society gratefully acknowledges support from <a className="text-green hover:underline font-semibold" href="https://columbusfoundation.org/">The Columbus Foundation&apos;s Community Arts Fund</a> (with the assistance of the Ingram-White Castle Foundation), the <a className="text-green hover:underline font-semibold" href="https://oac.ohio.gov/">Ohio Arts Council</a>, and the <a className="text-green hover:underline font-semibold" href="https://www.gcac.org/">Greater Columbus Arts Council</a>.
          </p>
          <div className="mx-auto max-w-4xl">
            <Image src="/mainsponsors.png" alt="Sponsors" width={800} height={600} />
          </div>
        </div>
      </section>

    </div>
  )
}