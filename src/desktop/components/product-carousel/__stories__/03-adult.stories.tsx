import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { ReactNode } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import { items } from '../__test__/test-items';

export default {
  title: 'desktop/ProductCarousel',
  component: ProductCarousel,
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

export function Adult() {
  return (
    <DemoBlock>
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index} restriction='adult'>
            <Parts.Image src={item.imageSrc} href={item.url}>
              <Parts.ImageButton
                icon={FavSVG}
                position={{ x: 'left', y: 'top' }}
                hint='Добавить в избранное'
                hintDirection='right'
              />
            </Parts.Image>

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.AdultConfirmButton onClick={() => alert('Поверим на слово...')} />
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </DemoBlock>
  );
}

Adult.storyName = 'Товары для взрослых';
