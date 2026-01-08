'use client';

import { useState } from 'react';
import LineupCard from '@/components/LineupCard';
import Image from 'next/image';

type Tab = 'all' | 'kirby' | 'showcase' | 'bailey' | 'youthfolk';

export default function LineupPage() {
    const [activeTab, setActiveTab] = useState<Tab>('all');

    const tabs: { id: Tab; label: string }[] = [
        { id: 'all', label: 'All' },
        { id: 'kirby', label: 'Kirby/Showcase' },
        { id: 'bailey', label: 'Bailey Acoustic' },
    ];

    return (
        <div className="min-h-screen bg-bg-brown">
            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 mb-12 text-center space-x-4 max-w-3xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            2026 Festival Schedule:
                        </h3>
                        <span
                            className="inline-block px-4 py-2 mb-4 bg-gray-400 text-white font-body font-semibold rounded-lg cursor-not-allowed opacity-60"
                        >
                            Download [PDF]
                        </span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-charcoal">
                            Youthfolk Tents
                        </h3>
                        <a href="/festival/lineup/youthfolk" className="inline-block px-4 py-2 mb-4 bg-green text-white font-body font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
                            View Lineup
                        </a>
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

                        <LineupCard
                            artistName="C LA C I (pronounced Selassie I)"
                            genre="Reggae & African influenced Acoustic Roots (Columbus, OH)"
                            subtitle="SUNDAY OPENING “SONGS FOR THE SPIRIT"
                            contact="m.claci.112@gmail.com"
                            stage="Kirby Main Stage"
                            dayTime="Sunday 11am"
                            bio="Many folks know Mark Hunter (aka C LA C I) as the lead singer of acclaimed Columbus-based The Ark Band which has toured throughout the U.S. and beyond. Born in Freetown, Sierra Leone, at age 11, Mark moved to boarding school in Ghana, where he was a &apos;foreign&apos; student blessed to absorb some of the language and culture of Ghana. From there, he came straight to college at Otterbein in Westerville and Mark has lived and performed in Ohio ever since. For this solo show he&apos;ll play acoustic roots storytelling music that draws from Reggae, Country and African influences."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/eSox4-CFjo4"
                            mediaTitle="C LA C I - &quot;Conversations&quot;"
                        />

                        <LineupCard
                            artistName="CLYMER & KURTZ"
                            genre="Folk / Singer-songwriter (Linville, VA)"
                            website="clymerkurtz.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Based in the Shenandoah Valley of Virginia, Maria Clymer and Christopher Kurtz have collaborated for decades, crafting music that is at once simple and rich, emotive and unique. The singer-songwriter duo Clymer & Kurtz seamlessly blends intense and gentle melodies textured with harmonies, agile and inventive guitar playing, piano, and sometimes percussion. They&apos;ve been described as: &quot;exquisite!&quot; &quot;subtle,&quot; &quot;always imaginative,&quot; &quot;soul filling,&quot; and &quot;ethereal.&quot; Acclaimed duo, Over the Rhine, described their 2023 EP album What If You Knew as: &quot;It&apos;s all so lovely with a quietness that makes it feel like a surprise when eyes suddenly fill with tears. Beautiful.&quot; "
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/Y861VcOKdxk"
                            mediaTitle="Clymer & Kurtz - &quot;Evening Will Come&quot;"
                        />

                        <LineupCard
                            artistName="DENISON UNIVERSITY ROOTS ALUMNI BAND"
                            genre="Bluegrass (Newark, OH)"
                            website="denison.edu/academics/music/american-roots-music"
                            stage="Kirby Main Stage"
                            dayTime="TBA"
                            bio="The Denison University Roots Alumni Band is made up of the university&apos;s American Roots Music program alumni who have chosen to make their home in Ohio. The Newark, Ohio university attracts students from across the U.S.  The Roots Music progam explores America&apos;s musical and cultural heritage spanning a range of music styles and eras — including traditional and progressive bluegrass, country/Delta blues, folk and more. Under the direction of Adam Schlenker, the program engenders graduates who gain both a deeper understanding of the music and capacities for personal musical endeavors. Expect to hear a singular and upbeat sound on the festival main stage by some extremely talented performers!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/DenisonUnivRootsAlumniBand.jpg"
                            mediaTitle="Denison Univ Roots Alumni Band"
                        />

                        <LineupCard
                            artistName="FESTIVAL ARTISTS&apos; IMPROV JAM BAND"
                            genre="Session/Jam Band"
                            contact="szuch@breezelineohio.net"
                            stage="Kirby Main Stage"
                            dayTime="Sunday 3pm"
                            bio="House band - session band - jam band, we&apos;re still not quite sure what to call our roll-out last year of the festival&apos;s newest addition! It was a huge success in 2025, so we&apos;re back for more in 2026. Facilitated by Columbus session musician Brian Szuch, this highly talented mix of musicians performing at the 2026 Central Ohio Folk Festival are thrown together on stage, without practice, a set list, or ever having played together.  It showcases the talent of musicians who can improvise on the fly and create some marvelous music in the process - simply knowing only style and key."
                            mediaType="image"
                            mediaSrc="/festival/lineup/COFFImprovJamBand.jpg"
                            mediaTitle="COFF Improv Jam Band"
                        />

                        <LineupCard
                            artistName="PHIL HART & JEFF PUTNAM"
                            genre="Community Sing-along (Columbus, OH)"
                            subtitle="FESTIVAL OPENING &quot;FOLK HEROES&quot; SING-ALONG"
                            website="www.pahart.com"
                            stage="Kirby Main Stage"
                            dayTime="Saturday 11am"
                            bio="Phil Hart and Jeff Putnam have been playing music and leading sing-alongs together since they met at a local summer camp in 1969. Kick off the festival by joining them to sing songs by legends such as Woody Guthrie, Bob Dylan, James Taylor, John Prine, Ian Tyson, Bob Marley, and many others."
                            mediaType="image"
                            mediaSrc="/festival/lineup/PhilHartJeffPutnam.jpg"
                            mediaTitle="Phil Hart & Jeff Putnam"
                        />

                        <LineupCard
                            artistName="HOUSE OF HAMILL"
                            genre="Celtic folk (East Texas, PA)"
                            website="www.houseofhamill.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Performing &apos;upscaled&apos; Celtic folk, the House of Hamill trio has been a fixture on festival stages across the U.S. Whether they&apos;re ripping through a set of original jigs and reels, adding lush three-part harmonies into traditional folk ballads, or cracking up an audience with stories from the road, House of Hamill puts on a show that captivates audiences from start to finish. Their original song &quot;Banks of the Brandywine&quot; was a grand prize winner in the 2024 John Lennon Songwriting Contest. The band&apos;s newest release, Wildfire, marks House of Hamill&apos;s most compelling work to date. Filled with lyrical depth, sophisticated vocal and instrumental arrangements, and irresistible hooks, it was the most played album on U.S. Folk Radio in 2024."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/f7LTJ35QuM8"
                            mediaTitle="House of Hamill - &quot;Shine&quot;"
                        />

                        <LineupCard
                            artistName="KEN AND BRAD KOLODNER"
                            genre="Acoustic Roots/Old-time (Baltimore, MD)"
                            website="www.kenandbrad.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Ken & Brad Kolodner exemplify the powerful musical bond that can exist between father and son. Their playing is rooted in old-time traditions, yet brims with innovation and nuance, creating a sound that is both timeless and original. Their musical chemistry is evident, with Brad&apos;s evolving technique and Ken&apos;s world-class artistry pushing the boundaries of traditional stringband music. Their performances aren&apos;t just about technical skill -  they&apos;re about communication... trading leads, locking into a groove, or improvising in the moment. They play with a deep sense of trust that audiences immediately feel. Regularly touring band member and bassist Alex Lacquement will be part of the mix. They&apos;ve recorded multiple albums and have appeared at major folk and roots festivals. Their 2020 album Stony Run hit #4 on the Billboard Bluegrass Chart."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/tXyD6gLBMdA"
                            mediaTitle="Ken and Brad Kolodner - &quot;The Swift House&quot;"
                        />

                        <LineupCard
                            artistName="MUSIC COLUMBUS presents 2026 SELECT ARTISTS"
                            subtitle='KENNEDY HALL and TALITHA BOYD'
                            genre="Singer-Songwriter/Americana (Columbus, OH)"
                            website="musiccolumbus.com"
                            stage="Showcase Stage"
                            dayTime="TBA"
                            bio="Music Columbus (a local non-profit), was formed in 2016 by various Columbus community members. They recognized a need to cultivate and support local music talent as well as build and support a corresponding music infrastructure in the Greater Columbus area. They&apos;ve developed a number of program initiatives over the years, including Music Mondays, The Unheard (highlighting emerging local artists), and the Better Together Music Incubator (providing emerging artists with development tools and resources), amongst others. This is the third year the Central Ohio Folk Festival has partnered with Music Columbus for this stage slot featuring artists from The Unheard program. Join us to hear some talented emerging artists do some of their original music!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/MusicColumbus.jpg"
                            mediaTitle="Music Columbus"
                        />

                        <LineupCard
                            artistName="MY BROTHER&apos;S KEEPER"
                            genre="Progressive Bluegrass/Folk (Cincinnati, Ohio)"
                            website="www.mybrotherskeeperband.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="My Brother&apos;s Keeper is a contemporary bluegrass band composed of brothers Benjamin (guitar), Titus (mandolin), and Joshua Luckhaupt (fiddle). Upright bassist Wyatt &quot;Sawmill&quot; Murray and Adam Moehlman on fiddle round out the ensemble. The band has brought their fresh blend of acoustic music to fans all over the U.S.  Expect an energetic show consisting of original music, rousing covers, brother duets, and a sound that exemplifies the natural musical synergy and harmonics that occurs with musicians from the same family. They have been  award winners or nominees/runner-ups in multiple events including two MerleFest songwriter competitions, Cincinnati&apos;s Entertainment Awards, and more recently Nashville&apos;s 2023 Josie Award for Bluegrass Band of the Year. John Cowan of Newgrass Revival says of them: &quot;Amazing vocals, stellar playing, tremendous songs and superlative young human beings.&quot;"
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/O_pq5m66Te0?si"
                            mediaTitle="My Brother&apos;s Keeper - &quot;The Edge of the River&quot;"
                        />

                        <LineupCard
                            artistName="THE ROUGH & TUMBLE"
                            genre="Progressive Folk/Americana (Haverhill, NH)"
                            website="www.theroughandtumble.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Self-described as a free-range folk/grass-fed Americana duo, The Rough & Tumble are made up of extremely talented musicians Mallory Graham and Scott Tyler who have been touring relentlessly together for more than 10 years. The Pennsylvania-born Graham and Central California's Tyler have a knack for weaving together elements of joy, sorrow, comedy, and drama in their music, leaving audiences on the edge of their seats. From their upbeat, commanding stage presence and sharp banter, to their well-crafted songs with ear worm-inducing melodies and heartstring lyrics, this duo has earned a reputation as a band to see each time they come to town. In 2023, they became one of the yearly recipients of the Club Passim Iguana Fund.  M. McLeod of Empty Nest Concerts (NJ) says of them: &quot;High-quality originals…from haunting ballads to stomping, screaming folk anthems. All performed with expert, polished musicianship and flawless ensemble. Amazing array of instruments... and attention to musical detail, without a trace of pretension or preciousness.&quot;"
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/oRdaHHTXWq4"
                            mediaTitle="The Rough & Tumble - &quot;Hard Times (You & Me)&quot;"
                        />

                        <LineupCard
                            artistName="SHOWMAN & COOLE"
                            genre="Acoustic Roots/Old-time/Folk (Toronto, Ontario, CAN)"
                            website="www.lonesomeace.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Talented and creative anchor members of The Lonesome Ace String Band (a trio), the two will perform as Showman & Coole at the 2026 Central Ohio Folk Festival. Through twenty-five years and thousands of shows together, John Showman and Chris Coole have developed a deep and instinctual musical bond. Their music lurks in a truly unique space that is somewhere on the outskirts of old-time, bluegrass, and folk. The songs of John Hartford, Hank Williams, Dock Boggs, and The Band share space with the fiddle tunes of Eck Robertson and Ed Haley. The duo&apos;s original songs and tunes take in all these vistas and paint something both personal and timely. Lonesome Ace String Band tours have taken them far and wide: they&apos;ve become festival favorites at Rockygrass, Celtic Connections, Winnipeg Folk Festival, and MerleFest. They regularly tour the USA, UK, Germany and, of course, Canada and they receive rave reviews wherever they go."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/2hBgLjd0fOA"
                            mediaTitle="Showman & Coole"
                        />

                        <LineupCard
                            artistName="SINGER-SONGWRITER COMPETITION FINALISTS & WINNER"
                            genre="Singer-Songwriter"
                            contact="songcontest@columbusfolkmusicsociety.org"
                            stage="Showcase Stage & Bailey Acoustic Stage"
                            dayTime="Saturday, 11:30am & 6:00pm"
                            bio="The first ever Columbus Folk Music Society&apos;s Singer-Songwriter Competition showcases songwriting and provides a venue for singer-songwriters to share their work at the Central Ohio Folk Festival. Six finalists were selected by a panel of industry professional judges out of 87 entries from Central Ohio and beyond. All six finalists will perform two original songs each on the festival&apos;s Showcase Stage starting at 11:30 am. Competing finalists are judged on their songs&apos; originality and overall quality, as well as their performance and general stage presence. The winner receives a $300 cash prize and performs a solo set on the Bailey Acoustic stage at 6pm on Saturday. Enjoy this wonderful new addition to the festival!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="Songwriter Competition"
                        />

                        <LineupCard
                            artistName="SUZUKI MUSIC COLUMBUS STUDENTS PERFORMANCE"
                            genre="(Columbus, OH)"
                            website="www.suzukimusiccolumbus.org"
                            stage="Showcase Stage"
                            dayTime="TBA"
                            bio="Suzuki Music Columbus (SMC) is a vibrant local organization founded by Douglas & Susan Locke. It teaches children utilizing the Suzuki method of instruction. The students learn a common repertoire of songs - first by ear and later by reading — with the goal of building fluency, confidence, and playing skills that will enhance their violin, viola, or cello playing.  Part of SMC&apos;s programming includes the Suzuki Music Columbus Tour Group amongst other endeavors. The students&apos; repertoire for the festival&apos;s stage performance will focus on roots music pieces."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/kp2G0aMdT2A"
                            mediaTitle="Suzuki Music Columbus Students Performance - &quot;Tango McLean&quot;"
                        />
                    </div>
                )}

                {/* Kirby */}
                {activeTab === 'kirby' && (
                    <div className="space-y-16 max-w-5xl mx-auto mb-10">
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <h2 className="text-3xl font-heading text-center font-bold text-green mb-4">KIRBY MAIN & SHOWCASE STAGES</h2>
                            <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                                <div className="relative h-64 md:h-auto">
                                    <Image
                                        src="/festival/lineup/ShowcaseStage.jpg"
                                        alt="Showcase Stage"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="font-body text-gray-700 leading-relaxed mb-4">
                                        The <b>Kirby Main Stage</b> is a large outdoor stage with seating for approximately 175 provided. There is also lots of room to lay out a blanket or set up lawn chairs.
                                    </p>
                                    <p className="font-body text-gray-700 leading-relaxed">
                                        The <b>Showcase Stage</b> is inside a larger tent with ample seating provided. Often times touring performers are booked on both the Kirby & Showcase stages so if you miss them on one, you can catch them on another.
                                    </p>
                                </div>
                            </div>
                        </div>

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

                        <LineupCard
                            artistName="C LA C I (pronounced Selassie I)"
                            genre="Reggae & African influenced Acoustic Roots (Columbus, OH)"
                            subtitle="SUNDAY OPENING “SONGS FOR THE SPIRIT"
                            contact="m.claci.112@gmail.com"
                            stage="Kirby Main Stage"
                            dayTime="Sunday 11am"
                            bio="Many folks know Mark Hunter (aka C LA C I) as the lead singer of acclaimed Columbus-based The Ark Band which has toured throughout the U.S. and beyond. Born in Freetown, Sierra Leone, at age 11, Mark moved to boarding school in Ghana, where he was a &apos;foreign&apos; student blessed to absorb some of the language and culture of Ghana. From there, he came straight to college at Otterbein in Westerville and Mark has lived and performed in Ohio ever since. For this solo show he&apos;ll play acoustic roots storytelling music that draws from Reggae, Country and African influences."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/eSox4-CFjo4"
                            mediaTitle="C LA C I - &quot;Conversations&quot;"
                        />

                        <LineupCard
                            artistName="CLYMER & KURTZ"
                            genre="Folk / Singer-songwriter (Linville, VA)"
                            website="clymerkurtz.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Based in the Shenandoah Valley of Virginia, Maria Clymer and Christopher Kurtz have collaborated for decades, crafting music that is at once simple and rich, emotive and unique. The singer-songwriter duo Clymer & Kurtz seamlessly blends intense and gentle melodies textured with harmonies, agile and inventive guitar playing, piano, and sometimes percussion. They&apos;ve been described as: &quot;exquisite!&quot; &quot;subtle,&quot; &quot;always imaginative,&quot; &quot;soul filling,&quot; and &quot;ethereal.&quot; Acclaimed duo, Over the Rhine, described their 2023 EP album What If You Knew as: &quot;It&apos;s all so lovely with a quietness that makes it feel like a surprise when eyes suddenly fill with tears. Beautiful.&quot; "
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/Y861VcOKdxk"
                            mediaTitle="Clymer & Kurtz - &quot;Evening Will Come&quot;"
                        />

                        <LineupCard
                            artistName="DENISON UNIVERSITY ROOTS ALUMNI BAND"
                            genre="Bluegrass (Newark, OH)"
                            website="denison.edu/academics/music/american-roots-music"
                            stage="Kirby Main Stage"
                            dayTime="TBA"
                            bio="The Denison University Roots Alumni Band is made up of the university&apos;s American Roots Music program alumni who have chosen to make their home in Ohio. The Newark, Ohio university attracts students from across the U.S.  The Roots Music progam explores America&apos;s musical and cultural heritage spanning a range of music styles and eras — including traditional and progressive bluegrass, country/Delta blues, folk and more. Under the direction of Adam Schlenker, the program engenders graduates who gain both a deeper understanding of the music and capacities for personal musical endeavors. Expect to hear a singular and upbeat sound on the festival main stage by some extremely talented performers!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/DenisonUnivRootsAlumniBand.jpg"
                            mediaTitle="Denison Univ Roots Alumni Band"
                        />

                        <LineupCard
                            artistName="FESTIVAL ARTISTS&apos; IMPROV JAM BAND"
                            genre="Session/Jam Band"
                            contact="szuch@breezelineohio.net"
                            stage="Kirby Main Stage"
                            dayTime="Sunday 3pm"
                            bio="House band - session band - jam band, we&apos;re still not quite sure what to call our roll-out last year of the festival&apos;s newest addition! It was a huge success in 2025, so we&apos;re back for more in 2026. Facilitated by Columbus session musician Brian Szuch, this highly talented mix of musicians performing at the 2026 Central Ohio Folk Festival are thrown together on stage, without practice, a set list, or ever having played together.  It showcases the talent of musicians who can improvise on the fly and create some marvelous music in the process - simply knowing only style and key."
                            mediaType="image"
                            mediaSrc="/festival/lineup/COFFImprovJamBand.jpg"
                            mediaTitle="COFF Improv Jam Band"
                        />

                        <LineupCard
                            artistName="PHIL HART & JEFF PUTNAM"
                            genre="Community Sing-along (Columbus, OH)"
                            subtitle="FESTIVAL OPENING &quot;FOLK HEROES&quot; SING-ALONG"
                            website="www.pahart.com"
                            stage="Kirby Main Stage"
                            dayTime="Saturday 11am"
                            bio="Phil Hart and Jeff Putnam have been playing music and leading sing-alongs together since they met at a local summer camp in 1969. Kick off the festival by joining them to sing songs by legends such as Woody Guthrie, Bob Dylan, James Taylor, John Prine, Ian Tyson, Bob Marley, and many others."
                            mediaType="image"
                            mediaSrc="/festival/lineup/PhilHartJeffPutnam.jpg"
                            mediaTitle="Phil Hart & Jeff Putnam"
                        />

                        <LineupCard
                            artistName="HOUSE OF HAMILL"
                            genre="Celtic folk (East Texas, PA)"
                            website="www.houseofhamill.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Performing &apos;upscaled&apos; Celtic folk, the House of Hamill trio has been a fixture on festival stages across the U.S. Whether they&apos;re ripping through a set of original jigs and reels, adding lush three-part harmonies into traditional folk ballads, or cracking up an audience with stories from the road, House of Hamill puts on a show that captivates audiences from start to finish. Their original song &quot;Banks of the Brandywine&quot; was a grand prize winner in the 2024 John Lennon Songwriting Contest. The band&apos;s newest release, Wildfire, marks House of Hamill&apos;s most compelling work to date. Filled with lyrical depth, sophisticated vocal and instrumental arrangements, and irresistible hooks, it was the most played album on U.S. Folk Radio in 2024."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/f7LTJ35QuM8"
                            mediaTitle="House of Hamill - &quot;Shine&quot;"
                        />

                        <LineupCard
                            artistName="KEN AND BRAD KOLODNER"
                            genre="Acoustic Roots/Old-time (Baltimore, MD)"
                            website="www.kenandbrad.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Ken & Brad Kolodner exemplify the powerful musical bond that can exist between father and son. Their playing is rooted in old-time traditions, yet brims with innovation and nuance, creating a sound that is both timeless and original. Their musical chemistry is evident, with Brad&apos;s evolving technique and Ken&apos;s world-class artistry pushing the boundaries of traditional stringband music. Their performances aren&apos;t just about technical skill -  they&apos;re about communication... trading leads, locking into a groove, or improvising in the moment. They play with a deep sense of trust that audiences immediately feel. Regularly touring band member and bassist Alex Lacquement will be part of the mix. They&apos;ve recorded multiple albums and have appeared at major folk and roots festivals. Their 2020 album Stony Run hit #4 on the Billboard Bluegrass Chart."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/tXyD6gLBMdA"
                            mediaTitle="Ken and Brad Kolodner - &quot;The Swift House&quot;"
                        />

                        <LineupCard
                            artistName="MUSIC COLUMBUS presents SELECT ARTISTS"
                            genre="Singer-Songwriter/Americana (Columbus, OH)"
                            website="musiccolumbus.com"
                            stage="Showcase Stage"
                            dayTime="TBA"
                            bio="Music Columbus (a local non-profit), was formed in 2016 by various Columbus community members. They recognized a need to cultivate and support local music talent as well as build and support a corresponding music infrastructure in the Greater Columbus area. They&apos;ve developed a number of program initiatives over the years, including Music Mondays, The Unheard (highlighting emerging local artists), and the Better Together Music Incubator (providing emerging artists with development tools and resources), amongst others. This is the third year the Central Ohio Folk Festival has partnered with Music Columbus for this stage slot featuring artists from The Unheard program. Join us to hear some talented emerging artists do some of their original music!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/MusicColumbus.jpg"
                            mediaTitle="Music Columbus"
                        />

                        <LineupCard
                            artistName="MY BROTHER&apos;S KEEPER"
                            genre="Progressive Bluegrass/Folk (Cincinnati, Ohio)"
                            website="www.mybrotherskeeperband.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="My Brother&apos;s Keeper is a contemporary bluegrass band composed of brothers Benjamin (guitar), Titus (mandolin), and Joshua Luckhaupt (fiddle). Upright bassist Wyatt &quot;Sawmill&quot; Murray and Adam Moehlman on fiddle round out the ensemble. The band has brought their fresh blend of acoustic music to fans all over the U.S.  Expect an energetic show consisting of original music, rousing covers, brother duets, and a sound that exemplifies the natural musical synergy and harmonics that occurs with musicians from the same family. They have been  award winners or nominees/runner-ups in multiple events including two MerleFest songwriter competitions, Cincinnati&apos;s Entertainment Awards, and more recently Nashville&apos;s 2023 Josie Award for Bluegrass Band of the Year. John Cowan of Newgrass Revival says of them: &quot;Amazing vocals, stellar playing, tremendous songs and superlative young human beings.&quot;"
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/O_pq5m66Te0?si"
                            mediaTitle="My Brother&apos;s Keeper - &quot;The Edge of the River&quot;"
                        />

                        <LineupCard
                            artistName="THE ROUGH & TUMBLE"
                            genre="Progressive Folk/Americana (Haverhill, NH)"
                            website="www.theroughandtumble.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Self-described as a free-range folk/grass-fed Americana duo, The Rough & Tumble are made up of extremely talented musicians Mallory Graham and Scott Tyler who have been touring relentlessly together for more than 10 years. The Pennsylvania-born Graham and Central California's Tyler have a knack for weaving together elements of joy, sorrow, comedy, and drama in their music, leaving audiences on the edge of their seats. From their upbeat, commanding stage presence and sharp banter, to their well-crafted songs with ear worm-inducing melodies and heartstring lyrics, this duo has earned a reputation as a band to see each time they come to town. In 2023, they became one of the yearly recipients of the Club Passim Iguana Fund.  M. McLeod of Empty Nest Concerts (NJ) says of them: &quot;High-quality originals…from haunting ballads to stomping, screaming folk anthems. All performed with expert, polished musicianship and flawless ensemble. Amazing array of instruments... and attention to musical detail, without a trace of pretension or preciousness.&quot;"
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/oRdaHHTXWq4"
                            mediaTitle="The Rough & Tumble - &quot;Hard Times (You & Me)&quot;"
                        />

                        <LineupCard
                            artistName="SHOWMAN & COOLE"
                            genre="Acoustic Roots/Old-time/Folk (Toronto, Ontario, CAN)"
                            website="www.lonesomeace.com"
                            stage="Kirby Main Stage & Showcase Stage"
                            dayTime="TBA"
                            bio="Talented and creative anchor members of The Lonesome Ace String Band (a trio), the two will perform as Showman & Coole at the 2026 Central Ohio Folk Festival. Through twenty-five years and thousands of shows together, John Showman and Chris Coole have developed a deep and instinctual musical bond. Their music lurks in a truly unique space that is somewhere on the outskirts of old-time, bluegrass, and folk. The songs of John Hartford, Hank Williams, Dock Boggs, and The Band share space with the fiddle tunes of Eck Robertson and Ed Haley. The duo&apos;s original songs and tunes take in all these vistas and paint something both personal and timely. Lonesome Ace String Band tours have taken them far and wide: they&apos;ve become festival favorites at Rockygrass, Celtic Connections, Winnipeg Folk Festival, and MerleFest. They regularly tour the USA, UK, Germany and, of course, Canada and they receive rave reviews wherever they go."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/2hBgLjd0fOA"
                            mediaTitle="Showman & Coole"
                        />

                        <LineupCard
                            artistName="SINGER-SONGWRITER COMPETITION FINALISTS & WINNER"
                            genre="Singer-Songwriter"
                            contact="songcontest@columbusfolkmusicsociety.org"
                            stage="Showcase Stage & Bailey Acoustic Stage"
                            dayTime="Saturday, 11:30am & 6:00pm"
                            bio="The first ever Columbus Folk Music Society&apos;s Singer-Songwriter Competition showcases songwriting and provides a venue for singer-songwriters to share their work at the Central Ohio Folk Festival. Six finalists were selected by a panel of industry professional judges out of 87 entries from Central Ohio and beyond. All six finalists will perform two original songs each on the festival&apos;s Showcase Stage starting at 11:30 am. Competing finalists are judged on their songs&apos; originality and overall quality, as well as their performance and general stage presence. The winner receives a $300 cash prize and performs a solo set on the Bailey Acoustic stage at 6pm on Saturday. Enjoy this wonderful new addition to the festival!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="Songwriter Competition"
                        />

                        <LineupCard
                            artistName="SUZUKI MUSIC COLUMBUS STUDENTS PERFORMANCE"
                            genre="(Columbus, OH)"
                            website="www.suzukimusiccolumbus.org"
                            stage="Showcase Stage"
                            dayTime="TBA"
                            bio="Suzuki Music Columbus (SMC) is a vibrant local organization founded by Douglas & Susan Locke. It teaches children utilizing the Suzuki method of instruction. The students learn a common repertoire of songs - first by ear and later by reading — with the goal of building fluency, confidence, and playing skills that will enhance their violin, viola, or cello playing.  Part of SMC&apos;s programming includes the Suzuki Music Columbus Tour Group amongst other endeavors. The students&apos; repertoire for the festival&apos;s stage performance will focus on roots music pieces."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/kp2G0aMdT2A"
                            mediaTitle="Suzuki Music Columbus Students Performance - &quot;Tango McLean&quot;"
                        />
                    </div>
                )}

                {/* Bailey */}
                {activeTab === 'bailey' && (
                    <div className="space-y-16 max-w-5xl mx-auto mb-10">

                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <h2 className="text-3xl font-heading text-center font-bold text-green mb-4">BAILEY ACOUSTIC STAGE</h2>
                            <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                                <div className="relative h-64 md:h-auto">
                                    <Image
                                        src="/festival/lineup/BaileyStage.jpg"
                                        alt="Bailey Stage"
                                        fill
                                        className="object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="font-body text-gray-700 leading-relaxed mb-4">
                                        The <b>Bailey Acoustic stage</b> predominantly focuses on showcasing emerging or established native Ohio artists, artists who do predominantly covers, and younger teen or college-aged artists. It is a vibrant and popular tent showcasing many variations of Ohio based talent!
                                    </p>
                                </div>
                            </div>
                        </div>

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

                        <LineupCard
                            artistName="LANDON ROSS"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="LANDON ROSS"
                        />

                        <LineupCard
                            artistName="LEA MARRA & THE RIVER BOYS"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="LEA MARRA & THE RIVER BOYS"
                        />

                        <LineupCard
                            artistName="MOLLY ROISIN"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="MOLLY ROISIN"
                        />

                        <LineupCard
                            artistName="RAINMAKER BLUES DUO"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="RAINMAKER BLUES DUO"
                        />

                        <LineupCard
                            artistName="THE HEN AND THE CROW"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="THE HEN AND THE CROW"
                        />

                        <LineupCard
                            artistName="THE REDBUDS"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="THE REDBUDS"
                        />

                        <LineupCard
                            artistName="THE SHAW BROTHERS"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="THE SHAW BROTHERS"
                        />

                        <LineupCard
                            artistName="UPSTREAM  DRIFTERS"
                            genre="Genre (City, State)"
                            website="https://website.com"
                            stage="Bailey Acoustic Stage"
                            dayTime="TBD"
                            bio="Artist bio goes here. This is a placeholder for the artist biography section. It provides information about the artist's background, achievements, and musical style."
                            mediaType="image"
                            mediaSrc="/festival/lineup/SWCompetition.jpg"
                            mediaTitle="UPSTREAM DRIFTERS"
                        />
                    </div>
                )}

            </section>
        </div>
    );
}