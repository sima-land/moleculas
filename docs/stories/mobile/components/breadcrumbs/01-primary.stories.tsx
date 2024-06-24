import { Breadcrumbs } from '@sima-land/moleculas/mobile/components/breadcrumbs';

export const meta = {
  category: 'mobile/Breadcrumbs',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

const items = [
  {
    name: 'Каталог',
    url: '#',
  },
  {
    name: 'Одежда и обувь',
    url: '#',
  },
  {
    name: 'Женская одежда',
    url: '#',
  },
  {
    name: 'Аксессуары',
    url: '#',
  },
  {
    name: 'Брендированные стойки «Этель» и «Доляна» в подарок за покупку кухонного текстиля',
    url: '#',
  },
  {
    name: 'Головные уборы',
    url: '#',
  },
  {
    name: 'Кепки, бейсболки',
    url: '#',
  },
  {
    name: 'Текущая страница',
    url: '#',
  },
];

export default function Primary() {
  return (
    <>
      <div style={{ background: '#ddd', height: 32 }} />
      <Breadcrumbs items={items} />
      <div style={{ background: '#ddd', height: 32 }} />
    </>
  );
}
