'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function FeaturedContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const featuredItems: FeaturedItem[] = [
    {
      title: "Annual Folk Festival",
      description: "Our signature event featuring top folk performers, workshops, and community activities.",
      image: "https://images.pexels.com/photos/2417726/pexels-photo-2417726.jpeg",
      link: "/festival"
    },
    {
      title: "Educational Outreach",
      description: "Programs bringing folk music to schools and community centers across Columbus.",
      image: "https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg",
      link: "/outreach"
    },
    {
      title: "Monthly Newsletter",
      description: "Stay informed with our award-winning newsletter covering local folk music and events.",
      image: "https://images.pexels.com/photos/6230955/pexels-photo-6230955.jpeg",
      link: "/newsletter"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how the Columbus Folk Music Society preserves and promotes folk music traditions.
          </p>
          <div className="w-20 h-1 bg-primary/70 mx-auto mt-4"></div>
        </div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group transition-all hover:shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-white font-serif text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary group" asChild>
                    <Link href={item.link}>
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}