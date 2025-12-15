export default function JoinPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Renew Your Membership
                        </h2>
                    </div>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        <b>If you are looking to join for the first time, click <a href="/members/join" className="text-green hover:underline">here</a>.</b>
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <p className="font-body text-gray-700 mb-4 leading-relaxed">
                        Fill out this form to renew your membership and continue enjoying the benefits of being a member!
                    </p>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">Membership Renewal Form</h3>
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
                            <label htmlFor="membershipLevel" className="block text-sm font-medium text-charcoal">Membership Level *</label>
                            <select 
                                id="membershipLevel" 
                                name="membershipLevel" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" 
                                required
                            >
                                <option value="">Select a membership level</option>
                                <option value="individual">Individual ($20)</option>
                                <option value="household">Household ($25)</option>
                                <option value="band">Band ($25)</option>
                                <option value="goodfriend">Good Friend ($50)</option>
                                <option value="sponsor">Sponsor ($100)</option>
                                <option value="patron">Patron ($200)</option>
                                <option value="silver">Silver ($250)</option>
                                <option value="gold">Gold [Life Member] ($500)</option>
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