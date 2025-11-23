import type { PlaceRecommendation } from "@/core/domain/models/PlaceRecommendation";

export async function fetchRecommendations(
    category: string
): Promise<PlaceRecommendation[]> {
    const res = await fetch(`/data/places/${category}.json`);

    if (!res.ok) {
        throw new Error(`Erro ao carregar ${category}.json`);
    }

    return res.json();
}
