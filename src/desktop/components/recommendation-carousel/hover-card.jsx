import { getOriginCorrection } from '@dev-dep/ui-nucleons/with-tooltip/utils';
import React, { useRef, useState } from 'react';
import { ProductCard } from './product-card';
import classnames from 'classnames/bind';
import styles from './hover-card.scss';
import { omit, pick } from 'lodash';

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
    // не нужно сбрасывать данные тут (например setInfo(null)) так как blur не будет работать из-за размонтирования
    ref.current && ref.current.classList.add(cx('hidden'));
  };

  // eslint-disable-next-line require-jsdoc
  const bindInfo = fn => () => fn && fn(itemInfo);

  // отдаем управление чтобы не поднимать состояние выше
  controlRef.current = controlRef.current || {};
  Object.assign(controlRef.current, { show, hide });

  const [cartData, productData] = [pick, omit].map(fn => fn(itemInfo, [
    'allowFloat',
    'canAdd',
    'canSubtract',
    'inCart',
    'isFetching',
    'markupText',
    'qty',
    'stepText',
  ]));

  return (
    <ProductCard
      {...restProps}
      ref={ref}
      className={cx('card', 'hidden')}
      onMouseLeave={hide}
      inCartControl={{
        ...cartData,
        onAdd: bindInfo(onAdd),
        onChange: newQty => onChange && onChange(itemInfo, newQty),
        onSubtract: bindInfo(onSubtract),
      }}
      productInfo={{
        ...productData,
        onFavoriteClick: bindInfo(onFavoriteClick),
        onQuickViewClick: bindInfo(onQuickViewClick),
      }}
    />
  );
};
