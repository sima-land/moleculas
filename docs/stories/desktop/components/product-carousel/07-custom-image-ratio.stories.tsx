import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { ReactNode } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import ComparisonAddSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ComparisonAdd';
import { items } from './fixture';

export const meta = {
  category: 'desktop/ProductCarousel',
  title: 'Неквадратные картинки',
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

export default function CustomImageRatio() {
  return (
    <DemoBlock>
      <ProductCarousel itemImageRatio={4 / 3}>
        {items.map((item, index) => (
          <ProductInfo key={index}>
            <Parts.Image
              images={[{ src: item.imageSrc }]}
              href={item.url}
              style={{
                '--product-info-media-ratio': '4 / 3',
              }}
            >
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
              <Parts.ImageButton
                icon={ComparisonAddSVG}
                position={{ x: 'right', y: 'top' }}
                hint='Добавить в сравнение'
                hintDirection='left'
              />
            </Parts.Image>

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

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
