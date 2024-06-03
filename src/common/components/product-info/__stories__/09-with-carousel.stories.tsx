import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { Carousel } from '@sima-land/ui-nucleons/carousel';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { useClientWidth } from '@sima-land/moleculas/common/hooks';
import { useRef } from 'react';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import MagnifierPlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';
import ComparisonAddSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ComparisonAdd';
import strawberries from './images/strawberries.jpg';

export default {
  title: 'common/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'padded',
  },
};

const items = Array(20).fill(0);

export function WithCarousel() {
  const ms = useBreakpoint('ms+');
  const mm = useBreakpoint('mm+');
  const xs = useBreakpoint('xs+');
  const l = useBreakpoint('l+');

  const itemRef = useRef<HTMLDivElement>(null);
  const itemWidth = useClientWidth(itemRef);

  const colGap = '16px';
  let colCount = 2;

  if (ms) {
    colCount = 3;
  }
  if (mm) {
    colCount = 4;
  }
  if (xs) {
    colCount = 6;
  }

  return (
    <Layout>
      <Carousel
        infinite={false}
        draggable={false}
        items={items}
        withControls={itemWidth === null ? false : undefined}
        controlProps={{
          size: l ? 'l' : 's',
          ...(itemWidth !== null && { style: { top: `${itemWidth / 2}px` } }),
        }}
        renderItem={(item, itemIndex) => (
          <div
            ref={itemIndex === 0 ? itemRef : null}
            style={{
              flexShrink: 0,
              maxWidth: `calc((100% - ${colGap} * ${colCount - 1}) / ${colCount})`,
              marginLeft: itemIndex === 0 ? 0 : colGap,
            }}
          >
            <ProductInfo>
              <Parts.Image src={strawberries} href='https://www.sima-land.ru'>
                <Parts.ImageButton
                  icon={FavoriteSVG}
                  position={{ x: 'left', y: 'top' }}
                  hint='Добавить в избранное'
                  hintDirection='right'
                />
                <Parts.ImageButton
                  icon={MagnifierPlusSVG}
                  position={{ x: 'right', y: 'top' }}
                  hint='Быстрый просмотр'
                />
                <Parts.ImageButton
                  icon={ComparisonAddSVG}
                  position={{ x: 'right', y: 'bottom' }}
                  hint='Сравнить'
                />
              </Parts.Image>

              <Parts.Badges lineLimit={1}>
                <Badge shape='round' color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
                <Badge
                  shape='round'
                  color='#ff7200'
                  fields={[{ type: 'text', value: '3 по цене 2' }]}
                />
                <Badge
                  shape='round'
                  color='#2962ff'
                  fields={[{ type: 'text', value: 'Товар месяца' }]}
                />
                <Badge shape='round' color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
              </Parts.Badges>

              <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />

              <Parts.Title href='https://www.sima-land.ru'>
                Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
              </Parts.Title>

              <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

              <Parts.TrademarkLink href='https://www.sima-land.ru'>
                Торговая марка Сима-ленд
              </Parts.TrademarkLink>

              <Parts.RatingCounter value={4.5} reviewCount={28} />

              <Parts.Footer>
                <Parts.CartControl
                  stepText='По 1 шт'
                  markupText='Комплектация + 50 ₽ при покупке до 20 шт'
                >
                  <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
                </Parts.CartControl>
              </Parts.Footer>
            </ProductInfo>
          </div>
        )}
      />
    </Layout>
  );
}

WithCarousel.storyName = 'Карусель';
