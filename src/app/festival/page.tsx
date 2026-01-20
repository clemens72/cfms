import { Users, Megaphone, HelpCircle, Calendar, Clock, MapPin, User } from 'lucide-react';
import Image from 'next/image';
import NavBar from './NavBar';
import { Hero } from '@/components/layout/Hero';

export default function FestivalPage() {

  // Helper component for uniform buttons
  const FestivalButton = ({ children, color = 'green', href = '#' }: { children: React.ReactNode, color?: 'green' | 'blue' | 'coral-red', href?: string }) => (
    <a href={href} className={`px-5 py-2 text-sm font-body font-semibold rounded-lg shadow transition duration-300 transform hover:scale-[1.02]
      ${color === 'green' ? 'bg-green hover:bg-green/90 text-white' : ''}
      ${color === 'blue' ? 'bg-blue hover:bg-blue/90 text-white' : ''}
      ${color === 'coral-red' ? 'bg-coral-red hover:bg-coral-red/90 text-white' : ''}`.replace(/\s+/g, ' ')}>
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-bg-brown">
      <Hero
        title="Central Ohio Folk Festival"
        subtitle="Roots acoustic music at its best!"
        subtitle2='An annual celebration of music and community'
        imageURL="/festival/festival.jpg"
      />

      <NavBar />

      {/* --- SECTION #2: Central Ohio Folk Festival Preview --- */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text, Buttons, Icons */}
          <div>

            {/* Feature Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span
                className="text-sm inline-block px-4 py-2 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
              >
                Get Tickets (Coming Soon)
              </span>
              <FestivalButton href="/festival/headliner">2026 Headliner</FestivalButton>
              <FestivalButton href="/festival/lineup">2026 Lineup</FestivalButton>
              <FestivalButton color="blue" href="/festival/schedule">2025 Schedule</FestivalButton>
            </div>

            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Annual Central Ohio Folk Festival
            </h2>
            <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
              Join us for a two-day family friendly festival the first full weekend in June, where the magic of music comes alive across four vibrant stages. Expect an invigorating mix of folk, roots, bluegrass, old-time, and progressive, eclectic blends of these forms of music and more! Experience jams, workshops, songs, and an array of kids&apos; and youth activities. Enjoy food from some of Columbus&apos; favorite food trucks as well as local Nocterra craft beer.
            </p>
            <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
              In its 29th year, the festival brings together musicians from across the country and folk music enthusiasts from Central Ohio and beyond for a joyous, inexpensive weekend in a great outdoor setting!
            </p>

            {/* Playlist Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-heading font-semibold text-charcoal">Official Playlists:</span>
              <a href="https://youtube.com/playlist?list=PLnwi3Z6JxH9wmdjMnqag-20g3hjlh1-c2&si=WEVKiA00beJTyCio" aria-label="YouTube Playlist" className="transition transform hover:scale-110">
                <Image src="/festival/youtubemusic.png" alt="YouTube Music" width={120} height={32} />
              </a>
              <a href="https://open.spotify.com/playlist/1ennkJ9mweBT9cuyYskZ0Z?si=e3fd0394616b4a12" aria-label="Spotify Playlist" className="transition transform hover:scale-110">
                <Image src="/festival/spotify.png" alt="YouTube Music" width={100} height={32} />
              </a>
            </div>
          </div>

          {/* Right Column: Photo Placeholder */}
          <Image
            src="/festival/COFF2026-Collage.jpg"
            alt="Central Ohio Folk Festival"
            width={600}
            height={400}
            className="object-cover rounded-xl shadow-2xl"
          />
        </div>
      </section>
      {/* --- END #2 SECTION --- */}

      {/* --- SECTION #3: What's New for 2026 (Full Width) --- */}
      <section id="whatsnew" className="bg-blue py-16 text-white shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What&apos;s New for 2026
          </h2>
          <p className="text-xl font-body mb-8 max-w-3xl">
            A new location and a new date! A very modest admission fee. Same programming in a larger space with easy ample parking!
          </p>
          <FestivalButton color="green" href="/festival/new">
            CHECK IT OUT
          </FestivalButton>
        </div>
      </section>
      {/* --- END #3 SECTION --- */}

      {/* --- SECTION #4: Volunteer (Split with Image) --- */}
      <section id="volunteer" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and Button */}
          <div>
            <div className="flex items-center gap-3 mb-4 text-green">
              <Users size={32} />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                Volunteer
              </h2>
            </div>
            <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
              The Central Ohio Folk Festival is made possible by the dedicated work of volunteers. Join our vibrant community of volunteers, and be part of making the festival a success!
            </p>
            <FestivalButton color="green" href="/festival/volunteer">
              BECOME A VOLUNTEER
            </FestivalButton>
          </div>

          {/* Right Column: Photo Placeholder */}
          <Image
            src="/festival/volunteers.jpg"
            alt="Festival Volunteers"
            width={800}
            height={600}
            className="h-64 md:h-96 w-full rounded-xl object-cover shadow-2xl md:order-last order-first"
          />
        </div>
      </section>
      {/* --- END #4 SECTION --- */}

      {/* --- SECTION #5: Festival Details (Full Width) --- */}
      <section id="details" className="bg-blue py-20 text-white shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Main Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                Festival Details
              </h2>
              <p className="text-xl font-body leading-relaxed pr-12 mb-8">
                The festival attracts more than 12,000 over the two days from Central Ohio and beyond, yet retains an attractive smaller community vibe.  Bank Run Metro Park offers plenty of parking (including handicapped), ample green space, and paved paths traversing the grounds. With the exception of the main outdoor stage, all stages are inside tents, with seating provided. Feel free to bring blankets and lawn chairs.
              </p>
              <p className="text-xl font-body leading-relaxed pr-12">
                The festival has a mobile street food area, a festival store, and offers Nocterra craft beer for those who enjoy locally made brews. We remain committed to making the festival accessible to as many people as possible by providing a very low-cost as well as family-friendly event!  The event runs rain or shine. The festival is produced by the Columbus Folk Music Society and is co-sponsored by WCBE 90.5FM.
              </p>
              <span
                className="text-md inline-block px-8 py-4 mt-8 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
              >
                Get Tickets (Available Early 2026)
              </span>
            </div>

            {/* Right Column: Cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex gap-5 text-charcoal">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue flex items-center justify-center">
                  <Calendar className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Dates</h3>
                  <p className="font-body text-sm leading-relaxed">
                    June 6th & 7th, 2026<br />
                    Saturday and Sunday<br />
                    <a href="/festival/COFF2026.ics" className="text-green hover:text-blue font-bold">ADD TO CALENDAR</a>
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex gap-5 text-charcoal">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue flex items-center justify-center">
                  <Clock className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Hours</h3>
                  <p className="font-body text-sm leading-relaxed">Saturday: 10:30am - 10pm<br />Sunday: 10:30am - 5:30pm</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex gap-5 text-charcoal">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue flex items-center justify-center">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Location</h3>
                  <p className="font-body text-sm leading-relaxed">
                    Bank Run Metro Park<br />
                    Address to follow <i>(still under construction)</i><br />
                    Lockbourne, Ohio</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex gap-5 text-charcoal">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue flex items-center justify-center">
                  <User className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Admissions</h3>
                  <p className="font-body text-sm leading-relaxed">
                    $10 pre-registration (18+)  /  Pre-registration comes with perks (see FAQ details)<br />
                    $15 onsite (18+)  / Under 18 free<br />
                    Saturday night headliner:  preferred seating + $10<br />
                    Admission tickets cover BOTH days!<br />
                    Festival free entry window:  Sat & Sun - 10:30-11:30am<br />
                    Ticket sales open in early 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- END #5 SECTION --- */}

      {/* --- SECTION #6: All Festival Happenings (Split with Image) --- */}
      <section id="activities" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and Buttons */}
          <div className="md:order-last">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              All Festival Happenings
            </h2>
            <p className="text-xl font-body text-gray-700 mb-8 leading-relaxed">
              Explore everything the Central Ohio Folk Festival has to offer: our stage lineups, workshops, kids&apos; and youth activites, and more.
            </p>

            {/* Feature Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <FestivalButton href="/festival/lineup">2026 Lineup</FestivalButton>
              <FestivalButton href="/festival/workshops">2026 Workshops</FestivalButton>
              <FestivalButton href="/festival/activities">Activities</FestivalButton>
              <FestivalButton href="/festival/vendors">Vendors</FestivalButton>
            </div>
          </div>

          {/* Right Column: Photo Placeholder */}
          <div className="h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl bg-bg-brown flex items-center justify-center text-charcoal/50 text-xl font-heading font-bold">
            <Image
              src="/festival/activities/drumcircle.jpg"
              alt="Festival Workshops"
              width={800}
              height={600}
              className="h-64 md:h-96 w-full rounded-xl object-cover shadow-2xl md:order-last order-first"
            />
          </div>
        </div>
      </section>
      {/* --- END #6 SECTION --- */}

      {/* --- SECTION #7: Inquiries / Apply --- */}
      <section id="inquiries" className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4 text-green">
            <Megaphone size={32} />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
              Inquiries / Apply
            </h2>
          </div>
          <p className="text-xl font-body text-gray-700 max-w-4xl mx-auto">
            Visit our performer, workshop and singer-songwriter contest pages to find deadlines and other useful information when applying.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Artists / Performers / Presenters</h3>
            <div className="flex flex-col gap-4">
              <div className="mt-2">
              <FestivalButton href="/festival/performers">2027 Performer/Presenter Apply</FestivalButton>
              </div>
              <div className="mt-2">
                <p className="text-md font-body text-gray-700 mb-4">For performing questions or agent inquiries:</p>
                <FestivalButton href="mailto:festival_booking@columbusfolkmusicsociety.org">Festival Booking</FestivalButton>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Vendors & Food</h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-md font-body text-gray-700 mb-4">For food truck inquiries:</p>
                <FestivalButton href="mailto:festivalfoodtruckinquiry@columbusfolkmusicsociety.org">Festival Food Truck Inquiry</FestivalButton>
              </div>
              <div>
                <p className="text-md font-body text-gray-700 mb-4">For Artisan Vendor Applications:</p>
                <FestivalButton href="mailto:festivalvendorinquiry@columbusfolkmusicsociety.org">Festival Vendor Inquiry</FestivalButton>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">General Questions</h3>
            <div className="flex flex-col gap-2">
              <p className="text-md font-body text-gray-700 mb-4">For any other questions, please email us here:</p>
              <div>
                <FestivalButton href="mailto:infofestival@columbusfolkmusicsociety.org">General Festival Inquiry</FestivalButton>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- END #7 SECTION --- */}

      {/* --- SECTION #8: Help Us Move It Forward (Sponsors/Donations) --- */}
      <section id="donate" className="bg-blue py-12 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Help Us Move It Forward
          </h2>
          <p className="font-body text-lg mb-6">
            Interested in promoting our event or donating?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <FestivalButton color="green" href="/festival/sponsors">Sponsors</FestivalButton>
            <FestivalButton color="green" href="/festival/press">2026 Press</FestivalButton>
            <FestivalButton color="green" href="/donate">Donate</FestivalButton>
          </div>
        </div>
      </section>
      {/* --- END #8 SECTION --- */}

      {/* --- SECTION #9: Getting Here & FAQ --- */}
      <section id="faq" className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4 text-green">
            <HelpCircle size={32} />
            <h2 className="text-3xl font-heading font-bold text-charcoal">
              Getting Here & FAQ
            </h2>
          </div>
          <p className="font-body text-lg mb-6 text-gray-700">
            Check out festival fast facts, maps and frequently asked questions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <FestivalButton href="/festival/facts">Fast Facts</FestivalButton>
            <FestivalButton href="/festival/maps-printables">Maps & Printables</FestivalButton>
            <FestivalButton href="/festival/faq">FAQ</FestivalButton>
          </div>
        </div>
      </section>
      {/* --- END #9 SECTION --- */}

      {/* --- SECTION #10: Festival History & Photos --- */}
      <section id="history" className="bg-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Festival History & Photos
          </h2>
          <p className="font-body text-lg mb-6">
            Curious about the festival&apos;s history? Do you want to view recent or past festival photos? Click the tabs below.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/festival/history/Brief_COFF_BDC_HistoryREV11.3.25FINAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-body font-semibold rounded-lg shadow transition duration-300 transform hover:scale-[1.02] bg-green hover:bg-green/90 text-white"
            >
              History
            </a>
            <FestivalButton color="green" href="https://www.flickr.com/photos/36521981794@N01/albums/">Links to Photos</FestivalButton>
          </div>
        </div>
      </section>
      {/* --- END #10 SECTION --- */}

      {/* --- SECTION #11: Sponsor Logos --- */}
      <section className="bg-charcoal py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* These are placeholder sponsor divs. In a real app, you would use <img> tags here. 
            <div className="w-24 h-12 bg-white rounded flex items-center justify-center text-xs text-charcoal font-bold"></div>*/}
            <div className="">
              <Image src="/festival/sponsors.jpg" alt="Sponsors" width={2000} height={800} />
            </div>
          </div>
        </div>
      </section>
      {/* --- END #11 SECTION --- */}

    </div>

  );
}