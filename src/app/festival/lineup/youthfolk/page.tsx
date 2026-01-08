'use client';

import { useState } from 'react';
import LineupCard from '@/components/LineupCard';
import Image from 'next/image';

type Tab = 'all' | 'performing' | 'storytelling';

export default function LineupPage() {
    const [activeTab, setActiveTab] = useState<Tab>('all');

    const tabs: { id: Tab; label: string }[] = [
        { id: 'all', label: 'All' },
        { id: 'performing', label: 'Performing Tent' },
        { id: 'storytelling', label: 'Storyteller & Crafts Tent' },
    ];

    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">

                <div className="bg-white max-w-5xl mx-auto rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-heading text-center font-bold text-green mb-4">YOUTHFOLK TENTS</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                        <div className="relative h-64 md:h-auto">
                            <Image
                                src="/festival/lineup/YouthFolkTentMusicStage.jpg"
                                alt="Showcase Stage"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="font-body text-gray-700 leading-relaxed mb-4">
                                The YouthFolk Tents are located inside the festival&apos;s Kids&apos; Village area. The <b>YouthFolk Performing Tent</b> presents talented musical artists performing for kids.
                            </p>
                            <p className="font-body text-gray-700 leading-relaxed">
                                The <b>YouthFolk Storytelling & Crafts Tent</b> presents an array of popular programming consisting of storytelling for kids and crafts geared to youth ages 12 and up. Craft activity descriptions are included as part of the lineup below.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8 border-b border-gray-300 max-w-5xl mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 font-body font-semibold transition-colors ${activeTab === tab.id
                                ? 'border-b-4 border-green-700 text-green-700'
                                : 'text-gray-600 hover:text-green-600'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === 'all' && (
                    <div className="space-y-16 max-w-5xl mx-auto mb-10">

                        <LineupCard
                            artistName="ANNIE & ROD CAPPS QUARTET"
                            genre="Folk/Americana (Chelsea, MI)"
                            website="annieandrodcapps.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBD"
                            bio="Annie and Rod Capps have established themselves as well-respected songwriters and performers, with three albums topping the Folk Radio charts and as 2-time Kerrville New Folk Finalists. Annie's disarming, earthy voice and solid command of her guitar are punctuated by Rod's effortless, accompaniment and beautiful solo work on both guitar and viola. The Annie & Rod Capps Quartet features Jason Dennie on mandolin and Ozzie Andrews on bass. Dennie is one Michigan's most sought after award-winning instrumentalists and Andrews brings with him a degree in jazz bass and vast experience in all musical styles. Their distinctive take on Americana/Folk highlights exceptional musicianship and inventive arrangements that support layered, insightful, songwriting."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/4ki4-uqUbgk"
                            mediaTitle="Annie & Rod Capps - &quot;Lightning Strike&quot;"
                        />
                    </div>
                )}

                {/* Performing Tent */}
                {activeTab === 'performing' && (
                    <div className="space-y-16 max-w-5xl mx-auto mb-10">

                        <LineupCard
                            artistName="ANNIE & ROD CAPPS QUARTET"
                            genre="Folk/Americana (Chelsea, MI)"
                            website="annieandrodcapps.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBD"
                            bio="Annie and Rod Capps have established themselves as well-respected songwriters and performers, with three albums topping the Folk Radio charts and as 2-time Kerrville New Folk Finalists. Annie's disarming, earthy voice and solid command of her guitar are punctuated by Rod's effortless, accompaniment and beautiful solo work on both guitar and viola. The Annie & Rod Capps Quartet features Jason Dennie on mandolin and Ozzie Andrews on bass. Dennie is one Michigan's most sought after award-winning instrumentalists and Andrews brings with him a degree in jazz bass and vast experience in all musical styles. Their distinctive take on Americana/Folk highlights exceptional musicianship and inventive arrangements that support layered, insightful, songwriting."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/4ki4-uqUbgk"
                            mediaTitle="Annie & Rod Capps - &quot;Lightning Strike&quot;"
                        />
                    </div>
                )}

                {/* Storytelling & Crafts */}
                {activeTab === 'storytelling' && (
                    <div className="space-y-16 max-w-5xl mx-auto mb-10">

                        <LineupCard
                            artistName="BRANDI SPARKS"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="BRANDI SPARKS"
                        />
                    </div>
                )}

            </section>
        </div>
    );
}