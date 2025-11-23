export function getEnvironmentLabel(tag: string): string {
  const map: Record<string, string> = {
    PET_FRIENDLY: "Pet friendly",
    BISTRO: "Bistrô",
    THEMED: "Temático",
    TOUR: "Tours",
    STADIUM: "Estádio",
    LIVE_MUSIC: "Show Ao Vivo",
  };
  return map[tag] || tag;
}
