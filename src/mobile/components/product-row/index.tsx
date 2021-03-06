import React from 'react';
import styles from './product-row.module.scss';
import classnames from 'classnames/bind';
import MoreSVG from '@sima-land/ui-quarks/icons/24x24/Filled/more';
import { Link } from '@sima-land/ui-nucleons/link';
import { Price } from '@sima-land/ui-nucleons/price';
import { Box } from '@sima-land/ui-nucleons/box';
import { Text } from '@sima-land/ui-nucleons/text';
import { WishButton } from '../../../common/components/wish-button';

const cx = classnames.bind(styles);

export interface ProductRowProps {
  sid: number;
  itemUrl: string;
  imageUrl: string;
  name: string;
  currencyGrapheme: string;
  itemPrice: number;
  commonPrice: number;
  isFetchingWishItems: boolean;
  isWished: boolean;
  unit: string;
  onActionsClick: () => void;
  onWishButtonClick?: () => void;
  count?: number;
  initialCount?: number;
  movedOrderId?: number;
  notInStock?: boolean;
}

/**
 * Компонент вертикальной карточки товара для списков товаров.
 * @param props Свойства компонента.
 * @param props.itemUrl Ссылка на страницу товара.
 * @param props.imageUrl Ссылка на картинку товара.
 * @param props.name Название товара.
 * @param props.sid Артикул товара.
 * @param props.isWished Товар добавлен в избранное.
 * @param props.count Количество товара, которое будет доставлено.
 * @param props.unit Единицы измерения.
 * @param props.initialCount Изначально добавленное количество товара при заказе.
 * @param props.movedOrderId Id заказа в который перемещен товар.
 * @param props.notInStock Признак товара не в наличии.
 * @param props.currencyGrapheme Символ валюты.
 * @param props.commonPrice Общая сумма товара.
 * @param props.itemPrice Цена товара за единицу.
 * @param props.onWishButtonClick Обработчик добавления/удаления в избранное.
 * @param props.onActionsClick Обработчик нажатия на кнопку действий над товаром.
 * @param props.isFetchingWishItems Признак загрузки добавления товара в список избранного.
 * @return Элемент.
 */
export const ProductRow = ({
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
}: ProductRowProps) => (
  <div className={cx('wrapper')}>
    <div className={cx('image-wrapper')}>
      <Link href={itemUrl}>
        <img src={imageUrl} className={cx('image')} />
      </Link>
      {onWishButtonClick && (
        <WishButton
          onClick={onWishButtonClick}
          className={cx('wish-button', { 'is-wished': isWished })}
          width={20}
          height={20}
          checked={isWished}
          disabled={isFetchingWishItems}
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
