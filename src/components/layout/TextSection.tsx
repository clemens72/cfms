interface TextSectionProps {
    id: string;

}

export function TextSection({ id }: TextSectionProps) {
    return (
        <section id={id} className="bg-green py-16 text-white shadow-inner">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    What&apos;s New for 2026
                </h2>
                <p className="text-xl font-body mb-8 max-w-3xl">
                    A new location and a new date! A very modest admission fee. Same programming in a larger space with easy ample parking!
                </p>
                <button color="skyblue">
                    CHECK IT OUT
                </button>
            </div>
        </section>
    );
}