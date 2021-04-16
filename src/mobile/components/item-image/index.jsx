import React, { Component, createRef } from 'react';
import { Link } from '@dev-dep/ui-nucleons/link';
import isFunction from 'lodash/isFunction';
import style from './item-image.scss';
import classnames from 'classnames/bind';
import FlagsList from '../../../common/components/flags-list';
import EighteenPlusSVG from '../../../common/icons/eighteen-plus.svg';
import { WishButton } from '../../../common/components/wish-button';

const cx = classnames.bind(style);

/**
 * @typedef WishProps Свойства функционала избранного.
 * @property {boolean} isWished Признак товара в избранном.
 * @property {string} className Дополнительный класс для избранного.
 * @property {Function} onClick Обработчик клика по избранному.
 * @property {'left'|'right'} pos Позиция иконки.
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
 * @param {boolean} props.withBlur Добавление блюра.
 * @param {boolean} props.isFetchingWishItems Признак загрузки добавления товара в список избранного.
 * @return {ReactElement} Компонент изображения.
 */
export default class ItemImage extends Component {
  /**
   * @inheritdoc
   */
  constructor (props) {
    super(props);
    this.image = createRef();
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
      src,
      alt,
      hasWishButton,
      wishProps,
      className,
      onClick,
      badges,
      withBlur,
      itemUrl,
      isFetchingWishItems,
    } = this.props;
    return (
      <div className={cx('wrapper', className)}>
        {withBlur && (
          <div className={cx('with-blur')}>
            <EighteenPlusSVG width={124} height={124} />
          </div>
        )}
        <div className={cx('image-wrapper')}>
          <Link href={itemUrl}>
            {withBlur
              ? (<div className={cx('with-filter-blur')} children={this.getImage({ src, alt }, onClick)} />)
              : this.getImage({ src, alt }, onClick)
            }
          </Link>
        </div>
        {Array.isArray(badges) && Boolean(badges.length) && !withBlur && (
          <div className={cx('badges')}>
            <FlagsList
              flags={badges}
            />
          </div>
        )}
        {hasWishButton && (
          <WishButton
            isWished={wishProps.isWished}
            className={wishProps.className}
            onClick={wishProps.onClick}
            disabled={isFetchingWishItems}
          />
        )}
      </div>
    );
  }
}
