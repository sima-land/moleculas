import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ProductCard } from '..';
import { ProductInfo, Parts } from '../../../../common/components/product-info';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Filled/favorite';
import NotFavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/favorite';
import { Badge, BadgeProps } from '../../../../common/components/badge';

export default {
  title: 'desktop/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент карточки товара',
      },
    },
  },
};

const badges: BadgeProps[] = [
  { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
  { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
  { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
  { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
];

const data = {
  name: 'Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый',
  imageSrc: 'https://picsum.photos/360',
  url: 'https://www.sima-land.ru',
  price: 99876543.21,
  oldPrice: 99987654.32,
  currencyGrapheme: '₽',
  badges,
  trademark: { name: 'Торговая марка Сима-ленд', url: 'https://www.sima-land.ru' },
};

const Bootstrap: React.FC = ({ children }) => (
  <div style={{ width: '200px', margin: '20px' }}>{children}</div>
);

export const PrimaryItem = () => {
  const [wished, toggleWish] = useState<boolean>(false);

  return (
    <Bootstrap>
      <ProductCard>
        <ProductInfo>
          <Parts.Image
            src={data.imageSrc}
            href={data.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар (изображение)')();
            }}
          >
            <Parts.ImageButton
              icon={wished ? FavSVG : NotFavSVG}
              hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'}
              fill={wished ? COLORS.get('additional-red') : undefined}
              onClick={() => {
                toggleWish(a => !a);
                action('Клик: добавить в избранное')();
              }}
              data-testid='favorite-button'
            />
          </Parts.Image>

          {data.badges && (
            <Parts.Badges lineLimit={2}>
              {data.badges.map((badge, badgeIndex) => (
                <Badge key={badgeIndex} {...badge} onClick={action('Клик: шильдик')} />
              ))}
            </Parts.Badges>
          )}

          <Parts.Prices
            price={data.price}
            oldPrice={data.oldPrice}
            currencyGrapheme={data.currencyGrapheme}
          />

          <Parts.Title
            href={data.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар')();
            }}
          >
            {data.name}
          </Parts.Title>

          <Parts.TrademarkLink
            href={data.trademark.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на торговую марку')();
            }}
          >
            {data.trademark.name}
          </Parts.TrademarkLink>

          <Parts.Footer>
            <Parts.CartControl
              stepText='По 5 шт'
              markupText='Комплектация + 50 ₽ при покупке до 20 шт'
            >
              <Stepper defaultValue={12} size='s' style={{ width: '122px' }} />
            </Parts.CartControl>
          </Parts.Footer>
        </ProductInfo>
      </ProductCard>
    </Bootstrap>
  );
};

export const Primary = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    {[...Array(10).keys()].map(index => (
      <PrimaryItem key={index} />
    ))}
  </div>
);

export const NotEnough = () => {
  const [wished, toggleWish] = useState<boolean>(false);

  return (
    <Bootstrap>
      <ProductCard>
        <ProductInfo restriction='unavailable'>
          <Parts.Image
            src={data.imageSrc}
            href={data.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар (изображение)')();
            }}
          >
            <Parts.ImageButton
              icon={wished ? FavSVG : NotFavSVG}
              hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'}
              fill={wished ? COLORS.get('additional-red') : undefined}
              onClick={() => {
                toggleWish(a => !a);
                action('Клик: добавить в избранное')();
              }}
              data-testid='favorite-button'
            />
          </Parts.Image>

          <Parts.Badges lineLimit={1}>
            {data.badges.map((badge, index) => (
              <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
            ))}
          </Parts.Badges>

          <Parts.Prices
            price={data.price}
            oldPrice={data.oldPrice}
            currencyGrapheme={data.currencyGrapheme}
            unavailableReason='Товара нет в наличии'
          />

          <Parts.Title
            href={data.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар')();
            }}
          >
            {data.name}
          </Parts.Title>

          <Parts.TrademarkLink
            href={data.trademark.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на торговую марку')();
            }}
          >
            {data.trademark.name}
          </Parts.TrademarkLink>

          <Parts.Footer>
            <Parts.WaitListAddButton />
          </Parts.Footer>
        </ProductInfo>
      </ProductCard>
    </Bootstrap>
  );
};
