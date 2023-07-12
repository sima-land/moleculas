import { ProductCard } from '@sima-land/moleculas/desktop/components/product-card';
import { ReactNode, useState } from 'react';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Favorite';
import NotFavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';

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
  imageSrc: 'https://loremflickr.com/360/360',
  url: 'https://www.sima-land.ru',
  price: 99876543.21,
  oldPrice: 99987654.32,
  currencyGrapheme: '₽',
  badges,
  trademark: { name: 'Торговая марка Сима-ленд', url: 'https://www.sima-land.ru' },
};

const Bootstrap = ({ children }: { children?: ReactNode }) => (
  <div style={{ width: '200px', margin: '20px' }}>{children}</div>
);

export const Primary = () => {
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
              console.log('Клик: ссылка на товар (изображение)');
            }}
          >
            <Parts.ImageButton
              icon={wished ? FavSVG : NotFavSVG}
              hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'}
              fill={wished ? COLORS.get('additional-red') : undefined}
              onClick={() => {
                toggleWish(a => !a);
                console.log('Клик: добавить в избранное');
              }}
              data-testid='favorite-button'
            />
          </Parts.Image>

          {data.badges && (
            <Parts.Badges lineLimit={2}>
              {data.badges.map((badge, badgeIndex) => (
                <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />
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
              console.log('Клик: ссылка на товар');
            }}
          >
            {data.name}
          </Parts.Title>

          <Parts.TrademarkLink
            href={data.trademark.url}
            onClick={e => {
              e.preventDefault();
              console.log('Клик: ссылка на торговую марку');
            }}
          >
            {data.trademark.name}
          </Parts.TrademarkLink>

          <Parts.RatingCounter value={4.7} reviewCount={52} />

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

Primary.storyName = 'Простой пример';

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
              console.log('Клик: ссылка на товар (изображение)');
            }}
          >
            <Parts.ImageButton
              icon={wished ? FavSVG : NotFavSVG}
              hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'}
              fill={wished ? COLORS.get('additional-red') : undefined}
              onClick={() => {
                toggleWish(a => !a);
                console.log('Клик: добавить в избранное');
              }}
              data-testid='favorite-button'
            />
          </Parts.Image>

          <Parts.Badges lineLimit={1}>
            {data.badges.map((badge, index) => (
              <Badge key={index} {...badge} onClick={() => console.log('Клик: шильдик')} />
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
              console.log('Клик: ссылка на товар');
            }}
          >
            {data.name}
          </Parts.Title>

          <Parts.TrademarkLink
            href={data.trademark.url}
            onClick={e => {
              e.preventDefault();
              console.log('Клик: ссылка на торговую марку');
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

NotEnough.storyName = 'Товара нет в наличии';

export const TestHover = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    {[...Array(10).keys()].map(index => (
      <Primary key={index} />
    ))}
  </div>
);

TestHover.storyName = 'Тест: показ/скрытие всплывающей карточки';
