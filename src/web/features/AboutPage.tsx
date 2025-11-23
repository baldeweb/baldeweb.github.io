import { useTranslation } from 'react-i18next';

export function AboutPage() {
    const { t } = useTranslation();
    return (
        <main>
            <h1>{t('about.title')}</h1>
            <p>{t('about.paragraph')}</p>
        </main>
    );
}