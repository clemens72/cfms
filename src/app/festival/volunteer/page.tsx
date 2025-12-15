export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-bg-brown">

        <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-green text-center">
                    JOIN US.
                </h1>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-heading font-bold mb-6 text-charcoal">Volunteer for the Central Ohio Folk Festival!</h2>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                    If you would like to help with our festival and join our vibrant community of volunteers, please review the areas where we need help listed below. Then complete the fill-in portion of this page and hit “submit.” If you want to add additional text, feel free to use the text box. We will be in contact with you!
                </p>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                    We thank you in advance!
                </p>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">Volunteer Form</h3>
                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block font-body font-semibold text-gray-700 mb-2">
                            Name <span className="text-brown">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green font-body"
                        />
                    </div>

                    {/* Cell/Mobile Phone */}
                    <div>
                        <label htmlFor="phone" className="block font-body font-semibold text-gray-700 mb-2">
                            Cell/Mobile Phone <span className="text-brown">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green font-body"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block font-body font-semibold text-gray-700 mb-2">
                            Email <span className="text-brown">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green font-body"
                        />
                    </div>

                    {/* Possible Festival Areas */}
                    <div>
                        <label className="block font-body font-semibold text-gray-700 mb-3">
                            Possible Festival Areas
                        </label>
                        <div className="space-y-3 ml-4">
                            {/* Thursday */}
                            <div className="mb-4">
                                <p className="font-body font-semibold text-charcoal mb-2">Thursday:</p>
                                <div className="ml-4 space-y-2">
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="thursday-load-in" className="mt-1" />
                                        <span>Load in materials (in storage) to rental truck</span>
                                    </label>
                                </div>
                            </div>

                            {/* Friday */}
                            <div className="mb-4">
                                <p className="font-body font-semibold text-charcoal mb-2">Friday:</p>
                                <div className="ml-4 space-y-2">
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="friday-setup" className="mt-1" />
                                        <span>Festival Site Setup Assistance</span>
                                    </label>
                                </div>
                            </div>

                            {/* Saturday/Sunday */}
                            <div className="mb-4">
                                <p className="font-body font-semibold text-charcoal mb-2">Saturday/Sunday:</p>
                                <div className="ml-4 space-y-2">
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="morning-setup" className="mt-1" />
                                        <span>Morning Setup</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="afternoon-setup" className="mt-1" />
                                        <span>Afternoon Setup</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="registration" className="mt-1" />
                                        <span>Registration/Front Entrance</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="festival-store" className="mt-1" />
                                        <span>Festival Store</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="instrument-storage" className="mt-1" />
                                        <span>Instrument Storage Tent</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="emcee" className="mt-1" />
                                        <span>Emcee</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="childrens-craft" className="mt-1" />
                                        <span>Children&apos;s Craft Tent</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="petting-zoo" className="mt-1" />
                                        <span>Children&apos;s Instrument Petting Zoo</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="box-drum" className="mt-1" />
                                        <span>Youth Box Drum Making</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="beer-concessions" className="mt-1" />
                                        <span>Beer Concessions (must be 21+)</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="green-room" className="mt-1" />
                                        <span>Saturday Night Concert Green Room</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="golf-cart" className="mt-1" />
                                        <span>Golf Cart Driver</span>
                                    </label>
                                </div>
                            </div>

                            {/* Sunday Late Afternoon */}
                            <div className="mb-4">
                                <p className="font-body font-semibold text-charcoal mb-2">Sunday Late Afternoon:</p>
                                <div className="ml-4 space-y-2">
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="tear-down" className="mt-1" />
                                        <span>Tear down</span>
                                    </label>
                                    <label className="flex items-start gap-2 font-body text-gray-700">
                                        <input type="checkbox" name="areas" value="transport-materials" className="mt-1" />
                                        <span>Transport materials to storage and unload</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Days Available */}
                    <div>
                        <label className="block font-body font-semibold text-gray-700 mb-3">
                            Days Available
                        </label>
                        <div className="ml-4 space-y-2">
                            <label className="flex items-center gap-2 font-body text-gray-700">
                                <input type="checkbox" name="days" value="thursday" />
                                <span>Thursday</span>
                            </label>
                            <label className="flex items-center gap-2 font-body text-gray-700">
                                <input type="checkbox" name="days" value="friday" />
                                <span>Friday</span>
                            </label>
                            <label className="flex items-center gap-2 font-body text-gray-700">
                                <input type="checkbox" name="days" value="saturday" />
                                <span>Saturday</span>
                            </label>
                            <label className="flex items-center gap-2 font-body text-gray-700">
                                <input type="checkbox" name="days" value="sunday" />
                                <span>Sunday</span>
                            </label>
                            <label className="flex items-center gap-2 font-body text-gray-700 font-semibold">
                                <input type="checkbox" name="days" value="all" />
                                <span>All Days</span>
                            </label>
                        </div>
                    </div>

                    {/* Role Preference */}
                    <div>
                        <label htmlFor="role-preference" className="block font-body font-semibold text-gray-700 mb-2">
                            Role Preference
                        </label>
                        <textarea
                            id="role-preference"
                            name="role-preference"
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green font-body"
                            placeholder="Let us know if you have a specific role preference or special skills..."
                        />
                    </div>

                    {/* Comments */}
                    <div>
                        <label htmlFor="comments" className="block font-body font-semibold text-gray-700 mb-2">
                            Comments
                        </label>
                        <textarea
                            id="comments"
                            name="comments"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green font-body"
                            placeholder="Any additional information you'd like to share..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Submit Volunteer Form
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  );
}