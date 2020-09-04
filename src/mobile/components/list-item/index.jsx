import React from 'react';
import classnames from 'classnames/bind';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';

import getDeclination from '@dev-dep/ui-nucleons/helpers/get-declination';
import Button from '@dev-dep/ui-nucleons/button';
import Icon from '@dev-dep/ui-nucleons/icon';
import Link from '@dev-dep/ui-nucleons/link';
import Text from '@dev-dep/ui-nucleons/text';
import Box from '@dev-dep/ui-nucleons/box';

import ItemProperties from '../../../common/components/item-properties';
import ItemName from '../../../common/components/item-name';
import ItemRetailFee from '../../../common/components/item-retail-fee';
import ItemModifier from '../../../common/components/item-modifier';
import AdultBlock from '../../../common/components/adult-block/adult-block';
import spinnerIcon from '../../../common/icons/white-spinner.svg';
import stepArrows from '../../../common/icons/step-arrows.svg';
import tripleDots from '../../../common/icons/triple-dots.svg';
import style from './list-item.scss';
import ItemImage from '../item-image';
import ItemRating from '../item-rating';
import ItemPrice from '../item-price';

const cx = classnames.bind(style);

const optionsDeclinations = Object.freeze([
  'вариант',
  'варианта',
  'вариантов',
]);

/**
 * @typedef ItemProps Свойства компонента товара.
 * @property {Array} [badges] Массив шильдиков.
 * @property {string} currencyGrapheme Графема валюты.
 * @property {string} [deliveryInfo] Информация о доставке.
 * @property {Object|null} [markupData] Данные наценки за сборку.
 * @property {string} [image] Ссылка на изображение товара.
 * @property {Object} [import('../modifier-select').ModifierSelectProps] Свойства модификатора.
 * @property {boolean} isWished Признак товара в избранном.
 * @property {string} itemUrl Ссылка на товар.
 * @property {string} name Название товара.
 * @property {number} price Текущая цена.
 * @property {number} priceMax Старая цена.
 * @property {import('../../../common/components/item-properties').ItemProperty[]} [properties] Характеристики товара.
 * @property {string} [qtyRule] Правило для добавления в корзину.
 * @property {number} [rating] Оценка.
 * @property {number} [reviewsCount] Количество отзывов.
 * @property {number} sid Артикул.
 * @property {string} [unit='шт'] Единицы измерения товара.
 * @property {Object} [wholesaleProps] Свойства крупного опта.
 * @property {Function} [onWishClick] Обработчик нажатия на избранное.
 * @property {Function} [onImageClick] Обработчик нажатия на картинку товара.
 * @property {Function} [onModifierClick] Обработчик нажатия селектора модификатора.
 * @property {Function} [onCartClick] Обработчик нажатия на кнопку "В корзину".
 * @property {string} [wrapperClassName] Класс для обертки.
 * @property {boolean} [asTile] Тип отображения компонента - tile (иначе list).
 * @property {Function} addObserveWithMargin Функция подписки на Intersection Observer.
 * @property {Function} onAdultClick Обработчик нажатия на ссылку в блоке 18+.
 */

/**
 * Компонент отображения товара списком.
 * @param {ItemProps} props Свойства компонента товара.
 * @return {ReactElement} Компонент отображения товара списком.
 */
export const ListItem = ({
  // Обработчики
  onCartInputClick,
  onCartButtonClick,
  onImageClick,
  onModifierClick,
  onWishClick,
  onDetailsClick,
  onActionsClick,

  // Свойства дочерних компонентов
  wholesaleProps,
  modifierProps,

  // Данные о товаре
  badges = [],
  isCartFetching,
  currencyGrapheme,
  deliveryInfo,
  markupData = {},
  image,
  isWished,
  itemUrl,
  name = '',
  price,
  priceMax,
  unitPrice,
  measure,
  properties,
  rating,
  reviewsCount,
  sid = '',
  displayedQuantity,
  shouldHideAdultContent,
  isAuthUser,
  wrapperClassName,
  asTile,
  isFetchingWishItems,
  onAdultClick,
  qty,
  id,
  additionStepText,
  inStockProps,

  // Пропы кастомизации
  hasAddToCartBlock = true,
  hasWishButton = true,
  hasSid = true,
  hasActionsButton = true,
  nameTextProps,
}) => {
  const direction = asTile ? 'column' : 'row';
  const adultMarginTop = 0;
  return (
    <div className={cx(`wrapper-${direction}`, wrapperClassName)}>
      <Box display='flex' direction={direction} alignItems='stretch' flex='grow'>
        <div className={cx(`image-box-${direction}`)}>
          <ItemImage
            src={image}
            alt={name}
            onClick={onImageClick}
            wishProps={hasWishButton && {
              className: cx('wish', isWished && 'is-wished'),
              onClick: onWishClick,
              pos: 'left',
              isWished,
            }}
            className={direction}
            withBlur={shouldHideAdultContent}
            itemUrl={itemUrl}
            isFetchingWishItems={isFetchingWishItems}
            badges={badges}
          />
        </div>
        {shouldHideAdultContent && (
          <AdultBlock
            marginTop={adultMarginTop}
            isAuthUser={isAuthUser}
            onClick={onAdultClick}
          />
        )}
        {!shouldHideAdultContent && (
          <div className={cx('info-box', direction)}>
            <div className={cx('prices')}>
              {Boolean(price) && (
                <ItemPrice
                  price={price}
                  priceOld={priceMax}
                  currencyGrapheme={currencyGrapheme}
                  wholesaleProps={wholesaleProps}
                  viewType={asTile ? 'column' : 'row'}
                  unitPrice={unitPrice}
                  measure={measure}
                  onDetailsClick={onDetailsClick}
                  itemId={id}
                />
              )}
            </div>
            {Boolean(name) && (
              <div className={cx('title-wrapper', !asTile && 'row')}>
                <ItemName name={name} href={itemUrl} nameTextProps={nameTextProps} />
              </div>
            )}
            {Boolean(modifierProps) && asTile && (
              <Box marginTop={2} dangerouslySetInlineStyle={{ __style: { fontSize: '10px' } }}>
                <Link href={itemUrl}>
                  <Text
                    color='gray38'
                    lineHeight={12}
                    children={`Еще ${modifierProps.count} ${getDeclination(modifierProps.count, optionsDeclinations)}`}
                  />
                </Link>
              </Box>
            )}
            {Boolean(rating) && Boolean(reviewsCount) && (
              <ItemRating marginTop={2} value={rating} reviewsCount={reviewsCount} />
            )}
            {!asTile && Boolean(properties) && (
              <Box marginTop={2}>
                <ItemProperties
                  values={properties}
                  specClassName={cx('detail')}
                  color='gray87'
                  size={12}
                  lineHeight={16}
                />
              </Box>
            )}
            {!asTile && Boolean(deliveryInfo) && (
              <Box marginTop={2}>
                <Text
                  color='gray87'
                  lineHeight={16}
                  size={12}
                  children={deliveryInfo}
                />
              </Box>
            )}
            {hasSid && Boolean(sid) && !asTile && (
              <Box marginTop={2}>
                <Text color='gray87' size={12} lineHeight={16}>
                  Артикул: {sid}
                </Text>
              </Box>
            )}
            {Boolean(inStockProps) && (
              <Box marginTop={4}>
                <span
                  className={cx('in-stock', inStockProps.isGray && 'gray')}
                  children={inStockProps.text}
                />
              </Box>
            )}
            {Boolean(modifierProps) && !asTile && (
              <ItemModifier
                layout='inline'
                onClick={onModifierClick}
                {...modifierProps}
              />
            )}
            {!asTile && !isEmpty(markupData) && Boolean(qty) && qty < markupData.count && (
              <ItemRetailFee
                isFixed
                marginTop={2}
                price={markupData.cost}
                minQty={markupData.count}
                unit={markupData.unit}
                currencyGrapheme={currencyGrapheme}
                isSmaller
              />
            )}
            {hasAddToCartBlock && (
              <>
                {!asTile && isUndefined(displayedQuantity) && (
                  <div className={cx('add-to-cart')}>
                    <div className={cx('cell')}>
                      <Button
                        className={cx('cart-button')}
                        onClick={onCartButtonClick}
                      >
                        {isCartFetching
                          ? (
                            <Icon
                              className={cx('button-spinner')}
                              icon={spinnerIcon}
                              size={24}
                              viewBox='0 0 24 24'
                            />
                          )
                          : <>В&nbsp;корзину</>
                        }
                      </Button>
                    </div>
                  </div>
                )}
                {!asTile && !isUndefined(displayedQuantity) && (
                  <div
                    onClick={onCartInputClick}
                    className={cx('in-cart-input-wrapper')}
                  >
                    <span className={cx('in-cart-value')}>{displayedQuantity}</span>
                    <span className={cx('step-arrows')}>
                      <Icon
                        icon={stepArrows}
                        size={14}
                        color='black'
                        role='button'
                      />
                    </span>
                  </div>
                )}
                {!asTile && Boolean(additionStepText) && (
                  <div className={cx('min-quantity')}>
                    {additionStepText}
                  </div>
                )}
              </>
            )}
          </div>
        )}
        {hasActionsButton && (
          <Icon size={24} icon={tripleDots} onClick={onActionsClick} className={cx('actions')} />
        )}
      </Box>
    </div>
  );
};

export default ListItem;
