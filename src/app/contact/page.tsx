import { Hero } from '@/components/layout/Hero';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-brown">

        <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-green text-center">
                    Contact Us
                </h1>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-heading font-bold mb-6 text-charcoal">We&apos;d Love to Hear From You</h2>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                    Whether you have questions about our events, want to learn more about membership, or are interested in volunteering, we&apos;re here to help. Please feel free to reach out to us using the contact information below or by filling out the contact form.
                </p>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">Contact Information</h3>
                <ul className="font-body text-gray-700 mb-8 leading-relaxed space-y-2">
                    <li>For <b>Americana/Folk Concert Series bookings: </b><a href="mailto:coffeehousebooking@columbusfolkmusicsociety.org" className="text-green hover:text-brown transition-colors font-bold">coffeehousebooking@columbusfolkmusicsociety.org</a>
                    </li>
                    <li>For <b>Festival bookings: </b><a href="/festival/performers" className="text-green hover:text-brown transition-colors font-bold">2027 Performer/Presenter Apply</a>
                    </li>
                    <li>For <b>Festival info: </b><a href="mailto:infofestival@columbusfolkmusicsociety.org" className="text-green hover:text-brown transition-colors font-bold">infofestival@columbusfolkmusicsociety.org</a>
                    </li>
                    <li>For <b>all other inquiries: </b><a href="mailto:info@columbusfolkmusicsociety.org" className="text-green hover:text-brown transition-colors font-bold">info@columbusfolkmusicsociety.org</a>
                    </li>
                    <li>To contact CFMS via <b>phone</b>, leave a voicemail message at 614-470-3963.</li>
                    <li>To send <strong>postal mail:</strong> Box 20735, Columbus, Ohio 43220.</li>
                </ul>
                <div className="mb-8">
                    <a href="/members/join" className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200">Join as a Member</a>
                    <a href="#" className="inline-block px-4 py-2 mx-4 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200">Volunteer</a>
                    <a href="/members/donate" className="inline-block px-4 py-2 bg-green text-white font-body font-semibold rounded-lg hover:bg-green/90 transition duration-200">Donate</a><br />
                    <p className='mt-8'>
                        <i>Note: membership amounts may be tax deductible.</i><br />
                        <b>Any CFMS board member can give you more information about the CFMS and joining our society.</b><br />
                        <a href="/about/leadership" className="text-green hover:text-brown transition-colors font-bold">CFMS Leadership List</a>
                    </p>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-charcoal mt-10">Contact Form</h3>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                    For any other questions please contact us using the form below:
                </p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal">Message</label>
                        <textarea id="message" name="message" rows={5} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-body" required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  );
}