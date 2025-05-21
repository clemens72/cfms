'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export function EventCTA() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  // Sample event data (in a real app, this would come from an API or CMS)
  const upcomingEvent = {
    title: "Saturday Night Concert Series: Old-Time String Band",
    date: "June 24, 2023",
    time: "7:00 PM - 9:30 PM",
    location: "Columbus Performing Arts Center",
    image: "https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg",
    description: "Join us for an evening of traditional old-time string band music featuring the talented musicians of the Appalachian Wildcats. Refreshments will be available.",
    slug: "/events/old-time-string-band"
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-muted/50 z-0"></div>
      <div className="absolute left-0 top-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">Next Featured Event</h2>
          <div className="w-20 h-1 bg-primary/70 mx-auto"></div>
        </div>
        
        <motion.div
          ref={ref}
          className="bg-card rounded-xl overflow-hidden shadow-xl"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <motion.div 
              className="relative h-64 lg:h-auto lg:col-span-2"
              variants={imageVariants}
            >
              <Image
                src={upcomingEvent.image}
                alt={upcomingEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply"></div>
            </motion.div>
            
            <div className="lg:col-span-3 p-6 md:p-8 lg:p-10">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                    Featured Event
                  </span>
                </div>
              </motion.div>
              
              <motion.h3 
                className="font-serif text-2xl md:text-3xl font-bold mb-4"
                variants={itemVariants}
              >
                {upcomingEvent.title}
              </motion.h3>
              
              <motion.div
                className="space-y-3 mb-6"
                variants={itemVariants}
              >
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{upcomingEvent.time}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{upcomingEvent.location}</span>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground mb-8"
                variants={itemVariants}
              >
                {upcomingEvent.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Button size="lg" asChild>
                  <Link href={upcomingEvent.slug}>Get Tickets</Link>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <Link href="/events">
                    View All Events
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}