import React, { useRef, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';
import style from './listing-product-card.scss';
import classnames from 'classnames/bind';
import Text from '@dev-dep/ui-nucleons/text';
import FlagsList from '../../../common/components/flags-list';
import Box from '@dev-dep/ui-nucleons/box';
import AddToCartBlock from '../../../common/components/add-to-cart-block';
import ItemProperties from '../../../common/components/item-properties';
import ItemImage from '../item-image';
import ItemName from '../../../common/components/item-name';
import ItemRating from '../item-rating';
import ItemRetailFee from '../../../common/components/item-retail-fee';
import ItemPrice from '../item-price';
import ItemModifier from '../../../common/components/item-modifier';
import isFunction from 'lodash/isFunction';
import AdultBlock from '../../../common/components/adult-block/adult-block';
import withInViewportObserver from '@dev-dep/ui-nucleons/with-in-viewport-observer';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';

const cx = classnames.bind(style);

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
 * @property {Function} [onQuickViewClick] Обработчик нажатия на кнопку быстрого просмотра.
 * @property {Function} [addToCartHandler] Обработчик действий с корзиной.
 * @property {string} [wrapperClassName] Класс для обертки.
 * @property {boolean} [asTile] Тип отображения компонента - tile (иначе list).
 * @property {'xxl|small'} [size] Размер плитки.
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
  addToCartHandler,
  onImageClick,
  onModifierClick,
  onWishClick,
  onQuickViewClick,
  onDetailsClick,

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
  bigImg,
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
  canAddMoreToCart,
  isPriceFixed,
  wrapperClassName,
  updateItemViewed,
  onLoadImage,
  asTile,
  size,
  addObserveWithMargin,
  addGlobalListener,
  getItemWidth,
  isFetchingWishItems,
  onAdultClick,
  isFloatQty,
  qty,
  additionStepText,
  viewType,
}) => {
  const direction = asTile ? 'column' : 'row';
  let imageClassName = 'image';
  let imageSrc = image;
  let adultMarginTop = 0;
  if (asTile) {
    imageClassName = size === 'small' ? 'small-image' : 'big-image';
    imageSrc = size === 'small' ? image : bigImg;
    adultMarginTop = size === 'small' ? 3 : 5;
  }

  const wrapRef = useRef();
  const onResize = useCallback(debounce(() => {
    isFunction(getItemWidth)
    && wrapRef.current
    && getItemWidth(wrapRef.current.offsetWidth);
  }, 1), []);

  useEffect(() => {
    isFunction(addObserveWithMargin)
    && wrapRef.current
    && addObserveWithMargin(wrapRef.current, () => {
      updateItemViewed(sid);
    });
  }, [wrapRef.current]);

  useEffect(() => {
    isFunction(addGlobalListener) && addGlobalListener('resize', onResize);
  }, [wrapRef.current]);

  useEffect(() => {
    isFunction(getItemWidth)
    && wrapRef.current
    && getItemWidth(wrapRef.current.offsetWidth);
  }, [viewType]);

  return (
    <div className={cx(`wrapper-${direction}`, wrapperClassName)} ref={wrapRef}>
      <Box paddingY={asTile ? 0 : 6} display='flex' direction={direction} alignItems='stretch' flex='grow'>
        <div className={cx(`image-box-${direction}`)}>
          <ItemImage
            src={imageSrc}
            alt={name}
            onClick={onImageClick}
            wishProps={{
              className: cx('wish', isWished && 'is-wished'),
              onClick: onWishClick,
              pos: 'left',
              isWished,
            }}
            quickViewBtnProps={{
              onClick: onQuickViewClick,
              className: cx('quick-view-btn'),
            }}
            className={cx(imageClassName)}
            withBlur={shouldHideAdultContent}
            onLoadImage={onLoadImage}
            itemUrl={itemUrl}
            isFetchingWishItems={isFetchingWishItems}
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
          <div className={cx('info-box')}>
            <div className={cx('info-flex-wrapper', direction)}>
              <div className={cx('info', direction)}>
                <div className={cx('details', direction)}>
                  {Boolean(name) && (
                    <ItemName name={name} href={itemUrl} />
                  )}
                  {!asTile && Boolean(properties) && (
                    <Box marginTop={2}>
                      <ItemProperties values={properties} specClassName={cx('detail')} />
                    </Box>
                  )}
                  {!asTile && Boolean(deliveryInfo) && (
                    <Box marginTop={2}>
                      <Text
                        color='gray38'
                        lineHeight={20}
                        size={14}
                        children={deliveryInfo}
                      />
                    </Box>
                  )}
                  {isPriceFixed && (
                    <div className={cx('price-fixed', direction)}>
                      <Box marginTop={2}>
                        <Text
                          color='gray38'
                          lineHeight={20}
                          size={14}
                          children='Без скидок'
                        />
                      </Box>
                    </div>
                  )}
                  {Boolean(rating) && Boolean(reviewsCount) && (
                    <ItemRating marginTop={4} value={rating} reviewsCount={reviewsCount} />
                  )}
                  {Boolean(modifierProps) && (
                    <ItemModifier
                      layout={asTile ? 'block' : 'inline'}
                      onClick={onModifierClick}
                      {...modifierProps}
                    />
                  )}
                </div>
                <div className={cx('prices', direction)}>
                  {Boolean(price) && (
                    <ItemPrice
                      price={price}
                      priceOld={priceMax}
                      currencyGrapheme={currencyGrapheme}
                      wholesaleProps={wholesaleProps}
                      priceLayout={asTile ? 'row' : 'column'}
                      unitPrice={unitPrice}
                      measure={measure}
                      onDetailsClick={onDetailsClick}
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
                    />
                  )}
                </div>
              </div>
              <Box display='flex'
                direction='column'
                justifyContent='between'
                alignItems={asTile ? 'baseline' : 'center'}
                marginTop={asTile ? 3 : 0}
                marginBottom={asTile ? 1 : 0}
                dangerouslySetInlineStyle={{ __style: { alignSelf: 'flex-start', maxWidth: '100%' } }}
              >
                {asTile && !isEmpty(markupData) && Boolean(qty) && qty < markupData.count && (
                  <ItemRetailFee
                    marginTop={2}
                    price={markupData.cost}
                    minQty={markupData.count}
                    unit={markupData.unit}
                    currencyGrapheme={currencyGrapheme}
                    isSmaller
                  />
                )}
                <AddToCartBlock
                  onAdd={() => {
                    isFunction(addToCartHandler) && addToCartHandler('add');
                  }}
                  onSubtract={() => {
                    isFunction(addToCartHandler) && addToCartHandler('subtract');
                  }}
                  onChange={value => {
                    isFunction(addToCartHandler) && addToCartHandler('change', value);
                  }}
                  additionStepText={additionStepText}
                  className={cx('add-to-cart', direction, size)}
                  quantity={displayedQuantity}
                  qty={qty}
                  isFetching={isCartFetching}
                  hasPlusButton={canAddMoreToCart}
                  asTile={asTile}
                  isFloatQty={isFloatQty}
                />
                {!badges.length && Boolean(sid) && !asTile && (
                  <Text color='gray38' size={14} lineHeight={20}>
                    Артикул: {sid}
                  </Text>
                )}
              </Box>
            </div>
            {Boolean(badges.length) && (
              <Box display='flex'
                marginTop={asTile ? -4 : 6}
                marginBottom={asTile ? 2 : 0}
                justifyContent='between'
              >
                <FlagsList
                  flags={badges}
                />
                {Boolean(sid) && !asTile && (
                  <div className={cx('sid')}>
                    <Text color='gray38' size={14} lineHeight={20}>
                      Артикул: {sid}
                    </Text>
                  </div>
                )}
              </Box>
            )}
          </div>
        )}
      </Box>
    </div>
  );
};

export default withInViewportObserver(
  withGlobalListeners(ListItem),
  {
    rootMargin: '100px 0px 100px 0px',
  },
  'addObserveWithMargin'
);
