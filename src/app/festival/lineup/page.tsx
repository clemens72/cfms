'use client';

import { useState } from 'react';

export default function LineupPage() {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center space-x-4 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                        2026 Festival Lineup:
                    </h3>
                    <span
                        className="inline-block px-4 py-2 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
                    >
                        Download Full Lineup [PDF]
                    </span>
                </div>
                <div className="space-y-8 max-w-5xl mx-auto mb-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Left: Details */}
                            <div className="p-6">
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">Annie & Rod Capps Quartet</h3>
                                <p className="font-body text-gray-600 mb-4 leading-relaxed">
                                    <span className="font-semibold text-green">(Chelsea, MI)</span><br />
                                    WEBSITE: <a href="https://annieandrodcapps.com" className='text-green hover:text-brown'>annieandrodcapps.com</a><br />
                                    STAGE:  Kirby Main Stage & Showcase Stage<br />
                                    DAY / TIME:  TBD
                                </p>
                                <button
                                    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                                >
                                    <span>Artist Bio</span>
                                    <svg 
                                        className={`w-5 h-5 transition-transform duration-200 ${isDescriptionOpen ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isDescriptionOpen && (
                                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <p className="font-body text-gray-700 leading-relaxed">
                                            Annie and Rod Capps have established themselves as well-respected songwriters and performers,
                                            with three albums topping the Folk Radio charts and as 2-time Kerrville New Folk Finalists.
                                            Annie&apos;s disarming, earthy voice and solid command of her guitar are punctuated by Rod&apos;s effortless,
                                            accompaniment and beautiful solo work on both guitar and viola. The Annie & Rod Capps Quartet features
                                            Jason Dennie on mandolin and Ozzie Andrews on bass. Dennie is one Michigan&apos;s most sought after
                                            award-winning instrumentalists and Andrews brings with him a degree in jazz bass and vast experience
                                            in all musical styles. Their distinctive take on Americana/Folk highlights exceptional musicianship
                                            and inventive arrangements that support layered, insightful, songwriting.
                                        </p>
                                    </div>
                                )}
                            </div>
                            {/* Right: YouTube Video */}
                            <div className="relative h-64 md:h-full min-h-[300px]">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/4ki4-uqUbgk"
                                    title="Lightning Strike (By Annie & Rod Capps)"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}