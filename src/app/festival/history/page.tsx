export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center space-x-4 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                        History of the Central Ohio Folk Festival
                    </h3>
                    <a
                        href="/festival/history/Brief_COFF_BDC_HistoryREV11.3.25FINAL.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Download [PDF]
                    </a>
                </div>
            </section>
        </div>
    );
}