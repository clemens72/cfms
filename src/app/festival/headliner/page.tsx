import Image from 'next/image';

export default function HeadlinerPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="gap-8 bg-white p-4 rounded-lg shadow-lg">
                    <div className="md:col-span-2 mb-8">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-center text-green">
                            TRAY WELLINGTON BAND
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-heading font-semibold mt-2 text-center text-brown">
                            Saturday, June 6 • Kirby Main Stage • 7:30 PM
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="md:row-span-2">
                            <div className="relative h-96 mb-8">
                                <Image
                                    src="/festival/headliner/TrayWellingtonBand.jpg"
                                    alt="Festival"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="mb-8">
                                <p className="text-l font-body text-center italic px-8 leading-relaxed">
                                    Tray Wellington&apos;s approach to the quintessential American instrument is all about looking forward. He is critically acclaimed not only for his technical prowess, but also for crafting a one-of-akind voice on the instrument.
                                </p>
                            </div>
                            
                        <div className="relative h-96 p-8">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/fz_XRYrzbKQ"
                                title="Tray Wellington Band"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        </div>

                        {/* Column 2 */}
                        <div className="p-8">
                            <p className="text-lg font-body text-gray-700 leading-relaxed mb-8">
                                <b>Tray Wellington</b> is an acclaimed banjo innovator whose genredefying approach bridges folk, bluegrass, jazz, and contemporary roots music. Recognized for his fearless exploration of the banjo&apos;s possibilities, Tray has been honored with some of the most prestigious accolades in acoustic music, including the <b>2019 IBMA Momentum Instrumentalist of the Year</b>, and has been twice nominated for <b>IBMA New Artist of the Year</b>.
                            </p>
                            <p className="text-lg font-body text-gray-700 leading-relaxed mb-8">
                                His artistry has taken him to stages across the world and he has been featured at premier U.S. festivals including the <b>Newport Folk Festival</b>, <b>Telluride Bluegrass Festival</b>, and <b>Bourbon & Beyond</b>, among many others. Tray&apos;s work has earned recognition not only from fans and peers but also from <b>The New York Times</b>, <b>Wall Street Journal</b>, <b><i></i>Billboard</b>, and <b><i></i>NPR</b>.
                            </p>
                            <p className="text-lg font-body text-gray-700 leading-relaxed mb-16">
                                Tray leads the <b>Tray Wellington Band</b>, a dynamic ensemble that brings his compositions to life with rich instrumentation and inventive arrangements. Together, they transform Tray&apos;s compositions into immersive, high-energy performances that engage both traditional and contemporary audiences.
                            </p>
                            <h2 className="text-2xl font-heading font-bold text-green mb-4">
                                TICKETS
                            </h2>
                            <p className="text-l font-body text-gray-700 leading-relaxed">
                                The entrance fee for the festival includes lawn seating for the Saturday evening headliner performance and you would need to bring your own blanket/chairs. Festival admission tickets are $10 pre-event for 18 and over / $15 on site. Closer provided and preferred seating tickets (limited number of seats) are available for an additional $10 at the festival admissions ticketing platform.<br /><br />
                                <a href="https://www.ticketleap.events/tickets/wwwcolumbusfolkmusicsocietyorg/central-ohio-folk-festival-2026" className="text-green font-bold underline">Get tickets!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}