import Image from "next/image";

export default function OutreachPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text, Buttons, Icons */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-green mb-4">
                            OUTREACH
                        </h2>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            The Columbus Folk Music Society is a not-for-profit 501c(3) organization that exists for cultural, educational and charitable purposes.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            In addition to being a cultural cornerstone in the local community and facilitating performances of the folk arts for all to enjoy, part of our mission includes the broadening of folk art knowledge, understanding and appreciation. To this end, we offer educational experiences in different forms (including workshops we run every year at our Central Ohio Folk Festival).
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Links to some of our other outreach programs are listed below. Please click to find out more about them!
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            <a href="/outreach/kirby" className="text-green hover:text-brown font-bold transition-colors">Bob Kirby Scholarship Program</a><br />
                            <a href="/weekly-jam" className="text-green hover:text-brown font-bold transition-colors">Weekly Community Jam</a>
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
            </section>

        </div>
    );
}