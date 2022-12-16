export interface ProductInfoProps {
  /** Ограничение товара. Влияет на отображение информации. */
  restriction?: 'adult' | 'unavailable';

  /** Содержимое. */
  children?: React.ReactNode;
}
