import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { ReactNode } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import { items } from './fixture';

export const meta = {
  category: 'desktop/ProductCarousel',
  title: 'Нет в наличии',
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

export default function Unavailable() {
  return (
    <DemoBlock>
      <ProductCarousel>
        {items.map((item, index) => (
          <ProductInfo key={index} restriction='unavailable'>
            <Parts.Image images={[{ src: item.imageSrc }]} href={item.url}>
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
                  <Badge key={badgeIndex} {...badge} />
                ))}
              </Parts.Badges>
            )}

            <Parts.Prices
              price={item.price}
              oldPrice={item.oldPrice}
              currencyGrapheme={item.currencyGrapheme}
              unavailableReason='Товара нет в наличии'
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.WaitListAddButton onClick={() => alert('Так и быть, добавим...')} />
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </DemoBlock>
  );
}
