'use client';

import { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { CalendarIcon, Clock, MapPin, Filter } from 'lucide-react';
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
    title: "Concert Series: Appalachian Swing",
    date: "Saturday, June 7, 2025",
    time: "Food 2:00 PM | Open Mic 2:30 PM | Show 3:00 PM",
    location: "The Reeb Center",
    address: "280 Reeb Ave, Columbus, OH",
    category: "concert",
    description: "Bluegrass / Newark, OH",
    image: "/250607appalachianswing.jpg",
    featured: true,
    tickets: false,
    ticketPrice: "Free"
  },
  {
    id: 2,
    title: "Concert Series: The Mighty Troubadours",
    date: "Saturday, July 12, 2025",
    time: "Food 2:00 PM | Open Mic 2:30 PM | Show 3:00 PM",
    location: "The Reeb Center",
    address: "280 Reeb Ave, Columbus, OH",
    category: "concert",
    description: "Bluegrass / Columbus, OH",
    image: "/250712themightytroubadours.jpg",
    featured: false,
    tickets: false,
    ticketPrice: "Free"
  },
  {
    id: 3,
    title: "Concert Series: Walhalla Ramblers",
    date: "Saturday, August 2, 2025",
    time: "Food 2:00 PM | Open Mic 2:30 PM | Show 3:00 PM",
    location: "The Reeb Center",
    address: "280 Reeb Ave, Columbus, OH",
    category: "concert",
    description: "Bluegrass / Columbus, OH",
    image: "/250802walhallaramblers.jpg",
    featured: false,
    tickets: false,
    ticketPrice: "Free"
  }
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
        //backgroundImage="/art1.jpg"
        className="bg-muted/80"
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