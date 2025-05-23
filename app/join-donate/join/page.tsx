import { PageHeader } from '@/components/shared/PageHeader';
import { JoinForm } from '@/components/forms/JoinForm';

export default function JoinPage() {
  return (
    <main>
      <PageHeader
        title="Become a Member"
        subtitle="Join our community of folk music enthusiasts"
        //backgroundImage="/art1.jpg"
        className="bg-muted/80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Membership Application</h2>
            <p className="text-lg text-muted-foreground">
              Please fill out the form below to become a member of the Columbus Folk Music Society.
              All fields marked with an asterisk (*) are required.
            </p>
          </div>
          
          <JoinForm />
        </div>
      </section>
    </main>
  );
}