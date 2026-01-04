export default function MembersPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            {/* MEMBERSHIP BENEFITS SECTION */}
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    CFMS Members
                </h1>

                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Membership Has Its Privileges
                        </h2>
                    </div>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        You&apos;re in the loop with CFMS&apos; happenings and special events, receive our monthly newsletter, get discounts at our monthly Americana/Folk Concert Series, AND join a vibrant community of fellow folk music enthusiasts!  Band membership includes some promotional perks.
                    </p>
                    <a
                        href="/members/join"
                        className="inline-block mt-4 px-6 py-3 mr-4 my-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Join Today
                    </a>
                    
                    <a
                        href="/donate"
                        className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Donate
                    </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Benefit Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Membership Renewals due December 31</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                CFMS is a 501(c)(3) non-profit; membership dues may be tax deductible (IRS Pub 526).
                            </p>
                            <a
                                href="/members/renew"
                                className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                Renew Your Membership
                            </a>
                        </div>
                    </div>
                    {/* Benefit Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Monthly Newsletter Hardcopy</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                If you wish to receive a printed copy of the monthly newsletter mailed to you, we kindly request a $15 contribution over and above dues to cover our postage & handling fees.
                            </p>
                            <div className="space-x-4">
                                <a
                                    href="/newsletter"
                                    className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                                >
                                    View/Subscribe
                                </a>
                                <a
                                    href="/newsletter/request"
                                    className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                                >
                                    Request Hardcopy
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Benefit Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Cash or Check Form</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                If you wish to pay by cash or check, do not complete the form below; download and print this form, complete, and mail it in.
                            </p>
                            <a
                                href="/members/half-sheet-cfms-membrshp-formrev12.3.22.pdf"
                                target="_blank"
                                className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                Print Form
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}