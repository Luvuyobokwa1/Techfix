export const APP_CONFIG = {
    currency: {
        default: "USD" as const,
    },
    hero: {
        title: "Expert Tech Repair at Your Doorstep",
        subtitle: "Fast, reliable, and professional repairs for all your devices.",
    },
    services: {
        title: "Browse Services",
        subtitle: "Choose from our wide range of professional repair services",
        notFound: "No services found matching your criteria.",
    },
    technicians: {
        title: "Certified Technicians",
        subtitle: "Connect with verified professionals near you",
        notFound: "No technicians found matching your search.",
    },
    howItWorks: {
        title: "How It Works",
        steps: [
            {
                id: 1,
                title: "Choose Service",
                description: "Browse our services or find a technician that matches your needs",
            },
            {
                id: 2,
                title: "Book Appointment",
                description: "Schedule a time that works for you with instant confirmation",
            },
            {
                id: 3,
                title: "Get It Fixed",
                description: "Professional repair with warranty coverage on all services",
            },
        ],
    },
    footer: {
        brandName: "TechFix",
        description: "Your trusted marketplace for professional electronics and smart device repairs.",
        copyright: "© 2025 TechFix. All rights reserved.",
        sections: {
            services: {
                title: "Services",
                items: ["Phone Repair", "Laptop Repair", "Gaming Consoles", "All Electronics"],
            },
            company: {
                title: "Company",
                items: ["About Us", "Become a Technician", "Contact", "FAQ"],
            },
            legal: {
                title: "Legal",
                items: ["Privacy Policy", "Terms of Service", "Warranty Info"],
            },
        },
    },
};
