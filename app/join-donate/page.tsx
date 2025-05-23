import { PageHeader } from '@/components/shared/PageHeader';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function JoinDonatePage() {
  return (
    <main>
      <PageHeader
        title="Support Folk Music"
        subtitle="Join our community or donate to support our mission"
        //backgroundImage="/art1.jpg"
        className="bg-muted/80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Why Support Us?</h2>
            <p className="text-lg text-muted-foreground">
              Your support helps us preserve folk music traditions, educate the next generation, 
              and bring quality folk music experiences to central Ohio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/50 shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground text-center py-8">
                <CardTitle className="text-2xl font-serif">Become a Member</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Join our community
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 pb-4">
                <ul className="space-y-4">
                  <BenefitItem text="Discounted tickets to all CFMS events" />
                  <BenefitItem text="Monthly newsletter subscription" />
                  <BenefitItem text="Voting rights at annual meetings" />
                  <BenefitItem text="Invitations to member-only workshops" />
                  <BenefitItem text="Connect with fellow folk music enthusiasts" />
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Button size="lg" asChild>
                  <Link href="/join-donate/join">Become a Member</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-secondary text-secondary-foreground text-center py-8">
                <CardTitle className="text-2xl font-serif">Make a Donation</CardTitle>
                <CardDescription className="text-secondary-foreground/80 text-lg">
                  Support our mission
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 pb-4">
                <ul className="space-y-4">
                  <BenefitItem text="Fund educational outreach programs" />
                  <BenefitItem text="Support the annual folk festival" />
                  <BenefitItem text="Help maintain our archive of folk music" />
                  <BenefitItem text="Sponsor concerts and special events" />
                  <BenefitItem text="All donations are tax-deductible" />
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/join-donate/donate">Donate Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">Membership Levels</h2>
            <p className="text-center text-muted-foreground mb-12">
              Choose the membership level that's right for you
            </p>
            
            <div className="space-y-6">
              <MembershipTier
                name="Individual"
                price={20}
                description="Basic membership for a single person"
              />
              <MembershipTier
                name="Household"
                price={25}
                description="Includes benefits for all members of a household"
              />
              <MembershipTier
                name="Band"
                price={25}
                description="Membership for performing groups and bands"
              />
              <MembershipTier
                name="Good Friend"
                price={50}
                description="Enhanced membership with additional benefits"
                highlighted
              />
              <MembershipTier
                name="Sponsor"
                price={100}
                description="Support our mission with additional recognition"
              />
              <MembershipTier
                name="Silver"
                price={250}
                description="Premium membership with enhanced benefits"
              />
              <MembershipTier
                name="Patron"
                price={200}
                description="Sustaining membership with special recognition"
              />
              <MembershipTier
                name="Gold (Life Member)"
                price={500}
                description="Lifetime membership with all benefits"
                highlighted
              />
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/join-donate/join">Select a Membership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you have any questions about membership or donations, we're here to help.
            </p>
            <Button variant="outline" asChild>
              <Link href="/about#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

interface BenefitItemProps {
  text: string;
}

function BenefitItem({ text }: BenefitItemProps) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

interface MembershipTierProps {
  name: string;
  price: number;
  description: string;
  highlighted?: boolean;
}

function MembershipTier({ name, price, description, highlighted = false }: MembershipTierProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg border ${highlighted ? 'bg-primary/5 border-primary/50' : 'bg-card'}`}>
      <div>
        <h3 className={`font-bold text-xl ${highlighted ? 'text-primary' : ''}`}>{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 md:mt-0 flex flex-col md:items-end">
        <div className="text-2xl font-bold">${price}/year</div>
        <Button size="sm" variant={highlighted ? "default" : "outline"} className="mt-2" asChild>
          <Link href="/join-donate/join">Select</Link>
        </Button>
      </div>
    </div>
  );
}