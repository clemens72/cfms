export default function BandsPerformersPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {/* CFMS MEMBER BANDS */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            CFMS Members Bands
                        </h2>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-2">
                            <li>
                                <b>Bill Cohen</b>, Performer<br />
                                614-263-3851, billcohen@columbus.rr.com<br />
                                <a href='https://www.facebook.com/billcohensings/' className='text-green hover:text-brown transition-colors font-medium'>
                                    https://www.facebook.com/billcohensings/
                                </a>
                            </li>
                            <li>
                                <b>Folquinox</b>, Band<br />
                                <a href='https://www.folquinox.com/' className='text-green hover:text-brown transition-colors font-medium'>
                                    https://www.folquinox.com/
                                </a>
                            </li>
                            <li>
                                <b>Katy Oberle</b>, folk/pop/singer-songwriter<br />
                                katyoberle@gmail.com<br />
                                <a href='https://katyoberle.com' className='text-green hover:text-brown transition-colors font-medium'>
                                    https://katyoberle.com
                                </a>
                            </li>
                            <li>
                                <b>Marshall Verbsky</b>, singer-songwriter<br />
                                marshallverbsky@gmail.com<br />
                                <a href='https://www.facebook.com/marshallverbs' className='text-green hover:text-brown transition-colors font-medium'>
                                    https://www.facebook.com/marshallverbs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* BANDS, PERFORMERS */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Bands, Performers
                        </h2>
                        <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-2">
                            <li>
                                <b>Halfway Home Band</b>, Americana/folk<br />
                                Mike@Halfway-home.com<br />
                                <a href='http://www.halfway-home.com' className='text-green hover:text-brown transition-colors font-medium'>
                                    http://www.halfway-home.com
                                </a>
                            </li>
                            <li>
                                <b>Bohemian Highway Band</b>, folk<br />
                                Beki Test, 614-538-084, good2bbek@yahoo.com<br />
                                <a href='http://www.bohemianhighwayfolk.com' className='text-green hover:text-brown transition-colors font-medium'>
                                    www.bohemianhighwayfolk.com
                                </a>
                            </li>
                            <li>
                                <b>Clintonville Grass</b>, bluegrass<br />
                                Carl Yaffey, 614-268-6353, cyaffey@gmail.com<br />
                                <a href='http://clintonvillegrass.com/' className='text-green hover:text-brown transition-colors font-medium'>
                                    Clintonvillegrass.com
                                </a>
                            </li>
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