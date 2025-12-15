import LineupCard from '@/components/LineupCard';

export default function LineupPage() {
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

                    <LineupCard
                        artistName="Annie & Rod Capps Quartet"
                        genre="Folk/Americana (Chelsea, MI)"
                        website="https://annieandrodcapps.com"
                        stage="Kirby Main Stage & Showcase Stage"
                        dayTime="TBD"
                        bio="Annie and Rod Capps have established themselves as well-respected songwriters and performers, with three albums topping the Folk Radio charts and as 2-time Kerrville New Folk Finalists. Annie's disarming, earthy voice and solid command of her guitar are punctuated by Rod's effortless, accompaniment and beautiful solo work on both guitar and viola. The Annie & Rod Capps Quartet features Jason Dennie on mandolin and Ozzie Andrews on bass. Dennie is one Michigan's most sought after award-winning instrumentalists and Andrews brings with him a degree in jazz bass and vast experience in all musical styles. Their distinctive take on Americana/Folk highlights exceptional musicianship and inventive arrangements that support layered, insightful, songwriting."
                        mediaType="video"
                        mediaSrc="https://www.youtube.com/embed/4ki4-uqUbgk"
                        mediaTitle="Lightning Strike (By Annie & Rod Capps)"
                    />

                    <LineupCard
                        artistName="Artist Name"
                        genre="Genre (City, State)"
                        website="https://website.com"
                        stage="Kirby Main Stage & Showcase Stage"
                        dayTime="TBD"
                        bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                        mediaType="video"
                        mediaSrc="https://www.youtube.com/embed/RS62sL4bgOQ"
                        mediaTitle="Lightning Strike (By Annie & Rod Capps)"
                    />

                </div>

            </section>
        </div>
    );
}