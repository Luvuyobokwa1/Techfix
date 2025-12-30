import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, DollarSign } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { formatPrice, CurrencyCode } from "./CurrencySelector";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  popular?: boolean;
  image: string;
}

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service) => void;
  currency: CurrencyCode;
}

export function ServiceCard({ service, onBook, currency }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold">{service.name}</h3>
          {service.popular && <Badge variant="secondary">Popular</Badge>}
        </div>
        <p className="text-sm text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600 font-semibold">
            <span>{formatPrice(service.price, currency)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => onBook(service)}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}