export function getPlaceTypeLabel(type: string): string {
  const map: Record<string, string> = {
    RESTAURANT: "Restaurante",
    RESTAURANTS: "Restaurante",
    BAR: "Bar",
    NIGHTLIFE: "Vida Noturna",
    COFFEE: "Cafeteria",
    NATURE: "Natureza",
    TOURIST_SPOT: "Ponto Turístico",
  };
  return map[type] || type;
}
