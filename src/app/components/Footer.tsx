import { APP_CONFIG } from "../../config/config";

export function Footer() {
    const { brandName, description, copyright, sections } = APP_CONFIG.footer;

    return (
        <footer className="bg-gray-900 text-white mt-20 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">TF</span>
                            </div>
                            <span className="font-bold text-xl">{brandName}</span>
                        </div>
                        <p className="text-gray-400">{description}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">{sections.services.title}</h4>
                        <ul className="space-y-2 text-gray-400">
                            {sections.services.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">{sections.company.title}</h4>
                        <ul className="space-y-2 text-gray-400">
                            {sections.company.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">{sections.legal.title}</h4>
                        <ul className="space-y-2 text-gray-400">
                            {sections.legal.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>{copyright}</p>
                </div>
            </div>
        </footer>
    );
}
