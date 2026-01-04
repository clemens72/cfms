export default function SongwriterContestFormPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            2026 Songwriter Contest
                        </h2>
                    </div>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        <b>For more info on the Songwriter Contest, click <a href="/festival/performers/songwritercontest" className="text-green hover:underline font-bold">here</a>.</b>
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <p className="font-body text-gray-700 mb-4 leading-relaxed">
                        Incomplete version of the Songwriter Contest submission form placeholder.
                    </p>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">Songwriter Contest Submission</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-charcoal">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-charcoal">Address</label>
                            <input type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                        </div>
                        <div>
                            <button type="submit" className="bg-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
                                Submit Songwriter Competition Form
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}