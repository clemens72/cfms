'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'fadeIn' | 'slideUp' | 'zoomIn' | 'fadeInLeft' | 'fadeInRight';
  delay?: number;
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style,
  variant = 'fadeIn',
  delay = 0,
}: AnimatedImageProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
          delay,
        },
      }
    },
    slideUp: {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
          delay,
        },
      }
    },
    zoomIn: {
      hidden: { scale: 0.9, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
          delay,
        },
      }
    },
    fadeInLeft: {
      hidden: { x: -30, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
          delay,
        },
      }
    },
    fadeInRight: {
      hidden: { x: 30, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
          delay,
        },
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      className="overflow-hidden"
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
      />
    </motion.div>
  );
}