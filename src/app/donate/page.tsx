import Image from "next/image";

export default function DonatePage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-green text-center">
                    Make a Donation!
                </h1>
                <p className="text-lg font-body text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    Your support helps us continue to bring folk music to our community through concerts, festivals, educational programs, and more. Every contribution, big or small, makes a difference!
                </p>
                <div className="flex justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-heading font-bold mb-4 text-charcoal text-center">Donate via PayPal</h2>
                        <div className="flex justify-center">
                            <form action="https://www.paypal.com/donate" method="post" target="_top">
                                <input type="hidden" name="hosted_button_id" value="CBAQS93ZNTCNG" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <Image alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

