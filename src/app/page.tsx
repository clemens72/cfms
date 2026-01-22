import { Hero } from "@/components/layout/Hero";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-bg-brown">

      <Hero
        title="Next Concert: The Montvales"
        subtitle="Saturday, January 24th, 7pm"
        subtitle2="The Columbus Mennonite Church"
        imageURL="/events/TheMontvales.png"
        buttonText="More Info"
        buttonLink="/events"
      />

      {/* What's New Section */}
      {/* <section id="whatsnew" className="bg-green py-16 text-white shadow-inner">
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
      </section> */}

      {/* Pages Section */}
      <section id="pages" className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4 text-green">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
              What We Do
            </h2>
          </div>
          <p className="font-body text-gray-700 max-w-4xl mx-auto">
            We are a non-profit membership organization committed to bringing more joy to the world through folk music, events, connections and song. Discover more about us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Festival */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src="/festival/03duo.jpg"
                alt="Central Ohio Folk Festival"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Central Ohio Folk Festival</h3>
              <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                Two days of music, workshops, and community. Join us for our annual celebration of folk music.
              </p>
              <a
                href="/festival"
                className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
              >
                Festival Homepage
              </a>
            </div>
          </div>

          {/* Card 2: Outreach */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src="/outreach/outreach11.jpg"
                alt="Educational Outreach"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Outreach</h3>
              <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                Bringing folk music to the community through various events.
              </p>
              <a
                href="/outreach"
                className="inline-block px-4 mr-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
              >
                Learn More
              </a>
              <a
                href="/kirby"
                className="inline-block px-4 py-2 my-4 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
              >
                Scholarship
              </a>
            </div>
          </div>

          {/* Card 3: Events */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src="/events/StillhouseJunkies.jpg"
                alt="Monthly Newsletter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Americana/Folk Concert Series</h3>
              <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                Our monthly concert series (excluding June and December) sponsored by the Greater Columbus Arts Council.
              </p>
              <a
                href="/events"
                className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
              >
                View/Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue py-16 text-white shadow-inner">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Monthly Newsletter
          </h2>
          <p className="text-xl font-body mb-8">
            Stay updated with the latest events, performances, and folk music news from central Ohio and beyond.
          </p>
          <p className="font-body text-lg mb-6">
            Sign up for our newsletter to receive monthly updates directly to your inbox!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* --- SECTION #10: Festival History & Photos --- */}
      <section id="history" className="bg-bg-brown py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">
            Thanks for your support!
          </h2>
          <p className="font-body text-lg mb-6 text-gray-700">
            The Columbus Folk Music Society gratefully acknowledges support from <a className="text-green hover:underline font-semibold" href="https://columbusfoundation.org/">The Columbus Foundation&apos;s Community Arts Fund</a> (with the assistance of the Ingram-White Castle Foundation), the <a className="text-green hover:underline font-semibold" href="https://oac.ohio.gov/">Ohio Arts Council</a>, and the <a className="text-green hover:underline font-semibold" href="https://www.gcac.org/">Greater Columbus Arts Council</a>.
          </p>
          <div className="mx-auto max-w-4xl">
            <Image src="/sponsors.png" alt="Sponsors" width={800} height={600} />
          </div>
        </div>
      </section>

    </div>
  )
}