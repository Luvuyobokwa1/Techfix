import { APP_CONFIG } from "../../config/config";

export function HowItWorks() {
    const { title, steps } = APP_CONFIG.howItWorks;

    return (
        <section id="how-it-works" className="mt-20 pt-12 border-t">
            <h2 className="text-3xl text-center mb-12">{title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-blue-600">{step.id}</span>
                        </div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
