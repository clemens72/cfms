import { Hero } from '@/components/home/Hero';
import { EventCTA } from '@/components/home/EventCTA';
import { FeaturedContent } from '@/components/home/FeaturedContent';

export default function Home() {
  return (
    <main>
      <Hero />
      <EventCTA />
      <FeaturedContent />
    </main>
  );
}