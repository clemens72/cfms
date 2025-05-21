'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';

export function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src="https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg"
          alt="Musicians playing folk music"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-neutral-900/30 z-[5]"></div>

      {/* Content */}
      <div className="container relative z-20 h-full mx-auto px-4 flex items-center">
        <motion.div
          ref={ref}
          className="max-w-3xl"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Celebrate the Folk Music Tradition
            </h1>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              The Columbus Folk Music Society preserves, promotes, and presents folk music 
              in central Ohio through concerts, festivals, and educational programs.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button size="lg" asChild>
              <Link href="/join-donate">Become a Member</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/events">Upcoming Events</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}