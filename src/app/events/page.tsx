import Image from 'next/image';
import { Hero } from '@/components/layout/Hero';

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-light-brown">
            <Hero
                title="Upcoming Events"
                subtitle="Join Us for Live Folk Music Performances"
                imageURL="/events-hero.jpg"
            />
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Americana / Folk Concert Series
                        </h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Event Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-48 bg-gradient-to-br from-green/20 to-orange/20">
                            <Image
                                src="/TheMontvales.png"
                                alt="Folk Concert"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">The Montvales</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                Saturday, January 24th, 7pm<br />
                                The Columbus Mennonite Church<br />
                                35 Oakland Park Ave, Columbus OH
                            </p>
                            <a
                                href="/events/the-montvales"
                                className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                            >
                                More Info & Tickets
                            </a>
                        </div>
                    </div>
                    {/* Additional event cards can be added here */}
                </div>
            </section>
        </div>
    );
}