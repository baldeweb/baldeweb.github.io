import { useTranslation } from 'react-i18next';

export function SupportPage() {
    const { t } = useTranslation();
    return (
        <main>
            <h1>{t('support.title')}</h1>
        </main>
    );
}