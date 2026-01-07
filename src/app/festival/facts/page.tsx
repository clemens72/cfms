import Image from 'next/image';

export default function FactsPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="gap-8 bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    {/* Title Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-2">
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-green mb-2">
                                Fast Facts
                            </h1>
                            <p className="text-xl md:text-2xl font-body text-gray-600 mb-2">
                                twenty-ninth annual
                            </p>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-2">
                                CENTRAL OHIO FOLK FESTIVAL
                            </h2>
                            <p className="text-xl md:text-2xl font-body font-semibold text-brown">
                                ROOTS, ACOUSTIC MUSIC AT ITS BEST!
                            </p>
                        </div>
                        <div className="relative h-64">
                            <Image
                                src="/festival/COFFLOGO.png"
                                alt="Central Ohio Folk Festival"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Separator */}
                    <hr className="border-t-2 border-gray-300 mb-8" />

                    {/* Details Section */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left - Tall Image */}
                        <div className="relative h-96 md:h-auto">
                            <Image
                                src="/festival/DARBYDUCKMASCOT.jpg"
                                alt="Festival scene"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right - Details Content */}
                        <div className="md:col-span-2 space-y-6 text-lg font-body text-gray-700 leading-relaxed">
                            <p>
                                <span className="font-bold text-3xl text-green">JUNE 6 & 7, 2026</span> - first full weekend in June
                            </p>
                            
                            <p>
                                <span className="font-bold text-xl text-green">LOCATION</span> - <span className='text-3xl font-bold'>BANK RUN METRO PARK</span> located in Lockbourne, Ohio
                            </p>
                            
                            <p>
                                <span className="font-bold text-green">PRODUCED BY</span> - the Columbus Folk Music Society in cooperation with the Metro Parks and co-sponsored by WCBE 90.5 FM
                            </p>
                            
                            <p>
                                <span className="font-bold text-green">MULTIPLE ACTIVITIES</span> — A fun-filled, low-cost, family friendly event that includes: a Saturday night headliner featuring IBMA award winner Tray Wellington and his Tray Wellington Band; 4 performing stages; 30+ music workshops (all levels); dedicated old-time, folk, bluegrass, and pure song jam tents; kids&apos; music, crafts and activities; young adult offerings; community song; food trucks; local Nocterra craft beer; a festival store; Heart Beat™ Drum Circle(s); and more!
                            </p>
                            
                            <p>
                                <span className="font-bold text-green">A VERY MODEST ADMISSION FEE</span> — $10 pre-event and $15 onsite, and under 18 free. The general admission fee covers BOTH days of the event. The event draws over 12,000 folks over the 2 day weekend.
                            </p>
                            
                            <p>
                                <span className="font-bold text-green">HISTORY</span> — Founded in 1997, the festival&apos;s mission is to promote various forms of folk, acoustic roots music, dance, and storytelling AND to make the folk arts accessible to the public. Our festival is run and staffed almost entirely by volunteers. Visit: www.columbusfolkmusicsociety.org/festival for more information, especially as the event draws nearer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}