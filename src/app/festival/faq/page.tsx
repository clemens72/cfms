export default function FAQPage() {
    return (
        <div className="min-h-screen bg-light-brown">
            {/* Header Section */}
            <section className="bg-gradient-to-b from-dark-brown to-medium-brown py-12">
                <div className="container mx-auto px-4 text-center text-orange">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl font-body text-charcoal">Everything you need to know about the festival</p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* TICKETS Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-heading font-bold text-green">
                                TICKETS
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    When and how can I get tickets?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Tickets will go on sale in early 2026. The ticket link will be found on the festival page near the top.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Pre-purchased tickets are <strong>$10</strong> for adults 18 and over and includes both days and lawn seating for the Saturday evening headliner.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Onsite purchased tickets are <strong>$15</strong> for adults 18 and over and includes both days and lawn seating for the headliner.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Children 17 and under are <strong>free</strong>!</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Do I pay extra for the Saturday evening headliner?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>There is an additional <strong>$10</strong> ticket fee if you want preferred seating for the Saturday evening headliner. The main stage is now outdoors. Preferred seating includes options of under a tent or outside under the evening skies.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>There are no reserved seats for preferred seating; it is first-come, first-served. However, all preferred seating is more close-up seating. Select &quot;add $10 for headliner preferred seating&quot; at ticket check-out.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Is there a benefit to pre-purchasing tickets?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Yes, there are multiple benefits to pre-purchasing tickets and we encourage you to do so!  You&apos;ll save $5 a ticket AND we absorb the ticketing platform fee. The first ticketed entrants will get a free fun “flexible frisbee flyer” and a “festival” sticker until supplies run out. And if you wish to get preferred seating for the Saturday evening show, pre-purchase is the way to go as that seating is limited. Just show your festival ticket at the entrance and we&apos;ll give you your entrance wristband which is good for BOTH days.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Is the event family friendly?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>The event is most certainly family friendly!  We have many activities that family members of all ages can enjoy. And the event is very accessible to families; with 17 and under admitted free. Note that children ages 12 and under must be accompanied by an adult at all times.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* VENUE / PARKING Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-heading font-bold text-green">
                                VENUE / PARKING
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Where is Bank Run Metro Park?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Bank Run Metro Park is on the southern outskirts of Columbus in Lockbourne, Ohio. It is easily accessible via freeways.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Bank Run Metro Park is a NEW Metro Park dedicated to events. <b><i>Watch this space for the address and directions.</i></b> The park is currently in its final construction phase.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Do I have to pay to park?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Parking is free at the Metro Park. There will be two entrances. <b><i>Watch this space for parking entrance directions.</i></b></span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    How far do I have to walk?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>The grounds are easily walkable from one end to the other in 10 minutes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>The paved parking area is no more than a 5 minute walk to the entrance.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>The overflow parking area walk is dependent upon how far away you are parked, but shouldn&apos;t exceed a 10 minute walk. We also have a roving passenger golf cart in the overflow area should folks need further assistance.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Does Bank Run have handicap accessible parking and facilities?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Yes, there is plenty of handicap accessible parking close to the entrance of the festival. Follow the signs. You must have a handicap placard to gain access to that area.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>There are accessible restroom facilities and paved paths lead to most locations on the grounds.</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* MAPS/SCHEDULES Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-heading font-bold text-green">
                                MAPS / SCHEDULES
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    How do I find my way around on the grounds?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>In an effort to be eco-friendly, we have a limited number of printed maps available at the Welcome Tent. There is a large map of the grounds posted at the Welcome Tent. We suggest you take a photo of it with your phone.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>All bulletin boards have a grounds map posted on them.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>You can ALSO download the map and print it at home prior to your arrival. Refer to the MAPS / PRINTABLES section of our website closer to the event.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Where is the schedule of events?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Our festival schedule is normally posted on our website approximately a month before the event. You can ALSO download the schedule and print it at home prior to your arrival. Refer to the 2026 SCHEDULE section of our website.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>In an effort to be eco-friendly, we have a limited number of printed schedules  available at the Welcome Tent and at all entrance tents.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>All bulletin boards have the daily schedule posted on them.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>We also make the schedule accessible / viewable via a QR code posted on the bulletin boards.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>You can ALSO download a schedule and print it at home prior to your arrival. Refer to the MAPS / PRINTABLES section of our website closer to the event.</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* WHAT TO BRING Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-heading font-bold text-green">
                                WHAT TO BRING
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Are dogs permitted on the festival grounds?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Yes, leashed dogs are permitted. Of course, you are expected to clean up after your pet.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    What should I bring?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Of course, dress appropriately for the weather! If it looks like a small rain shower, be prepared with an umbrella. </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>All performing tents/spaces have chairs. You are also welcome to bring your own lawn chairs or a blanket for additional seating. Lawn chairs are not permitted inside tents.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>If you plan to stay for the Saturday evening concert and are not purchasing preferred seating, please bring lawn chairs or a blanket.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>In the spirit of being eco-friendly, we no longer sell bottled water. There are filtered water refill stations at two locations on the grounds. So bring your own water bottle! The festival does sell reusable water bottles with the festival logo at the festival store for a very reasonable price should you forget yours. Some food trucks also sell bottled water.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>There are food trucks on the grounds or you are welcome to bring in your own food. There is a large outdoor pavilion with picnic tables and ample seating! </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span><b><i>Alcohol may not be brought into or leave the festival grounds.</i></b> We do offer Nocterra craft beer for sale on the grounds. </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>To purchase any alcohol, you will need to have your ID and have an alcohol wristband placed on your wrist. Carding generally occurs at the entrance points, but can also occur at each of the two beer sales stations. </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* OTHER AMENITIES Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-heading font-bold text-green">
                                OTHER AMENITIES
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Is there first-aid?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>For minor problems, first aid kits are available inside the Festival Store building, at the Welcome Tent, and at the entrance tents on the east side. For more serious problems, park personnel are available to help as well as summon emergency services.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Is there a place to store musical instruments?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>There is a fully staffed instrument storage tent located to the left of the Kirby Main Stage area. It is clearly marked. Storage tent hours are: 10:30am - 4:30pm (SAT) and 10:30-4:30pm (SUN). <b><i>ALL instruments must be picked up by closing each day.</i></b></span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Is there a message board and a Lost & Found?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Yes, there is a message board and Lost and Found box inside the Festival Store building. Ask one of our store personnel where it is or look for the signs. For valuable items, see our store personnel.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                                    Can I stay overnight on the grounds?
                                </h3>
                                <ul className="space-y-3 text-lg font-body text-gray-700 ml-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Unfortunately festival goers are not permitted to stay overnight on the grounds.  </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>There are several hotels approximately 2 miles from the festival grounds: Budget Inn Columbus, Hampton Inn and Suites Columbus Scioto Downs, and Baymont by Wyndham Columbus / Rickenbacker.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-rust mt-1">•</span>
                                        <span>Camping options are at various distances away:  Alum Creek State Park, Alton RV Park, Jackson Lake Campground & Park in Canal Winchester or search campgrounds near Lockbourne, Ohio. </span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* MORE QUESTIONS Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-heading font-bold text-green">
                                More Questions?
                            </h2>
                        </div>

                        <p className="text-lg font-body text-gray-700 leading-relaxed">
                            Please contact us at{' '}
                            <a
                                href="mailto:infofestival@columbusfolkmusicsociety.org"
                                className="text-green font-semibold underline hover:text-rust transition-colors"
                            >
                                infofestival@columbusfolkmusicsociety.org
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}