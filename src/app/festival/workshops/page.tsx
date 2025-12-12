import Image from "next/image";

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="mb-12 text-center space-x-4 space-y-2 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Complete Workshop Listing:
                        </h3>
                        <a
                            href="/festival/workshops/2025-coff-workshop-list-4webv1.22.25.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Download 2025 [PDF]
                        </a>
                    </div>
                    <div className="mb-12 text-center space-x-4 space-y-2 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Workshop Handout Sample:
                        </h3>
                        <a
                            href="/festival/workshops/onepageworkshophandoutsample.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Download [.docx]
                        </a>
                    </div>

                    <div className="mb-12 text-center space-x-4 space-y-2 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            2025 Request Proposal:
                        </h3>
                        <a
                            href="/festival/workshops/requestforproposalwkshpstemplate_rev11.15.2024-copy.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Download [.docx]
                        </a>

                        <a
                            href="/festival/workshops/requestforproposalwkshpstemplate_rev11.15.2024-copy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Download [.PDF]
                        </a>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto space-y-8 p-8">
                    <div className="relative w-full">
                        <Image
                            src="/festival/workshops/COFF_Workshop_TEMPLATEFor2026_4web.jpg"
                            alt="COFF Workshop Template for 2026"
                            width={1700}
                            height={2200}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}