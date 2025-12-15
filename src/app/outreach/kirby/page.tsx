import Image from "next/image";

export default function KirbyPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            {/* MEMBERSHIP BENEFITS SECTION */}
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Bob Kirby Scholarship Memorial Fund
                </h1>
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown">
                        APPLICATION & COVER LETTER
                    </h2>
                    <a
                        href="/outreach/application-kirbyscholar2025.docx"
                        target="_blank"
                        className="inline-block mt-4 px-6 py-3 mx-4 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Download [Word]
                    </a>
                    <a
                        href="/outreach/application-kirbyscholar2025.pdf"
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
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">About the Program</h3>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                In 2009, the Columbus Folk Music Society established the Bob Kirby Scholarship Memorial Fund in memory of Bob Kirby.
                            </p>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                The purpose of the fund is to provide support to young musicians from Central Ohio by offering monetary awards to be used to enhance musical skills in the folk music tradition. Recipients may use the $500 award to purchase an instrument, take music lessons, attend music workshops, etc.
                            </p>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                Recipients also have the opportunity to perform at and attend workshops at the Central Ohio Folk Festival.
                            </p>
                        </div>
                    </div>
                    {/* Benefit Card 2 */}
                    <div className="overflow-hidden">
                        <div className="p-6 justify-items-center text-center">
                            <Image
                                src="/outreach/outreach1.png"
                                alt="Bob Kirby Scholarship"
                                width={400}
                                height={250}
                                className="object-cover rounded-md mb-4"
                            />
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                Kirby Scholarship is awarded to Toryn Myles at the Central Ohio Folk Festival
                            </p>
                        </div>
                    </div>
                    {/* Benefit Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Application Requirements</h3>
                            <ul className="font-body text-gray-700 mt-3 ml-6 list-disc space-y-2">
                                <li>for students grades 3-12</li>
                                <li>completed application form</li>
                                <li>letter explaining interest in folk music, musical experience, musical instrument(s) applicant plays / is interested in playing. A singing voice qualifies.</li>
                                <li>deadline for submission is in March (for exact date, refer to application at link above).</li><br />
                            </ul>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                All applications are reviewed and the top five applicants interviewed.
                            </p>
                        </div>
                    </div>
                    {/* Benefit Card 4 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Scholarship Award</h3>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                The award is announced and received at the Central Ohio Folk Festival in May.
                            </p>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                An application form and cover letter explaining the program can be found at the link above.
                            </p>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                If you know someone who might be interested, please pass on the information!
                            </p>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                Questions concerning the Kirby Scholarship can be directed to info@columbusfolkmusicsociety.org.
                            </p>
                            <p className="font-body text-gray-700 mb-4 leading-relaxed">
                                If you are interested in making a donation to the memorial fund, please contact CFMS Treasurer at: treasurer@columbusfolkmusicsociety.org.
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
                        href="/outreach/kirby-scholarship-winnersrev2024.pdf"
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