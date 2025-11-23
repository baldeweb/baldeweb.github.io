import { useTranslation } from 'react-i18next';

export function HowToRecommendPage() {
    const { t } = useTranslation();
    return (
        <main>
            <h1>{t('howToRecommend.title')}</h1>
        </main>
    );
}