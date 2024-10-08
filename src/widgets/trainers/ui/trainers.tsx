import { Trainer, TrainerCard } from '@/entities/trainer';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './trainers.scss';

interface TrainersProps {
  trainers: Trainer[];
  lang?: 'en' | 'ru';
}

const ONE_TRAINER = 'oneTrainer';
const MULTIPLE_TRAINERS = 'multipleTrainers';

const trainersTitle = {
  ru: {
    [ONE_TRAINER]: 'Преподаватель курса',
    [MULTIPLE_TRAINERS]: 'Преподаватели курса',
  },
  en: {
    [ONE_TRAINER]: 'Our trainer',
    [MULTIPLE_TRAINERS]: 'Our mentors and trainers',
  },
} as const;

export const Trainers = ({ trainers, lang = 'en' }: TrainersProps) => {
  const isMultipleTrainers = trainers.length > 1 ? MULTIPLE_TRAINERS : ONE_TRAINER;
  const title = trainersTitle[lang][isMultipleTrainers];

  return (
    <section className="trainers container">
      <div className="trainers-content content">
        <WidgetTitle mods="lines">
          {title}
        </WidgetTitle>
        <div className="trainers-list">
          {trainers.map(({ name, bio, photo, role }, index) => (
            <TrainerCard
              key={index}
              name={name}
              role={role}
              bio={bio}
              photo={photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
