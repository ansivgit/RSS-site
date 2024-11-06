import { Course } from '@/entities/course';
import { AboutCourse } from '@/widgets/about-course';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, javaScriptRu } from 'data';

type JavaScriptRuProps = {
  lang: 'ru' | 'en';
  course: Course;
  courseName: CourseNames['JS_RU'];
};

export const JavaScriptRu = ({ lang, course, courseName }: JavaScriptRuProps) => {
  return (
    <>
      <HeroCourse course={course} lang={lang} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} lang={lang} />
      <AboutCourse course={course} courseName={courseName} type={lang} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} lang={lang} />
      <AboutVideo lang={lang} />
      <StudyPath path="javascriptRu" lang={lang} />
      <Required courseName={courseName} />
      <Trainers trainers={javaScriptRu} lang={lang} />
    </>
  );
};