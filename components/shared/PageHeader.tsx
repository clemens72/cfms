'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundImageStyle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
  backgroundImageStyle = 'object-cover',
  align = 'center',
  className,
}: PageHeaderProps) {
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
        staggerChildren: 0.2,
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

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <section className={cn('relative py-24 overflow-hidden', className)}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className={backgroundImageStyle}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </>
      )}
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={cn('max-w-3xl mx-auto', alignmentClasses[align])}
        >
          <motion.h1 
            variants={itemVariants} 
            className={cn(
              'font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4',
              backgroundImage ? 'text-white' : 'text-foreground'
            )}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              variants={itemVariants}
              className={cn(
                'text-xl',
                backgroundImage ? 'text-white/90' : 'text-muted-foreground'
              )}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div
            variants={itemVariants}
            className={cn('w-20 h-1 bg-primary mt-6', {
              'mx-auto': align === 'center',
              'ml-auto': align === 'right',
            })}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}