import React from 'react';
import { action } from '@storybook/addon-actions';
import { ProductInfo, Parts } from '..';
import { Badge, BadgeProps } from '../../badge';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/favorite';
import QuickView2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/quick-view-2';
import Camera2SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/camera-2';

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
  imageSrc: 'https://picsum.photos/240/360',
  url: 'https://www.sima-land.ru',
  price: 99876543.21,
  oldPrice: 99987654.32,
  currencyGrapheme: '₽',
  badges,
  trademarkName: 'Торговая марка Сима-ленд',
  trademarkUrl: 'https://www.sima-land.ru',
};

const Bootstrap: React.FC = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div style={{ width: '300px', border: '20px solid #ddd' }}>{children}</div>
    <div style={{ width: '240px', border: '20px solid #ddd', marginLeft: '20px' }}>{children}</div>
  </div>
);

export const Primary = () => (
  <Bootstrap>
    <ProductInfo>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на товар (изображение)')();
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={action('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={action('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
        <Parts.ImageButton
          icon={Camera2SVG}
          hint='Смотреть фото'
          onClick={action('Клик: Смотреть фото')}
          data-testid='photo-button'
          hintDirection='right'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
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
          action('Клик: ссылка на товар')();
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.SecondaryInfo>Арт. 1234567890</Parts.SecondaryInfo>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на торговую марку')();
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>

      <Parts.Footer>
        <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>
          <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />
        </Parts.CartControl>
      </Parts.Footer>
    </ProductInfo>
  </Bootstrap>
);

export const PositionedImageIcons = () => (
  <Bootstrap>
    <ProductInfo>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на товар (изображение)')();
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hintDirection='right'
          position={{ x: 'left', y: 'top' }}
          hint='Добавить в избранное'
          onClick={action('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          position={{ x: 'right', y: 'top' }}
          hint='Быстрый просмотр'
          onClick={action('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
        <Parts.ImageButton
          icon={Camera2SVG}
          position={{ x: 'right', y: 'bottom' }}
          hint='Смотреть фото'
          onClick={action('Клик: Смотреть фото')}
          data-testid='photo-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
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
          action('Клик: ссылка на товар')();
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

export const CartLoading = () => (
  <Bootstrap>
    <ProductInfo>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на товар (изображение)')();
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={action('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={action('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
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
          action('Клик: ссылка на товар')();
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на торговую марку')();
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

export const NotEnough = () => (
  <Bootstrap>
    <ProductInfo restriction='unavailable'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на товар (изображение)')();
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={action('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={action('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
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
          action('Клик: ссылка на товар')();
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на торговую марку')();
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

export const NotEnoughWaited = () => (
  <Bootstrap>
    <ProductInfo restriction='unavailable'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на товар (изображение)')();
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={action('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={action('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
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
          action('Клик: ссылка на товар')();
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на торговую марку')();
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>

      <Parts.Footer>
        <Parts.WaitListAddedLink
          href='https://sima-land.ru/'
          onClick={e => {
            e.preventDefault();
            action('Клик: ссылка на лист сравнения')();
          }}
        />
      </Parts.Footer>
    </ProductInfo>
  </Bootstrap>
);

export const Unavailable = () => (
  <Bootstrap>
    <ProductInfo restriction='unavailable'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на товар (изображение)')();
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={action('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={action('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
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
          action('Клик: ссылка на товар')();
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на торговую марку')();
        }}
      >
        {data.trademarkName}
      </Parts.TrademarkLink>
    </ProductInfo>
  </Bootstrap>
);

export const Adult = () => (
  <Bootstrap>
    <ProductInfo restriction='adult'>
      <Parts.Image
        src={data.imageSrc}
        href={data.url}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на товар (изображение)')();
        }}
      >
        <Parts.ImageButton
          icon={FavoriteSVG}
          hint='Добавить в избранное'
          onClick={action('Клик: добавить в избранное')}
          data-testid='favorite-button'
        />
        <Parts.ImageButton
          icon={QuickView2SVG}
          hint='Быстрый просмотр'
          onClick={action('Клик: быстрый просмотр')}
          data-testid='quick-view-button'
        />
      </Parts.Image>

      <Parts.Badges lineLimit={1}>
        {data.badges.map((badge, index) => (
          <Badge key={index} {...badge} onClick={action('Клик: шильдик')} />
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
          action('Клик: ссылка на товар')();
        }}
      >
        {data.name}
      </Parts.Title>

      <Parts.TrademarkLink
        href={data.trademarkUrl}
        onClick={e => {
          e.preventDefault();
          action('Клик: ссылка на торговую марку')();
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
