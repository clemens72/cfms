export default function FolkFestivalsPage() {
    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Folk Festivals and Events Links
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    A curated list of folk festivals and event resources to help you discover and enjoy folk music events in our region and beyond.
                </p>

                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 pb-8 border-b-2 border-green/20">
                        <h2 className="text-3xl font-heading font-bold mb-4 text-charcoal">
                            Festivals
                        </h2>
                        <p className="font-body text-gray-700 mb-6 leading-relaxed">
                            Most of the listings below are within one day&apos;s drive (500 miles) of Columbus. Primarily, we list Folk type events at Folk venues or by Folk organizations.
                        </p>
                        <p className="font-body text-brown font-semibold mb-6">
                            <b>NOTE:</b> <i>Dates may not be current; please visit their websites.</i>
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Festival Listing */}
                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Nelsonville Music Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">May 30 - June 2</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Robbins Crossing Historic Village<br />
                                Hocking College<br />
                                3301 Hocking Parkway, Nelsonville, OH 45764
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.nelsonvillefest.org' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.nelsonvillefest.org
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Dulcimerville
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 3 - 8</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Mountain Dulcimer Week<br />
                                (Near Ashville, NC)
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://Dulcimerville.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Dulcimerville.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Mt. Airy Fiddlers Convention
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 7 - 8</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Mt. Airy, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.mtairyfiddlersconvention.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.mtairyfiddlersconvention.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Mid-West Banjo Camp
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 7 - 9</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Bluegrass & Old-Time<br />
                                Olivet College, Olivet, Michigan
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.midwestbanjocamp.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.midwestbanjocamp.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                WV Writers Spring Conference
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 7 - 9</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Cedar Lakes Conference Center<br />
                                Near Ripley, WV
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Steve Kaufman&apos;s Acoustic Kamps
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 9 - 15</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Old Time & Traditional Week<br />
                                Marysville College, Marysville, TN<br />
                                (Near Knoxville, TN)
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.flatpik.com/Steve-Kaufman-Acoustic-Kamp' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.flatpik.com/Steve-Kaufman-Acoustic-Kamp
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Blue Ridge Old-Time Music Week
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 9 - 15</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Mars Hill, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.mhc.edu/oldtimemusic' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.mhc.edu/oldtimemusic
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Minnesota Irish Music Weekend
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 13 - 16</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                The Center for Irish Music in St. Paul, MN<br />
                                (750 Mi. from Columbus)
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                This event pairs world-class traditional Irish musicians and teachers with learners of all ages and abilities for a weekend of workshops, lectures, and performances.
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.centerforirishmusic.org' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.centerforirishmusic.org
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Coshocton Dulcimer Days
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 14 - 16</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Roscoe Village, Coshocton, OH
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.coshoctondulcimerdays.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.coshoctondulcimerdays.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                WV Folk Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 20 - 22</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Glenville, WV
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.wvstatefolkfestival.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.wvstatefolkfestival.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Solebrate Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 21 - 23</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Franklin County Fairgrounds<br />
                                Hilliard, Ohio
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.solebrate.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.solebrate.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Allegheny Echoes
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 23 - 28</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Appalachian Music & Creative Writing Workshops<br />
                                Marlinton, WV
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.alleghenyechoes.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.alleghenyechoes.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Cityfolk Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">June 28 - 30</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                RiverScape MetroPark, Dayton, OH
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.cityfolk.org/festival/festival.html' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.cityfolk.org/festival/festival.html
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                The Swannanoa Gathering - Traditional Song Week
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">July 7 - 13</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Warren Wilson College<br />
                                Near Ashville, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.swangathering.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.swangathering.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Dulcimer U Summer Week
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">July 14 - 19</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Western Carolina University<br />
                                Cullowhee, NC 28723
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.wcu.edu' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.wcu.edu
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                The Swannanoa Gathering - Celtic Week
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">July 14 - 20</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Warren Wilson College<br />
                                Near Ashville, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.swangathering.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.swangathering.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Lancaster Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">July 18 - 27</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Music, Art & Family Fun<br />
                                75 Events - Many Free<br />
                                Lancaster, OH
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.lanfest.org' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.lanfest.org
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                The Swannanoa Gathering - Old-Time Week
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">July 21 - 27</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Warren Wilson College<br />
                                Near Ashville, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.swangathering.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.swangathering.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                The Swannanoa Gathering - Guitar Week & Contemporary Folk Week
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">July 28 - Aug 3</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Warren Wilson College<br />
                                Near Ashville, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.swangathering.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.swangathering.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Appalachian String Band Festival (Clifftop)
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">July 31 - Aug 4</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Camp Washington-Carver<br />
                                Clifftop, WV 25831
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.wvculture.org/stringband' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.wvculture.org/stringband
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                National Storytelling Conference
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Aug 1 - 4</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Richmond, Virginia
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.storynet.org/conference' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.storynet.org/conference
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                The Swannanoa Gathering - Fiddle Week & Mando & Banjo Week
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Aug 4 - 10</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Warren Wilson College<br />
                                Near Ashville, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.swangathering.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.swangathering.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Augusta Heritage Center
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Aug 4 - 11</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Old-Time, Dance, Vocal & Crafts Week + Festival<br />
                                Davis & Elkins College<br />
                                Elkins, WV
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='https://augustaheritagecenter.org/old-time-dance' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    augustaheritagecenter.org/old-time-dance
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Three Rivers Storytelling Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Aug 16 - 18</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Winchester Thurston School-North Campus<br />
                                4225 Middle Road, Allison Park, PA 15101<br />
                                (Near Pittsburgh, PA)
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://home.comcast.net' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    home.comcast.net
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Fontana Clogging Jamboree
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Sept 20 - 21</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Fontana Village Resort, NC
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.fontanaworkshop.com' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.fontanaworkshop.com
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                Cave Run Storytelling Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Sept 27 - 28</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Twin Knobs Campground<br />
                                5195 KY Hwy 801 South<br />
                                Morehead KY 40351<br />
                                800-654-1944
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.caverunstoryfest.org' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.caverunstoryfest.org
                                </a>
                            </p>
                        </div>

                        <div className="pl-6 border-l-4 border-green hover:border-brown transition-colors duration-300">
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                                National Storytelling Festival
                            </h3>
                            <p className="font-body text-gray-700 mb-2">
                                <span className="font-semibold text-green">Oct 4 - 6</span>
                            </p>
                            <p className="font-body text-gray-600 mb-2 leading-relaxed">
                                Jonesborough, TN 37659
                            </p>
                            <p className="font-body text-gray-700">
                                <span className="font-semibold">Info:</span>{' '}
                                <a 
                                    href='http://www.storytellingcenter.net/festival' 
                                    className='text-green hover:text-brown transition-colors font-medium underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.storytellingcenter.net/festival
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* --- Contact Section --- */}
            <section className="bg-blue py-16 text-white shadow-inner">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Suggestions?
                    </h2>
                    <p className="text-xl font-body mb-8 max-w-3xl mx-auto">
                        See our contact page to let us know if there are other links you&apos;d like to see here.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200"
                    >
                        Contact Page
                    </a>
                </div>
            </section>
        </div>
    );
}