export default function HeadlinerPage() {
    return (
        <div className="min-h-screen bg-light-gray">
            <section className="container mx-auto px-4 py-16">
                <div className="grid gap-12 items-center text-charcoal">
                    {/* Left Column: Text, Buttons, Icons */}
                    <div>
                        <h1 className="text-5xl font-bold mb-4 text-coral-red">
                            SATURDAY HEADLINER
                        </h1>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">
                            In 2025 the festival presents renowned, Argentina based, folk singer-songwriter
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            RICHARD SHINDELL
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">
                            7pm, May 3 2025<br /><br />
                            CENTRAL OHIO FOLK FESTIVAL
                        </h3>
                        <h3 className="text-xl md:text-2xl mb-4">
                            <i>Innovative, original and occasionally spiritual, Shindell's songs weave tales that interchangeably champion the downtrodden, exalt the disaffected or wax empathetic to those lost to society's fringes.</i>
                        </h3>
                        <div className="flex items-center gap-4 border-t border-bBlue/30 pt-4 mb-4">
                            <span className="text-sm font-heading font-semibold text-charcoal">LISTEN HERE:</span>
                            <a href="#" aria-label="YouTube Playlist" className="transition transform hover:scale-110">
                                https://music.youtube.com/channel/
                            </a>
                        </div>
                        <p className="font-body text-gray-700 mb-8 leading-relaxed">
                            Richard Shindell lives as both an immigrant and emigrant, crossing thresholds, that informs his illumination of the human experience through narrative song. Originally from Long Island, New York, now residing in Buenos Aires, Argentina, Shindell is a writer whose songs paint pictures, tell stories, juxtapose ideas and images, inhabit characters, vividly evoking entire worlds along the way and expanding our sense of just what it is a song may be.
                        </p>
                        <p className="font-body text-gray-700 mb-8 leading-relaxed">From lighthearted ballads and adulterous love songs, to dirges and diatribes that skillfully skewer politics, prejudice, war and religion, to the comic point-of-view of a cow stuck in abarbed wire fence, he has a unique ability to morph into the soul of the many and varied personalities he casts as narrators in certain songs—veritable novellas framed in haunting acoustic melodies.</p>
                        <p className="font-body text-gray-700 mb-8 leading-relaxed">Over the years, he has worked with the likes of Joan Baez, Lucy Kaplansky, and Dar Williams. The Wall Street Journal has called him “a master of the subtle narrative.”
                        </p>
                        <p className="font-body text-gray-700 mb-8 leading-relaxed">
                            In its 29th year, the festival brings together musicians from across the country and folk music enthusiasts from Central Ohio and beyond for a joyous, inexpensive weekend in a great outdoor setting!
                        </p>

                        {/* Playlist Links */}
                        <div className="flex items-center gap-4 border-t border-bBlue/30 pt-4">
                            <span className="text-sm font-heading font-semibold text-charcoal">TICKETS:</span>
                            <a href="#" aria-label="YouTube Playlist" className="transition transform hover:scale-110">
                                ticket link
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Photo Placeholder 
                    <div
                        className="h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl bg-cover bg-center border-4 border-bBlue"
                        style={{ backgroundImage: "url('/Shindell.jpeg')" }}
                    >
                    </div>*/}
                </div>
            </section>
            {/* --- END #2 SECTION --- */}
        </div>
    )
}