import { useState, useEffect } from "react";
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
import { Footer } from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { APP_CONFIG } from "../config/config";
import { apiService } from "../services/api";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>(APP_CONFIG.currency.default);
  const [services, setServices] = useState<Service[]>([]);
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, techniciansRes] = await Promise.all([
          apiService.getServices(),
          apiService.getTechnicians()
        ]);

        if (servicesRes.success && servicesRes.data) {
          setServices(servicesRes.data);
        }
        if (techniciansRes.success && techniciansRes.data) {
          setTechnicians(techniciansRes.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        toast.error("Error loading data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  const handleConfirmBooking = async () => {
    if (!selectedService) return;

    try {
      const response = await apiService.bookService(selectedService.name);
      if (response.success) {
        setBookingDialogOpen(false);
        toast.success("Booking confirmed!", {
          description: `Your ${selectedService.name} appointment has been scheduled.`,
        });
      } else {
        toast.error("Booking failed", {
          description: response.error || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Booking system error");
    }
  };

  const handleContactTechnician = (technician: Technician) => {
    toast.success(`Contact request sent to ${technician.name}`, {
      description: "They will reach out to you shortly via your preferred method.",
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading TechFix...</div>;
  }

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
              <h2 className="text-3xl mb-2">{APP_CONFIG.services.title}</h2>
              <p className="text-gray-600 mb-6">
                {APP_CONFIG.services.subtitle}
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
                <p className="text-gray-500">{APP_CONFIG.services.notFound}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="technicians" className="space-y-8">
            <div>
              <h2 className="text-3xl mb-2">{APP_CONFIG.technicians.title}</h2>
              <p className="text-gray-600">
                {APP_CONFIG.technicians.subtitle}
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
                <p className="text-gray-500">{APP_CONFIG.technicians.notFound}</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <HowItWorks />
      </main>

      <Footer />

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