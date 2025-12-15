export default function FolkFestivalsPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Folk Festivals and Events Links
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    A curated list of folk festivals and event resources to help you discover and enjoy folk music events in our region and beyond.
                </p>

                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 pb-8 border-b-2 border-green/20">
                        <h2 className="text-3xl font-heading font-bold mb-4 text-charcoal">
                            Festivals
                        </h2>
                        <p className="font-body text-gray-700 mb-6 leading-relaxed">
                            Most of the listings below are within one day&apos;s drive (500 miles) of Columbus. Primarily, we list Folk type events at Folk venues or by Folk organizations.
                        </p>
                        <p className="font-body text-brown font-semibold mb-6">
                            <b>NOTE:</b> <i>Dates may not be current; please visit their websites.</i>
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Festival Listing */}
                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Nelsonville Music Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">May 30 - June 2</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Robbins Crossing Historic Village<br />
                                Hocking College<br />
                                3301 Hocking Parkway, Nelsonville, OH 45764
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.nelsonvillefest.org' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.nelsonvillefest.org
                                </a>
                            </p>
                        </div>

                        {/* Add more festival listings here with the same structure */}
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