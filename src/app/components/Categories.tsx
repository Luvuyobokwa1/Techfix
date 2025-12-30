import { Smartphone, Battery, Droplets, Zap, Volume2, Camera, Wifi, Wrench, Laptop, Tablet, Watch, Gamepad2, Headphones, Monitor } from "lucide-react";
import { Badge } from "./ui/badge";

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: "all", name: "All Services", icon: Wrench },
  { id: "smartphone", name: "Smartphones", icon: Smartphone },
  { id: "laptop", name: "Laptops", icon: Laptop },
  { id: "tablet", name: "Tablets", icon: Tablet },
  { id: "smartwatch", name: "Smartwatches", icon: Watch },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
  { id: "audio", name: "Audio Devices", icon: Headphones },
  { id: "display", name: "Monitors/TVs", icon: Monitor },
  { id: "battery", name: "Battery", icon: Battery },
  { id: "water", name: "Water Damage", icon: Droplets },
];

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap transition-all ${
              isSelected
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}