import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import { items } from './fixture';

export const meta = {
  category: 'desktop/ProductCarousel',
  title: 'Пример: пользовательский размер элемента',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function CustomItemSize() {
  return (
    <div style={{ margin: '40px', width: '400px' }}>
      <ProductCarousel
        itemSize='unset'
        itemProps={{ style: { width: 'calc((400px / 2) - 16px)' } }}
      >
        {items.map((item, index) => (
          <ProductInfo key={index}>
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
            />

            <Parts.Title href={item.url}>{item.name}</Parts.Title>

            <Parts.Footer>
              <Parts.CartControl stepText='По 5 шт'>
                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
              </Parts.CartControl>
            </Parts.Footer>
          </ProductInfo>
        ))}
      </ProductCarousel>
    </div>
  );
}
