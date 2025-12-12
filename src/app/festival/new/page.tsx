import Image from 'next/image';

export default function WhatsNewPage() {
    return (
        <div className="min-h-screen bg-light-brown">

            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8 bg-white p-4 rounded-lg shadow-lg">
                    {/* Left Column - Tall Image */}
                    <div className="relative h-[600px] md:h-auto md:row-span-2">
                        <Image
                            src="/festival/COFF2026-Collage.jpg"
                            alt="Festival"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title spanning columns 2 and 3 */}
                    <div className="md:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-center text-green">
                            EXCITING CHANGES.
                        </h1>
                    </div>

                    {/* Column 2 - First half of content */}
                    <div className="space-y-4 pb-8">
                        <p className="text-l font-body text-gray-700 leading-relaxed">
                            <b>The new location is Bank Run Metro Park in Lockbourne, Ohio,</b> a beautiful, outdoor green space dedicated uniquely to large events such as ours. The site was the previous home of the sizable annual Musicians Against Childhood Cancer (MACC) Music Festival.
                        </p>
                        <p className="text-l font-body text-gray-700 leading-relaxed">
                            <b>It&apos;s an easy drive!</b> If you live on the north side of town, it&apos;s ONLY an additional ten minute drive and it&apos;s easily accessible via 315 or I-71.
                        </p>
                        <p className="text-l font-body text-gray-700 leading-relaxed">
                            <b>The new festival date is June 6 & 7, 2026,</b> with the festival now occurring the first full weekend in June instead of May.
                        </p>
                        <p className="text-l font-body text-gray-700 leading-relaxed">
                            <b>A very modest admission fee:</b> to accommodate our increased costs, we find ourselves needing to charge a very modest admission fee: $10 pre-event and $15 onsite, with under 18 free. The general admission fee covers BOTH days of the event. We provide a free entry window between 10:30am-11:30am both days for those who find it helpful.
                        </p>
                    </div>

                    {/* Column 3 - Second half of content */}
                    <div className="space-y-4 pb-8">
                        <p className="text-l font-body text-gray-700 leading-relaxed">
                            <b>Other changes we&apos;re sure you&apos;ll love:</b>
                        </p>
                        <ul className="text-l font-body text-gray-700 leading-relaxed list-disc list-inside mt-2">
                            <li>Easy, more ample parking;</li>
                            <li>A beautiful large outdoor covered stage;</li>
                            <li>Larger Showcase and Bailey Acoustic Stage tents;</li>
                            <li>Festival Store inside a beautifully renovated, light filled building space;</li>
                            <li>An impressive vaulted ceiling pavilion with picnic table seating capacity for 300 folks;</li>
                            <li>More food trucks;</li>
                            <li>AND you can now enjoy a beer while listening to music throughout the festival grounds. As in the past, no alcohol is permitted coming into or leaving the grounds. We remain committed to being a safe family friendly event!</li>
                        </ul>
                        <p className="text-l font-body text-gray-700 leading-relaxed">
                            <br />
                            <b>Look for more information on our website in the months leading up to the festival!</b>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}