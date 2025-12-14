import Image from 'next/image';

export default function ActivitiesPage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Festival Activities
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    The festival offers hands-on activities for all ages with special programming for children, youth and families.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">

                        <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-charcoal">
                            In our Kids&apos; Village*
                        </h2>
                        <ul className="list-disc list-inside text-lg md:text-xl font-body text-gray-700 mb-4 leading-relaxed space-y-2">
                            <li>YouthFolk Stages presenting music & storytelling</li>
                            <li>Instrument Petting Zoo</li>
                            <li>Crafts (floral headbands, parade streamer making and more)!</li>
                            <li>Box frame drum making (12 & up)</li>
                            <li>Parade with festival mascot Darby Duck</li>
                            <li>Coloring station</li>
                            <li>Participation in festival drum circles</li>
                            <li>And more!</li>
                        </ul>
                        <p className="text-lg md:text-xl font-body text-gray-700 mb-4 leading-relaxed">
                            * Children ages 12 & under must be accompanied by an adult at all times.
                        </p>
                        <blockquote className="mt-6 p-6 bg-gradient-to-r from-green/10 to-transparent border-l-4 border-green rounded-r-lg">
                            <p className="text-lg font-body italic text-gray-700">
                                &quot;Love it! Awesome way to introduce our kids to folk music.&quot;
                            </p>
                            <footer className="text-sm font-body text-gray-600 mt-2">— Festival attendee</footer>
                        </blockquote>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/festival/activities/craftstent.jpg"
                            alt="Kids' crafts activities"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/festival/activities/workshop.jpg"
                            alt="Music workshops"
                            width={400}
                            height={200}
                            className="w-full h-auto object-contain rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-charcoal">
                            For all festival attendees
                        </h2>
                        <ul className="list-disc list-inside text-lg md:text-xl font-body text-gray-700 mb-4 leading-relaxed space-y-2">
                            <li>Opening Sing-along and Closing Song Circle</li>
                            <li>Five ongoing open jam tents (bluegrass, old-time, folk, just song, Cbus Jammers&apos; tent welcoming the very beginner)</li>
                            <li>30 music workshops (multiple topics and levels)</li>
                            <li>Participatory drum circles at close of each day</li>
                            <li>Festival store with souvenir apparel and more</li>
                        </ul>
                        <blockquote className="mt-6 p-6 bg-gradient-to-r from-green/10 to-transparent border-l-4 border-green rounded-r-lg">
                            <p className="text-lg font-body italic text-gray-700">
                                &quot;Jam tent was awesome. Magical how various musicians just &apos;walked up&apos; and started playing... Very enjoyable. Thank you!&quot;
                            </p>
                            <footer className="text-sm font-body text-gray-600 mt-2">— Festival attendee</footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    );
}