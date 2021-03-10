import React from 'react';
import styles from './product-card.scss';
import classnames from 'classnames/bind';
import MoreSVG from '@dev-dep/ui-quarks/icons/24x24/Filled/more';
import Link from '@dev-dep/ui-nucleons/link';
import Price from '@dev-dep/ui-nucleons/price';
import Box from '@dev-dep/ui-nucleons/box';
import Text from '@dev-dep/ui-nucleons/text';
import WishButton from '../../../common/components/wish-button';

const cx = classnames.bind(styles);

/**
 * Компонент карточки товара.
 * @param { Object } props Свойства компонента.
 * @param { string } props.itemUrl Ссылка на страницу товара.
 * @param { string } props.imageUrl Ссылка на картинку товара.
 * @param { string } props.name Название товара.
 * @param { number } props.sid Артикул товара.
 * @param { boolean } props.isWished Товар добавлен в избранное.
 * @param { number } props.count Количество товара, которое будет доставлено.
 * @param { number } props.initialCount Изначально добавленное количество товара при заказе.
 * @param { number } props.movedOrderId Id заказа в который перемещен товар.
 * @param { boolean } props.notInStock Признак товара не в наличии.
 * @param { string } props.currencyGrapheme Символ валюты.
 * @param { number } props.commonPrice Общая сумма товара.
 * @param { number } props.itemPrice Цена товара за единицу.
 * @param { Function } props.onWishButtonClick Обработчик добавления/удаления в избранное.
 * @param { Function } props.onActionsClick Обработчик нажатия на кнопку действий над товаром.
 * @param { Function } props.isFetchingWishItems Признак загрузки добавления товара в список избранного.
 * @return { ReactElement } Компонент карточки товара.
 */
const ProductCard = (
  {
    itemUrl,
    imageUrl,
    name,
    sid,
    isWished,
    count,
    initialCount,
    movedOrderId,
    notInStock,
    currencyGrapheme,
    commonPrice,
    itemPrice,
    onWishButtonClick,
    onActionsClick,
    isFetchingWishItems,
  }
) => (
  <div className={cx('wrapper')}>
    <div className={cx('image-wrapper')}>
      <Link href={itemUrl}>
        <img src={imageUrl} className={cx('image')} />
      </Link>
      <WishButton
        onClick={onWishButtonClick}
        className={cx('wish-button', { 'is-wished': isWished })}
        size={20}
        isWished={isWished}
        isFetchingWishItems={isFetchingWishItems}
      />
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
            <div>Было в заказе: {initialCount} шт.</div>
            <div>Вы получите: {count} шт.</div>
          </Text>
        </Box>
      )}
      {Boolean(itemPrice)
        && (
          <Box marginTop={2}>
            <Text element='div' weight={500} size={12}>
              <Price value={itemPrice} currencyGrapheme={currencyGrapheme} /> × {count} шт.
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
