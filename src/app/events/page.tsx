import Image from 'next/image';
import { Hero } from '@/components/layout/Hero';

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <Hero
                title="Upcoming Events"
                subtitle="Join Us for Live Folk Music Performances"
                imageURL="/events/StillhouseJunkies.jpg"
                buttonText="Jam & Events Calendar"
                buttonLink="/jam-sessions"
            />
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-xl md:text-2xl font-heading font-bold">
                            Join our FolkEvents mailing list and get reminders of our events!
                        </h2>
                    </div>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green text-white font-body font-semibold rounded-r-lg hover:bg-green/90 transition duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Americana / Folk Concert Series
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl md:text-2xl font-heading font-bold text-brown max-w-3xl mx-auto leading-relaxed">
                            NEXT CONCERT:
                        </p>
                    </div>
                </div>
                <div className="space-y-8 max-w-5xl mx-auto mb-10">
                    {/* Example Event Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Left: Details */}
                            <div className="p-6">
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">The Montvales</h3>
                                <p className="font-body text-gray-600 mb-4 leading-relaxed">
                                    <span className="font-semibold text-green">Saturday, January 24th, 7pm</span><br />
                                    The Columbus Mennonite Church<br />
                                    35 Oakland Park Ave, Columbus OH
                                </p>
                                <a
                                    href="/events/the-montvales"
                                    className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                                >
                                    More Info
                                </a>
                            </div>
                            {/* Right: YouTube Video */}
                            <div className="relative h-64 md:h-full min-h-[300px]">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/RS62sL4bgOQ"
                                    title="The Montvales"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            2026 Series Line-Up
                        </h2>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl md:text-2xl font-heading font-bold text-brown max-w-3xl mx-auto leading-relaxed">
                            NOTE:  UNLESS OTHERWISE NOTED BELOW,
                        </p>
                        <p>
                            Americana/Folk Concert Series concerts occur at the Mennonite Church space located at: 35 Oakland Park Ave, Columbus, OH.
                        </p>
                        <p>
                            For all Mennonite Church concerts, the schedule is:  6PM Open Jam / 7PM Open Mic / 7:45PM Community Sing / 8PM FEATURED PERFORMER.
                        </p>
                        <p className="font-bold">
                            Door donation is $15 general public; $10 CFMS members & students; and under 12 free. To sign up for the OPEN MIC, contact Bill Cohen (email or call 614-263-3851).
                        </p>
                    </div>
                    <div className="flex mt-12 items-center justify-center gap-3 mb-4">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown">
                            Line-Up TBA! Stay tuned...
                        </h2>
                    </div>
                </div>
            </section>

            {/* --- GCAC Section --- */}
            <section className="bg-light-brown py-16 text-white shadow-inner">
                <div className="container mx-auto px-4 text-center">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="relative w-full h-auto flex items-center justify-center p-6">
                            <Image
                                src="/gcac.png"
                                alt="Folk Concert"
                                width={400}
                                height={300}
                                className="w-auto h-auto max-w-full object-contain"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">The Columbus Folk Music Society gratefully acknowledges support from the <a href="www.gcac.org" className="text-green hover:text-brown hover:underline font-bold">Greater Columbus Arts Council (GCAC)</a> for its Americana/Folk Concert Series.</h3>
                            <p className="font-body text-charcoal mb-4 mt-10 leading-relaxed">
                                <span className="font-semibold">Championing Art / Advancing Culture / Celebrating Expression /<br />
                                    Fostering Talent / Promoting Community / Advocating Collaboration</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Festival Fundraisers --- */}
            <section className="container mx-auto px-4 py-16 bg-bg-brown">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Festival Fundraisers
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-heading font-bold text-brown max-w-3xl mx-auto mb-6 leading-relaxed">
                            Concerts benefit the 2026 Central Ohio Folk Festival
                        </p>
                        <p className="font-body text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                            These fundraisers benefit the Columbus Folk Music Society’s annual Central Ohio Folk Festival held the first weekend in June. The festival attracts OVER 12,000 folks over the two-day weekend.
                        </p>
                    </div>
                </div>
                <div className="space-y-8 max-w-5xl mx-auto mb-10">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div className="p-6">
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">Pre-Valentine Concert with Bill Cohen & Friends</h3>
                                <p className="font-body text-gray-600 mb-4 leading-relaxed">
                                    <span className="font-semibold text-green">Saturday, February 7th, 7pm</span><br />
                                    Northwest United Methodist Church<br />
                                    (Ministry Center space)<br />
                                    5200 Riverside Dr, Cols, OH
                                </p>
                                <p>
                                    A fun-filled celebration totally around the theme of love and ALWAYS a few delightful surprises.
                                </p>
                                <p className="mt-4 mb-4">
                                    Suggested donation at door: $15. A fundraiser for our 2026 Central Ohio Folk Festival.
                                </p>
                                {/* <a
                                    href="/events/the-montvales"
                                    className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                                >
                                    Tickets
                                </a> */}
                            </div>
                            <div className="relative h-64 md:h-full min-h-[300px]">
                                <Image
                                    src="/events/heartimage.png"
                                    alt="Folk Concert"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* John Prine Tribute
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div className="p-6">
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">The Dirty Windows - A John Prine Tribute</h3>
                                <p className="font-body text-gray-600 mb-4 leading-relaxed">
                                    <span className="font-semibold text-green">Sunday, November 16th, 2025</span><br />
                                    Natalie’s Grandview / Music Hall Stage<br />
                                    945 King Ave, Cols, OH
                                </p>
                                <p>
                                    A celebration of ALL things John Prine. Yep, you can&apos;t get enough of John Prine!<br />
                                    The tribute band, the Dirty Windows, (named after one of Prine&apos;s phrase turning lyrics) features Mike Hale, Ed Tatum, Brian Szuch and Renilda Marshall who will be serving up some fine John Prine once again for our concert goers!
                                </p>
                                <p className="mt-4 mb-4">
                                    Food and drinks available.<br />
                                    Tickets: $15 (+ tkt fee)<br />
                                    (pre-purchase recommended)
                                </p>
                                <a
                                    href="/events/the-montvales"
                                    className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                                >
                                    Tickets
                                </a>
                            </div>
                            <div className="relative h-64 md:h-full min-h-[300px]">
                                <Image
                                    src="/events/thedirtywindows.png"
                                    alt="Folk Concert"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>*/}
                </div>

            </section>

            {/* --- Contact Section --- */}
            <section className="bg-light-brown py-16 text-charcoal shadow-inner">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Need to contact us?
                    </h2>
                    <p className="text-xl font-body mb-8 max-w-3xl mx-auto">
                        Use our contact page to reach out about performing, volunteering, membership or if you have other questions...
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Contact Page
                    </a>
                </div>
            </section>
        </div>
    );
}