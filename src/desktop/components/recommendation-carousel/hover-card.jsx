import { getOriginCorrection } from '@dev-dep/ui-nucleons/with-tooltip/utils';
import React, { useRef, useState } from 'react';
import { ProductCard } from './product-card';
import classnames from 'classnames/bind';
import styles from './hover-card.scss';

const cx = classnames.bind(styles);

/**
 * Карточка товара, появляющаяся над элементом карусели.
 * @param {Object} props Свойства компонента.
 * @return {ReactElement} Элемент.
 */
export const HoverCard = ({
  controlRef,
  inCartControlProps,
  onQuickViewClick,
  onFavoriteClick,
  ...restProps
}) => {
  const ref = useRef();
  const [itemInfo, setItemInfo] = useState();

  // eslint-disable-next-line require-jsdoc
  const show = (info, event) => {
    const element = ref.current;
    const rect = event.currentTarget.getBoundingClientRect();
    const correction = getOriginCorrection(ref.current);

    ref.current.classList.remove(cx('hidden'));
    element.style.left = `${correction.x + rect.left - 16}px`;
    element.style.top = `${correction.y + rect.top - 16}px`;
    element.style.width = `${rect.width + 32}px`;

    setItemInfo(info);
  };

  // eslint-disable-next-line require-jsdoc
  const hide = () => {
    ref.current && ref.current.classList.add(cx('hidden'));
  };

  // прокидываем управление чтобы не поднимать состояние выше
  controlRef.current = controlRef.current || {};
  Object.assign(controlRef.current, { show, hide });

  return (
    <ProductCard
      {...restProps}
      ref={ref}
      className={cx('card', 'hidden')}
      onMouseLeave={hide}
      inCartControlProps={inCartControlProps}
      productInfo={{
        ...itemInfo,
        onQuickViewClick: () => onQuickViewClick && onQuickViewClick(itemInfo),
        onFavoriteClick: () => onFavoriteClick && onFavoriteClick(itemInfo),
      }}
    />
  );
};
