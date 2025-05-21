import { PageHeader } from '@/components/shared/PageHeader';
import { AnimatedImage } from '@/components/home/AnimatedImage';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="Columbus Folk Music Society and how to Contact Us"
        backgroundImage="https://images.pexels.com/photos/3777883/pexels-photo-3777883.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">About CFMS</h2>
                <p className="text-lg mb-4">
                  The Columbus Folk Music Society (CFMS) is a vibrant 501(c)(3) non-profit organization dedicated to preserving and promoting folk music traditions in central Ohio. Since our founding in 1985, we've grown from small living room gatherings to a thriving community of over 500 members.
                </p>
                <p className="text-lg mb-4">
                  Our mission is to promote the appreciation, understanding, and enjoyment of folk music, song, dance, storytelling, and other folk arts inclusive of all cultures. We support folk artists and cultural activities while fostering an inclusive environment that celebrates diversity.
                </p>
              </div>
              <div className="relative">
                <AnimatedImage
                  src="https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg"
                  alt="CFMS Community Event"
                  width={600}
                  height={400}
                  variant="fadeInRight"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-serif text-3xl font-bold mb-6">Membership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Member Privileges</h3>
                  <ul className="list-disc pl-5 space-y-2 text-lg">
                    <li>Free admission to monthly concerts</li>
                    <li>Discounted festival tickets</li>
                    <li>Access to member-only events</li>
                    <li>Subscription to our newsletter</li>
                    <li>Voting rights at annual meetings</li>
                    <li>Opportunities to perform at events</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Events</h3>
                  <ul className="list-disc pl-5 space-y-2 text-lg">
                    <li>Monthly Americana/Folk Series concerts</li>
                    <li>Summer picnic series with jam sessions</li>
                    <li>Weekly open jam opportunities</li>
                    <li>Annual Central Ohio Folk Festival</li>
                    <li>Fundraising events and benefit concerts</li>
                    <li>Educational workshops and classes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-10 text-center">Our Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">CFMS' Americana/Folk Series</h3>
                <p className="text-lg mb-4">
                  Our monthly concert series features both established and emerging artists from the folk and Americana scene. These intimate performances showcase the best of traditional and contemporary folk music.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Summer Picnics</h3>
                <p className="text-lg mb-4">
                  Join us for our popular summer picnic series, featuring potluck dinners, casual jam sessions, and outdoor performances in beautiful central Ohio parks.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Open Jam Sessions</h3>
                <p className="text-lg mb-4">
                  We host regular jam sessions throughout the week, welcoming musicians of all skill levels. These sessions are perfect for learning new tunes and meeting fellow musicians.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Central Ohio Folk Festival</h3>
                <p className="text-lg mb-4">
                  Our flagship event features three days of music, workshops, and community celebration, bringing together local and national artists for an unforgettable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-10 w-10 text-primary" />
                  <h3 className="font-bold text-xl">Email</h3>
                </div>
                <div className="text-muted-foreground text-sm space-y-2">
                  <p><a href="mailto:info@columbusfolkmusicsociety.org">General Info</a></p>
                  <p><a href="mailto:info@columbusfolkmusicsociety.org">Concert Series</a></p>
                  <p><a href="mailto:info@columbusfolkmusicsociety.org">Festival Booking</a></p>
                  <p><a href="mailto:info@columbusfolkmusicsociety.org">Festival Info</a></p>
                  <p><a href="mailto:info@columbusfolkmusicsociety.org">Festival Food Vendors</a></p>
                </div>
              </div>

                <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                  <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground">(614) 470-3963</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                  <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Columbus Folk Music Society<br />
                    Box 20735<br />
                    Columbus, Ohio 43220
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <h3 className="font-bold text-xl mb-8 text-center">Send Us a Message</h3>
                  <form className="space-y-6 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full rounded-md border-input bg-muted/80 p-2.5"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-md border-input bg-muted/80 p-2.5"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full rounded-md border-input bg-muted/80 p-2.5"
                        placeholder="Message subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border-input bg-muted/80 p-2.5 resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        className="bg-primary text-primary-foreground px-8 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}