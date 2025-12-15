export default function LinksPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Links & More
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    Resources about Folk Music and Related Topics
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {/* Music & Arts */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Music and Arts</h2>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-2">
                            <li><a href='http://www.folkalley.com/' className='text-green hover:text-brown transition-colors font-medium'>Folk Alley</a></li>
                            <li><a href='http://www.folklib.net/' className='text-green hover:text-brown transition-colors font-medium'>Folklib</a></li>
                            <li><a href='https://www.columbusmakesart.com/' className='text-green hover:text-brown transition-colors font-medium'>Columbus Makes Art</a></li>
                            <li><a href='https://folk.org/' className='text-green hover:text-brown transition-colors font-medium'>Arts in Ohio</a></li>
                            <li><a href='https://www.farmfolk.org/' className='text-green hover:text-brown transition-colors font-medium'>Folk Alliance Region Midwest</a></li>
                            <li><a href='https://folk.org/' className='text-green hover:text-brown transition-colors font-medium'>Folk Alliance International</a></li>
                            <li><a href='https://creekdontrise.com/' className='text-green hover:text-brown transition-colors font-medium'>CreekDontRise.com (Folk and Acoustic Instrument Resource)</a></li>
                            <li><a href='https://ohiofestivals.net/ohio-festivals/' className='text-green hover:text-brown transition-colors font-medium'>ohiofestivals.net/ohio-festivals</a></li>
                        </ul>
                    </div>

                    {/* Card 2: More Information */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">                        
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">More Information</h2>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-2">
                            <li><a href='/newsletter' className='text-green hover:text-brown transition-colors font-medium'>A Different Strummer: Newsletter</a></li>
                            <li><a href='/outreach' className='text-green hover:text-brown transition-colors font-medium'>Outreach</a></li>
                            <li><a href='/outreach/kirby' className='text-green hover:text-brown transition-colors font-medium'>Kirby Scholarship</a></li>
                            <li><a href='/links/folk-orgs' className='text-green hover:text-brown transition-colors font-medium'>Folk Organizations</a></li>
                            <li><a href='/links/bands-performers' className='text-green hover:text-brown transition-colors font-medium'>Bands and Performers</a></li>
                            <li><a href='/links/dance-links' className='text-green hover:text-brown transition-colors font-medium'>Dance Links</a></li>
                            <li><a href='/links/festivals' className='text-green hover:text-brown transition-colors font-medium'>Festivals, Camps, Schools</a></li>
                            <li><a href='/links/instructors' className='text-green hover:text-brown transition-colors font-medium'>Instructors</a></li>
                        </ul>
                    </div>

                    {/* CFMS Events and Jam Calendars */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Events and Jams Calendars</h2>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            The <b>CFMS Events Calendar</b> includes CFMS-sponsored concerts, festival, and other events that are open to the public. Come enjoy the experience from the audience! These make for a great outing: alone, with friends, or with your special someone.<br />
                            Events on this calendar are explained in detail on the <a href="/events" className='text-green'>Events</a> page of this site.
                        </p>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            The <b>Events & Jams Calendar</b> consists of events where anyone is welcome to bring their folk instrument and join in an informal jam session with a group … or just watch the fun and listen. These are a great place to practice your instrument with a group, and a friendly step out of the basement for those who normally play alone or are trying to build their music-making skills.<br />
                            <i>All folk instrument players are welcome, regardless of skill or experience!</i>
                        </p>
                        <a
                            href="/events/jam-sessions"
                            className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Events & Jams Calendar
                        </a>
                    </div>

                    {/* Card 4: Photos - Central Ohio Folk Festivals */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Photos - Central Ohio Folk Festivals</h2>
                        <p className="font-body text-gray-700 leading-relaxed mb-3">
                            The Central Ohio Folk Music Society has been hosting the Central Ohio Folk Festival for over four decades. Here are some photos from past festivals showcasing the vibrant community and memorable performances.
                        </p>
                        <a
                            href="https://www.flickr.com/photos/36521981794@N01/albums/with/72157681241428114"
                            className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            View Festival Photos
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Contact Section --- */}
            <section className="bg-light-brown py-16 text-charcoal shadow-inner">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Suggestions?
                    </h2>
                    <p className="text-xl font-body mb-8 max-w-3xl mx-auto">
                        See our contact page to let us know if there are other links you&apos;d like to see here.
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