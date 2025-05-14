export type CitiesCardDataType = {
  id?: string;
  title: string;
  type: string;
  price: number;
  cityName?: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating?: number;
  previewImage: string;
};

export const CitiesCardData: CitiesCardDataType[] = [
  {
    id: '314769d4-5f2e-4cdb-998e-d7e38c173d34',
    title: 'Wood and stone place',
    type: 'room',
    price: 227,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    cityName: 'Paris',
    isFavorite: true,
    isPremium: false,
    rating: 4.1
  },
  {
    id: '3a40cafb-015e-4323-92f4-c94f1fb7f679',
    title: 'Tile House',
    type: 'hotel',
    price: 202,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    cityName: 'Paris',
    isFavorite: false,
    isPremium: true,
    rating: 2
  },
  {
    id: '56bfb061-f365-4e4a-bcf7-8128243e6bf3',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 217,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    cityName: 'Paris',
    isFavorite: false,
    isPremium: false,
    rating: 4
  },
  {
    id: '05ff28f9-8477-443c-881d-703a2091d67f',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 241,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    cityName: 'Paris',
    isFavorite: false,
    isPremium: true,
    rating: 3.1
  },
  {
    id: 'aafb48da-82dd-421e-8167-a44abb2dcf88',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 244,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    cityName: 'Paris',
    isFavorite: false,
    isPremium: true,
    rating: 2.3
  }
];
