import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import MagnifierPlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';
import strawberries from './images/strawberries.jpg';

export default {
  title: 'common/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'padded',
  },
};

export function CartLoading() {
  return (
    <div style={{ width: '200px' }}>
      <ProductInfo>
        <Parts.Image src={strawberries} href='https://www.sima-land.ru'>
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
          Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024
        </Parts.Title>

        <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>

        <Parts.TrademarkLink href='https://www.sima-land.ru'>
          Торговая марка Сима-ленд
        </Parts.TrademarkLink>

        <Parts.RatingCounter value={4.5} reviewCount={28} />

        <Parts.Footer>
          <Parts.CartControl loading />
        </Parts.Footer>
      </ProductInfo>
    </div>
  );
}

CartLoading.storyName = 'Загрузка данных корзины';
