import React, { useLayoutEffect, useRef, useState } from 'react';
import { getOriginCorrection } from '@dev-dep/ui-nucleons/with-tooltip/utils';
import { ProductCard } from './product-card';
import { omit, pick } from 'lodash';
import classnames from 'classnames/bind';
import styles from './hover-card.scss';

const cx = classnames.bind(styles);

/**
 * Карточка товара, появляющаяся над элементом карусели.
 * @param {Object} props Свойства компонента.
 * @return {ReactElement} Элемент.
 */
export const HoverCard = ({
  info,
  targetRef,
  onAdd,
  onChange,
  onMouseLeave,
  onQuickViewClick,
  onSubtract,
  ...restProps
}) => {
  const ref = useRef();
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    if (info && targetRef.current) {
      const element = ref.current;
      const rect = targetRef.current.getBoundingClientRect();
      const correction = getOriginCorrection(ref.current);

      element.style.left = `${correction.x + rect.left - 16}px`;
      element.style.top = `${correction.y + rect.top - 16}px`;
      element.style.width = `${rect.width + 32}px`;

      setReady(true);
    }
  }, [info]);

  // eslint-disable-next-line require-jsdoc
  const bindInfo = fn => () => fn && fn(info);

  const [cartData, productData] = [pick, omit].map(fn => fn(info, [
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
      className={cx('card', !ready && 'hidden')}
      onMouseLeave={() => {
        setReady(false);
        onMouseLeave && onMouseLeave();
      }}
      inCartControl={{
        ...cartData,
        onAdd: bindInfo(onAdd),
        onChange: newQty => onChange && onChange(info, newQty),
        onSubtract: bindInfo(onSubtract),
      }}
      productInfo={{
        ...productData,
        onQuickViewClick: bindInfo(onQuickViewClick),
      }}
    />
  );
};
