export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Columbus Folk Music Society
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    Leadership and Trustees of 2025-2026
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {/* Card 1: Columbus Folk Music Society */}
                    <div className="bg-white text-center p-6 rounded-xl shadow-lg border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Board Members</h2>
                        <p>
                            <b>President: </b>Jan Flory<br />
                            <b>Vice President: </b>Jon Levy<br />
                            <b>Secretary: </b>Barbara Wright<br />
                            <b>Treasurer: </b>Kevin Johnson<br />
                            <b>President Emeritus: </b>Mike Hale<br />
                        </p>
                    </div>

                    {/* Card 2: Our Mission */}
                    <div className="bg-white text-center p-6 rounded-xl shadow-lg border-t-4 border-orange hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal">Trustees</h2>
                        <ul className="font-body text-gray-700 mt-3 space-y-1">
                            <li>Jane VanAuken</li>
                            <li>Diane Boston</li>
                            <li>Jim McHie</li>
                            <li>Marian Harris</li>
                            <li>Eileen Smith</li>
                            <li>Hugh Farthing</li>
                            <li>Dan Clarke</li>
                            <li>Terry Sharkey</li>
                            <li>Brent Davis</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- Contact Section --- */}
            <section className="bg-green py-16 text-white shadow-inner">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Need to contact us?
                    </h2>
                    <p className="text-xl font-body mb-8 max-w-3xl mx-auto">
                        See our contact page for a form as well as some frequestly asked questions.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-orange text-white font-body font-semibold rounded-lg hover:bg-orange/90 transition duration-200"
                    >
                        Contact Page
                    </a>
                </div>
            </section>

        </div>
    );
}