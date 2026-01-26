import ImageCarousel from "@/components/ImageCarousel";

const outreachImages = [
    {
        src: "/outreach/outreach2.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach3.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach4.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach5.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach6.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach7.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach8.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach9.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach10.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach11.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach12.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach13.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach14.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach15.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach16.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach17.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach18.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach19.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach20.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach21.jpg",
        alt: "Outreach Program",
    },
    {
        src: "/outreach/outreach22.jpg",
        alt: "Outreach Program",
    }
];

export default function OutreachPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Text Content */}
                    <div className="max-w-3xl mb-8 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-green mb-4">
                                OUTREACH
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                The Columbus Folk Music Society is a not-for-profit 501c(3) organization that exists for cultural, educational and charitable purposes.
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                In addition to being a cultural cornerstone in the local community and facilitating performances of the folk arts for all to enjoy, part of our mission includes the broadening of folk art knowledge, understanding and appreciation. To this end, we offer educational experiences in different forms (including workshops we run every year at our Central Ohio Folk Festival).
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Links to some of our other outreach programs are listed below. Please click to find out more about them!
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                <a href="/kirby" className="text-green hover:text-brown font-bold transition-colors">Kirby Music Scholarship Program</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        {/* Image Carousel */}
                        <ImageCarousel images={outreachImages} autoPlayInterval={5000} />
                    </div>
                </div>
                <div id="jam-calendar" className="text-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-green mb-4">
                            IN PERSON JAM CALENDAR
                        </h2>
                    </div>
                </div>

                {/* Google Calendar Embed */}
                <div className="w-full max-w-5xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
                            className="w-full"
                            style={{ border: 0 }}
                            width="800"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
}