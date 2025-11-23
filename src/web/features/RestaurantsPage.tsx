import { useRecommendationList } from "@/web/hooks/useRecommendationList";
import { PlaceGrid } from "@/web/components/place/PlaceGrid";
import { useTranslation } from 'react-i18next';

export function RestaurantsPage() {
    const { t } = useTranslation();
    const { data, loading, error } = useRecommendationList("restaurants");
    return (
        <div className="space-y-5">
            <div>
                <h1 className="text-xl font-bold uppercase tracking-[0.18em]">
                    {t('placeType.RESTAURANT')}
                </h1>
                <div className="mt-1 h-[3px] w-24 bg-bs-red" />
            </div>
            {loading && <p className="text-sm text-gray-300">{t('common.loading')}</p>}
            {error && (
                <p className="text-sm text-red-400">{t('common.loadError')}</p>
            )}
            {!loading && !error && (
                <PlaceGrid places={data} />
            )}
        </div>
    );
}
