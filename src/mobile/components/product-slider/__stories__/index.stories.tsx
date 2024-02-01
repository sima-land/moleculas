import { ProductSlider } from '@sima-land/moleculas/mobile/components/product-slider';
import { ReactNode, useState } from 'react';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import { Button } from '@sima-land/ui-nucleons/button';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Favorite';
import NotFavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import { items } from '../__test__/test-items';

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

const Bootstrap = ({ children }: { children?: ReactNode }) => (
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
            <Parts.Image src={item.imageSrc} href={item.url}>
              <Parts.ImageButton
                icon={wished[index] ? FavSVG : NotFavSVG}
                fill={wished[index] ? COLORS.get('additional-red') : undefined}
                onClick={() => {
                  toggleWish(s => ({ ...s, [index]: !s[index] }));
                }}
                data-testid='favorite-button'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge
                    key={badgeIndex}
                    {...badge}
                    onClick={() => alert('Вы попали мышкой по шильдику!')}
                  />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Button size='s' onClick={() => alert('Представим что товар добавлен в корзину...')}>
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
          <Parts.Image src={item.imageSrc} href={item.url} />

          <Parts.Prices
            price={item.price}
            oldPrice={item.oldPrice}
            currencyGrapheme={item.currencyGrapheme}
            unavailableReason='Товара нет в наличии'
          />

          <Parts.Title href={item.url}>{item.name}</Parts.Title>

          <Parts.Footer>
            <Parts.WaitListAddButton
              onClick={() => alert('Представим добавление в лист ожидания...')}
            />
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
          <Parts.Image src={item.imageSrc} href={item.url} />

          <Parts.Prices
            price={item.price}
            oldPrice={item.oldPrice}
            currencyGrapheme={item.currencyGrapheme}
          />

          <Parts.Title href={item.url}>{item.name}</Parts.Title>

          <Parts.Footer>
            <Parts.AdultConfirmButton onClick={() => 'Поверим на слово =)'} />
          </Parts.Footer>
        </ProductInfo>
      ))}
    </ProductSlider>
  </Bootstrap>
);

Adult.storyName = 'Товары для взрослых';
