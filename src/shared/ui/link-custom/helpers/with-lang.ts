import { ROUTES } from '@/shared/constants';

export function withLang(lang: string, path: string) {
  if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
    return path;
  }

  if (path === ROUTES.HOME) {
    return `/${lang}`;
  }

  return `/${lang}${path}`;
}
