'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar, CalendarIcon, Clock, MapPin, Filter } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { AnimatedImage } from '@/components/home/AnimatedImage';

// Mock event data
const events = [
  {
    id: 1,
    title: "Saturday Night Concert Series: Old-Time String Band",
    date: "2023-06-24",
    time: "7:00 PM - 9:30 PM",
    location: "Columbus Performing Arts Center",
    address: "549 Franklin Ave, Columbus, OH 43215",
    category: "concert",
    description: "Join us for an evening of traditional old-time string band music featuring the talented musicians of the Appalachian Wildcats. Refreshments will be available.",
    image: "https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg",
    featured: true,
    tickets: true,
    ticketPrice: "$15-25",
  },
  {
    id: 2,
    title: "Folk Jam Session: Bluegrass Edition",
    date: "2023-07-02",
    time: "2:00 PM - 5:00 PM",
    location: "Whetstone Park",
    address: "3923 N High St, Columbus, OH 43214",
    category: "jam",
    description: "Bring your instrument and join our monthly bluegrass jam session. All skill levels welcome!",
    image: "https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg",
    featured: false,
    tickets: false,
  },
  {
    id: 3,
    title: "Folk Music Workshop: Fingerstyle Guitar",
    date: "2023-07-15",
    time: "1:00 PM - 3:00 PM",
    location: "Columbus Music Academy",
    address: "1234 Main St, Columbus, OH 43215",
    category: "workshop",
    description: "Learn the basics of fingerstyle guitar techniques with instructor and master guitarist Michael Johnson.",
    image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg",
    featured: false,
    tickets: true,
    ticketPrice: "$25",
  },
  {
    id: 4,
    title: "Celtic Folk Night",
    date: "2023-07-28",
    time: "7:30 PM - 10:00 PM",
    location: "The Celtic Corner",
    address: "567 Irish Ave, Columbus, OH 43228",
    category: "concert",
    description: "Experience the rich traditions of Celtic folk music with performances by The Emerald Isle Trio and special guests.",
    image: "https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg",
    featured: true,
    tickets: true,
    ticketPrice: "$20",
  },
  {
    id: 5,
    title: "Kids Folk Music Day",
    date: "2023-08-12",
    time: "10:00 AM - 2:00 PM",
    location: "Community Park",
    address: "789 Community Rd, Columbus, OH 43229",
    category: "education",
    description: "A day of folk music activities for children ages 5-12. Instrument petting zoo, sing-alongs, and folk dance lessons.",
    image: "https://images.pexels.com/photos/8412400/pexels-photo-8412400.jpeg",
    featured: false,
    tickets: false,
  },
  {
    id: 6,
    title: "Singer-Songwriter Showcase",
    date: "2023-08-26",
    time: "8:00 PM - 11:00 PM",
    location: "The Acoustic Cafe",
    address: "321 Guitar St, Columbus, OH 43201",
    category: "concert",
    description: "Local singer-songwriters share their original folk compositions in this intimate showcase event.",
    image: "https://images.pexels.com/photos/8412393/pexels-photo-8412393.jpeg",
    featured: false,
    tickets: true,
    ticketPrice: "$10",
  },
];

export default function EventsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  
  const filteredEvents = events.filter(event => {
    if (categoryFilter === "all") return true;
    return event.category === categoryFilter;
  });

  return (
    <main>
      <PageHeader
        title="Upcoming Events"
        subtitle="Concerts, jam sessions, workshops, and more"
        backgroundImage="https://images.pexels.com/photos/3328348/pexels-photo-3328348.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="concert">Concerts</SelectItem>
                  <SelectItem value="jam">Jam Sessions</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="education">Educational</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <Card key={event.id} className={`overflow-hidden ${event.featured ? 'border-primary' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 relative aspect-video lg:aspect-square">
                      <AnimatedImage
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={400}
                        variant="zoomIn"
                        delay={index * 0.1}
                        className="object-cover w-full h-full"
                      />
                      {event.featured && (
                        <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>
                      )}
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <CardHeader className="p-0 pb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="capitalize">
                            {event.category}
                          </Badge>
                          {event.tickets && (
                            <Badge variant="secondary">
                              Tickets: {event.ticketPrice || "Free"}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-2xl font-serif">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="flex flex-col space-y-2 mt-2">
                          <div className="flex items-center text-muted-foreground">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            <span>{format(new Date(event.date), 'EEEE, MMMM d, yyyy')}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location} - {event.address}</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 py-4">
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                      <CardFooter className="p-0 pt-4 flex flex-wrap gap-4">
                        {event.tickets ? (
                          <>
                            <Button asChild>
                              <Link href={`/events/${event.id}`}>Get Tickets</Link>
                            </Button>
                            <Button variant="outline" asChild>
                              <Link href={`/events/${event.id}`}>More Info</Link>
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button asChild>
                              <Link href={`/events/${event.id}`}>Event Details</Link>
                            </Button>
                            <Button variant="outline">Add to Calendar</Button>
                          </>
                        )}
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-3xl mb-4">😢</div>
                <h3 className="text-xl font-bold mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  No events matching your filter criteria were found. Try changing your filters or check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Want to Perform?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented folk musicians to perform at our events.
              If you're interested in playing at one of our concerts or events, please get in touch.
            </p>
            <Button asChild>
              <Link href="/about#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}