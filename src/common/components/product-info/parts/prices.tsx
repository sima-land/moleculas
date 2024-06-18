import { ProductInfoPricesProps } from '../types';
import { useContext } from 'react';
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
}: ProductInfoPricesProps) {
  const { restriction } = useContext(ProductInfoContext);

  const rootClassName = classNames(styles.root, {
    [styles['height-limit']]: !restriction,
  });

  return (
    <div className={rootClassName} data-testid='product-info:prices'>
      {!restriction && (
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

      {restriction && unavailableReason}
    </div>
  );
}
