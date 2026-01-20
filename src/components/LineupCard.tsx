'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LineupCardProps {
    artistName: string;
    genre?: string;
    subtitle?: string;
    website?: string;
    contact?: string;
    stage: string;
    dayTime: string;
    bio: string;
    mediaType: 'video' | 'image';
    mediaSrc: string;
    mediaTitle?: string;
}

export default function LineupCard({
    artistName,
    genre,
    subtitle,
    website,
    contact,
    stage,
    dayTime,
    bio,
    mediaType,
    mediaSrc,
    mediaTitle
}: LineupCardProps) {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    return (
        <div className="bg-white mb-16 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Left: Details */}
                <div className="p-6">
                    <h3 className="text-2xl font-heading font-semibold mb-3 text-charcoal">{artistName}</h3>
                    <p className="font-body text-gray-600 mb-4 leading-relaxed">
                        {genre && (
                            <>
                                <span className="font-semibold text-green">{genre}</span><br />
                            </>
                        )}
                        {subtitle && (
                            <>
                                <span className="font-semibold text-brown">{subtitle}</span><br />
                            </>
                        )}
                        {website && (
                            <>
                                WEBSITE: <a href={`https://${website}`} className='text-green hover:text-brown'>{website.replace('https://', '').replace('http://', '')}</a><br />
                            </>
                        )}
                        {contact && (
                            <>
                                CONTACT: <a href={`mailto:${contact}`} className='text-green hover:text-brown'>{contact}</a><br />
                            </>
                        )}
                        STAGE: {stage}<br />
                        DAY / TIME: {dayTime}
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
                                {bio}
                            </p>
                        </div>
                    )}
                </div>
                {/* Right: Media (Video or Image) */}
                <div className="relative h-64 md:h-full min-h-[300px]">
                    {mediaType === 'video' ? (
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={mediaSrc}
                            title={mediaTitle || artistName}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <Image
                            src={mediaSrc}
                            alt={artistName}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
