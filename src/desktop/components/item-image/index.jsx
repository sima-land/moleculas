import React from 'react';
import Icon from '@dev-dep/ui-nucleons/icon';
import Link from '@dev-dep/ui-nucleons/link';
import style from './item-image.scss';
import classnames from 'classnames/bind';
import FlagsList from '../../../common/components/flags-list';
import ItemQuickViewButton from '../../../common/components/item-quick-view-button';
import EighteenPlus from '../../../common/icons/eighteen-plus.svg';
import SelectedIcon from '../../../common/icons/selected.svg';
import WishButton from '../../../common/components/wish-button';
import blackTrashCart from '../../../common/icons/trash-cart.svg';

const cx = classnames.bind(style);

/**
 * @typedef WishProps Свойства функционала избранного.
 * @property {boolean} isWished Признак товара в избранном.
 * @property {string} className Дополнительный класс для избранного.
 * @property {Function} onClick Обработчик клика по избранному.
 * @property {'left'|'right'} pos Позиция иконки.
 */

/**
 * @typedef QuickViewBtnProps Свойства кнопки быстрого просмотра.
 * @property {string} className Дополнительный класс для кнопки быстрого просмотра.
 * @property {Function} onClick Обработчик клика по кнопке быстрого просмотра.
 */

/**
 * @typedef TrashButtonProps Свойства кнопки удаления товара.
 * @property {string} className Класс для кнопки удаления товара.
 * @property {Function} onClick Обработчик клика по кнопке удаления товара.
 */

/**
 * Компонент изображения товара с избранным.
 * @param {Object} props Свойства компонента.
 * @param {string} props.src Ссылка на изображение.
 * @param {string} props.alt Alt для изображения.
 * @param {string} props.className Дополнительный класс для компонента.
 * @param {Function} [props.onClick] Обработчик клика по картинке.
 * @param {Array} [props.badges] Шильдики.
 * @param {WishProps} [props.wishProps] Свойства для избранного.
 * @param {QuickViewBtnProps} [props.quickViewBtnProps] Свойства для кнопки быстрого просмотра.
 * @param {Function} props.onLoadImage Колбэк на загрузку изображения.
 * @param {boolean} props.withBlur Добавление блюра.
 * @param {boolean} props.isFetchingWishItems Признак загрузки добавления товара в список избранного.
 * @param {boolean} props.hasTrashButton Признак наличия кнопки удаления товара.
 * @param {TrashButtonProps} [props.trashButtonProps] Свойства для кнопки удаления товара.
 * @return {ReactElement} Компонент изображения.
 */
export const ItemImage = ({
  src,
  alt,
  wishProps,
  className,
  onClick,
  badges,
  quickViewBtnProps = {},
  onLoadImage,
  withBlur,
  itemUrl,
  isFetchingWishItems,
  selectionProps,
  hasQuickPreview,
  hasSelectionButton,
  hasWishButton,
  hasTrashButton,
  trashButtonProps,
}) => (
  <div className={cx('wrapper', className)}>
    {withBlur && (
      <div className={cx('with-blur')}>
        <Icon icon={EighteenPlus} size={124} />
      </div>
    )}
    <div className={cx('image-wrapper')}>
      <Link href={itemUrl}>
        {withBlur
          ? (<div className={cx('with-filter-blur')} children={getImage({ src, alt }, onClick, onLoadImage)} />)
          : getImage({ src, alt }, onClick, onLoadImage)
        }
      </Link>
      {hasTrashButton && (
        <Icon
          icon={blackTrashCart}
          size={20}
          color='gray87'
          className={trashButtonProps.className}
          onClick={trashButtonProps.onClick}
        />
      )}
      {hasSelectionButton && Boolean(selectionProps) && (
        <div onClick={selectionProps.onSelect} className={cx('selection-container')}>
          <div className={cx('selection-circle')}>
            {selectionProps.isSelected && (
              <Icon icon={SelectedIcon} size={56} />
            )}
          </div>
        </div>
      )}
      {hasQuickPreview && (
        <ItemQuickViewButton
          onClick={quickViewBtnProps.onClick}
          additionalClassName={quickViewBtnProps.className}
        />
      )}
    </div>
    {Array.isArray(badges) && Boolean(badges.length) && (
      <div className={cx('badges')}>
        <FlagsList
          flags={badges}
        />
      </div>
    )}
    {hasWishButton && Boolean(wishProps) && (
      <WishButton
        isWished={wishProps.isWished}
        className={wishProps.className}
        onClick={wishProps.onClick}
        pos={wishProps.pos}
        isFetchingWishItems={isFetchingWishItems}
      />
    )}
  </div>
);

/**
 * Возвращает фото с подсчетом времени загрузки.
 * @param {Object} image Данные изображения.
 * @param {string} image.src Url изображения.
 * @param {string} image.alt Alt изображения.
 * @param {Function} onClick Колбэк на клик по изображению.
 * @param {Function} onLoadImage Колбэк на загрузку изображения.
 * @return {Object} Свойства для компонента.
 */
const getImage = ({
  src,
  alt,
}, onClick, onLoadImage) => {
  const bootStartTime = Date.now();
  return (
    <img
      className={cx('image')}
      src={src}
      alt={alt}
      onClick={onClick}
      onLoad={() => onLoadImage(Date.now() - bootStartTime)}
    />
  );
};

export default ItemImage;
