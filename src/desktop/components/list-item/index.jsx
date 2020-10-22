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
import Link from '@dev-dep/ui-nucleons/link';
import WholesalePrice from '../wholesale-price';

const cx = classnames.bind(style);

/**
 * @typedef ItemProps Свойства компонента товара.
 * @property {Array} [badges] Массив шильдиков.
 * @property {string} currencyGrapheme Графема валюты.
 * @property {string} [deliveryInfo] Информация о доставке.
 * @property {Object|null} [markupData] Данные наценки за комплектацию.
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
 * @property {number} [balance] Остаток на складе.
 * @property {string} [balancePluralNameFormat] Единицы измерения товара для остатка на складе.
 * @property {string} [unit='шт'] Единицы измерения товара.
 * @property {Object} [wholesaleProps] Свойства крупного опта.
 * @property {Function} [onWishClick] Обработчик нажатия на избранное.
 * @property {Function} [onImageClick] Обработчик нажатия на картинку товара.
 * @property {Function} [onModifierClick] Обработчик нажатия селектора модификатора.
 * @property {Function} [onQuickViewClick] Обработчик нажатия на кнопку быстрого просмотра.
 * @property {Function} [addToCartHandler] Обработчик действий с корзиной.
 * @property {string} [wrapperClassName] Класс для обертки.
 * @property {boolean} [asTile] Тип отображения компонента - tile (иначе list).
 * @property {boolean} [hasQuickPreview] Признак наличия кнопки быстрого просмотра.
 * @property {boolean} [hasSelectionButton] Признак наличия кнопки выделения товара.
 * @property {boolean} [hasAddToCartBlock] Признак наличия блока добавления товара в корзину.
 * @property {boolean} [hasWishButton] Признак наличия кнопки добавления в избранное.
 * @property {'xxl|small'} [size] Размер плитки.
 * @property {Function} addObserveWithMargin Функция подписки на Intersection Observer.
 * @property {Function} onAdultClick Обработчик нажатия на ссылку в блоке 18+.
 * @property {string} dataKey Значение дата-атрибута key.
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
  onAnaloguesClick,
  onTrashClick,

  // Свойства дочерних компонентов
  wholesaleProps,
  modifierProps,
  selectionProps,

  // Данные о товаре
  badges = [],
  balance,
  balancePluralNameFormat,
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
  inStockText,
  inStockTextStyleProps,
  filtersHidden,
  dataKey,

  // Пропы кастомизации
  hasQuickPreview,
  hasSelectionButton,
  hasAddToCartBlock,
  hasWishButton,
  hasAnaloguesButton,
  hasTrashButton,
}) => {
  const isUnitPrice = unitPrice && measure;
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
  }, [viewType, filtersHidden]);

  return (
    <div className={cx(`wrapper-${direction}`, wrapperClassName)} ref={wrapRef} data-key={dataKey}>
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
            selectionProps={selectionProps}
            className={cx(imageClassName)}
            withBlur={shouldHideAdultContent}
            onLoadImage={onLoadImage}
            itemUrl={itemUrl}
            isFetchingWishItems={isFetchingWishItems}
            hasQuickPreview={hasQuickPreview && !shouldHideAdultContent}
            hasWishButton={hasWishButton && !shouldHideAdultContent}
            hasSelectionButton={hasSelectionButton}
            hasTrashButton={hasTrashButton}
            trashButtonProps={{
              onClick: onTrashClick,
              className: cx('trash-cart-button', 'display-on-hover'),
            }}
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
                  {!asTile && !isUnitPrice && Boolean(wholesaleProps) && Boolean(wholesaleProps.price) && (
                    <Box marginTop={2}>
                      <WholesalePrice
                        currencyGrapheme={currencyGrapheme}
                        className={cx('wholesale')}
                        onDetailsClick={onDetailsClick}
                        {...wholesaleProps}
                      />
                    </Box>
                  )}
                  {!asTile && Boolean(properties) && (
                    <Box marginTop={2}>
                      <ItemProperties
                        values={properties}
                        specClassName={cx('detail')}
                      />
                      {Boolean(sid) && (
                        <Text color='gray38' lineHeight={20} size={14}>
                         Арт.:&nbsp;{sid}
                        </Text>
                      )}
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
                    <ItemRating marginTop={3} value={rating} reviewsCount={reviewsCount} />
                  )}
                  {size === 'small' && Boolean(sid) && (
                    <Box marginTop={2}>
                      <Text color='gray38' lineHeight={20} size={14}>
                        Арт.:&nbsp;{sid}
                      </Text>
                    </Box>
                  )}
                  {Boolean(modifierProps) && (
                    <ItemModifier
                      layout={asTile ? 'block' : 'inline'}
                      onClick={onModifierClick}
                      withTitle
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
                      showWholesalePrice={asTile}
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
                dangerouslySetInlineStyle={{ __style: { alignSelf: 'stretch', maxWidth: '100%' } }}
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
                {hasAddToCartBlock && (
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
                )}
                {!badges.length && Boolean(balance) && !asTile && (
                  <Text color='gray38' size={14} lineHeight={20}>
                    На складе {balance} {balancePluralNameFormat}.
                  </Text>
                )}
              </Box>
              {(inStockText || hasAnaloguesButton) && (
                <div className={cx('in-stock-wrapper')}>
                  {Boolean(inStockText) && <Text weight={600} children={inStockText} {...inStockTextStyleProps} />}
                  {hasAnaloguesButton && (
                    <div className={cx('analogues', 'display-on-hover')}>
                      <Link onClick={onAnaloguesClick}>
                        <Text weight={600}>Аналоги</Text>
                      </Link>
                    </div>
                  )}
                </div>
              )}
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
                {Boolean(balance) && !asTile && (
                  <div className={cx('balance')}>
                    <Text color='gray38' size={14} lineHeight={20}>
                      На складе {balance} {balancePluralNameFormat}.
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