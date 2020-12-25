import React from 'react';
import classnames from 'classnames/bind';
import classes from './card.scss';

const cx = classnames.bind(classes);

/**
 * Карточка.
 * @param {Object} props Свойства.
 * @param {string} props.className Класс корневого элемента.
 * @param {Object} props.contentProps Свойства контейнера основного содержимого.
 * @param {import('react').ReactNode} props.children Основное содержимое.
 * @param {import('react').ReactNode|null} props.header Содержимое заголовка.
 * @param {import('react').ReactNode|null} props.footer Содержимое футера.
 * @param {Function} props.onClick Обработчик клика.
 * @return {ReactElement} Карточка.
 */
const Card = ({
  className,
  contentProps = {},
  children,
  header,
  footer,
  'data-testid': testID,
  onClick,
}) => (
  <div className={cx('card', className)} onClick={onClick} data-testid={testID}>
    {Boolean(header) && <div className={cx('card-header')}>{header}</div>}
    <div {...contentProps} className={cx('card-content', contentProps.className)}>
      {children}
    </div>
    {Boolean(footer) && (
      <div className={cx('card-footer')}>
        {footer}
      </div>
    )}
  </div>
);

export default Card;
