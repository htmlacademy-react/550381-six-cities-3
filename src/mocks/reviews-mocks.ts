import { TReview } from '../components/review/types';

export const reviewsMocks: TReview[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6c92a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Angelina Conner',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
    rating: 4
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cdc962a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Max Conner',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5
  }
];
