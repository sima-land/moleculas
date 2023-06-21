import React from 'react';
import styles from './product-row.module.scss';
import classnames from 'classnames/bind';
import { Link } from '@sima-land/ui-nucleons/link';
import { Price } from '@sima-land/ui-nucleons/price';
import { Box } from '@sima-land/ui-nucleons/box';
import { Text } from '@sima-land/ui-nucleons/text';
import { StrokedSVG } from '@sima-land/ui-nucleons/stroked-svg';
import MoreSVG from '@sima-land/ui-quarks/icons/24x24/Filled/More';
import FavSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Favorite';
import NotFavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';
import { COLORS } from '@sima-land/ui-nucleons/colors';

export interface ProductRowProps {
  /** Общая сумма товара. */
  commonPrice: number;

  /** Количество товара, которое будет доставлено. */
  count?: number;

  /** Символ валюты. */
  currencyGrapheme: string;

  /** Ссылка на картинку товара. */
  imageUrl: string;

  /** Изначально добавленное количество товара при заказе. */
  initialCount?: number;

  /** Признак загрузки добавления товара в список избранного. */
  isFetchingWishItems?: boolean;

  /** Товар добавлен в избранное. */
  isWished?: boolean;

  /** Цена товара за единицу. */
  itemPrice: number;

  /** Ссылка на страницу товара. */
  itemUrl: string;

  /** Id заказа в который перемещен товар. */
  movedOrderId?: number;

  /** Название товара. */
  name: string;

  /** Признак товара не в наличии. */
  notInStock?: boolean;

  /** Обработчик нажатия на кнопку действий над товаром. */
  onActionsClick?: () => void;

  /** Обработчик добавления/удаления в избранное. */
  onWishButtonClick?: () => void;

  /** Артикул товара. */
  sid: number;

  /** Единицы измерения. */
  unit: string;
}

const cx = classnames.bind(styles);

/**
 * Карточка товара для вертикальных списков товаров.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductRow({
  itemUrl,
  imageUrl,
  name,
  sid,
  isWished,
  count,
  unit,
  initialCount,
  movedOrderId,
  notInStock,
  currencyGrapheme,
  commonPrice,
  itemPrice,
  onWishButtonClick,
  onActionsClick,
  isFetchingWishItems,
}: ProductRowProps) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('image-wrapper')}>
        <Link href={itemUrl}>
          {/* @todo Использовать Parts.Image из ProductInfo */}
          <img src={imageUrl} className={cx('image')} />
        </Link>
        {onWishButtonClick && (
          <StrokedSVG
            className={cx('wish-button')}
            fill={isWished ? COLORS.get('additional-red') : undefined}
            component={isWished ? FavSVG : NotFavSVG}
            onClick={isFetchingWishItems ? undefined : onWishButtonClick}
          />
        )}
      </div>
      <div className={cx('info-column')}>
        <Link href={itemUrl} className={cx('link')} color='basic-gray87'>
          <Text weight={600}>{name}</Text>
        </Link>
        <Box marginTop={2}>
          <Text color='basic-gray38'>Арт.: {sid}</Text>
        </Box>
        {Boolean(initialCount) && (
          <Box marginTop={2}>
            <Text element='div' size={12}>
              <div>{`Было в заказе: ${initialCount} ${unit}`}</div>
              <div>{`Вы получите: ${count} ${unit}`}</div>
            </Text>
          </Box>
        )}
        {Boolean(itemPrice) && (
          <Box marginTop={2}>
            <Text element='div' weight={600} size={12}>
              <Price value={itemPrice} currencyGrapheme={currencyGrapheme} />
              {` × ${count} ${unit}`}
            </Text>
          </Box>
        )}
        {Boolean(commonPrice && itemPrice) && (
          <Box marginTop={4}>
            <Text element='div' weight={600}>
              <Price value={commonPrice} currencyGrapheme={currencyGrapheme} />
            </Text>
          </Box>
        )}
        {Boolean(movedOrderId) && (
          <Box marginTop={2}>
            <Text element='div' color='basic-gray38'>
              Перемещен в заказ
            </Text>
            <Link>№{movedOrderId}</Link>
          </Box>
        )}
        {notInStock && (
          <Box marginTop={2}>
            <Text element='div' color='basic-gray38'>
              Нет на складе
            </Text>
          </Box>
        )}
      </div>
      <div className={cx('action-button')}>
        <MoreSVG onClick={onActionsClick} />
      </div>
    </div>
  );
}
