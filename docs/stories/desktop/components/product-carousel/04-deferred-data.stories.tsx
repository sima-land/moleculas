import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { ReactNode, useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { Button } from '@sima-land/ui-nucleons/button';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import { items } from './fixture';

export const meta = {
  category: 'desktop/ProductCarousel',
  title: 'Тест: загрузка после mount',
  parameters: {
    layout: 'fullscreen',
  },
};

const Placeholder = () => (
  <div style={{ borderRadius: 4, background: '#eee', height: 40, margin: '20px 0' }} />
);

const DemoBlock = ({ children }: { children: ReactNode }) => (
  <Layout>
    <Placeholder />
    {children}
    <Placeholder />
  </Layout>
);

export default function DeferredData() {
  const [ready, setReady] = useState<boolean>(false);

  return (
    <DemoBlock>
      <Button onClick={() => setReady(true)} size='s' style={{ marginBottom: 20 }}>
        Загрузить
      </Button>

      <ProductCarousel>
        {(ready ? items : []).map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image
              src={item.imageSrc}
              href={item.url}
              onClick={e => {
                e.preventDefault();
                console.log('Клик: ссылка на товар (изображение)');
              }}
            >
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
            </Parts.Image>

            {item.badges && (
              <Parts.Badges lineLimit={1}>
                {item.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />
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
                console.log('Клик: ссылка на товар');
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
}
