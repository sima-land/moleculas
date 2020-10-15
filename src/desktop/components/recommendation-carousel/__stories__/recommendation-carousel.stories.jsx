import React from 'react';
import RecommendationCarousel from '../index';
import { carouselItems } from './carousel-items';
import RecommendationCarouselButton from '../recommendation-carousel-button';
import RecommendedItem from '../recommended-item';

const Template = args => <RecommendationCarousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Рекомендованные товары',
  items: carouselItems,
};

export default {
  title: 'desktop/Recommendation carousel',
  component: RecommendationCarousel,

  // Дочерние компоненты нужны лишь для документации, не влияют на историю основного компонента.
  subcomponents: { RecommendationCarouselButton, RecommendedItem },
  decorators: [Story => <div style={{ width: '80%', padding: '0 40px' }}><Story /></div>],
  argTypes: {
    title: {
      description: 'Заголовок секции',
    },
    items: {
      description: 'Массив с рекомендованными товарами',
      control: {
        type: null,
      },
    },
    onItemClick: {
      description: 'Обработчик клика по товару',
      action: 'clicked',
    },
    onInViewport: {
      description: 'Функция, вызываемая при попадании компонента в поле видимости',
      action: 'inViewport',
    },
    onRequest: {
      description: 'Функция, инициализирующая загрузку рекомендаций',
      action: 'request',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Компонент карусели товаров-рекомендаций',
      },
    },
  },
};
