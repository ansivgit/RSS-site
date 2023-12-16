import React from 'react';
import { Footer, Navbar } from '../../components';
import { Main } from './sections/Main';
import { About } from './sections/About';
import { Principles } from '../commonSections/Principles';
import Courses from './sections/Courses/Courses';
import StudyPath from './sections/StudyPath/StudyPath';
import General from './sections/General/General';
import Mentors from './sections/Mentors/Mentors';
import Mentoring from './sections/Mentoring/Mentoring';

export const CoursesPage: React.FC = () => (
  <div className="App">
    <Navbar />
    <Main />
    <About />
    <Principles />
    <Courses />
    <StudyPath />
    <General />
    <Mentors />
    <Mentoring />
    {/* <Footer /> */}
  </div>
);
