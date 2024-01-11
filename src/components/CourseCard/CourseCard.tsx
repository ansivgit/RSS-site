import React from 'react';
import './CourseCard.scss';
import noteIcon from '../../icons/noteIcon.svg';
import micIcon from '../../icons/mic.svg';

type CourseCardProps = {
  title: string;
  iconSrc: string;
  startDate: string;
  mode: string;
  language: ('en' | 'ru')[];
  detailsUrl: string;
  backgroundStyle: { backgroundColor: string; accentColor: string };
};

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  iconSrc,
  startDate,
  detailsUrl,
  mode,
  language,
  backgroundStyle: { backgroundColor, accentColor }
}) => {
  const lang = language.join(' / ');

  const cardStyle = {
    backgroundColor: backgroundColor,
    '--accent-bg-color': accentColor
  };

  return (
    <div className="rs-course-card">
      <div className="rs-course-card__top" style={cardStyle}>
        <img src={iconSrc} alt={title} />
        <h3 className="rs-course-card__title">{title}</h3>
      </div>
      <div className="rs-course-card__bottom">
        <div className="rs-course-card__left">
          <div className="rs-course-card__date-info">
            <img src={noteIcon} alt="note-icon" className="rs-course-card__note-icon" />
            <div className="rs-course-card__date">Start {startDate}</div>
          </div>
          <div className="rs-course-card__lang-info">
            <img src={micIcon} className="rs-course-card__mic-icon" />
            <div className="rs-course-card__lang">{lang}</div>
            <div className="rs-course-card__mode">• {mode}</div>
          </div>
        </div>
        <div className="rs-course-card__right">
          <a href={detailsUrl} className="rs-course-card__more">
            View details<span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
};