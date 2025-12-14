export default function NewsletterArchivePage() {
    return (
        <div className="min-h-screen bg-light-brown">
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-orange">
                            Columbus Folk Music Society
                        </h2>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                        Newsletter Archive
                    </h1>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        Explore our collection of past newsletters to stay updated on the latest folk music news and events.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example Newsletter Item */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">December-January 2025 Edition</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                Highlights from the December-January 2025 newsletter, including upcoming events and featured articles.
                            </p>
                            <a
                                href="/newsletter/DecJan2025.pdf"
                                target="_blank"
                                className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                View Newsletter
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">December-January 2025 Edition</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                Highlights from the December-January 2025 newsletter, including upcoming events and featured articles.
                            </p>
                            <a
                                href="/newsletter/DecJan2025.pdf"
                                target="_blank"
                                className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                View Newsletter
                            </a>
                        </div>
                    </div>
                    {/* Add more newsletter items as needed */}
                </div>
            </section>
        </div>
    );
}