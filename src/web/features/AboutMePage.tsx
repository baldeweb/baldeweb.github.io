import flagSp from "@/assets/imgs/flags/flag_sp.png";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export function AboutMePage() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-md space-y-6 text-white">

      {/* FOTO + NOME */}
      <div className="flex flex-col items-center pt-4">
        <img
          src={flagSp}
          alt="Foto"
          className="h-32 w-32 rounded-full border-2 border-bs-red shadow-md object-cover"
        />

        <h1 className="mt-4 text-xl font-bold uppercase tracking-[0.18em]">
          Wallace Baldenebre
        </h1>

        <p className="text-xs text-gray-300">
          {t('aboutMe.authorTag')}
        </p>
      </div>

      {/* LINHA VERMELHA */}
      <div className="mx-auto h-[3px] w-24 bg-bs-red" />

      {/* SOBRE */}
      <section className="rounded-md bg-bs-card p-4 border border-white/10 shadow">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] mb-2">
          {t('aboutMe.aboutHeading')}
        </h2>

        <p className="text-sm leading-relaxed text-gray-200">
          {t('aboutMe.bio')}
        </p>
      </section>

      {/* REDES SOCIAIS */}
      <section className="rounded-md bg-bs-card p-4 border border-white/10 shadow">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] mb-3">
          {t('aboutMe.socialHeading')}
        </h2>

        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-bs-red transition-colors"
            >
              <FaInstagram aria-hidden="true" className="text-lg" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-bs-red transition-colors"
            >
              <FaLinkedin aria-hidden="true" className="text-lg" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:contato@example.com"
              className="flex items-center gap-2 hover:text-bs-red transition-colors"
            >
              <FaEnvelope aria-hidden="true" className="text-lg" />
              <span>Email</span>
            </a>
          </li>
        </ul>
      </section>

      {/* FINAL */}
      <p className="text-center text-[0.65rem] text-gray-500 pt-4 pb-10">
        {t('common.version')} 1.0 — Busca Sampa
      </p>
    </div>
  );
}
