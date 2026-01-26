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
                            artistName="SNACK TIME!"
                            genre="Children&apos;s music (Columbus, OH)"
                            website="instagram.com/snacktimecbus/"
                            contact='kristenvpeters@gmail.com'
                            stage="YouthFolk Performing Tent"
                            dayTime="Saturday, 11:30am-12:30pm / Sunday 1:30-2:15pm"
                            bio="Snack Time! is an interactive children&apos;s music band bringing food-themed fun and high-energy performances to families everywhere. Made up of professional musicians from across the city, Snack Time! turns concerts into joyful, dance-along celebrations where music, movement, and snacks all take center stage."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/-jXU7byscSA"
                            mediaTitle="Snack Time - &quot;I Am Kind (Lindsay Munroe Cover)&quot;"
                        />

                        <LineupCard
                            artistName="JOANIE CALEM"
                            genre="Storytelling (Columbus, OH)"
                            website="joaniecalem.com"
                            contact='joaniecalem@gmail.com'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Saturday 1-1:45pm"
                            bio={`Some stories sing, some songs tell stories, and both songs and stories invite us to a magic place of wonder, discovery and special people. Come join Joanie as she takes you on a journey with singing stories and story songs.\n\nJoanie Calem is a musician, singer-songwriter, storyteller and inclusion advocate (1983 to present). She performs for audiences of all ages and teaches piano, guitar, ukulele, voice and recorders. Joanie is always thrilled to give people the gift of knowing how to play an instrument!`}
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/N3TETRZghwQ"
                            mediaTitle="Joanie Calem - &quot;Grandfather and the Enormous Carrot&quot;"
                        />

                        <LineupCard
                            artistName="THE REDBUDS"
                            genre="Children&apos;s music (Columbus, OH)"
                            website="theredbuds.com"
                            stage="YouthFolk Performing Tent"
                            dayTime="Sunday / 11-11:45am"
                            bio="The Redbuds is an all women folk trio from Columbus, Ohio. The group began back in 2012 looking to bring old time folk music to new audiences, heavily influenced by other women folk artists that came before them such as The Kossoy Sisters and The Coon Creek Girls. Blending their rich harmonies with traditional string band instruments, their catalogue of music includes old time Appalachian folk songs with sprinklings of originals as well as tunes by Woody Guthrie, Elizabeth Cotten and Lead Belly. With Rachel Scott on bass and banjo, Allie Smith Boyer on fiddle and mandolin, and Laura Smith on guitar, you&apos;ll hear music that will make you want to sing, dance and clap your hands as you&apos;re reminded of an era long before ours."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/SY-kjXkZqbo"
                            mediaTitle="The Redbuds - &quot;New River Train&quot;"
                        />

                        <LineupCard
                            artistName="BOX FRAME DRUM / QUILT ART / PARADE STREAMER ACTIVITY"
                            genre="Crafts"
                            subtitle='Box Frame Drums & Quilt Art (ages 12 & up) and Parade Streamer Making (all ages)'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Saturday 11am-1pm & 1:45-3pm / Sunday 11:45am-12:45pm & 1:30-3:30pm"
                            bio={`BOX FRAME DRUMS: a craft activity for ages 12 & up. Kits are provided frame drum kits along with guidance for assembly. Youth will have a pleasant sounding percussive instrument they can use in the drum circle and kids jam or parade.\n\nQUILT ART: youth ages 12 & up can do decorative art on a fabric square. If they choose to leave it with us, it will be added to the fabric quilt top that is hung next year in the YouthFolk Craft tent.\n\nPARADE STREAMERS: kids can make streamers and use them in the parade led by festival mascot, Darby Duck on Sunday afternoon. OR just have fun waving them to the music!`}
                            mediaType="image"
                            mediaSrc="/festival/lineup/QuiltArtCraft.jpg"
                            mediaTitle="Box Frame Drum Activity"
                        />

                        <LineupCard
                            artistName="TOADSTOOL SHADOW"
                            genre="Children&apos;s music (Chillicothe, OH)"
                            website="toadstoolshadow.com"
                            contact='toadstoolshadow@gmail.com'
                            stage="YouthFolk Performing Tent"
                            dayTime="Sunday 12:15-1pm / 2:45-3:30pm"
                            bio="Toadstool Shadow is a family-friendly folk band from Chillicothe, Ohio. Their songs are a seamless synthesis of the serious, the silly, and the surreal. They are best known for their musical-comedy gnome act at the Ohio Renaissance Festival. However, in 2026, for America 250, they will also be doing a red, white, and blue cowboy act at select festivals like the Central Ohio Folk Festival. They are led by songwriter Chris Till, a recipient of a 2025-2026 Ohio Arts Council Artist Opportunity grant for his work with Toadstool Shadow."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/eJZ35xHrc_g"
                            mediaTitle="Toadstool Shadow - &quot;Two Extraordinary Gnomes&quot;"
                        />

                        <LineupCard
                            artistName="2025 KIRBY SCHOLARSHIP WINNERS SHOWCASE"
                            subtitle="Magnus McKay and Nils Sellman Skinner with Jackson Sweeney"
                            stage="YouthFolk Performing Tent"
                            dayTime="Saturday 1pm / Saturday 1:30pm"
                            bio="Performing will be the 2025 Kirby Scholarship winners, Magnus McKay and Nils Sellman Skinner with Jackson Sweeney. Begun in 2009, the scholarship fund was created to assist young people (grades 3-12) to pursue or enhance their interest in music in the folk/roots tradition by a monetary award used towards the purchase of an instrument or lessons. Included with the award is providing an opportunity to perform at the annual Central Ohio Folk Festival. Let&apos;s give a big shout out to them for pursuing and developing their interest in music!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/2025KirbysSIDEbySIDE.jpg"
                            mediaTitle="Kirby Winners Performance"
                        />

                        <LineupCard
                            artistName="LYN FORD"
                            genre="Storytelling (Columbus, OH)"
                            website="storytellerlynford.com"
                            contact='friedtales2@gmail.com'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Saturday 3-3:45pm"
                            bio="Storyteller, author, poet, Ohio teaching artist, certified laughter yoga teacher and laughter wellness ambassador, Lyn Ford is also the recipient of a National Association of Black Storytellers Zora Neale Hurston Award and a 2023 Black Appalachian Storytellers Fellow. Lyn is a frequent teller at schools, libraries, festivals, conferences, and Thurber House summer writing camps for young people."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/V2RBxrw8l7o"
                            mediaTitle="Lyn Ford - &quot;Turtle Wants to Fly&quot;"
                        />

                        <LineupCard
                            artistName="KIRBY SCHOLARSHIP MUSIC AWARDS"
                            contact='lindamcdonald@columbusfolkmusicsociety.org'
                            stage="YouthFolk Performing Tent"
                            dayTime="Saturday 2:15pm"
                            bio="The annual Kirby Scholarship Award is given to one or two young musicians by the Columbus Folk Music Society. The Society, the producer of the festival, established the Scholarship Memorial Fund in 2009 in memory of Bob Kirby, a very early supporter of the festival. The purpose of the fund is to provide support to young musicians (grades 3-12) from Central Ohio by offering a monetary award to be used to enhance musical skills in the folk/roots music tradition. Recipients may use the $500 award to purchase an instrument, take music lessons, attend music workshops, etc. Recipients also have the opportunity to perform at the Central Ohio Folk Festival. Join us in the YouthFolk Performing Tent to see the awards ceremony. The award winners will be given an opportunity to perform after the awards."
                            mediaType="image"
                            mediaSrc="/festival/lineup/KirbyAwardsCeremony2024.jpg"
                            mediaTitle="Kirby Awards Ceremony (previous year)"
                        />

                        <LineupCard
                            artistName="KID&apos;S JAM"
                            stage="Meet in the Petting Zoo area"
                            dayTime="Saturday 3-4pm"
                            bio="Hey kids! Meet over at the Instrument Petting Zoo at 3pm on Satrurday and bring your musical selves!  If you&apos;ve made a drum, bring it!  If you&apos;ve made shakers or a parade streamer, bring them! You&apos;ll have some adults to help &quot;anchor down&quot; what might be your very first &quot;informal music jam!&quot;"
                            mediaType="image"
                            mediaSrc="/festival/lineup/KIDSwDRUMS.jpg"
                            mediaTitle="Kirby Awards Ceremony (previous year)"
                        />

                        <LineupCard
                            artistName="TERI LOTT"
                            genre="Storytelling (Thornville, OH)"
                            website="lottsoftales.com"
                            contact='lotts.of.tales@gmail.com'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Sunday 11-11:45am"
                            bio="Teri Lott retired from teaching and became a professional storyteller and puppeteer, sharing stories with listeners of all ages at many different venues in Ohio, Pennsylvania, West Virginia, and Florida. In 2020, Teri began collecting the stories she has told - both original and reimagined tales - and began self-publishing books. To date, she has published four short story collections for children and their families, a twisted fairy tale book, and a collection of spooky stories."
                            mediaType="image"
                            mediaSrc="/festival/lineup/TeriLott.jpg"
                            mediaTitle="Teri Lott"
                        />

                        <LineupCard
                            artistName="THURBER HOUSE EVENT"
                            genre="Storytelling Activity"
                            website="thurberhouse.org"
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Sunday 12:45pm-1:30pm"
                            bio="Activity: Grab a pencil and your imagination and have fun with us as we write, draw, and create Darby Duck&apos;s origin story! Where did he come from? Does he have a family? You get to decide!. Bio: Thurber House is a nonprofit arts hub, James Thurber museum, and gathering place for readers, writers, and artists of all ages. We offer creative workshops for children, teens, and adults; author events featuring nationally known and local authors; social events for book lovers; writer residencies for writers of adult and children's literature; and a historic home museum of James Thurber memorabilia."
                            mediaType="image"
                            mediaSrc="/festival/lineup/ThurberCampPhoto2025.jpg"
                            mediaTitle="Thurber House Event"
                        />

                        <LineupCard
                            artistName="PARADE LED BY FESTIVAL MASCOT, DARBY DUCK"
                            genre="Parade"
                            stage="Meet in front of the YouthFolk Storytelling & Craft Tent"
                            dayTime="Sunday 3:30-4pm"
                            bio="Kids and parents will get to participate in the annual parade on Sunday afternoon. The parade is led by festival mascot Darby Duck and kids are encouraged to bring along any drums they have made, either in Kids&apos; Craft Tent or the YouthFolk Tent, their parade streamers and their fun-filled selves to follow our “duck” in and around the grounds in a joyful celebration of music and fun!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/DarbyDuck.jpg"
                            mediaTitle="Darby Duck"
                        />

                    </div>
                )}

                {/* Performing Tent */}
                {activeTab === 'performing' && (
                    <div className="space-y-16 max-w-5xl mx-auto mb-10">

                        <LineupCard
                            artistName="SNACK TIME!"
                            genre="Children&apos;s music (Columbus, OH)"
                            website="instagram.com/snacktimecbus/"
                            contact='kristenvpeters@gmail.com'
                            stage="YouthFolk Performing Tent"
                            dayTime="Saturday, 11:30am-12:30pm / Sunday 1:30-2:15pm"
                            bio="Snack Time! is an interactive children&apos;s music band bringing food-themed fun and high-energy performances to families everywhere. Made up of professional musicians from across the city, Snack Time! turns concerts into joyful, dance-along celebrations where music, movement, and snacks all take center stage."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/-jXU7byscSA"
                            mediaTitle="Snack Time - &quot;I Am Kind (Lindsay Munroe Cover)&quot;"
                        />

                        <LineupCard
                            artistName="THE REDBUDS"
                            genre="Children&apos;s music (Columbus, OH)"
                            website="theredbuds.com"
                            stage="YouthFolk Performing Tent"
                            dayTime="Sunday / 11-11:45am"
                            bio="The Redbuds is an all women folk trio from Columbus, Ohio. The group began back in 2012 looking to bring old time folk music to new audiences, heavily influenced by other women folk artists that came before them such as The Kossoy Sisters and The Coon Creek Girls. Blending their rich harmonies with traditional string band instruments, their catalogue of music includes old time Appalachian folk songs with sprinklings of originals as well as tunes by Woody Guthrie, Elizabeth Cotten and Lead Belly. With Rachel Scott on bass and banjo, Allie Smith Boyer on fiddle and mandolin, and Laura Smith on guitar, you&apos;ll hear music that will make you want to sing, dance and clap your hands as you&apos;re reminded of an era long before ours."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/SY-kjXkZqbo"
                            mediaTitle="The Redbuds - &quot;New River Train&quot;"
                        />

                        <LineupCard
                            artistName="TOADSTOOL SHADOW"
                            genre="Children&apos;s music (Chillicothe, OH)"
                            website="toadstoolshadow.com"
                            contact='toadstoolshadow@gmail.com'
                            stage="YouthFolk Performing Tent"
                            dayTime="Sunday 12:15-1pm / 2:45-3:30pm"
                            bio="Toadstool Shadow is a family-friendly folk band from Chillicothe, Ohio. Their songs are a seamless synthesis of the serious, the silly, and the surreal. They are best known for their musical-comedy gnome act at the Ohio Renaissance Festival. However, in 2026, for America 250, they will also be doing a red, white, and blue cowboy act at select festivals like the Central Ohio Folk Festival. They are led by songwriter Chris Till, a recipient of a 2025-2026 Ohio Arts Council Artist Opportunity grant for his work with Toadstool Shadow."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/eJZ35xHrc_g"
                            mediaTitle="Toadstool Shadow - &quot;Two Extraordinary Gnomes&quot;"
                        />

                        <LineupCard
                            artistName="2025 KIRBY SCHOLARSHIP WINNERS SHOWCASE"
                            subtitle="Magnus McKay and Nils Sellman Skinner with Jackson Sweeney"
                            stage="YouthFolk Performing Tent"
                            dayTime="Saturday 1pm / Saturday 1:30pm"
                            bio="Performing will be the 2025 Kirby Scholarship winners, Magnus McKay and Nils Sellman Skinner with Jackson Sweeney. Begun in 2009, the scholarship fund was created to assist young people (grades 3-12) to pursue or enhance their interest in music in the folk/roots tradition by a monetary award used towards the purchase of an instrument or lessons. Included with the award is providing an opportunity to perform at the annual Central Ohio Folk Festival. Let&apos;s give a big shout out to them for pursuing and developing their interest in music!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/2025KirbysSIDEbySIDE.jpg"
                            mediaTitle="Kirby Winners Performance"
                        />

                        <LineupCard
                            artistName="KIRBY SCHOLARSHIP MUSIC AWARDS"
                            contact='lindamcdonald@columbusfolkmusicsociety.org'
                            stage="YouthFolk Performing Tent"
                            dayTime="Saturday 2:15pm"
                            bio="The annual Kirby Scholarship Award is given to one or two young musicians by the Columbus Folk Music Society. The Society, the producer of the festival, established the Scholarship Memorial Fund in 2009 in memory of Bob Kirby, a very early supporter of the festival. The purpose of the fund is to provide support to young musicians (grades 3-12) from Central Ohio by offering a monetary award to be used to enhance musical skills in the folk/roots music tradition. Recipients may use the $500 award to purchase an instrument, take music lessons, attend music workshops, etc. Recipients also have the opportunity to perform at the Central Ohio Folk Festival. Join us in the YouthFolk Performing Tent to see the awards ceremony. The award winners will be given an opportunity to perform after the awards."
                            mediaType="image"
                            mediaSrc="/festival/lineup/KirbyAwardsCeremony2024.jpg"
                            mediaTitle="Kirby Awards Ceremony (previous year)"
                        />

                        <LineupCard
                            artistName="KID&apos;S JAM"
                            stage="Meet in the Petting Zoo area"
                            dayTime="Saturday 3-4pm"
                            bio="Hey kids! Meet over at the Instrument Petting Zoo at 3pm on Satrurday and bring your musical selves!  If you&apos;ve made a drum, bring it!  If you&apos;ve made shakers or a parade streamer, bring them! You&apos;ll have some adults to help &quot;anchor down&quot; what might be your very first &quot;informal music jam!&quot;"
                            mediaType="image"
                            mediaSrc="/festival/lineup/KIDSwDRUMS.jpg"
                            mediaTitle="Kirby Awards Ceremony (previous year)"
                        />

                    </div>
                )}

                {/* Storytelling & Crafts */}
                {activeTab === 'storytelling' && (
                    <div className="space-y-16 max-w-5xl mx-auto mb-10">

                        <LineupCard
                            artistName="JOANIE CALEM"
                            genre="Storytelling (Columbus, OH)"
                            website="joaniecalem.com"
                            contact='joaniecalem@gmail.com'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Saturday 1-1:45pm"
                            bio={`Some stories sing, some songs tell stories, and both songs and stories invite us to a magic place of wonder, discovery and special people. Come join Joanie as she takes you on a journey with singing stories and story songs.\n\nJoanie Calem is a musician, singer-songwriter, storyteller and inclusion advocate (1983 to present). She performs for audiences of all ages and teaches piano, guitar, ukulele, voice and recorders. Joanie is always thrilled to give people the gift of knowing how to play an instrument!`}
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/N3TETRZghwQ"
                            mediaTitle="Joanie Calem - &quot;Grandfather and the Enormous Carrot&quot;"
                        />

                        <LineupCard
                            artistName="BOX FRAME DRUM / QUILT ART / PARADE STREAMER ACTIVITY"
                            genre="Crafts"
                            subtitle='Box Frame Drums & Quilt Art (ages 12 & up) and Parade Streamer Making (all ages)'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Saturday 11am-1pm & 1:45-3pm / Sunday 11:45am-12:45pm & 1:30-3:30pm"
                            bio={`BOX FRAME DRUMS: a craft activity for ages 12 & up. Kits are provided frame drum kits along with guidance for assembly. Youth will have a pleasant sounding percussive instrument they can use in the drum circle and kids jam or parade.\n\nQUILT ART: youth ages 12 & up can do decorative art on a fabric square. If they choose to leave it with us, it will be added to the fabric quilt top that is hung next year in the YouthFolk Craft tent.\n\nPARADE STREAMERS: kids can make streamers and use them in the parade led by festival mascot, Darby Duck on Sunday afternoon. OR just have fun waving them to the music!`}
                            mediaType="image"
                            mediaSrc="/festival/lineup/QuiltArtCraft.jpg"
                            mediaTitle="Box Frame Drum Activity"
                        />

                        <LineupCard
                            artistName="LYN FORD"
                            genre="Storytelling (Columbus, OH)"
                            website="storytellerlynford.com"
                            contact='friedtales2@gmail.com'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Saturday 3-3:45pm"
                            bio="Storyteller, author, poet, Ohio teaching artist, certified laughter yoga teacher and laughter wellness ambassador, Lyn Ford is also the recipient of a National Association of Black Storytellers Zora Neale Hurston Award and a 2023 Black Appalachian Storytellers Fellow. Lyn is a frequent teller at schools, libraries, festivals, conferences, and Thurber House summer writing camps for young people."
                            mediaType="video"
                            mediaSrc="https://www.youtube.com/embed/V2RBxrw8l7o"
                            mediaTitle="Lyn Ford - &quot;Turtle Wants to Fly&quot;"
                        />

                        <LineupCard
                            artistName="TERI LOTT"
                            genre="Storytelling (Thornville, OH)"
                            website="lottsoftales.com"
                            contact='lotts.of.tales@gmail.com'
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Sunday 11-11:45am"
                            bio="Teri Lott retired from teaching and became a professional storyteller and puppeteer, sharing stories with listeners of all ages at many different venues in Ohio, Pennsylvania, West Virginia, and Florida. In 2020, Teri began collecting the stories she has told - both original and reimagined tales - and began self-publishing books. To date, she has published four short story collections for children and their families, a twisted fairy tale book, and a collection of spooky stories."
                            mediaType="image"
                            mediaSrc="/festival/lineup/TeriLott.jpg"
                            mediaTitle="Teri Lott"
                        />

                        <LineupCard
                            artistName="THURBER HOUSE EVENT"
                            genre="Storytelling Activity"
                            website="thurberhouse.org"
                            stage="YouthFolk Storytelling & Craft Tent"
                            dayTime="Sunday 12:45pm-1:30pm"
                            bio="Activity: Grab a pencil and your imagination and have fun with us as we write, draw, and create Darby Duck&apos;s origin story! Where did he come from? Does he have a family? You get to decide!. Bio: Thurber House is a nonprofit arts hub, James Thurber museum, and gathering place for readers, writers, and artists of all ages. We offer creative workshops for children, teens, and adults; author events featuring nationally known and local authors; social events for book lovers; writer residencies for writers of adult and children's literature; and a historic home museum of James Thurber memorabilia."
                            mediaType="image"
                            mediaSrc="/festival/lineup/ThurberCampPhoto2025.jpg"
                            mediaTitle="Thurber House Event"
                        />

                        <LineupCard
                            artistName="PARADE LED BY FESTIVAL MASCOT, DARBY DUCK"
                            genre="Parade"
                            stage="Meet in front of the YouthFolk Storytelling & Craft Tent"
                            dayTime="Sunday 3:30-4pm"
                            bio="Kids and parents will get to participate in the annual parade on Sunday afternoon. The parade is led by festival mascot Darby Duck and kids are encouraged to bring along any drums they have made, either in Kids&apos; Craft Tent or the YouthFolk Tent, their parade streamers and their fun-filled selves to follow our “duck” in and around the grounds in a joyful celebration of music and fun!"
                            mediaType="image"
                            mediaSrc="/festival/lineup/DarbyDuck.jpg"
                            mediaTitle="Darby Duck"
                        />

                    </div>
                )}

            </section>
        </div>
    );
}