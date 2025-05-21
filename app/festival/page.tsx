import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedImage } from '@/components/home/AnimatedImage';
import { CalendarIcon, Clock, MapPin, Music, User, Mic2, Coffee, Utensils } from 'lucide-react';

export default function FestivalPage() {
  return (
    <main>
      <PageHeader
        title="Annual Folk Festival"
        subtitle="A celebration of folk music and community"
        backgroundImage="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Central Ohio Folk Festival</h2>
              <p className="text-lg mb-4">
                Join us for our annual celebration of folk music, tradition, and community. 
                Now in its 27th year, the Central Ohio Folk Festival brings together musicians, 
                dancers, storytellers, and folk enthusiasts from across the Midwest for a weekend 
                of performances, workshops, and fellowship.
              </p>
              <p className="text-lg mb-6">
                The festival features multiple stages with continuous live music, hands-on workshops, 
                children's activities, local artisans, and delicious food vendors. 
                Whether you're a seasoned musician or just love folk music, there's something for everyone!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild>
                  <Link href="/festival/tickets">Get Tickets</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/festival/schedule">View Schedule</Link>
                </Button>
              </div>
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl font-bold mb-4">Volunteer at the Festival</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  The Central Ohio Folk Festival is made possible by the dedicated work of volunteers. 
                  Join our team and be part of making the festival a success while enjoying special perks!
                </p>
                <Button asChild>
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <AnimatedImage
                src="https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg"
                alt="Festival performance"
                width={400}
                height={400}
                variant="fadeInRight"
                delay={0}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <AnimatedImage
                src="https://images.pexels.com/photos/1090408/pexels-photo-1090408.jpeg"
                alt="Festival audience"
                width={400}
                height={400}
                variant="fadeInRight"
                delay={0.2}
                className="rounded-lg shadow-lg object-cover w-full h-full mt-8"
              />
              <AnimatedImage
                src="https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg"
                alt="Workshop session"
                width={400}
                height={400}
                variant="fadeInRight"
                delay={0.3}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <AnimatedImage
                src="https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg"
                alt="Folk dancers"
                width={400}
                height={400}
                variant="fadeInRight"
                delay={0.1}
                className="rounded-lg shadow-lg object-cover w-full h-full -mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-3">Festival Details</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar for our biggest event of the year
            </p>
            <div className="w-20 h-1 bg-primary/70 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Dates</h3>
                      <p>May 5-7, 2023 (Friday-Sunday)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Hours</h3>
                      <p>Friday: 5PM - 10PM<br />Saturday: 10AM - 10PM<br />Sunday: 10AM - 5PM</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Location</h3>
                      <p>Highbanks Metro Park<br />9466 Columbus Pike<br />Lewis Center, OH 43035</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg">Admission</h3>
                      <p>Weekend Pass: $45<br />Day Pass: $20<br />Children under 12: Free</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="bg-card rounded-lg overflow-hidden">
              <div className="relative w-full h-96">
                <Image
                  src="https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg"
                  alt="Festival location"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">Getting to the Festival</h3>
                <p className="mb-4">
                  The Central Ohio Folk Festival takes place at the beautiful Highbanks Metro Park, 
                  located just north of Columbus. The park offers ample parking and scenic surroundings 
                  for our festival activities.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-3">Festival Activities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore everything our folk festival has to offer
            </p>
            <div className="w-20 h-1 bg-primary/70 mx-auto mt-4"></div>
          </div>
          
          <Tabs defaultValue="performances" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="performances">Performances</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
            </TabsList>
            <TabsContent value="performances" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Mic2 className="h-10 w-10 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">Main Stage Performances</h3>
                  </div>
                  <p className="mb-4">
                    Our main stage features acclaimed folk musicians from across the country. 
                    From traditional ballads to contemporary folk-rock, you'll experience the 
                    full spectrum of folk music throughout the weekend.
                  </p>
                  <h4 className="font-bold text-lg mb-2">Featured Artists:</h4>
                  <ul className="list-disc list-inside space-y-1 mb-6">
                    <li>The Heartland Ramblers</li>
                    <li>Sarah Johnson & The Old-Time Players</li>
                    <li>Blue River String Band</li>
                    <li>Mountain Valley Boys</li>
                    <li>The Folk Collective</li>
                    <li>Harper's Ferry</li>
                    <li>And many more local and regional performers!</li>
                  </ul>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Image
                      src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg"
                      alt="Concert performance"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg"
                      alt="Folk band"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/1652433/pexels-photo-1652433.jpeg"
                      alt="Singer-songwriter"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="workshops" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Music className="h-10 w-10 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">Hands-On Workshops</h3>
                  </div>
                  <p className="mb-4">
                    Our workshops offer the chance to learn from master musicians in an intimate setting. 
                    Whether you're a beginner or advanced player, there's something for every skill level.
                  </p>
                  <h4 className="font-bold text-lg mb-2">Workshop Topics:</h4>
                  <ul className="list-disc list-inside space-y-1 mb-6">
                    <li>Fingerstyle Guitar</li>
                    <li>Clawhammer Banjo</li>
                    <li>Fiddle for Beginners</li>
                    <li>Vocal Harmony</li>
                    <li>Songwriting Basics</li>
                    <li>Traditional Dance</li>
                    <li>Appalachian Dulcimer</li>
                    <li>Folk Music History</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    Note: Some workshops may require pre-registration due to limited space.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Image
                      src="https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg"
                      alt="Guitar workshop"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/6647034/pexels-photo-6647034.jpeg"
                      alt="Music lesson"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/4088800/pexels-photo-4088800.jpeg"
                      alt="Group workshop"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activities" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Coffee className="h-10 w-10 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">Family Activities</h3>
                  </div>
                  <p className="mb-4">
                    The festival offers activities for all ages, with special programming for children and families.
                  </p>
                  <h4 className="font-bold text-lg mb-2">Activities Include:</h4>
                  <ul className="list-disc list-inside space-y-1 mb-6">
                    <li>Instrument Petting Zoo</li>
                    <li>Children's Music Stage</li>
                    <li>Storytelling Circle</li>
                    <li>Folk Dance Lessons</li>
                    <li>Craft Activities</li>
                    <li>Sing-along Sessions</li>
                    <li>Nature Walks</li>
                    <li>Community Jam Sessions</li>
                  </ul>
                  <p className="italic mb-6">
                    "The kids' activities at last year's festival were amazing! My daughter loved the instrument petting zoo 
                    and hasn't stopped talking about learning the fiddle." — Festival Attendee
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Image
                      src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg"
                      alt="Children's activities"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/7096058/pexels-photo-7096058.jpeg"
                      alt="Folk dancing"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/5619704/pexels-photo-5619704.jpeg"
                      alt="Storytelling"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vendors" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Utensils className="h-10 w-10 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">Food & Artisan Vendors</h3>
                  </div>
                  <p className="mb-4">
                    Explore our vendor area featuring local artisans, instrument makers, and food vendors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Food Vendors:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Appalachian Kitchen (regional specialties)</li>
                        <li>Folk Fest Grill (burgers, sandwiches)</li>
                        <li>Sweet Harmony Bakery (desserts, pastries)</li>
                        <li>Green Mountain Coffee (coffee, tea, beverages)</li>
                        <li>Vegetarian Village (plant-based options)</li>
                        <li>International Folk Foods (global cuisine)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Artisan Vendors:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Handcrafted instruments</li>
                        <li>Folk art and crafts</li>
                        <li>Handwoven textiles</li>
                        <li>Music books and recordings</li>
                        <li>Local honey and jams</li>
                        <li>Handmade jewelry</li>
                        <li>Traditional toys</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Interested in being a vendor? Applications for the 2023 festival are now open.
                    <Link href="/about#contact" className="text-primary ml-1 underline">Contact us</Link> for more information.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Image
                      src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg"
                      alt="Food vendors"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/1387050/pexels-photo-1387050.jpeg"
                      alt="Craft vendors"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                    <Image
                      src="https://images.pexels.com/photos/2608353/pexels-photo-2608353.jpeg"
                      alt="Instrument makers"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover aspect-video"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}