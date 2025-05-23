import { REGISTRATION_WILL_OPEN_SOON, REGISTRATION_WILL_OPEN_SOON_RU } from '@/shared/constants';

export const heroCourseLocalized = {
  en: {
    linkLabel: 'Enroll',
    noLinkLabel: REGISTRATION_WILL_OPEN_SOON,
  },
  ru: {
    linkLabel: 'Присоединиться',
    noLinkLabel: REGISTRATION_WILL_OPEN_SOON_RU,
  },
} as const;

export const courseStatus = {
  available: 'available',
  upcoming: 'upcoming',
  planned: 'planned',
} as const;
