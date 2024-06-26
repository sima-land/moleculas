import { BadgeProps } from '@sima-land/moleculas/common/components/badge';

export interface DemoItem {
  /** Ссылка на товар. */
  url: string;

  /** Название товара. */
  name?: string;

  /** Ссылка на картинку. */
  imageSrc?: string;

  /** Альтернативный текст картинки. */
  imageAlt?: string;

  /** Цена товара. */
  price: number;

  /** Старая цена товара. */
  oldPrice?: number;

  /** Графема валюты. */
  currencyGrapheme?: string;

  /** Список шильдиков. */
  badges?: BadgeProps[];

  /** Торговая марка. */
  trademark?: { name: string; url: string };
}

export const items: DemoItem[] = [
  {
    name: 'Ножницы портновские, 19 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/3572134/0/280.jpg?v=1594121833',
    url: 'https://www.sima-land.ru/',
    price: 261,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ткань тюлевая, ширина 300 см, сетка',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/4661073/0/1600.jpg?v=1604914605',
    url: 'https://www.sima-land.ru/',
    price: 495,
    currencyGrapheme: '₽',
    oldPrice: undefined,
    trademark: {
      name: 'Торговая марка "Сима-ленд"',
      url: 'https://www.sima-land.ru/',
    },
  },
  {
    name: 'Ножницы портновские, 21,5 см, цвет чёрный/голубой',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/2300383/0/280.jpg?v=1594121773',
    url: 'https://www.sima-land.ru/',
    price: 238,
    currencyGrapheme: '₽',
    oldPrice: undefined,
    badges: [
      { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
      { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
      { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
      { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
    ],
  },
  {
    name: 'Ножницы портновские, 23 см, цвет МИКС',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/1550239/0/280.jpg?v=1600179085',
    url: 'https://www.sima-land.ru/',
    price: 171,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, одинаковые кольца, 23 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/4002852/0/280.jpg?v=1594121894',
    url: 'https://www.sima-land.ru/',
    price: 483,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, 22,5 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/4005918/0/280.jpg?v=1594121898',
    url: 'https://www.sima-land.ru/',
    price: 988,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, 22 см, цвет серебряный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/2300389/0/280.jpg?v=1594121830',
    url: 'https://www.sima-land.ru/',
    price: 619,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, с увеличенным углом наклона, 27 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/2117838/0/280.jpg?v=1594121766',
    url: 'https://www.sima-land.ru/',
    price: 539,
    currencyGrapheme: '₽',
    oldPrice: 595,
  },
  {
    name: 'Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/1108673/0/280.jpg?v=1594103956',
    url: 'https://www.sima-land.ru/',
    price: 599,
    currencyGrapheme: '₽',
    oldPrice: 717,
  },
  {
    name: 'Ножницы портновские, скошенное лезвие, 15 см, цвет серебряный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/4150936/0/280.jpg?v=1580193932',
    url: 'https://www.sima-land.ru/',
    price: 253,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
];
