import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { Badge } from '@sima-land/moleculas/common/components/badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import MagnifierPlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';
import ComparisonAddSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ComparisonAdd';
import berries0 from './images/strawberries.jpg';
import berries1 from './images/berries1.jpg';
import berries2 from './images/berries2.jpg';
import berries3 from './images/berries3.jpg';
import styles from './styles.m.css';

export const meta = {
  category: 'common/ProductInfo',
  title: 'Слайдер картинок',
  parameters: {
    layout: 'padded',
  },
};

const images = [
  { src: berries0, alt: 'Первая картинка' },
  { src: berries1, alt: 'Вторая картинка' },
  { src: berries2, alt: 'Третья картинка' },
  { src: berries3, alt: 'Четвертая картинка' },
];

export default function ImageSlider() {
  return (
    <div className={styles.card}>
      <ProductInfo>
        <Parts.Image
          href='https://www.sima-land.ru'
          images={images}
          sliderProps={{
            // прокидываем класс навигации чтобы стилями скрывать ее когда мышка не наведена на карточку
            navProps: { className: styles.nav },
          }}
        >
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
          <Badge shape='round' color='#ff7200' fields={[{ type: 'text', value: '3 по цене 2' }]} />
          <Badge shape='round' color='#2962ff' fields={[{ type: 'text', value: 'Товар месяца' }]} />
          <Badge shape='round' color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />
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
