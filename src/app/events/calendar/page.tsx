export default function CalendarPage() {
    return (
        <div className="min-h-screen bg-bg-brown">

            <section className="container mx-auto px-4 py-16">
                <div id="events-calendar" className="text-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-green mb-4">
                            CFMS EVENTS CALENDAR
                        </h2>
                    </div>
                </div>

                {/* Google Calendar Embed */}
                <div className="w-full max-w-5xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
                            className="w-full"
                            style={{ border: 0 }}
                            width="800"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
}