import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Star, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Technician {
  id: string;
  name: string;
  specialties: string[];
  rating: number;
  reviews: number;
  location: string;
  experience: string;
  verified: boolean;
  avatar: string;
}

interface TechnicianCardProps {
  technician: Technician;
  onContact: (technician: Technician) => void;
}

export function TechnicianCard({ technician, onContact }: TechnicianCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <ImageWithFallback
              src={technician.avatar}
              alt={technician.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold truncate">{technician.name}</h3>
              {technician.verified && (
                <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{technician.rating}</span>
              </div>
              <span className="text-gray-600">({technician.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="truncate">{technician.location}</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">
            {technician.experience} experience
          </div>
          <div className="flex flex-wrap gap-1">
            {technician.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" onClick={() => onContact(technician)}>
          Contact Technician
        </Button>
      </CardFooter>
    </Card>
  );
}
