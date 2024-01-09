import { ProductCard, reduceBaseInfo } from '@sima-land/moleculas/desktop/components/product-card';
import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import cupSrc from './cup.jpg';

export default {
  title: 'desktop/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент карточки товара',
      },
    },
  },
};

export function Primary() {
  const badges: BadgeProps[] = [
    { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
    { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
    { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
    { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
  ];

  return (
    <div style={{ width: '200px', margin: '32px' }}>
      <ProductCard reduceBaseInfo={elem => reduceBaseInfo(elem, { hideImageButtons: false })}>
        <ProductInfo>
          {/* Изображение */}
          <Parts.Image src={cupSrc} href='https://www.sima-land.ru'>
            <Parts.ImageButton
              icon={FavSVG}
              position={{ x: 'left', y: 'top' }}
              hint='Добавить в избранное'
              hintDirection='right'
            />
          </Parts.Image>

          {/* Шильдики */}
          <Parts.Badges lineLimit={2}>
            {badges.map((badge, badgeIndex) => (
              <Badge key={badgeIndex} {...badge} />
            ))}
          </Parts.Badges>

          {/* Цены */}
          <Parts.Prices price={99876543.21} oldPrice={99987654.32} currencyGrapheme='₽' />

          {/* Название */}
          <Parts.Title href='https://www.sima-land.ru'>
            Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый
          </Parts.Title>

          {/* Ссылка под названием */}
          <Parts.TrademarkLink href='https://www.sima-land.ru/offers/'>
            Торговая марка Сима-ленд
          </Parts.TrademarkLink>

          {/* Рейтинг */}
          <Parts.RatingCounter value={4.7} reviewCount={52} />

          {/* Произвольный контент */}
          <Parts.Footer>
            <Parts.CartControl
              stepText='По 5 шт'
              markupText='Комплектация + 50 ₽ при покупке до 20 шт'
            >
              <Stepper defaultValue={12} size='s' style={{ width: '122px' }} />
            </Parts.CartControl>
          </Parts.Footer>
        </ProductInfo>
      </ProductCard>
    </div>
  );
}

Primary.storyName = 'Простой пример';
