import { I18N } from '../infra/interfaces/i18n';
// import { useRouter } from 'next/router';

export const useI18N = (texts: I18N) => {
  // const { locale } = useRouter();
  // const lang = locale?.split('-')[0] || 'pt';
  const lang = 'pt';
  
  return texts[lang];
};
