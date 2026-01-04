export default function DanceLinksPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {/* Dance Organizations */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Dance Organizations
                        </h2>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-2">
                            <li><a href='http://www.cincinnaticontradance.org/index.htm' className='text-green hover:text-brown transition-colors font-bold'>Cincinnati Contradance</a></li>
                            <li><a href='http://www.neohiocontradance.org/index.html' className='text-green hover:text-brown transition-colors font-bold'>Northeast Ohio Contradance & Traditional Dance Community</a></li>
                            <li><a href='http://www.recfolkdancers.webs.com/Home.html' className='text-green hover:text-brown transition-colors font-bold'>Recreational Folk Dancers of Columbus</a></li>
                        </ul>
                    </div>

                    {/* Individual Dance Sites */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Individual Dance Sites
                        </h2>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-2">
                            <li><a href='http://www.firstuucolumbus.org/our-community/dancing-events' className='text-green hover:text-brown transition-colors font-bold'>All Soles Columbus Contra Dance</a></li>
                            <li><a href='http://www.bigscioty.com/' className='text-green hover:text-brown transition-colors font-bold'>Big Scioty Barn Dance</a></li>
                            <li><a href='http://columbusfolkdancers.webs.com/Home.html' className='text-green hover:text-brown transition-colors font-bold'>Columbus Folk Dancers</a></li>
                            <li><a href='http://www.bigscioty.com/english.html' className='text-green hover:text-brown transition-colors font-bold'>English Country Dancers of Columbus</a></li>
                            <li><a href='http://www.rscdscincinnati.org/HnT/render.php?page=body.html' className='text-green hover:text-brown transition-colors font-bold'>Heather &apos;N&apos; Thistle</a></li>
                            <li><a href='http://recfolkdancecolumbus.org/Hillel.html' className='text-green hover:text-brown transition-colors font-bold'>Hillel International Folk Dancers</a></li>
                            <li><a href='http://www.robertsnider.com/BalkanNight/' className='text-green hover:text-brown transition-colors font-bold'>Balkan Night Dance Parties</a></li>
                            <li>Irish Country Set Dancers of Columbus<br />C/O: Sharron Coplin (coplin.2@osu.edu) </li>
                            <li><a href='http://www.welshcountrydancers.org/' className='text-green hover:text-brown transition-colors font-bold'>Welsh Country Dancers</a></li>
                            <li><a href='https://www.theaterseatstore.com/blog/square-dancing-guide' className='text-green hover:text-brown transition-colors font-bold'>Square Dancing Guide</a></li>
                        </ul>
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