import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';
import { ReactNode, useState } from 'react';
import { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import QuickView2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';
import Camera2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Camera';

export default {
  title: 'common/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Карточка базовой информации о товаре',
      },
    },
  },
};

const badges: BadgeProps[] = [
  { color: '#b52ea8', fields: [{ type: 'text', value: '-56%' }] },
  { color: '#ff7200', fields: [{ type: 'text', value: '3 по цене 2' }] },
  { color: '#2962ff', fields: [{ type: 'text', value: 'Товар месяца' }] },
  { color: '#00b8d4', fields: [{ type: 'text', value: 'Акция' }] },
];

const data = {
  name: 'Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый',
  imageSrc: 'https://loremflickr.com/240/360',
  url: 'https://www.sima-land.ru',
  price: 99876543.21,
  oldPrice: 99987654.32,
  currencyGrapheme: '₽',
  badges,
  trademarkName: 'Торговая марка Сима-ленд',
  trademarkUrl: 'https://www.sima-land.ru',
};

const Bootstrap = ({ children }: { children?: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div style={{ width: '300px', border: '20px solid #ddd' }}>{children}</div>
    <div style={{ width: '240px', border: '20px solid #ddd', marginLeft: '20px' }}>{children}</div>
  </div>
);

export const Primary = () => (
  <div style={{ maxWidth: '200px' }}>
    <ProductInfo>
      <Parts.Image src={data.imageSrc} href={data.url}>
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={() => alert('Клик: добавить в избранное')}
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={() => alert('Клик: быстрый просмотр')}
        />
        <Parts.ImageButton
          icon={Camera2SVG}
          hint='Смотреть фото'
          hintDirection='right'
          onClick={() => alert('Клик: Смотреть фото')}
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        <Badge {...badges[0]} />
        <Badge {...badges[1]} />
      </Parts.Badges>

      <Parts.Prices
        price={data.price}
        oldPrice={data.oldPrice}
        currencyGrapheme={data.currencyGrapheme}
      />

      <Parts.Title href={data.url}>{data.name}</Parts.Title>

      <Parts.SecondaryInfo>Арт. 1234567890</Parts.SecondaryInfo>

      <Parts.TrademarkLink href={data.trademarkUrl}>{data.trademarkName}</Parts.TrademarkLink>

      <Parts.RatingCounter value={4.5} reviewCount={28} />

      <Parts.Footer>
        <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>
          <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
        </Parts.CartControl>
      </Parts.Footer>
    </ProductInfo>
  </div>
);

Primary.storyName = 'Простой пример';

export const PositionedImageIcons = () => (
  <Bootstrap>
    <ProductInfo>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар (изображение)');
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hintDirection='right'
          position={{ x: 'left', y: 'top' }}
          hint='Добавить в избранное'
          onClick={() => alert('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          position={{ x: 'right', y: 'top' }}
          hint='Быстрый просмотр'
          onClick={() => alert('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
        <Parts.ImageButton
          icon={Camera2SVG}
          position={{ x: 'right', y: 'bottom' }}
          hint='Смотреть фото'
          onClick={() => alert('Клик: Смотреть фото')}
          data-testid='photo-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={() => alert('Клик: шильдик')} />
        ))}
      </Parts.Badges>

      <Parts.Prices
        price={data.price}
        oldPrice={data.oldPrice}
        currencyGrapheme={data.currencyGrapheme}
      />

      <Parts.Title
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар');
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.Footer>
        <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>
          <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
        </Parts.CartControl>
      </Parts.Footer>
    </ProductInfo>
  </Bootstrap>
);

PositionedImageIcons.storyName = 'Иконки на изображении';

export const CartLoading = () => (
  <Bootstrap>
    <ProductInfo>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар (изображение)');
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={() => alert('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={() => alert('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={() => alert('Клик: шильдик')} />
        ))}
      </Parts.Badges>

      <Parts.Prices
        price={data.price}
        oldPrice={data.oldPrice}
        currencyGrapheme={data.currencyGrapheme}
      />

      <Parts.Title
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар');
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на торговую марку');
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>

      <Parts.Footer>
        <Parts.CartControl loading />
      </Parts.Footer>
    </ProductInfo>
  </Bootstrap>
);

CartLoading.storyName = 'Загрузка данных корзины';

export const NotEnough = () => (
  <Bootstrap>
    <ProductInfo restriction='unavailable'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар (изображение)');
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={() => alert('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={() => alert('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={() => alert('Клик: шильдик')} />
        ))}
      </Parts.Badges>

      <Parts.Prices
        price={data.price}
        oldPrice={data.oldPrice}
        currencyGrapheme={data.currencyGrapheme}
        unavailableReason='Товара нет в наличии'
      />

      <Parts.Title
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар');
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на торговую марку');
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>

      <Parts.Footer>
        <Parts.WaitListAddButton />
      </Parts.Footer>
    </ProductInfo>
  </Bootstrap>
);

NotEnough.storyName = 'Товара нет в наличии';

export const NotEnoughWaited = () => (
  <Bootstrap>
    <ProductInfo restriction='unavailable'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар (изображение)');
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={() => alert('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={() => alert('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={() => alert('Клик: шильдик')} />
        ))}
      </Parts.Badges>

      <Parts.Prices
        price={data.price}
        oldPrice={data.oldPrice}
        currencyGrapheme={data.currencyGrapheme}
        unavailableReason='Товара нет в наличии'
      />

      <Parts.Title
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар');
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на торговую марку');
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>

      <Parts.Footer>
        <Parts.WaitListAddedLink
          href='https://sima-land.ru/'
          onClick={e => {
            e.preventDefault();
            alert('Клик: ссылка на лист сравнения');
          }}
        />
      </Parts.Footer>
    </ProductInfo>
  </Bootstrap>
);

NotEnoughWaited.storyName = 'Товар в листе ожидания';

export const Unavailable = () => (
  <Bootstrap>
    <ProductInfo restriction='unavailable'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар (изображение)');
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={() => alert('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={() => alert('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={() => alert('Клик: шильдик')} />
        ))}
      </Parts.Badges>

      <Parts.Prices
        price={data.price}
        oldPrice={data.oldPrice}
        unavailableReason='Товар доступен только для юридических лиц'
        currencyGrapheme={data.currencyGrapheme}
      />

      <Parts.Title
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар');
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на торговую марку');
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>
    </ProductInfo>
  </Bootstrap>
);

Unavailable.storyName = 'Товар недоступен для покупки';

export const Adult = () => (
  <Bootstrap>
    <ProductInfo restriction='adult'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар (изображение)');
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={() => alert('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={() => alert('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={() => alert('Клик: шильдик')} />
        ))}
      </Parts.Badges>

      <Parts.Prices
        price={data.price}
        oldPrice={data.oldPrice}
        currencyGrapheme={data.currencyGrapheme}
      />

      <Parts.Title
        href={data.url}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на товар');
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          alert('Клик: ссылка на торговую марку');
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>

      <Parts.Footer>
        <Parts.AdultConfirmButton />
      </Parts.Footer>
    </ProductInfo>
  </Bootstrap>
);

Adult.storyName = 'Товар для взрослых';

export function TestImageBroken() {
  const [broken, setBroken] = useState(false);
  const imageSrc = broken ? 'http://non-existed-site.com/' : 'https://loremflickr.com/240/240';

  return (
    <>
      <button onClick={() => setBroken(a => !a)}>{broken ? 'Починить' : 'Сломать'}</button>

      <div style={{ width: '260px', marginTop: 12 }}>
        <ProductInfo>
          <Parts.Image src={imageSrc} href={data.url}>
            <Parts.ImageButton
              icon={FavoriteSVG}
              hint='Добавить в избранное'
              data-testid='favorite-button'
            />
            <Parts.ImageButton
              icon={QuickView2SVG}
              hint='Быстрый просмотр'
              data-testid='quick-view-button'
            />
          </Parts.Image>

          <Parts.Prices
            price={data.price}
            oldPrice={data.oldPrice}
            currencyGrapheme={data.currencyGrapheme}
          />

          <Parts.Title href={data.url}>{data.name}</Parts.Title>
        </ProductInfo>
      </div>
    </>
  );
}

TestImageBroken.storyName = 'Тест: ошибка загрузки картинки';
