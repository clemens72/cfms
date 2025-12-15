import Image from "next/image";

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center space-x-4 space-y-2 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                        2025 Festival Schedule:
                    </h3>
                    <a
                        href="/festival/schedule/11x17FestivalScheduleVERS3.14.25_FINAL.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Download Viewable Schedule (2025)
                    </a>
                    <a
                        href="/festival/schedule/2025festivalschedule_8.5x11bw.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Download 8.5x11 Printable Schedule (2025)
                    </a>
                </div>

                <div className="max-w-7xl mx-auto space-y-8 p-8">
                    <h1 className="text-2xl font-heading font-bold text-center text-charcoal">
                        2025 Festival
                    </h1>
                    <div className="relative w-full">
                        <Image
                            src="/festival/schedule/11x17FestivalScheduleVERS3.14.25_PG1.png"
                            alt="2025 Festival Schedule - Page 1"
                            width={1700}
                            height={2200}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="relative w-full">
                        <Image
                            src="/festival/schedule/11x17FestivalScheduleVERS3.14.25_PG2.png"
                            alt="2025 Festival Schedule - Page 2"
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