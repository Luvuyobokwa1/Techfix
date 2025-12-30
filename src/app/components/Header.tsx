import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CurrencySelector, CurrencyCode } from "./CurrencySelector";

interface HeaderProps {
  onSearchChange: (query: string) => void;
  selectedCurrency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export function Header({ onSearchChange, selectedCurrency, onCurrencyChange }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TF</span>
            </div>
            <span className="font-bold text-xl">TechFix</span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for devices or services..."
                className="pl-10"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#technicians" className="hover:text-blue-600 transition-colors">
              Technicians
            </a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
              How it Works
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <CurrencySelector 
              selectedCurrency={selectedCurrency}
              onCurrencyChange={onCurrencyChange}
            />
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button>Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search devices..."
              className="pl-10"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}