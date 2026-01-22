"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    autoPlayInterval?: number;
}

export default function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length, autoPlayInterval]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full group">
            {/* Main Image Container */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                />

                {/* Navigation Buttons */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Caption */}
                {images[currentIndex].caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="text-white text-sm md:text-base leading-relaxed">
                            {images[currentIndex].caption}
                        </p>
                    </div>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex
                                ? "bg-green w-8"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
