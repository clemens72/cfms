import { Hero } from '@/components/layout/Hero';

export default function MembersPage() {
    return (
        <div className="min-h-screen bg-light-brown">
            <Hero
                title="Member Benefits"
                subtitle="Join the Columbus Folk Music Society Today"
                imageURL="/members-hero.jpg"
            />
            {/* MEMBERSHIP BENEFITS SECTION */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-4 text-green">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                            Why Become a Member?
                        </h2>
                    </div>
                    <p className="font-body text-gray-700 max-w-4xl mx-auto">
                        Support folk music in central Ohio and enjoy exclusive benefits as a member of the Columbus Folk Music Society.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Benefit Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Exclusive Event Access</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                Members receive early access and discounts to our annual Central Ohio Folk Festival and other special events throughout the year.
                            </p>
                        </div>
                    </div>
                    {/* Benefit Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Community Engagement</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                Join a vibrant community of folk music enthusiasts, participate in member-only jams, workshops, and social events.
                            </p>
                        </div>
                    </div>
                    {/* Benefit Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-charcoal">Support Folk Music</h3>
                            <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed">
                                Your membership helps sustain and grow folk music traditions in central Ohio through concerts, educational programs, and outreach initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}