import { DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const currencies = {
  USD: { symbol: "$", name: "US Dollar", rate: 1 },
  EUR: { symbol: "€", name: "Euro", rate: 0.92 },
  GBP: { symbol: "£", name: "British Pound", rate: 0.79 },
  CAD: { symbol: "C$", name: "Canadian Dollar", rate: 1.36 },
  AUD: { symbol: "A$", name: "Australian Dollar", rate: 1.52 },
  JPY: { symbol: "¥", name: "Japanese Yen", rate: 149.5 },
  CNY: { symbol: "¥", name: "Chinese Yuan", rate: 7.24 },
  INR: { symbol: "₹", name: "Indian Rupee", rate: 83.12 },
  BRL: { symbol: "R$", name: "Brazilian Real", rate: 4.97 },
  MXN: { symbol: "Mex$", name: "Mexican Peso", rate: 17.08 },
  ZAR: { symbol: "R", name: "South African Rand", rate: 18.15 },
  KRW: { symbol: "₩", name: "South Korean Won", rate: 1342 },
  SGD: { symbol: "S$", name: "Singapore Dollar", rate: 1.34 },
  CHF: { symbol: "Fr", name: "Swiss Franc", rate: 0.88 },
  SEK: { symbol: "kr", name: "Swedish Krona", rate: 10.35 },
};

export type CurrencyCode = keyof typeof currencies;

interface CurrencySelectorProps {
  selectedCurrency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export function CurrencySelector({ selectedCurrency, onCurrencyChange }: CurrencySelectorProps) {
  return (
    <Select value={selectedCurrency} onValueChange={(value) => onCurrencyChange(value as CurrencyCode)}>
      <SelectTrigger className="w-[140px]">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(currencies).map(([code, currency]) => (
          <SelectItem key={code} value={code}>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{currency.symbol}</span>
              <span>{code}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function convertPrice(price: number, fromCurrency: CurrencyCode, toCurrency: CurrencyCode): number {
  const fromRate = currencies[fromCurrency].rate;
  const toRate = currencies[toCurrency].rate;
  return (price / fromRate) * toRate;
}

export function formatPrice(price: number, currency: CurrencyCode): string {
  const currencyInfo = currencies[currency];
  const convertedPrice = Math.round(price * currencyInfo.rate);
  
  // Format based on currency
  if (currency === "JPY" || currency === "KRW") {
    // No decimal places for yen and won
    return `${currencyInfo.symbol}${convertedPrice.toLocaleString()}`;
  }
  
  return `${currencyInfo.symbol}${convertedPrice.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}
