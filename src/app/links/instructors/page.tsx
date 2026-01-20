export default function InstructorsPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Instructors
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    A curated list of instructors to help you find the right teacher for your folk music journey.
                </p>

                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 pb-8 border-b-2 border-green/20"></div>

                    <div className="space-y-8">
                        
                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Andy Beyer
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Dulcimer</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                614-846-1779<br />
                                dulcimerman26@gmail.com
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Barry Chern
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Blues harmonica, guitar, mandolin, acoustic blues, finger-picking & old-time tunes, and music theory</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                614-294-7241<br />
                                bchern@columbus.rr.com
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Deborah Colon
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Traditional Irish fiddle & beginning violin</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                614-459-6654<br />
                                deborahleighclark@yahoo.com
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Thomas Davis
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Bodhran</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                614-263-0264
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Jeff Denty
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Beginning Piano & Guitar</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                614-870-2301
                            </p>
                        </div>

                        {/* Sample Instructor Listing 
                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Andy Beyer
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Dulcimer</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                614-846-1779<br />
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
                        */}
                    </div>
                </div>
            </section>



            {/* --- Contact Section --- */}
            <section className="bg-blue py-16 text-white shadow-inner">
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