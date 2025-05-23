import { type ROUTES } from '@/shared/constants';

export type {
  ApiResourceLocale,
  ApiResponseError,
  ApiServices,
  HttpHeaders,
  HttpMethod,
  HttpStatusCodes,
  Language,
  ListData,
  ListType,
  QueryResult,
  QueryStringParams,
  RequestBody,
  RequestOptions,
  Video,
} from './types';

export type Route = typeof ROUTES;

export type RouteValues = Exclude<Route[keyof Route], '*' | '/' | 'docs/en' | 'docs/ru'>;
export type {
  TypeContributor,
  TypeContributorFields,
  TypeContributorSkeleton,
  TypeContributorWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeContributorWithAllLocalesAndWithoutUnresolvableLinksResponse,
  TypeContributorWithAllLocalesResponse,
  TypeContributorWithoutLinkResolutionResponse,
  TypeContributorWithoutUnresolvableLinksResponse,
  TypeCourse,
  TypeCourseFields,
  TypeCourseSkeleton,
  TypeCourseWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeCourseWithAllLocalesAndWithoutUnresolvableLinksResponse,
  TypeCourseWithAllLocalesResponse,
  TypeCourseWithoutLinkResolutionResponse,
  TypeCourseWithoutUnresolvableLinksResponse,
  TypeHomePage,
  TypeHomePageFields,
  TypeHomePageSkeleton,
  TypeHomePageWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeHomePageWithAllLocalesAndWithoutUnresolvableLinksResponse,
  TypeHomePageWithAllLocalesResponse,
  TypeHomePageWithoutLinkResolutionResponse,
  TypeHomePageWithoutUnresolvableLinksResponse,
} from './contentful/index';
