import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { ServiceCard, Service } from "./components/ServiceCard";
import { TechnicianCard, Technician } from "./components/TechnicianCard";
import { BookingDialog } from "./components/BookingDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
import { CurrencyCode } from "./components/CurrencySelector";

// Mock data for services
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

// Mock data for technicians
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

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("USD");

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredTechnicians = technicians.filter((technician) => {
    if (searchQuery === "") return true;
    return (
      technician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      technician.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const handleBookService = (service: Service) => {
    setSelectedService(service);
    setBookingDialogOpen(true);
  };

  const handleConfirmBooking = () => {
    setBookingDialogOpen(false);
    toast.success("Booking confirmed!", {
      description: `Your ${selectedService?.name} appointment has been scheduled.`,
    });
  };

  const handleContactTechnician = (technician: Technician) => {
    toast.success(`Contact request sent to ${technician.name}`, {
      description: "They will reach out to you shortly via your preferred method.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearchChange={setSearchQuery}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
      />
      <Hero />

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="services" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="technicians">Technicians</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-8">
            <div>
              <h2 className="text-3xl mb-2">Browse Services</h2>
              <p className="text-gray-600 mb-6">
                Choose from our wide range of professional repair services
              </p>
              <Categories
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onBook={handleBookService}
                  currency={selectedCurrency}
                />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No services found matching your criteria.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="technicians" className="space-y-8">
            <div>
              <h2 className="text-3xl mb-2">Certified Technicians</h2>
              <p className="text-gray-600">
                Connect with verified professionals near you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTechnicians.map((technician) => (
                <TechnicianCard
                  key={technician.id}
                  technician={technician}
                  onContact={handleContactTechnician}
                />
              ))}
            </div>

            {filteredTechnicians.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No technicians found matching your search.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* How it Works Section */}
        <section id="how-it-works" className="mt-20 pt-12 border-t">
          <h2 className="text-3xl text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Service</h3>
              <p className="text-gray-600">
                Browse our services or find a technician that matches your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600">
                Schedule a time that works for you with instant confirmation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get It Fixed</h3>
              <p className="text-gray-600">
                Professional repair with warranty coverage on all services
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">TF</span>
                </div>
                <span className="font-bold text-xl">TechFix</span>
              </div>
              <p className="text-gray-400">
                Your trusted marketplace for professional electronics and smart device repairs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone Repair</li>
                <li>Laptop Repair</li>
                <li>Gaming Consoles</li>
                <li>All Electronics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Become a Technician</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Warranty Info</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechFix. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookingDialog
        service={selectedService}
        open={bookingDialogOpen}
        onOpenChange={setBookingDialogOpen}
        onConfirm={handleConfirmBooking}
        currency={selectedCurrency}
      />
      <Toaster />
    </div>
  );
}