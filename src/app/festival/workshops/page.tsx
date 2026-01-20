import Image from "next/image";

export default function WorkshopsPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 pt-16 pb-8">
                    <div className="mb-12 text-center space-x-4 space-y-2 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Complete Workshop Listing:
                        </h3>
                        <a
                            href="/festival/workshops/2025-coff-workshop-list-4webv1.22.25.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-blue text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
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
                            2026 Request Proposal:
                        </h3>
                        <a
                            href="/festival/workshops/RequestForProposalWkshpsTEMPLATE_REV11.15.2025.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Download [.docx]
                        </a>

                        <a
                            href="/festival/workshops/RequestForProposalWkshpsTEMPLATE_REV11.15.2025.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                        >
                            Download [.PDF]
                        </a>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">

                        <h1 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center text-green">
                            FESTIVAL WORKSHOPS
                        </h1>
                        <p className="text-lg md:text-xl font-body text-charcoal mb-4 leading-relaxed">
                            The festival&apos;s programming not only includes multiple performances, but also incorporates a teaching component. It offers 30 workshops covering a myriad of topics and instruments, including beginner workshops.
                        </p>
                        <p className="text-lg md:text-xl font-body text-charcoal mb-4 leading-relaxed">
                            Workshops are 50 minutes long. There are three workshop tents. Workshops are held on the hour in each tent all day on both Saturday and Sunday. Workshop presenters are either established teachers or festival artists who have done workshops or are comfortable sharing what they know.
                        </p>
                        <p className="text-lg md:text-xl font-body text-charcoal mb-4 leading-relaxed">
                            Anyone on the grounds can attend the workshops. If you are an experienced musician, curious about music in general, new to music, or trying out an instrument for the first time, there are workshops for all of that.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/festival/activities/workshop2.jpg"
                            alt="Kids' crafts activities"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/festival/activities/workshop.jpg"
                            alt="Kids' crafts activities"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg md:text-xl font-body text-charcoal mb-4 leading-relaxed">
                            <b>Some workshops are tailored to the very beginner</b> with some loaner instruments available.
                        </p>
                        <p className="text-lg md:text-xl font-body text-charcoal mb-4 leading-relaxed">
                            <b>Other workshops are tailored to Advanced Beginner, Intermediate, and Advanced</b> players and can cover a variety of instruments: guitar, fiddle, banjo, mandolin, dulcimer and more.
                        </p>
                        <p className="text-lg md:text-xl font-body text-charcoal mb-4 leading-relaxed">
                            <b>There are thematic workshops</b> covering songwriting, arranging, how to play in a bluegrass jam, and more.
                        </p>
                        <p className="text-lg md:text-xl font-body text-charcoal mb-4 leading-relaxed">
                            <b>For a listing of ALL workshops,</b> levels, descriptions, and presenters, click on the Complete Workshop Listing Tab. Please note that the previous year&apos;s workshop listing is posted until the 2026 workshop listing becomes available in early spring.
                        </p>
                        <blockquote className="mt-6 p-6 bg-gradient-to-r from-green/10 to-transparent border-l-4 border-green rounded-r-lg">
                            <p className="text-lg font-body italic text-gray-700">
                                &quot;The workshops were very informative and interactive.&quot;
                            </p>
                            <footer className="text-sm font-body text-gray-600 mt-2">— Festival attendee</footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    );
}