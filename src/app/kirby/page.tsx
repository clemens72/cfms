import Image from "next/image";

export default function KirbyPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            {/* MEMBERSHIP BENEFITS SECTION */}
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Kirby Music Scholarship Program
                </h1>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown">
                        APPLICATION & COVER LETTER
                    </h2>
                    <a
                        href="/kirby/application-kirbyscholar2025.docx"
                        target="_blank"
                        className="inline-block mt-4 px-6 py-3 mx-4 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Download [Word]
                    </a>
                    <a
                        href="/kirby/application-kirbyscholar2025.pdf"
                        target="_blank"
                        className="inline-block mt-4 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Download [PDF]
                    </a>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {/* Benefit Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-8 text-charcoal">In 2009, the Columbus Folk Music Society established the Bob Kirby Scholarship Memorial Fund in memory of Bob Kirby.</h3>
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">PURPOSE</h3>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                <b>To assist young musicians from the central Ohio area by offering new musical opportunities</b>
                            </p>
                            <ul className="font-body text-gray-700 mt-3 mb-4 ml-6 list-disc space-y-2">
                                <li>To enhance musical skills</li>
                                <li>To pursue a greater knowledge of, and appreciation for folk music</li>
                                <li>To offer performance experience</li>
                            </ul>
                            <p className="font-body text-gray-700 mb-8 leading-relaxed">
                                Recipients also have the opportunity to perform at and attend workshops at the Central Ohio Folk Festival.
                            </p>
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">REQUIREMENTS</h3>
                            <ul className="font-body text-gray-700 mt-3 mb-4 ml-6 list-disc space-y-2">
                                <li>Open to All Students in grades 3-12</li>
                                <li>Submit a letter explaining your interest in music, your musical goals, what musical instrument you are interested in playing (or play) and if you sing.  The due date is March 20th.</li>
                                <li>An interview will be held with the top 5 applicants</li>
                            </ul>
                        </div>
                    </div>
                    {/* Benefit Card 2 */}
                    <div className="overflow-hidden">
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/NilsSkinnerJacksonSweeney.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/Picture2.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/Picture3.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/Picture4.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Benefit Card 3 */}
                    <div className="overflow-hidden">
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/Picture5.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/Picture6.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/Picture7.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <div className="relative aspect-square">
                                    <Image
                                        src="/kirby/MagnusMcKayc.jpg"
                                        alt="Bob Kirby Scholarship recipient"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Benefit Card 4 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">BENEFITS</h3>
                            <ul className="font-body text-gray-700 mt-3 mb-4 ml-6 list-disc space-y-2">
                                <li>Household admission to The Central Ohio Folk Festival 2026, June 6 & 7 at Bank Run Metro Park</li>
                                <li>$40 for meals at the festival</li>
                                <li>An opportunity to perform at The Central Ohio Folk Festival 2026 (not required)</li>
                                <li>$500.00 award to be used toward music, such as, but not limited to, instrument purchase or music lessons</li>
                                <li>The CFMS newsletter “A Different Strummer” will be sent monthly to the winner</li>
                            </ul>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                <i>Disclaimer:</i> This award and the criteria are subject to change at the discretion of the Scholarship Committee.
                            </p>
                            <p className="font-body text-gray-700 leading-relaxed">
                                For additional information email: <a href="mailto:lindamcdonald@columbusfolkmusicsociety.org" className="text-green hover:text-brown font-bold">lindamcdonald@columbusfolkmusicsociety.org</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Additional Links Section --- */}
            <section className="bg-light-green">
                <div className="container mx-auto px-4 gap-6 max-w-7xl text-center">
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-brown col-span-3">
                        Past Kirby Scholarship Winners
                    </h2>
                    <a
                        href="/kirby/kirby-scholarship-winnersrev2025.pdf"
                        target="_blank"
                        className="inline-block mt-4 px-6 py-3 mx-4 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        View PDF
                    </a>
                </div>
            </section>

        </div>
    );
}