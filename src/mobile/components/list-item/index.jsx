import React, { useEffect, useRef } from 'react';
import isFunction from 'lodash/isFunction';
import isEmpty from 'lodash/isEmpty';
import style from './list-item.scss';
import classnames from 'classnames/bind';
import Text from '@dev-dep/ui-nucleons/text';
import Box from '@dev-dep/ui-nucleons/box';
import ItemProperties from '../../../common/components/item-properties';
import ItemImage from '../item-image';
import ItemName from '../../../common/components/item-name';
import ItemRating from '../item-rating';
import ItemRetailFee from '../../../common/components/item-retail-fee';
import ItemPrice from '../item-price';
import ItemModifier from '../../../common/components/item-modifier';
import isUndefined from 'lodash/isUndefined';
import AdultBlock from '../../../common/components/adult-block/adult-block';
import getDeclination from '@dev-dep/ui-nucleons/helpers/get-declination';
import Button from '@dev-dep/ui-nucleons/button';
import Icon from '@dev-dep/ui-nucleons/icon';
import Link from '@dev-dep/ui-nucleons/link';
import spinnerIcon from '../../../common/icons/white-spinner.svg';
import stepArrows from '../../../common/icons/step-arrows.svg';
import tripleDots from '../../../common/icons/triple-dots.svg';
import withInViewportObserver from '@dev-dep/ui-nucleons/with-in-viewport-observer';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';
import Types from 'prop-types';

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
 * @property {Object|null} [markupData] Данные наценки за комплектацию.
 * @property {string} [image] Ссылка на изображение товара.
 * @property {Object} [import('../modifier-select').ModifierSelectProps] Свойства модификатора.
 * @property {boolean} isWished Признак товара в избранном.
 * @property {string} itemUrl Ссылка на товар.
 * @property {string} name Название товара.
 * @property {number} price Текущая цена.
 * @property {number} priceMax Старая цена.
 * @property {import('common/components/item-properties').ItemProperty[]} [properties] Характеристики товара.
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
 * @property {Function} [onActionsClick] Обработчик нажатия на кнопку дополнительных действий.
 * @property {Function} [addToCartHandler] Обработчик действий с корзиной.
 * @property {Function} [onCartClick] Обработчик нажатия на кнопку "В корзину".
 * @property {string} [wrapperClassName] Класс для обертки.
 * @property {boolean} [asTile] Тип отображения компонента - tile (иначе list).
 * @property {Function} addObserveWithMargin Функция подписки на Intersection Observer.
 * @property {Function} onAdultClick Обработчик нажатия на ссылку в блоке 18+.
 * @property {Object} inStockProps Свойства информации о закончившемся товаре.
 * @property {boolean} hasAddToCartBlock Признак наличия блока добавления товара в корзину.
 * @property {boolean} hasWishButton Признак наличия кнопки добавления в избранное.
 * @property {boolean} hasActionsButton Признак отображения кнопки дополнительных действий.
 * @property {boolean} hasSid Признак необходимости отображения артикула.
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
  updateItemViewed,
  addObserveWithMargin,
  onLoadImage,
  inStockProps,

  // Пропы кастомизации
  hasAddToCartBlock,
  hasWishButton,
  hasActionsButton,
  hasSid,
}) => {
  const direction = asTile ? 'column' : 'row';
  const adultMarginTop = 0;
  const wrapRef = useRef();

  useEffect(() => {
    isFunction(addObserveWithMargin)
    && wrapRef.current
    && addObserveWithMargin(wrapRef.current, () => {
      isFunction(updateItemViewed) && updateItemViewed(sid);
    });
  }, [wrapRef.current]);

  return (
    <div className={cx(`wrapper-${direction}`, wrapperClassName)} ref={wrapRef}>
      <Box display='flex' direction={direction} alignItems='stretch' flex='grow'>
        <div className={cx(`image-box-${direction}`)}>
          <ItemImage
            src={image}
            alt={name}
            onClick={onImageClick}
            hasWishButton={hasWishButton && !shouldHideAdultContent}
            wishProps={{
              className: cx('wish'),
              onClick: onWishClick,
              isWished,
            }}
            className={direction}
            withBlur={shouldHideAdultContent}
            itemUrl={itemUrl}
            isFetchingWishItems={isFetchingWishItems}
            badges={badges}
            onLoadImage={onLoadImage}
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
                <ItemName name={name} href={itemUrl} />
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

export default withInViewportObserver(
  withGlobalListeners(ListItem),
  {
    rootMargin: '100px 0px 100px 0px',
  },
  'addObserveWithMargin'
);

ListItem.propTypes = {
  /**
   * Обработчик нажатия на поле ввода корзины.
   */
  onCartInputClick: Types.func,

  /**
   * Обработчик нажатия на кнопку добавления в корзину.
   */
  onCartButtonClick: Types.func,

  /**
   * Обработчик нажатия на кнопку дополнительных действий.
   */
  onActionsClick: Types.func,

  /**
   * Обработчик нажатия на картинку товара.
   */
  onImageClick: Types.func,

  /**
   * Обработчик нажатия селектора модификатора.
   */
  onModifierClick: Types.func,

  /**
   * Обработчик нажатия на избранное.
   */
  onWishClick: Types.func,

  /**
   * Обработчик нажатия на кнопку деталей крупного опта.
   */
  onDetailsClick: Types.func,

  /**
   * Свойства информации о закончившемся товаре.
   */
  inStockProps: Types.object,

  /**
   * Признак необходимости отображения артикула.
   */
  hasSid: Types.bool,

  /**
   * Признак отображения кнопки дополнительных действий.
   */
  hasActionsButton: Types.bool,

  /**
   * Свойства для компонента <Text /> содержащего наименование товара.
   */
  nameTextProps: Types.object,

  /**
   * Свойства крупного опта.
   */
  wholesaleProps: Types.object,

  /**
   * Свойства модификатора.
   */
  modifierProps: Types.object,

  /**
   * Массив шильдиков.
   */
  badges: Types.array,

  /**
   * Признак загрузки данных корзины.
   */
  isCartFetching: Types.bool,

  /**
   * Графема валюты.
   */
  currencyGrapheme: Types.string.isRequired,

  /**
   * Информация о доставке.
   */
  deliveryInfo: Types.string,

  /**
   * Данные наценки за комплектацию.
   */
  markupData: Types.object,

  /**
   * Ссылка на изображение товара.
   */
  image: Types.string,

  /**
   * Признак товара в избранном.
   */
  isWished: Types.bool.isRequired,

  /**
   * Ссылка на товар.
   */
  itemUrl: Types.string,

  /**
   * Название товара.
   */
  name: Types.string.isRequired,

  /**
   * Текущая цена.
   */
  price: Types.number.isRequired,

  /**
   * Старая цена.
   */
  priceMax: Types.number,

  /**
   * Цена единицы товара.
   */
  unitPrice: Types.number,

  /**
   * Графема валюты единицы товара.
   */
  measure: Types.string,

  /**
   * Характеристики товара.
   */
  properties: Types.array,

  /**
   * Оценка.
   */
  rating: Types.number,

  /**
   * Количество отзывов.
   */
  reviewsCount: Types.number,

  /**
   * Артикул.
   */
  sid: Types.number.isRequired,

  /**
   * Отображаемое количество товара в корзине.
   */
  displayedQuantity: Types.number,

  /**
   * Нужно ли скрывать товар 18+.
   */
  shouldHideAdultContent: Types.bool,

  /**
   * Признак авторизованности пользователя.
   */
  isAuthUser: Types.bool,

  /**
   * Класс для обертки.
   */
  wrapperClassName: Types.string,

  /**
   * Тип отображения компонента - tile (иначе list).
   */
  asTile: Types.bool,

  /**
   * Размер плитки.
   */
  size: Types.oneOf(['xxl', 'small']),

  /**
   * Признак выполнения добавления товара в список избранного.
   */
  isFetchingWishItems: Types.bool,

  /**
   * Обработчик нажатия на ссылку в блоке 18+.
   */
  onAdultClick: Types.func,

  /**
   * Количество товара в корзине.
   */
  qty: Types.number,

  /**
   * Текст под полем ввода количества товара.
   */
  additionStepText: Types.string,

  /**
   * Признак наличия блока добавления товара в корзину.
   */
  hasAddToCartBlock: Types.bool,

  /**
   * Признак наличия кнопки добавления в избранное.
   */
  hasWishButton: Types.bool,
};
