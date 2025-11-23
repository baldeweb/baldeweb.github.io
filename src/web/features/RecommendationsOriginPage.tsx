import { useTranslation } from 'react-i18next';

export function RecommendationsOriginPage() {
    const { t } = useTranslation();
    return (
        <main>
            <h1>{t('recommendationsOrigin.title')}</h1>
        </main>
    );
}