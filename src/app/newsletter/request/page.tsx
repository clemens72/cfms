export default function NewsletterHardcopyPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Request a Hardcopy Newsletter
                        </h2>
                    </div>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">

                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <p className="font-body text-gray-700 mb-4 leading-relaxed">
                        If you wish to receive a printed copy of the monthly newsletter mailed to you, we kindly request a $15 contribution over and above dues to cover our postage & handling fees.
                    </p>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">Request Hardcopy Newsletter Form</h3>
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
                        <div className="grid grid-cols-3">
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-charcoal">City</label>
                                <input type="text" id="address" name="city" className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-charcoal">State</label>
                                <input type="text" id="address" name="state" className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                            </div>
                            <div>
                                <label htmlFor="zip" className="block text-sm font-medium text-charcoal">Zip</label>
                                <input type="text" id="address" name="zip" className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                            </div>
                        </div>
                        <button type="submit" className="bg-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
                            Submit Request
                        </button>
                    </form>
                </div>
            </section >
        </div >
    );
}