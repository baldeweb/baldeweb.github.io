import type { PriceRange } from "./PriceRange";

export function getPriceRangeLabel(price: PriceRange): string {
  switch (price) {
    case "FREE":
      return "Gratuito";
    case "LOW":
      return "Barato";
    case "LOW-UP":
      return "Moderado";
    case "MEDIUM":
      return "Preço justo";
    case "MEDIUM-UP":
      return "Pouco elevado";
    case "HIGH":
      return "Caro";
    default:
      return "-";
  }
}
