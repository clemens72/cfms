import { Hero } from '@/components/layout/Hero';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <Hero
                title="About Us"
                subtitle="Learn more about the Columbus Folk Music Society"
                imageURL="/cfms-park-woodcut.png"
                buttonText='Join or Renew Membership'
                buttonLink='/members'
            />

            {/* ABOUT US SECTION */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {/* Card 1: Columbus Folk Music Society */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Columbus Folk Music Society</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            The Columbus Folk Music Society (CFMS) is a nonprofit society committed to promoting traditional and contemporary folk music, dance and storytelling. We are a membership organization that provides:
                        </p>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-1">
                            <li>Venues for performers of all ages and experience</li>
                            <li>Workshops and teaching opportunities</li>
                            <li>Events and concerts for members and the public</li>
                            <li>Connections to other folk and music sources</li>
                            <li>Annual Kirby Scholarship award(s) for young musicians</li>
                        </ul>
                    </div>

                    {/* Card 2: Our Mission */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Our Mission</h2>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            The Columbus Folk Music Society, Inc. is organized to operate exclusively as a not-for-profit corporation for educational, cultural and charitable purposes.
                        </p>
                        <p className="font-body text-gray-700 leading-relaxed">
                            The society&apos;s goals include:
                        </p>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-1">
                            <li>To promote the appreciation, understanding, private playing, public performance and enjoyment of folk music, song, dance, storytelling and other folk arts inclusive of all cultures</li>
                            <li>To improve and expand folk art communications</li>
                            <li>To support folk artists and other worthy cultural and charitable activities and organizations</li>
                        </ul>
                    </div>

                    {/* Card 3: Who Are We? */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Who Are We?</h2>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            Our members come from all walks of life - we are accountants, tradespeople, teachers, photographers, lawyers and members of all ages. We are folk musicians, singer/songwriters, dancers, storytellers, poets, historians, performers and listeners.
                        </p>
                        <p className="font-body text-gray-700 leading-relaxed">
                            Our diversity is what makes our Society a strong, local touchstone. We welcome everyone with respect. In this way, we encourage the broadening of folk art knowledge, its performance, preservation and public awareness.
                        </p>
                        <a
                            href="/about/leadership"
                            className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Board Members and Leadership
                        </a>
                    </div>

                    {/* Card 4: Diversity Statement */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Diversity Statement</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            The Columbus Folk Music Society celebrates and values music and other folk arts presented by the people of our Central Ohio community. We are committed to promote an array of programs and opportunities that reflect and include the diverse and creative differences present in the Central Ohio area. In this regard, the CFMS is committed to continued improvement.
                        </p>
                    </div>

                    {/* Card 5: 501(c)(3) Organization */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">A 26 U.S.C. 501(c)(3) Organization</h2>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            Incorporated in the State of Ohio, the Columbus Folk Music Society, Inc. also has a 501 (c) 3 nonprofit status and is listed with the IRS for tax deductible charitable contributions.
                        </p>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            We are also part of The Columbus Foundation&apos;s <i>The Giving Store</i> community program and are eligible for donations by credit card made through The Columbus Foundation website <a href="https://columbusfoundation.org/the-giving-store/nonprofit-directory-listing/ColumbusFolkMusicSocietyInc/6505" className='text-green hover:underline font-semibold'>here.</a>
                        </p>
                        <p className="font-body text-gray-700 leading-relaxed">
                            We also receive other foundation and local corporate support as well as work with various service groups in Central Ohio. This allows us to fulfill our mission of expanding awareness of and appreciation for the folk arts in Central Ohio.
                        </p>
                        <a
                            href="/CFMS_BYLAWS_REV6.1.24.pdf"
                            className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            CFMS ByLaws
                        </a>
                    </div>

                    {/* Card 6: How We Got Started */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">How We Got Started</h2>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            Formed in 1991 and dedicated to preserving and advancing the folk arts, the Columbus Folk Music Society started with a core group of folk lovers who wanted to share their love and knowledge of the folk arts.
                        </p>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            In that same year, the new society took over booking and management of the monthly Other Side Coffeehouse at the First Unitarian Universalist Church of Columbus, which provided a gathering place. The coffeehouse venue relocated to the Areopagitica Bookstore in 2006 and, in 2011, moved to the Columbus Mennonite Church space were it continues to thrive.
                        </p>
                        <p className="font-body text-gray-700 leading-relaxed">
                            In 2018, the Society received financial support to expand its concert offerings under the title &quot;CFMS&apos; Americana/Folk Concert Series,&quot; which includes all the concerts at the FolkSide Coffeehouse.
                        </p>
                    </div>

                    {/* Card 7: CFMS Today */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">CFMS Today</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            Many new talents have been discovered through open mics and agent contacts. We have expanded involvement in regional venues, outreach by our members, and present ever growing new opportunities to hear local, regional, national, and international talent.
                        </p>
                    </div>

                    {/* Card 8: Central Ohio Folk Festival */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Central Ohio Folk Festival</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            The Central Ohio Folk Festival (COFF) was founded in 1997 by the CFMS to make folk arts accessible to a much larger public. The festival continues to grow, attracting over 11,000 participants over the two day event. We partner with the Metro Parks in order to provide an outdoor location -- &apos;a harmony of nature and music&apos;, which is open to the community.
                        </p>
                    </div>

                    {/* Card 9: Membership - Full Width */}
                    <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Membership Has Its Privileges</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            Membership in the Columbus Folk Music Society ensures you&apos;re in the loop with all CFMS offerings, local folk activities, special and fundraising events. You&apos;ll receive the monthly CFMS newsletter, &quot;A Different Strummer,&quot; to keep you informed. Local and regional folk activities are also listed on the CFMS website so you can plan your calendar accordingly. With your membership, you&apos;ll enjoy discounts at the monthly coffeehouse (concert series) and you&apos;ll be the first to know about concerts and other special events throughout the year.
                        </p>
                        <a
                            href="/join"
                            className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Join or Renew Membership
                        </a>
                    </div>
                </div>
            </section>

            {/* OUR ACTIVITIES SECTION */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                        Our Activities
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">

                    {/* Card 1: CFMS' Americana/Folk Concert Series  */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">CFMS&apos; Americana/Folk Concert Series</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            Monthly Americana/Folk Concert Series (excluding May and December)<br /><br />
                            A 10-concert series, occurring at a number of different venues. The majority of concerts occur the last Saturday of the month and are held at the Columbus Mennonite Church space, 35 Oakland Park Avenue, Columbus, OH. Pre-performance jam session, open stage (pre sign-up) followed by a featured performer. It also provides a social and creative setting for discussing folk history, stories, music, and the latest current events in the folk world. Snacks / beverages available. The other concerts occur in other parts of the city as noted on our Events page.
                        </p>
                    </div>

                    {/* Card 2: Annual Central Ohio Folk Festival */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Annual Central Ohio Folk Festival</h2>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            Held the 1st full weekend in May at Highbanks Metro Park. It is open to the public and features a multitude of activities for all ages:  3 performing stages; 30+ music workshops (with something for everyone); Sat evening Headliner concert featuring international touring artist; kids music & crafts; youth activities and dedicated jam tents. There are no fixed fees for the festival - <b>attendees&apos; generous support by free-will donations help make all of it possible.</b><br /><br />
                            Daytime concerts feature regional & local favorites as well as new artists. Community Sing opportunities; drum circles both Sat and Sun; and for the kids - an &apos;Instrument Petting Zoo&apos; and other hands-on activities and sing-a-longs. Food service & Festival Store.
                        </p>
                    </div>

                    {/* Card 3: Summer Picnics Multiple Open Jam Opportunities  */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Summer Picnics, Multiple Open Jam Opportunities</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            See the Google calendar on the Events tab <a href="/events" className='text-green hover:underline font-semibold'>here.</a>
                        </p>
                    </div>

                    {/* Card 4: Annual Fundraising Events */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Annual Fundraising Events</h2>
                        <p className="font-body text-gray-700 leading-relaxed">
                            Festival benefit concerts, community support events, and local fundraisers for community causes.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Contact Section --- */}
            <section className="bg-light-brown py-16 text-charcoal shadow-inner">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Need to contact us?
                    </h2>
                    <p className="text-xl font-body mb-8 max-w-3xl mx-auto">
                        See our contact page for a form as well as some frequestly asked questions.
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