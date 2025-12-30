import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import {
  Smartphone,
  Clock,
  Shield,
  Star,
  Laptop,
  Watch,
} from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Fix Your Tech in{" "}
              <span className="text-blue-600">Minutes</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with certified technicians near you. Fast,
              reliable, and affordable repairs for phones,
              laptops, tablets, smartwatches, and all your smart
              devices.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg">Book Repair Now</Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">500+</div>
                  <div className="text-xs text-gray-600">
                    Technicians
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">30 min</div>
                  <div className="text-xs text-gray-600">
                    Avg. Time
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold">4.9★</div>
                  <div className="text-xs text-gray-600">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611396000732-f8c9a933424f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpcnxlbnwxfHx8fDE3NjcwNTE3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Phone repair technician"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold">
                    90-Day Warranty
                  </div>
                  <div className="text-sm text-gray-600">
                    On all repairs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}