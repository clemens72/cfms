export default function ActivitiesPage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center space-x-4 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                        2026 Festival Activities:
                    </h3>
                    <span
                        className="inline-block px-4 py-2 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
                    >
                        Download Activities [PDF]
                    </span>
                </div>
                <div className="max-w-5xl mx-auto space-y-8 bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-heading font-bold text-charcoal">
                        2026 Festival Activities
                    </h1>
                    <p className="text-xl font-body text-gray-700 mb-6 leading-relaxed">
                        The activities sheet will be available soon. Please check back later for updates.
                    </p>
                </div>
            </section>
        </div>
    );
}