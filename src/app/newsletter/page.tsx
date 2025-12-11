import Image from "next/image";

export default function NewsletterPage() {
    return (
        <div className="min-h-screen bg-light-brown">
            <section className="container mx-auto px-4 py-16">
                <div className="w-4/5 mx-auto mb-12">
                    <Image
                        src="/newsletter/newsletter.jpeg"
                        alt="Monthly Newsletter"
                        width={800}
                        height={400}
                        className="object-cover rounded-xl shadow-lg w-full"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-green mb-4">
                            A DIFFERENT STRUMMER
                        </h2>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            The CFMS publishes a monthly newsletter filled with content about our upcoming events and other articles of current interest. You can submit articles or suggestions using the button below.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Subscribe to our newsletter to receive regular updates directly in your inbox. Don&apos;t miss out on any of the exciting folk music happenings in our community!
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            You can also view past editions of our newsletter in the archive section.
                        </p>
                        <div className="space-x-4 space-y-2">
                            <a
                                href="/newsletter/DecJan2025.pdf"
                                className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                View Latest Newsletter
                            </a>
                            <a
                                href=""
                                className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                Subscribe
                            </a>
                            <a
                                href="/contact"
                                className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                Suggestions
                            </a>
                            <a
                                href="/members/newsletter"
                                className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                Hardcopy Request
                            </a>
                        </div>
                    </div>
                    {/* Right Column: Archive */}
                    <div className="bg-white text-center p-6 rounded-xl shadow-lg border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Newsletter Archive
                        </h3>
                        <ul className="list-none space-y-2 font-body text-gray-700">
                            <li>
                                <a href="/newsletter/DecJan2025.pdf" className="text-green hover:text-brown transition-colors">
                                    December 2025/January 2026
                                </a>
                            </li>
                            <li>
                                <a href="/newsletter/November2025.pdf" className="text-green hover:text-brown transition-colors">
                                    November 2025
                                </a>
                            </li>
                            <li>
                                <a href="/newsletter/October2025.pdf" className="text-green hover:text-brown transition-colors">
                                    October 2025
                                </a>
                            </li>
                            <li>
                                <a href="/newsletter/September2025.pdf" className="text-green hover:text-brown transition-colors">
                                    September 2025
                                </a>
                            </li>
                            <li>
                                <a href="/newsletter/JulAug2025.pdf" className="text-green hover:text-brown transition-colors">
                                    July/August 2025
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
}