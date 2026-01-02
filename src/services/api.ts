import { Service } from "../app/components/ServiceCard";
import { Technician } from "../app/components/TechnicianCard";

export interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    error?: string;
    timestamp: string;
}

// Mock Data
const services: Service[] = [
    {
        id: "1",
        name: "Phone Screen Replacement",
        description: "Professional screen repair for all phone models. Quick turnaround with genuine parts.",
        price: 79,
        duration: "30-45 min",
        category: "smartphone",
        popular: true,
        image: "https://images.unsplash.com/photo-1731391747600-4d0f478b2184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9rZW4lMjBwaG9uZSUyMHNjcmVlbnxlbnwxfHx8fDE3NjcwOTA1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "2",
        name: "Laptop Battery Replacement",
        description: "Replace worn-out laptop batteries. Restore full battery life and performance.",
        price: 89,
        duration: "45-60 min",
        category: "laptop",
        popular: true,
        image: "https://images.unsplash.com/photo-1658240527554-9cf987b4de49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjByZXBhaXJ8ZW58MXx8fHwxNzY3MDkxMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "3",
        name: "Tablet Screen Repair",
        description: "Expert tablet screen replacement for all brands. iPad, Galaxy Tab, and more.",
        price: 119,
        duration: "1-2 hours",
        category: "tablet",
        image: "https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzY2OTk2ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "4",
        name: "Smartwatch Battery Service",
        description: "Battery replacement for Apple Watch, Galaxy Watch, and other smartwatches.",
        price: 69,
        duration: "30-40 min",
        category: "smartwatch",
        image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwcmVwYWlyfGVufDF8fHx8MTc2NzA5MTI0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "5",
        name: "Gaming Console Repair",
        description: "Fix PlayStation, Xbox, Switch issues. HDMI ports, disc drives, and more.",
        price: 99,
        duration: "1-2 hours",
        category: "gaming",
        popular: true,
        image: "https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2NzAzMDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "6",
        name: "Headphone Repair",
        description: "Fix broken headphones, earbuds, and audio devices. Cable, jack, and driver repairs.",
        price: 45,
        duration: "20-30 min",
        category: "audio",
        image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MXx8fHwxNzY3MDQyNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "7",
        name: "Monitor/TV Screen Repair",
        description: "Repair cracked screens, dead pixels, and display issues for monitors and TVs.",
        price: 149,
        duration: "2-3 hours",
        category: "display",
        image: "https://images.unsplash.com/photo-1761954090578-f440c37ac4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZGlzcGxheXxlbnwxfHx8fDE3NjcwOTEyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "8",
        name: "Laptop Keyboard Replacement",
        description: "Replace damaged or malfunctioning laptop keyboards. All brands supported.",
        price: 79,
        duration: "45-60 min",
        category: "laptop",
        image: "https://images.unsplash.com/photo-1658240527554-9cf987b4de49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjByZXBhaXJ8ZW58MXx8fHwxNzY3MDkxMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "9",
        name: "Phone Battery Replacement",
        description: "Replace your worn-out phone battery. Restore your device's battery life.",
        price: 49,
        duration: "20-30 min",
        category: "smartphone",
        popular: true,
        image: "https://images.unsplash.com/photo-1759294643364-2173070a3b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGJhdHRlcnklMjByZXBsYWNlbWVudHxlbnwxfHx8fDE3NjcwNDMxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "10",
        name: "Water Damage Recovery",
        description: "Expert water damage recovery for all devices. Comprehensive diagnostic included.",
        price: 129,
        duration: "2-4 hours",
        category: "water",
        image: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpcnxlbnwxfHx8fDE3NjcwNTE3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "11",
        name: "Laptop Hard Drive Upgrade",
        description: "Upgrade to SSD or replace faulty hard drives. Faster performance guaranteed.",
        price: 99,
        duration: "1-2 hours",
        category: "laptop",
        image: "https://images.unsplash.com/photo-1658240527554-9cf987b4de49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjByZXBhaXJ8ZW58MXx8fHwxNzY3MDkxMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "12",
        name: "Phone Camera Repair",
        description: "Repair or replace faulty phone cameras. Get your photos back to perfect quality.",
        price: 89,
        duration: "45-60 min",
        category: "smartphone",
        image: "https://images.unsplash.com/photo-1746005718004-1f992c399428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcmVwYWlyJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NjcwMDIzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "13",
        name: "Gaming Controller Repair",
        description: "Fix drift, broken buttons, and connectivity issues on all gaming controllers.",
        price: 39,
        duration: "30-45 min",
        category: "gaming",
        image: "https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2NzAzMDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "14",
        name: "Tablet Battery Replacement",
        description: "Replace tablet batteries for extended usage time. All brands supported.",
        price: 79,
        duration: "1-1.5 hours",
        category: "tablet",
        image: "https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzY2OTk2ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "15",
        name: "Bluetooth Speaker Repair",
        description: "Fix charging, audio, and connectivity issues in Bluetooth speakers.",
        price: 55,
        duration: "30-45 min",
        category: "audio",
        image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MXx8fHwxNzY3MDQyNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "16",
        name: "Laptop Screen Replacement",
        description: "Professional laptop screen replacement. All sizes and brands supported.",
        price: 159,
        duration: "1-2 hours",
        category: "laptop",
        popular: true,
        image: "https://images.unsplash.com/photo-1658240527554-9cf987b4de49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjByZXBhaXJ8ZW58MXx8fHwxNzY3MDkxMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

const technicians: Technician[] = [
    {
        id: "1",
        name: "Michael Chen",
        specialties: ["iPhone", "MacBook", "iPad"],
        rating: 4.9,
        reviews: 247,
        location: "Downtown, 2.3 mi",
        experience: "8+ years",
        verified: true,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
        id: "2",
        name: "Sarah Williams",
        specialties: ["Gaming Consoles", "Laptops", "Tablets"],
        rating: 4.8,
        reviews: 189,
        location: "Midtown, 1.8 mi",
        experience: "6+ years",
        verified: true,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
        id: "3",
        name: "James Rodriguez",
        specialties: ["Smartphones", "Smartwatches", "Audio"],
        rating: 4.9,
        reviews: 312,
        location: "East Side, 3.1 mi",
        experience: "10+ years",
        verified: true,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
        id: "4",
        name: "Emily Thompson",
        specialties: ["All Devices", "Water Damage", "Battery"],
        rating: 4.7,
        reviews: 156,
        location: "West End, 4.2 mi",
        experience: "5+ years",
        verified: true,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
    {
        id: "5",
        name: "David Kim",
        specialties: ["Monitors/TVs", "Laptops", "PC Repair"],
        rating: 5.0,
        reviews: 98,
        location: "North District, 2.7 mi",
        experience: "7+ years",
        verified: true,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
        id: "6",
        name: "Lisa Anderson",
        specialties: ["Samsung", "Android", "Tablets"],
        rating: 4.8,
        reviews: 203,
        location: "South Bay, 3.5 mi",
        experience: "9+ years",
        verified: true,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    },
];

class MockApiService {
    private createResponse<T>(data: T | null, success: boolean = true, error?: string): ApiResponse<T> {
        return {
            success,
            data,
            error,
            timestamp: new Date().toISOString(),
        };
    }

    // Simulate network delay
    private delay(ms: number = 500): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getServices(): Promise<ApiResponse<Service[]>> {
        await this.delay();
        return this.createResponse(services);
    }

    async getTechnicians(): Promise<ApiResponse<Technician[]>> {
        await this.delay();
        return this.createResponse(technicians);
    }

    async bookService(serviceName: string): Promise<ApiResponse<null>> {
        await this.delay(800);
        // Mimic API logic (e.g., validate availability)
        if (!serviceName) {
            return this.createResponse(null, false, "Invalid service name");
        }
        return this.createResponse(null);
    }
}

export const apiService = new MockApiService();
