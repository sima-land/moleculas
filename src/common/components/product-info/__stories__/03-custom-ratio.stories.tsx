import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import MagnifierPlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';
import berries0 from './images/strawberries.jpg';
import berries1 from './images/berries1.jpg';
import berries2 from './images/berries2.jpg';
import berries3 from './images/berries3.jpg';

export default {
  title: 'common/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'padded',
  },
};

const images = [
  // ссылки на картинки
  berries0,
  berries1,
  berries2,
  berries3,
];

export function CUstomRatio() {
  return (
    <div style={{ maxWidth: '200px' }}>
      <ProductInfo>
        <Parts.Image
          src={images}
          href='https://www.sima-land.ru'
          style={{
            '--product-info-media-ratio': '4 / 3',
            '--product-image-object-fit': 'cover',
          }}
        >
          <Parts.ImageButton
            icon={FavoriteSVG}
            position={{ x: 'right', y: 'top' }}
            hint='Добавить в избранное'
          />
          <Parts.ImageButton
            icon={MagnifierPlusSVG}
            position={{ x: 'right', y: 'bottom' }}
            hint='Быстрый просмотр'
          />
        </Parts.Image>

        <Parts.Badges lineLimit={1}>
          <Badge color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />
          <Badge color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
        </Parts.Badges>

        <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />

        <Parts.Title href='https://www.sima-land.ru'>
          Ягоды садовые МИКС свежий урожай сезон, P9 горшок, 1 шт, Лето 2024
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
  );
}

CUstomRatio.storyName = 'Соотношение сторон медиа';
