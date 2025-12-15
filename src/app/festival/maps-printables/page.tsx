export default function MapsPrintablesPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center space-x-4 space-y-4 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                        Maps and Printable Stuff
                    </h3>
                    <span
                        className="inline-block px-4 py-2 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
                    >
                        Download Bank Run Metro Park Map [PDF]
                    </span>
                    <span
                        className="inline-block px-4 py-2 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
                    >
                        Festival Site Map [PDF]
                    </span>
                    <span
                        className="inline-block px-4 py-2 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
                    >
                        Schedule of Events [PDF]
                    </span>
                </div>
                <div className="max-w-5xl mx-auto space-y-8 bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-xl font-body text-gray-700 mb-6 leading-relaxed">
                        Downloads will be available soon. Please check back later for updates.
                    </p>
                </div>
            </section>
        </div>
    );
}