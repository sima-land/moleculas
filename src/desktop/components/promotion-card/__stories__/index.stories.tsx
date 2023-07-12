import {
  PromotionCard,
  PromotionCardProps,
} from '@sima-land/moleculas/desktop/components/promotion-card';
import { addDays, addHours, addYears } from 'date-fns';

export default {
  title: 'desktop/PromotionCard',
  component: PromotionCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент карточки акции',
      },
    },
  },
};

const demoItems: PromotionCardProps[] = [
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://loremflickr.com/656/488?random=1',
    title: '3 уточки по цене 2-х',
    subtitle:
      'При покупке 2-х уточек из акции 3-я в подарок. При покупке 2-х уточек из акции 3-я в подарок',
    dueDate: addHours(new Date(), 3),
    promotionType: '3-by-2',
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://loremflickr.com/656/488?random=2',
    title: '-20% на плюшевых кроликов',
    subtitle: 'При покупке товаров из акции от 5 000 ₽ ',
    dueDate: addYears(new Date(), 5),
    promotionType: 'volume-discount',
    volumeDiscount: 23,
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://loremflickr.com/656/488?random=3',
    title: 'Специальные цены на термосы',
    subtitle: 'При покупке от 5 000 ₽',
    dueDate: addDays(new Date(), 7),
    promotionType: 'special',
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://loremflickr.com/656/488?random=4',
    title: 'Особые условия заказа: вот прям натурально особые, по другому не скажет',
    subtitle: 'При покупке чего-либо там какие-то условия',
    dueDate: addDays(new Date(), 21),
    postfix: 'Особая акция',
  },
];

export function Primary() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
      {demoItems.map((props, index) => (
        <PromotionCard
          key={index}
          style={{ width: '320px', margin: '0 32px 32px 0', flexShrink: 0 }}
          {...props}
        />
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function Placeholder() {
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

Placeholder.storyName = 'Загрузка';
