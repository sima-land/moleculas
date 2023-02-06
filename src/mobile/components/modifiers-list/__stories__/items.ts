import { ModifierItemProps } from '../modifier-item';

const withText: ModifierItemProps[] = [
  {
    name: '30 (98-104см)',
    selected: false,
    price: 45.5,
    additionalText: undefined,
    type: 'text',
    color: '',
    image: 'https://cdn2.static1-sima-land.com/items/3485686/0/140.jpg?v=1541497336',
  },
  {
    name: '32 (110-116см)',
    selected: false,
    price: 47,
    additionalText: 'В корзине 25 шт',
    type: 'text',
    color: '',
    image: 'https://cdn2.static1-sima-land.com/items/3485687/0/140.jpg?v=1541497517',
  },
  {
    name: '34 (122-128см)',
    selected: false,
    price: 49,
    additionalText: undefined,
    type: 'text',
    color: '',
    image: 'https://cdn2.static1-sima-land.com/items/3485688/0/140.jpg?v=1541497335',
  },
  {
    name: '36 (134-140см)',
    selected: true,
    price: 48.95,
    additionalText: 'В корзине 7 шт',
    type: 'text',
    color: '',
    image: 'https://cdn2.static1-sima-land.com/items/3485685/0/140.jpg?v=1541497492',
  },
];

const withPhoto: ModifierItemProps[] = [
  {
    name: 'Карамельный фраппе',
    selected: false,
    additionalText: 'В корзине 7 упаковок',
    price: 103,
    type: 'image',
    color: '',
    image: 'https://cdn3.static1-sima-land.com/items/3053881/0/140.jpg?v=1527276296',
  },
  {
    name: 'Мята',
    selected: false,
    additionalText: 'В корзине 2 набора',
    price: 102,
    type: 'image',
    color: '',
    image: 'https://cdn3.static1-sima-land.com/items/3629085/0/140.jpg?v=1548996957',
  },
  {
    name: 'Сирень',
    selected: true,
    additionalText: undefined,
    price: 105,
    type: 'image',
    color: '',
    image: 'https://cdn3.static1-sima-land.com/items/1131788/0/140.jpg?v=0',
  },
  {
    name: 'Трава',
    selected: false,
    additionalText: '',
    price: 105,
    type: 'image',
    color: '',
    image: 'https://cdn3.static1-sima-land.com/items/1131824/0/140.jpg?v=1572272458',
  },
];

const withColor: ModifierItemProps[] = [
  {
    name: 'белый',
    selected: false,
    additionalText: 'В корзине 67 шт',
    price: 750,
    type: 'color',
    color: '#ffffff',
    image: 'https://cdn3.static1-sima-land.com/items/2164213/0/140.jpg?v=0',
  },
  {
    name: 'жёлтый',
    selected: false,
    additionalText: undefined,
    price: 750,
    type: 'color',
    color: '#ffff00',
    image: 'https://cdn3.static1-sima-land.com/items/2164214/0/140.jpg?v=0',
  },
  {
    name: 'красный',
    selected: false,
    additionalText: undefined,
    price: 750,
    type: 'color',
    color: '#ff0000',
    image: 'https://cdn3.static1-sima-land.com/items/2164290/0/140.jpg?v=0',
  },
  {
    name: 'серый',
    selected: true,
    additionalText: 'В корзине 90 пог. м',
    price: 750,
    type: 'color',
    color: '#808080',
    image: 'https://cdn3.static1-sima-land.com/items/2164215/0/140.jpg?v=0',
  },
];

const items = {
  withText,
  withPhoto,
  withColor,
};

export default items;
