import { ROUTES } from '@/shared/constants';

export function withLang(lang: string, path: string) {
  if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
    return path;
  }

  if (lang === 'en') {
    return path;
  }

  if (path === ROUTES.HOME) {
    return `/${lang}`;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `/${lang}${normalizedPath}`;
}
