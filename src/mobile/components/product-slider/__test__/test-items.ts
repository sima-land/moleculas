import { BadgeProps } from '../../../../common/components/badge';

export interface TestItem {
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

export const items: TestItem[] = [
  {
    name: 'Ножницы портновские, 19 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/3572134/0/280.jpg?v=1594121833',
    imageAlt: 'Ножницы портновские, 19 см, цвет чёрный, Ножницы',
    url: '',
    price: 261,
    currencyGrapheme: '₽',
    oldPrice: undefined,
    trademark: { name: 'Торговая марка Сима-ленд', url: 'https://sima-land.ru' },
  },
  {
    name: 'Ножницы портновские, 31 см, цвет чёрный/голубой',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/2300382/0/280.jpg?v=1594121798',
    imageAlt: 'Ножницы портновские, 31 см, цвет чёрный/голубой, Ножницы',
    url: '',
    price: 322,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, 21,5 см, цвет чёрный/голубой',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/2300383/0/280.jpg?v=1594121773',
    imageAlt: 'Ножницы портновские, 21,5 см, цвет чёрный/голубой, Ножницы',
    url: '',
    price: 238,
    currencyGrapheme: '₽',
    oldPrice: undefined,
    badges: [
      { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
      { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
      { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
      { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
    ],
    trademark: { name: 'Торговая марка Привет', url: 'https://sima-land.ru' },
  },
  {
    name: 'Ножницы портновские, 23 см, цвет МИКС',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/1550239/0/280.jpg?v=1600179085',
    imageAlt: 'Ножницы портновские, 23 см, цвет МИКС, Ножницы',
    url: '',
    price: 171,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, одинаковые кольца, 23 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/4002852/0/280.jpg?v=1594121894',
    imageAlt: 'Ножницы портновские, одинаковые кольца, 23 см, цвет чёрный, Ножницы',
    url: '',
    price: 483,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, 22,5 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/4005918/0/280.jpg?v=1594121898',
    imageAlt: 'Ножницы портновские, 22,5 см, цвет чёрный, Ножницы',
    url: '',
    price: 988,
    currencyGrapheme: '₽',
    oldPrice: undefined,
    badges: [
      { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
      { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
    ],
  },
  {
    name: 'Ножницы портновские, 22 см, цвет серебряный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/2300389/0/280.jpg?v=1594121830',
    imageAlt: 'Ножницы портновские, 22 см, цвет серебряный, Ножницы',
    url: '',
    price: 619,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
  {
    name: 'Ножницы портновские, с увеличенным углом наклона, 27 см, цвет чёрный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/2117838/0/280.jpg?v=1594121766',
    imageAlt: 'Ножницы портновские, с увеличенным углом наклона, 27 см, цвет чёрный, Ножницы',
    url: '',
    price: 539,
    currencyGrapheme: '₽',
    oldPrice: 595,
  },
  {
    name: 'Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/1108673/0/280.jpg?v=1594103956',
    imageAlt: 'Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый, Ножницы',
    url: '',
    price: 59922332,
    currencyGrapheme: '₽',
    oldPrice: 71721323,
  },
  {
    name: 'Ножницы портновские, скошенное лезвие, 15 см, цвет серебряный',
    imageSrc: 'https://cdn3.static1-sima-land.com/items/4150936/0/280.jpg?v=1580193932',
    imageAlt: 'Ножницы портновские, скошенное лезвие, 15 см, цвет серебряный, Ножницы',
    url: '',
    price: 253,
    currencyGrapheme: '₽',
    oldPrice: undefined,
  },
];
