export default function PerformersPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Festival Performers
                        </h2>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                        Central Ohio Folk Festival 2026
                    </h1>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        Interested in performing at the Central Ohio Folk Festival? Find all the information you need below.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-center text-brown mt-10">Performer Application</h3>
                    <p className="font-body text-xl mb-4 leading-relaxed">
                        The Central Ohio Folk Festival is currently accepting performer applications for the 2026 festival, which will be held on June 6th, 2026 at the Clintonville Woman&apos;s Club in Columbus, Ohio. We are looking for talented folk, acoustic, and Americana musicians to join us for this exciting event.
                    </p>
                    <p className="font-body text-xl mb-8 leading-relaxed">
                        To apply, please fill out the performer application form available <a href="/festival/performers/application" className="text-green hover:underline">here</a>. The deadline for applications is March 1st, 2026. Selected performers will be notified by March 15th, 2026.
                    </p>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-center text-brown mt-10">Singer-Songwriter Competition</h3>
                    <p className="font-body text-xl mb-4 leading-relaxed">
                        We are excited to announce the first ever Singer-Songwriter Competition at the Central Ohio Folk Festival! This competition is open to all amateur singer-songwriters and provides a platform to showcase original songwriting talent.
                    </p>
                    <p className="font-body text-xl mb-8 leading-relaxed">
                        For more information about the competition, including eligibility criteria and submission guidelines, please visit the <a href="/festival/performers/songwritercontest" className="text-green hover:underline">Singer-Songwriter Competition page</a>. The deadline to submit entries is November 30th, 2025.
                    </p>
                </div>
            </section>
        </div>
    );
}