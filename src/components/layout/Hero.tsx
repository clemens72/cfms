interface HeroProps {
    title: string;
    subtitle?: string;
    subtitle2?: string;
    imageURL?: string;
    buttonText?: string;
    buttonLink?: string;
}

export function Hero({ title, subtitle, subtitle2, imageURL, buttonText, buttonLink}: HeroProps) {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden shadow-xl">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${imageURL}')` }}
                aria-label="A shot of the 2025 Columbus Folk Music Festival."
            >
                <div className="absolute inset-0 bg-charcoal opacity-40"></div>
            </div>
            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                >
                    {title}
                </h1>
                <p className="text-xl md:text-2xl font-body text-white/90 mb-8 max-w-2xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mx-auto">
                    {subtitle}<br/>{subtitle2}
                </p>
                {buttonText && buttonLink && (
                    <a
                        href={buttonLink}
                        className="inline-block bg-green hover:bg-green/90 text-white font-body font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </section>
    );
}