import { addDays, addHours, addYears } from 'date-fns';
import React from 'react';
import { PromotionCard, PromotionCardProps } from '..';

const demoItems: PromotionCardProps[] = [
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://picsum.photos/id/10/656/488',
    title: '3 уточки по цене 2-х',
    subtitle:
      'При покупке 2-х уточек из акции 3-я в подарок. При покупке 2-х уточек из акции 3-я в подарок',
    dueDate: addHours(new Date(), 3),
    promotionType: '3-by-2',
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://picsum.photos/id/1000/656/488',
    title: '-20% на плюшевых кроликов',
    subtitle: 'При покупке товаров из акции от 5 000 ₽ ',
    dueDate: addYears(new Date(), 5),
    promotionType: 'volume-discount',
    volumeDiscount: 23,
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://picsum.photos/id/100/328/244',
    title: 'Специальные цены на термосы',
    subtitle: 'При покупке от 5 000 ₽',
    dueDate: addDays(new Date(), 7),
    promotionType: 'special',
  },
  {
    href: 'https://www.sima-land.ru',
    imageSrc: 'https://picsum.photos/id/101/328/244',
    title: 'Особые условия заказа: вот прям натурально особые, по другому не скажет',
    subtitle: 'При покупке чего-либо там какие-то условия',
    dueDate: addDays(new Date(), 21),
    postfix: 'Особая акция',
  },
];

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

export const Primary = () => (
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

Primary.storyName = 'Простой пример';

export const Placeholder = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>
    {demoItems.map((_, index) => (
      <PromotionCard.Placeholder
        key={index}
        style={{ width: '320px', margin: '0 32px 32px 0', flexShrink: 0 }}
      />
    ))}
  </div>
);

Placeholder.storyName = 'Загрузка';
