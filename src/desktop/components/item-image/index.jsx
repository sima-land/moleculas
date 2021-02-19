import React, { Component, createRef } from 'react';
import Link from '@dev-dep/ui-nucleons/link';
import classnames from 'classnames/bind';
import isFunction from 'lodash/isFunction';
import style from './item-image.scss';
import FlagsList from '../../../common/components/flags-list';
import EighteenPlusSVG from '../../../common/icons/eighteen-plus.svg';
import SelectedSVG from '../../../common/icons/selected.svg';
import WishButton from '../../../common/components/wish-button';
import QuickViewButton from '../../../common/components/quick-view-button';
import TrashCartSVG from '../../../common/icons/trash-cart.svg';

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
 * @param {Object} props.selectionProps Свойства выделения товара.
 * @param {boolean} props.hasSelectionButton Признак наличия кнопки выделения товара.
 * @return {ReactElement} Компонент изображения.
 */
export default class ItemImage extends Component {
  /**
   * @inheritdoc
   */
  constructor (props) {
    super(props);
    this.state = {
      currentPhotoIndex: null,
    };
    this.image = createRef();
    this.imageWrapper = createRef();
    this.bootStartTime = Date.now();
  }

  /**
   * @inheritdoc
   */
  componentDidMount () {
    const img = this.image.current;
    const { onLoadImage } = this.props;
    if (img && img.complete && isFunction(onLoadImage)) {
      onLoadImage(Date.now() - this.bootStartTime);
    }
  }

  /**
   * Возвращает фото.
   * @param {Object} image Данные изображения.
   * @param {string} image.src Url изображения.
   * @param {string} image.alt Alt изображения.
   * @param {Function} onClick Колбэк на клик по изображению.
   * @return {Object} Свойства для компонента.
   */
  getImage = ({
    src,
    alt,
  }, onClick) => (
    <img
      className={cx('image')}
      src={src}
      alt={alt}
      ref={this.image}
      onClick={onClick}
    />
  );

  /**
   * @inheritdoc
   */
  render () {
    const {
      alt,
      className,
      onClick,
      badges,
      quickViewBtnProps = {},
      withBlur,
      itemUrl,
      isFetchingWishItems,
      photos = [],
      fakeDivClassName,
      buttonsPos = 'left',
      src,
      hasTrashButton,
      trashButtonProps,
      hasWishButton,
      wishProps,
      hasQuickPreview,
      hasSelectionButton,
      selectionProps,
    } = this.props;
    const { currentPhotoIndex } = this.state;
    const currentPhoto = currentPhotoIndex === null ? src : photos[currentPhotoIndex];
    return (
      <div
        className={cx('wrapper', className)}
        ref={this.imageWrapper}
        onMouseLeave={() => this.setState({ currentPhotoIndex: null })}
      >
        {withBlur && (
          <div className={cx('with-blur')}>
            <EighteenPlusSVG width={124} height={124} />
          </div>
        )}
        <div className={cx('image-wrapper')}>
          <Link href={itemUrl}>
            {Array.isArray(photos) && photos.length > 1 && !withBlur && this.imageWrapper.current && (
              <div className={cx('fake-hover-wrapper', fakeDivClassName)}>
                {photos.map((value, index) => (
                  <div
                    className={cx('fake-hover', { selected: index === currentPhotoIndex })}
                    style={{
                      width: this.imageWrapper.current.offsetWidth / photos.length,
                      left: (this.imageWrapper.current.offsetWidth / photos.length) * index,
                    }}
                    key={index + 100}
                    onMouseOver={() => this.setState({ currentPhotoIndex: index })}
                  >
                    <div className={cx('fake-hover-label')} />
                  </div>
                ))}
              </div>
            )}
            {withBlur
              ? (
                <div
                  className={cx('with-filter-blur')}
                  children={this.getImage({ src: currentPhoto, alt }, onClick)}
                />
              ) : this.getImage({ src: currentPhoto, alt }, onClick)
            }
          </Link>
          {hasTrashButton && (
            <TrashCartSVG
              width={24}
              height={24}
              color='gray87'
              className={cx('icon', buttonsPos, trashButtonProps.className)}
              onClick={trashButtonProps.onClick}
              data-testid='item-image:remove-button'
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
        {hasWishButton && (
          <WishButton
            isWished={wishProps.isWished}
            className={cx(
              'icon',
              buttonsPos,
              hasTrashButton && 'as-second',
              wishProps.className
            )}
            onClick={wishProps.onClick}
            isFetchingWishItems={isFetchingWishItems}
          />
        )}
        {hasQuickPreview && (
          <QuickViewButton
            onClick={quickViewBtnProps.onClick}
            className={cx(
              'icon',
              buttonsPos,
              (hasTrashButton || hasWishButton) && 'as-second',
              (hasTrashButton && hasWishButton) && 'as-third',
              quickViewBtnProps.className
            )}
          />
        )}
        {hasSelectionButton && Boolean(selectionProps) && (
          <div onClick={selectionProps.onSelect} className={cx('selection-container')}>
            <div className={cx('selection-circle')}>
              {selectionProps.isSelected && (
                <SelectedSVG width={56} height={56} />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
