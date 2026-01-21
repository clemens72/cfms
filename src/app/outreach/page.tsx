import Image from "next/image";

export default function OutreachPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Left Column: Text, Buttons, Icons */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-green mb-4">
                            OUTREACH JAMS
                        </h2>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            The informal jam group &quot;Cbus Jammers&quot;  welcomes all skill levels of playing.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            &quot;Cbus Jammers&quot; provide musical outreach by holding jam sessions at different sites such as Worthington Farmers Market, various retirement communities, Columbus Parks and Rec, Metro Park events, Franklin County Fair, holiday dinner music for the unhoused, and several children programs in the Columbus area.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            If you are interested in participating and would like to receive a weekly schedule contact Jane VanAuken at: <a href="mailto:jvanauk@gmail.com" className="text-green hover:text-brown font-bold">jvanauk@gmail.com</a>
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            <a href="/kirby" className="text-green text-xl hover:text-brown font-bold transition-colors">Bob Kirby Scholarship Program</a><br />
                        </p>
                    </div>

                    {/* Right Column: Photos */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Card 1: Festival */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <Image
                                    src="/outreach/outreach1.png"
                                    alt="Central Ohio Folk Festival"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                    Bob Kirby Scholarship Program award recipients; annual award(s) to young musicians
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Outreach */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <Image
                                    src="/outreach/outreach2.png"
                                    alt="Educational Outreach"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                    Informal jams which many CFMS members attend and where children are encouraged to participate
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Newsletter */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <Image
                                    src="/outreach/outreach3.png"
                                    alt="Monthly Newsletter"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                    Jams at assisted living/nursing home facilities which many CFMS members attend and where residents are encouraged to participate
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-green mb-4">
                            IN PERSON JAM CALENDAR
                        </h2>
                    </div>                    
                </div>
                
                {/* Google Calendar Embed */}
                <div className="w-full max-w-5xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <iframe 
                            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
                            className="w-full"
                            style={{ border: 0 }}
                            width="800"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
}