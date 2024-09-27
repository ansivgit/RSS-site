import { screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { CourseItem, CourseItemData } from '@/entities/course';
import { renderWithRouter } from '@/shared/__tests__/utils';

const mockedProps: CourseItemData = {
  title: 'Introduction to React',
  language: ['en'],
  startDate: '2024-05-01',
  detailsUrl: '/courses/react-intro',
  buttonText: 'View Details',
  iconSrc: '/images/react-icon.png',
};

const expectedDate = dayjs(mockedProps.startDate).toISOString();

describe('CourseItem Component', () => {
  beforeEach(() => {
    renderWithRouter(<CourseItem {...mockedProps} />);
  });

  it('renders the course title', () => {
    const titleElement = screen.getByText(mockedProps.title);

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the course language with the first letter capitalized', () => {
    const languageInitial = mockedProps.language[0].toUpperCase();
    const dateElement = screen.getByTestId('course-language');

    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveTextContent(`• ${languageInitial}`);
  });

  it('renders the start date correctly', () => {
    const courseDate = screen.getByTestId('course-date');

    expect(courseDate).toHaveAttribute('datetime', expectedDate);
  });

  it('renders the LinkCustom component with correct href and text', () => {
    const link = screen.getByTestId('course-link') as HTMLAnchorElement;

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockedProps.detailsUrl);
    expect(link).toHaveTextContent(mockedProps.buttonText);
  });
});
