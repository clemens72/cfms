import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Music, Users, Calendar, PartyPopper, School, BookOpen } from 'lucide-react';

export default function LinksPage() {
  return (
    <main>
      <PageHeader
        title="Links & More"
        subtitle="Connect with the folk music community"
        backgroundImage="https://images.pexels.com/photos/7095517/pexels-photo-7095517.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-3">Folk Music Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of folk music resources, organizations, and community events
            </p>
            <div className="w-20 h-1 bg-primary/70 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Music className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold">Music and Arts</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">Columbus Symphony Orchestra</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">ProMusica Chamber Orchestra</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Columbus Arts Festival</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold">Folk Organizations</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">Folk Alliance International</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">National Folk Festival</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Ohio Arts Council</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Music className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold">Bands and Performers</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">Local Folk Bands</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Solo Artists</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Ensembles</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold">Event Calendars</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">Columbus Music Events</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Ohio Folk Calendar</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">National Folk Events</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <PartyPopper className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold">Dance</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">Traditional Dance Groups</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Dance Workshops</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Contra Dance Events</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <School className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold">Festivals, Camps & Schools</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">Summer Music Camps</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Folk Festivals</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Music Schools</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold">Instructors</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">Private Lessons</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Group Classes</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">Workshop Leaders</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow us on social media for the latest updates on folk music events and community happenings
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="https://facebook.com" target="_blank">Facebook</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://instagram.com/cfmscolumbus" target="_blank">Instagram</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 