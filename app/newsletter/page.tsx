import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';import { Mail, FileText, Calendar } from 'lucide-react';

export default function NewsletterPage() {
  return (
    <main>
      <PageHeader
        title="Newsletter"
        subtitle="Stay connected with the Columbus Folk Music Society"
        //backgroundImage="/art1.jpg"
        className="bg-muted/80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">The Different Strummer</h2>
            <p className="text-lg mb-6">
              The CFMS publishes a monthly newsletter filled with content about our upcoming events 
              and other articles of current interest. Stay informed about the latest happenings in 
              the Columbus folk music community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:newsletter@columbusfolkmusicsociety.org">
                  Subscribe to Newsletter
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Mail className="h-10 w-10 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Subscribe</h3>
                </div>
                <p className="mb-6">
                  To receive our monthly newsletter in your inbox, simply send a blank email to our 
                  subscription address. We'll add you to our mailing list and you'll start receiving 
                  updates about upcoming events and community news.
                </p>
                <Button variant="outline" asChild>
                  <Link href="mailto:newsletter@columbusfolkmusicsociety.org">
                    Subscribe Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="h-10 w-10 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Submit Content</h3>
                </div>
                <p className="mb-6">
                  Have an article, event, or story you'd like to share with the community? We welcome 
                  submissions from our members and the broader folk music community.
                </p>
                <Button variant="outline" asChild>
                  <Link href="mailto:newsletter@columbusfolkmusicsociety.org">
                    Submit Content
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-3">Newsletter Archive</h2>
              <p className="text-muted-foreground">
                Browse through our past issues
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Calendar className="h-10 w-10 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">2024</h3>
                  </div>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-primary hover:underline">January 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">February 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">March 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">April 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">May 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">July/August 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">September 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">October 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">November 2024</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">December 2024</Link></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Calendar className="h-10 w-10 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">2025</h3>
                  </div>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-primary hover:underline">February 2025</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">March 2025</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">April 2025</Link></li>
                    <li><Link href="#" className="text-primary hover:underline">May/June 2025</Link></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}