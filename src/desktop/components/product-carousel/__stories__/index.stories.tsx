import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ProductCarousel } from '..';
import { ProductInfo, Parts } from '../../../../common/components/product-info';
import { DesktopLayout } from '@sima-land/ui-nucleons/layout';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { Badge } from '../../../../common/components/badge';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Favorite';
import NotFavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import { items } from '../__test__/test-items';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'desktop/ProductCarousel',
  component: ProductCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Компонент карусели рекомендаций',
      },
    },
  },
};

const Placeholder = () => (
  <div style={{ borderRadius: 4, background: '#eee', height: 40, margin: '20px 0' }} />
);

const DemoBlock = ({ children }: { children: React.ReactNode }) => (
  <DesktopLayout>
    <Placeholder />
    {children}
    <Placeholder />
  </DesktopLayout>
);

export const Primary = () => {
  const [wished, toggleWish] = useState<Record<number, boolean>>({});

  return (
    <DemoBlock>
      <ProductCarousel withHoverCard>
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
                hint={wished[index] ? 'Убрать из избранного' : 'Добавить в избранное'}
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

            <Parts.RatingCounter value={4.7} reviewCount={52} />

            <Parts.Footer>
              <Parts.CartControl
                stepText='По 5 шт'
                markupText='Комплектация + 50 ₽ при покупке до 20 шт'
              >
                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
              </Parts.CartControl>
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </DemoBlock>
  );
};

Primary.storyName = 'Простой пример';

export const Unavailable = () => {
  const [wished, toggleWish] = useState<Record<number, boolean>>({});

  return (
    <DemoBlock>
      <ProductCarousel withHoverCard>
        {items.map((item, index) => (
          <ProductInfo key={index} restriction='unavailable'>
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
                hint={wished[index] ? 'Убрать из избранного' : 'Добавить в избранное'}
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
      </ProductCarousel>
    </DemoBlock>
  );
};

Unavailable.storyName = 'Нет в наличии';

export const Adult = () => (
  <DemoBlock>
    <ProductCarousel withHoverCard>
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
    </ProductCarousel>
  </DemoBlock>
);

Adult.storyName = 'Товары для взрослых';

export const DeferredData = () => {
  const [wished, toggleWish] = useState<Record<number, boolean>>({});
  const [ready, setReady] = useState<boolean>(false);

  return (
    <DemoBlock>
      <Button onClick={() => setReady(true)} size='s' style={{ marginBottom: 20 }}>
        Загрузить
      </Button>

      <ProductCarousel withHoverCard>
        {(ready ? items : []).map((item, index) => (
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
                hint={wished[index] ? 'Убрать из избранного' : 'Добавить в избранное'}
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
              <Parts.CartControl
                stepText='По 5 шт'
                markupText='Комплектация + 50 ₽ при покупке до 20 шт'
              >
                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
              </Parts.CartControl>
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </DemoBlock>
  );
};

DeferredData.storyName = 'Тест: загрузка после mount';

export const FewItems = () => (
  <DemoBlock>
    <ProductCarousel withHoverCard>
      {items.slice(0, 4).map((item, index) => (
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
              icon={NotFavSVG}
              hint='Добавить в избранное'
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
            <Parts.CartControl
              stepText='По 5 шт'
              markupText='Комплектация + 50 ₽ при покупке до 20 шт'
            >
              <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
            </Parts.CartControl>
          </Parts.Footer>
        </ProductInfo>
      ))}
    </ProductCarousel>
  </DemoBlock>
);

FewItems.storyName = 'Мало товаров для прокрутки';
