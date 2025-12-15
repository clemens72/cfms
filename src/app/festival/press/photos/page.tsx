import Image from "next/image";

export default function PressPhotosPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center space-x-4 max-w-3xl mx-auto"></div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Festival Press Photos
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    A selection of high-resolution images from our festival available for press use. Click on any image to view and download the full-size version.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Photo 1 */}
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a href="/festival/press/tray-wellington-band-2PRESS PH.jpg" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/festival/press/tray-wellington-band-2PRESS PH.jpg"
                                alt="Tray Wellington Band"
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                width={600}
                                height={600}
                            />
                        </a>
                    </div>
                    {/* Photo 2 */}
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a href="/festival/press/53780315367_d41a8f42f6_6k.jpg" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/festival/press/53780315367_d41a8f42f6_6k.jpg"
                                alt=""
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                width={600}
                                height={600}
                            />
                        </a>
                    </div>
                    {/* Photo 3 */}
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a href="/festival/press/53780342162_db7136c002_5k.jpg" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/festival/press/53780342162_db7136c002_5k.jpg"
                                alt=""
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                width={600}
                                height={600}
                            />
                        </a>
                    </div>
                    {/* Photo 4 */}
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a href="/festival/press/53781605104_625b1223a0_4k.jpg" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/festival/press/53781605104_625b1223a0_4k.jpg"
                                alt=""
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                width={600}
                                height={600}
                            />
                        </a>
                    </div>
                    {/* Photo 5 */}
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a href="/festival/press/53781700995_441d6dad12_5k.jpg" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/festival/press/53781700995_441d6dad12_5k.jpg"
                                alt=""
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                width={600}
                                height={600}
                            />
                        </a>
                    </div>
                    {/* Photo 6 */}
                    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a href="/festival/press/53781709185_f832bc92e1_4k.jpg" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="/festival/press/53781709185_f832bc92e1_4k.jpg"
                                alt=""
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                width={600}
                                height={600}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}