export default function FAQPage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center space-x-4 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                        Festival Frequently Asked Questions:
                    </h3>
                    <p>
                        This section needs updated -- currently info for 2025.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto space-y-4 bg-white p-8 rounded-lg shadow-lg">
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-orange">
                            Directions
                        </h1>
                        <p className="text-xl font-body text-gray-700 mb-6 leading-relaxed">
                            Highbanks Metro Park, 9466 Columbus Pike (Rt. 23), Lewis Center, OH 43035. Enter at Highbanks entrance off of Rt. 23.  Follow signs to the Big Meadows area. The Metro Park is easily accessible from I-270, St. Rt. 315 or Rt. 23.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-orange">
                            Parking
                        </h1>
                        <p className="text-xl font-body text-gray-700 mb-6 leading-relaxed">
                            The parking lot next to the festival grounds is reserved for presenters, stage performers, and vendors.  Park patron and event attendees parking is provided at any other picnic area parking lot or in the large center field adjacent to the Big Meadows area where the  festival occurs. From any Big Meadows parking lot or center field, it is no more than a tenminute walk along a designated pathway.
                        </p>
                    </div>
                    
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-orange">
                            Other Questions?
                        </h1>
                        <p className="text-xl font-body text-gray-700 mb-6 leading-relaxed">
                            Please contact us at <a href="mailto:infofestival@columbusfolkmusicsociety.org" className="text-green underline hover:text-orange">infofestival@columbusfolkmusicsociety.org</a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}