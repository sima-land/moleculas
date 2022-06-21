import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ProductSlider } from '..';
import { ProductInfo, Parts } from '../../../../common/components/product-info';
import { Badge } from '../../../../common/components/badge';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import { Button } from '@sima-land/ui-nucleons/button';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { items } from '../__test__/test-items';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Filled/favorite';
import NotFavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/favorite';

export default {
  title: 'mobile/ProductSlider',
  component: ProductSlider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Компонент слайдера рекомендаций',
      },
    },
  },
};

const Placeholder = () => (
  <div
    style={{
      height: '40px',
      borderRadius: '4px',
      background: '#eee',
      marginTop: '20px',
      marginBottom: '20px',
    }}
  />
);

const Bootstrap: React.FC = ({ children }) => (
  <>
    <MobileLayout>
      <Placeholder />
    </MobileLayout>
    {children}
    <MobileLayout>
      <Placeholder />
    </MobileLayout>
  </>
);

export const Primary = () => {
  const [wished, toggleWish] = useState<Record<number, boolean>>({});

  return (
    <Bootstrap>
      <ProductSlider>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image
              src={item.imageSrc}
              href={item.url}
              onClick={e => {
                e.preventDefault();
                action('Клик: ссылка на товар (изображение)')();
              }}
            >
              <Parts.ImageButton
                icon={wished[index] ? FavSVG : NotFavSVG}
                fill={wished[index] ? COLORS.get('additional-red') : undefined}
                onClick={() => {
                  toggleWish(s => ({ ...s, [index]: !s[index] }));
                  action('Клик: добавить в избранное')();
                }}
                data-testid='favorite-button'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} onClick={action('Клик: шильдик')} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title
              href={item.url}
              onClick={e => {
                e.preventDefault();
                action('Клик: ссылка на товар')();
              }}
            >
              {item.name}
            </Parts.Title>

            <Parts.Footer>
              <Button size='s' onClick={action('Клик: добавление в коризну')}>
                В корзину
              </Button>
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductSlider>
    </Bootstrap>
  );
};

Primary.storyName = 'Простой пример';

export const Unavailable = () => (
  <Bootstrap>
    <ProductSlider>
      {items.map((item, index) => (
        <ProductInfo key={index} restriction='unavailable'>
          <Parts.Image
            src={item.imageSrc}
            href={item.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар (изображение)')();
            }}
          />

          <Parts.Prices
            price={item.price}
            oldPrice={item.oldPrice}
            currencyGrapheme={item.currencyGrapheme}
            unavailableReason='Товара нет в наличии'
          />

          <Parts.Title
            href={item.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар')();
            }}
          >
            {item.name}
          </Parts.Title>

          <Parts.Footer>
            <Parts.WaitListAddButton onClick={action('Клик: добавление в лист ожидания')} />
          </Parts.Footer>
        </ProductInfo>
      ))}
    </ProductSlider>
  </Bootstrap>
);

Unavailable.storyName = 'Недоступные товары';

export const Adult = () => (
  <Bootstrap>
    <ProductSlider>
      {items.map((item, index) => (
        <ProductInfo key={index} restriction='adult'>
          <Parts.Image
            src={item.imageSrc}
            href={item.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар (изображение)')();
            }}
          />

          <Parts.Prices
            price={item.price}
            oldPrice={item.oldPrice}
            currencyGrapheme={item.currencyGrapheme}
          />

          <Parts.Title
            href={item.url}
            onClick={e => {
              e.preventDefault();
              action('Клик: ссылка на товар')();
            }}
          >
            {item.name}
          </Parts.Title>

          <Parts.Footer>
            <Parts.AdultConfirmButton onClick={action('Клик: подтверждение возраста')} />
          </Parts.Footer>
        </ProductInfo>
      ))}
    </ProductSlider>
  </Bootstrap>
);

Adult.storyName = 'Товары для взрослых';
