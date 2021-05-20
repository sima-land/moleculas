import React, { Component, createRef } from 'react';
import { Link } from '@dev-dep/ui-nucleons/link';
import isFunction from 'lodash/isFunction';
import style from './item-image.scss';
import classnames from 'classnames/bind';
import FlagsList from '../../../common/components/flags-list';
import EighteenPlusSVG from '../../../common/icons/eighteen-plus.svg';
import { WishButton } from '../../../common/components/wish-button';
import { BadgeProps } from '../../../common/components/badge';

export interface ItemImageProps {
  src?: string
  alt?: string
  hasWishButton?: boolean
  wishProps?: {
    isWished?: boolean
    className?: string
    onClick?: React.MouseEventHandler
  }
  className?: string
  onClick: React.MouseEventHandler
  badges: BadgeProps[]
  withBlur?: boolean
  itemUrl?: string
  isFetchingWishItems?: boolean
  onLoadImage: (duration: number) => void
}

const cx = classnames.bind(style);

/**
 * Компонент изображения товара с избранным.
 * @param props Свойства компонента.
 * @param props.src Ссылка на изображение.
 * @param props.alt Alt для изображения.
 * @param props.className Дополнительный класс для компонента.
 * @param props.onClick Обработчик клика по картинке.
 * @param props.badges Шильдики.
 * @param props.wishProps Свойства для избранного.
 * @param props.withBlur Добавление блюра.
 * @param props.isFetchingWishItems Признак загрузки добавления товара в список избранного.
 */
export default class ItemImage extends Component<ItemImageProps> {
  bootStartTime: number;
  image: any;

  /**
   * @inheritdoc
   */
  constructor (props: any) {
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
  }: any, onClick: any) => (
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
            checked={wishProps?.isWished}
            className={wishProps?.className}
            onClick={wishProps?.onClick}
            disabled={isFetchingWishItems}
          />
        )}
      </div>
    );
  }
}
