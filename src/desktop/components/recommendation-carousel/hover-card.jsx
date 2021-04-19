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
  onAdd,
  onChange,
  onFavoriteClick,
  onQuickViewClick,
  onSubtract,
  ...restProps
}) => {
  const ref = useRef();
  const [itemInfo, setItemInfo] = useState();

  // eslint-disable-next-line require-jsdoc
  const show = (info, target) => {
    setItemInfo(info);

    const element = ref.current;
    const rect = target.getBoundingClientRect();
    const correction = getOriginCorrection(ref.current);

    element.classList.remove(cx('hidden'));
    element.style.left = `${correction.x + rect.left - 16}px`;
    element.style.top = `${correction.y + rect.top - 16}px`;
    element.style.width = `${rect.width + 32}px`;
  };

  // eslint-disable-next-line require-jsdoc
  const hide = () => {
    ref.current && ref.current.classList.add(cx('hidden'));
    setItemInfo(null);
  };

  // eslint-disable-next-line require-jsdoc
  const bindInfo = fn => () => fn && fn(itemInfo);

  // отдаем управление чтобы не поднимать состояние выше
  controlRef.current = controlRef.current || {};
  Object.assign(controlRef.current, { show, hide });

  return (
    <ProductCard
      {...restProps}
      ref={ref}
      className={cx('card', 'hidden')}
      onMouseLeave={hide}
      inCartControl={{
        qty: itemInfo && itemInfo.qty,
        canAdd: itemInfo && itemInfo.canAdd,
        canSubtract: itemInfo && itemInfo.canSubtract,
        markupText: itemInfo && itemInfo.markupText,
        stepText: itemInfo && itemInfo.stepText,
        onAdd: bindInfo(onAdd),
        onChange: bindInfo(onChange),
        onSubtract: bindInfo(onSubtract),
      }}
      productInfo={{
        ...itemInfo,
        onFavoriteClick: bindInfo(onFavoriteClick),
        onQuickViewClick: bindInfo(onQuickViewClick),
      }}
    />
  );
};
