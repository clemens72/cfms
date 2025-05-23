import { PageHeader } from '@/components/shared/PageHeader';
import { DonateForm } from '@/components/forms/DonateForm';

export default function DonatePage() {
  return (
    <main>
      <PageHeader
        title="Donate to Support Folk Music"
        subtitle="Your contribution helps preserve folk music traditions"
        //backgroundImage="/art1.jpg"
        className="bg-muted/80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Make a Donation</h2>
            <p className="text-lg text-muted-foreground">
              Your tax-deductible donation supports our educational programs, concerts, and annual folk festival.
              All fields marked with an asterisk (*) are required.
            </p>
          </div>
          
          <DonateForm />
          
          <div className="max-w-2xl mx-auto mt-12 p-6 border rounded-lg bg-muted/30">
            <h3 className="font-bold text-xl mb-4 text-center">Other Ways to Give</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">By Check</h4>
                <p>
                  Please make checks payable to "Columbus Folk Music Society" and mail to:
                  <br />
                  Columbus Folk Music Society
                  <br />
                  P.O. Box 20153
                  <br />
                  Columbus, OH 43220
                </p>
              </div>
              <div>
                <h4 className="font-bold">Employer Matching Gifts</h4>
                <p>
                  Many employers match charitable donations made by their employees.
                  Check with your HR department to see if your company offers this benefit.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Planned Giving</h4>
                <p>
                  Consider including the Columbus Folk Music Society in your estate planning.
                  Contact us at donations@columbusfolkmusicsociety.org for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}