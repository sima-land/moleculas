import { type ReactNode, useContext } from 'react';
import { ProductInfoContext } from '../utils';
import { Price } from '@sima-land/ui-nucleons/price';
import classNames from 'classnames';
import styles from './prices.m.scss';

/**
 * Слот для вывода цен.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductInfoPrices({
  price,
  oldPrice,
  currencyGrapheme,
  unavailableReason = 'Товар недоступен',
}: {
  price: number;
  oldPrice?: number;
  currencyGrapheme?: string;
  unavailableReason?: ReactNode;
}) {
  const { restriction } = useContext(ProductInfoContext);

  const rootClassName = classNames(styles.root, {
    [styles['height-limit']]: !restriction || restriction === 'adult',
  });

  return (
    <div className={rootClassName} data-testid='product-info:prices'>
      {(!restriction || restriction === 'adult') && (
        <>
          <Price
            value={price}
            currencyGrapheme={currencyGrapheme}
            className={styles.price}
            data-testid='product-info:price'
          />

          {restriction !== 'adult' && oldPrice && (
            <Price
              value={oldPrice}
              currencyGrapheme={currencyGrapheme}
              className={styles['old-price']}
              crossedOut
              data-testid='product-info:old-price'
            />
          )}
        </>
      )}

      {restriction === 'unavailable' && unavailableReason}
    </div>
  );
}
