import {
  About,
  Courses as RSCourses,
  General,
  Main,
  Mentoring,
  Mentors,
  Requirements,
  StudyPath
} from '@/features/courses';
import { Principles } from '@/features/principles';

import { useTitle } from '@/app/hooks';

export const Courses = () => {
  useTitle('Courses · The Rolling Scopes School');

  return (
    <>
      <Main />
      <About />
      <Principles />
      <RSCourses />
      <StudyPath />
      <General />
      <Mentors />
      <Mentoring />
      <Requirements />
    </>
  );
};