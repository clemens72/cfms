import Image from 'next/image';

export default function ActivitiesPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Food & Artisan Vendors
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    Explore our Festival Marketplace building which contains not only our own festival store but other arts vendors. Visit our expanded mobile street food area featuring some of Columbus&apos; favorite food trucks.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center h-full">
                        <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-charcoal">
                            Official Festival Store (all proceeds help the festival)
                        </h2>
                        <ul className="list-disc list-inside text-lg md:text-xl font-body text-gray-700 mb-4 leading-relaxed space-y-2">
                            <li>T-shirts & sweatshirts</li>
                            <li>Branded Tritan BPA & BPS free plastic water bottles </li>
                            <li>Festival ceramic mugs</li>
                        </ul>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/festival/activities/vendors.jpg"
                            alt="Vendors"
                            width={400}
                            height={200}
                            className="w-full h-auto object-contain rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/festival/vendors/foodtrucks.jpg"
                            alt="Kids' crafts activities"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-charcoal">
                            Food Vendors
                        </h2>
                        <ul className="list-disc list-inside text-lg md:text-xl font-body text-gray-700 mb-4 leading-relaxed space-y-2">
                            <li>Healthy options</li>
                            <li>Traditional options</li>
                            <li>Favored family food</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">

                        <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-charcoal">
                            Artisan Vendors
                        </h2>
                        <ul className="list-disc list-inside text-lg md:text-xl font-body text-gray-700 mb-4 leading-relaxed space-y-2">
                            <li>Art</li>
                            <li>Folk art crafts</li>
                            <li>Handmade jewelry</li>
                            <li>And more!</li>
                        </ul>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/festival/vendors/artisanvendors.jpg"
                            alt="Kids' crafts activities"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}