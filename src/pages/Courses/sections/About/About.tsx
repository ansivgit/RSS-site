import { Paragraph, Subtitle, Title } from '../../../../components';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import { CourseCard } from '../../../../components/CourseCard';
import { coursesData } from '../coursesData';
import './About.scss';
export const About = () => {
  const [course] = coursesData.filter((course: { title: string }) =>
    course.title.startsWith('React')
  );

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'RS School', path: '/rs-courses' }
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <div className="rs-about container">
        <div className="rs-about content">
          <div className="column-2">
            <div className="card-wrapper">
              <CourseCard {...course} />
            </div>
            <div className="info">
              <Title text="About RS School" hasAsterisk />
              <Subtitle text="No matter your age, professional employment, or place of residence." />
              <Paragraph>
                RS School offers a unique learning experience as a free, community-based online
                education initiative. The RS School has been run by the Rolling Scopes community
                since 2013. Today, over 600 developer-volunteers from various countries and
                companies assist as mentors. We believe in important ideas that guide our mission.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};