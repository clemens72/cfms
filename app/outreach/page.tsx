import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedImage } from '@/components/home/AnimatedImage';
import { CalendarIcon, Clock, MapPin, Music, User, Mic2, Coffee, Utensils, School, Heart } from 'lucide-react';

export default function OutreachPage() {
  return (
    <main>
      <PageHeader
        title="Outreach Programs"
        subtitle="Supporting and growing the folk music community"
        backgroundImage="https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              The Columbus Folk Music Society is a not-for-profit 501c(3) organization that exists for cultural, 
              educational and charitable purposes. In addition to being a cultural cornerstone in the local community 
              and facilitating performances of the folk arts for all to enjoy, part of our mission includes the 
              broadening of folk art knowledge, understanding and appreciation.
            </p>
            <p className="text-lg">
              To this end, we offer educational experiences in different forms, including workshops we run every year 
              at our Central Ohio Folk Festival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <School className="h-10 w-10 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Bob Kirby Scholarship Program</h3>
                </div>
                <p className="mb-6">
                  The Bob Kirby Scholarship Program provides annual awards to young musicians, supporting the next 
                  generation of folk music artists and enthusiasts. These scholarships help talented young musicians 
                  pursue their passion for folk music through education and performance opportunities.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/about#contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Music className="h-10 w-10 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Weekly Community Jam</h3>
                </div>
                <p className="mb-6">
                  Our weekly community jam sessions bring together musicians of all skill levels in a welcoming 
                  environment. These informal gatherings are perfect for learning new tunes, meeting fellow musicians, 
                  and sharing the joy of folk music.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/links-and-jams">Join a Jam</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <User className="h-10 w-10 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Assisted Living & Nursing Home Programs</h3>
                </div>
                <p className="mb-6">
                  Many CFMS members regularly participate in jam sessions at assisted living and nursing home facilities. 
                  These programs encourage resident participation and bring the joy of folk music to our community's 
                  senior members.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/about#contact">Get Involved</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Heart className="h-10 w-10 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Youth Programs</h3>
                </div>
                <p className="mb-6">
                  Our informal jam sessions welcome children and encourage their participation. These family-friendly 
                  events help introduce young people to folk music traditions and create lasting memories through 
                  musical experiences.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/about#contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in our mission to preserve and promote folk music traditions in central Ohio
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/join-donate">Become a Member</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}