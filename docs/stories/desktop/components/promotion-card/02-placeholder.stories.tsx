import {
  PromotionCard,
  PromotionCardProps,
} from '@sima-land/moleculas/desktop/components/promotion-card';
import { addDays, addHours, addYears } from 'date-fns';
import cactus from './images/cactus.jpg';
import cherry from './images/cherry.jpg';
import phone from './images/phone.jpg';
import cone from './images/ice-cream-cone.jpg';

export const meta = {
  category: 'desktop/PromotionCard',
  title: 'Загрузка',
  parameters: {
    layout: 'padded',
  },
};

const demoItems: PromotionCardProps[] = [
  {
    href: 'https://www.sima-land.ru',
    imageSrc: cactus,
    title: '3 уточки по цене 2-х',
    subtitle:
      'При покупке 2-х уточек из акции 3-я в подарок. При покупке 2-х уточек из акции 3-я в подарок',
    dueDate: addHours(new Date(), 3),
    type: '3-by-2',
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: cherry,
    title: '-20% на плюшевых кроликов',
    subtitle: 'При покупке товаров из акции от 5 000 ₽ ',
    dueDate: addYears(new Date(), 5),
    type: 'volume-discount',
    volumeDiscount: 23,
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: phone,
    title: 'Специальные цены на термосы',
    subtitle: 'При покупке от 5 000 ₽',
    dueDate: addDays(new Date(), 7),
    type: 'special',
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: cone,
    title: 'Особые условия заказа: вот прям натурально особые, по другому не скажет',
    subtitle: 'При покупке чего-либо там какие-то условия',
    dueDate: addDays(new Date(), 21),
    name: 'Особая акция',
  },
];

export default function Placeholder() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
      {demoItems.map((_, index) => (
        <PromotionCard.Placeholder
          key={index}
          style={{ width: '320px', margin: '0 32px 32px 0', flexShrink: 0 }}
        />
      ))}
    </div>
  );
}
