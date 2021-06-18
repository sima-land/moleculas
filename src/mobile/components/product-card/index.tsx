import React from 'react';
import styles from './product-card.module.scss';
import classnames from 'classnames/bind';
import MoreSVG from '@dev-dep/ui-quarks/icons/24x24/Filled/more';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Price } from '@dev-dep/ui-nucleons/price';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import { WishButton } from '../../../common/components/wish-button';
import { isFunction } from 'lodash';

const cx = classnames.bind(styles);

export type Props = {
  sid: number,
  itemUrl: string,
  imageUrl: string,
  name: string,
  currencyGrapheme: string,
  itemPrice: number,
  commonPrice: number,
  isFetchingWishItems: boolean,
  isWished: boolean,
  unit: string,
  onActionsClick: () => void,
  onWishButtonClick?: () => void,
  count?: number,
  initialCount?: number,
  movedOrderId?: number,
  notInStock?: boolean,
};

/**
 * Компонент карточки товара.
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
 * @return Компонент карточки товара.
 */
const ProductCard = ({
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
}: Props): React.ReactElement => (
  <div className={cx('wrapper')}>
    <div className={cx('image-wrapper')}>
      <Link href={itemUrl}>
        <img src={imageUrl} className={cx('image')} />
      </Link>
      {isFunction(onWishButtonClick) && (
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
      <Link href={itemUrl} className={cx('link')} color='gray87'>
        <Text weight={500}>{name}</Text>
      </Link>
      <Box marginTop={2}>
        <Text color='gray38'>
          Арт.: {sid}
        </Text>
      </Box>
      {Boolean(initialCount)
      && (
        <Box marginTop={2}>
          <Text element='div' size={12}>
            <div>{`Было в заказе: ${initialCount} ${unit}`}</div>
            <div>{`Вы получите: ${count} ${unit}`}</div>
          </Text>
        </Box>
      )}
      {Boolean(itemPrice)
        && (
          <Box marginTop={2}>
            <Text element='div' weight={500} size={12}>
              <Price value={itemPrice} currencyGrapheme={currencyGrapheme} />{` × ${count} ${unit}`}
            </Text>
          </Box>
        )
      }
      {Boolean(commonPrice && itemPrice)
        && (
          <Box marginTop={4}>
            <Text element='div' weight={500}>
              <Price value={commonPrice} currencyGrapheme={currencyGrapheme} />
            </Text>
          </Box>
        )
      }
      {Boolean(movedOrderId)
        && (
          <Box marginTop={2}>
            <Text element='div' color='gray38'>Перемещен в заказ</Text>
            <Link>№{movedOrderId}</Link>
          </Box>
        )
      }
      {notInStock
        && (
          <Box marginTop={2}>
            <Text element='div' color='gray38'>Нет на складе</Text>
          </Box>
        )
      }
    </div>
    <div className={cx('action-button')}>
      <MoreSVG onClick={onActionsClick} />
    </div>
  </div>
);

export default ProductCard;
