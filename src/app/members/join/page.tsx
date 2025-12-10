export default function JoinPage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Become a Member
                        </h2>
                    </div>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        <b>If you are looking to renew your membership, click <a href="/members/renew" className="text-green hover:underline">here</a>.</b>
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <p className="font-body text-gray-700 mb-4 leading-relaxed">
                        Fill out this form to join the Columbus Folk Music Society and start enjoying the benefits of membership today!
                    </p>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">New Member Form</h3>
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
                            <label htmlFor="membershipType" className="block text-sm font-medium text-charcoal">Membership Type</label>
                            <select id="membershipType" name="membershipType" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required>
                                <option value="individual">Individual - $25</option>
                                <option value="family">Family - $40</option>
                                <option value="band">Band - $50</option>
                                <option value="supporting">Supporting - $100</option>
                                <option value="sustaining">Sustaining - $250</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="bg-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
                                Submit Membership Form
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}