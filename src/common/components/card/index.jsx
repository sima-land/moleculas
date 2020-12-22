import React from 'react';
import classnames from 'classnames/bind';
import Text from '@dev-dep/ui-nucleons/text';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';
import classes from './card.scss';

const cx = classnames.bind(classes);

/**
 * Карточка.
 * @param {Object} props Свойства.
 * @param {string} props.className Класс корневого элемента.
 * @param {Object} props.contentProps Свойства контейнера основного содержимого.
 * @param {import('react').ReactNode} props.children Основное содержимое.
 * @param {import('react').ReactNode|null} props.footer Содержимое футера.
 * @param {boolean} props.withCloseButton Отображать ли кнопку закрытия.
 * @param {string} props.title Заголовок в хэдере.
 * @param {Function} props.onClose Обработчик закрытия.
 * @return {ReactElement} Карточка.
 */
const Card = ({
  className,
  contentProps = {},
  children,
  footer,
  withCloseButton,
  title,
  onClose,
}) => (
  <div className={cx('card', className)}>
    {Boolean(title || withCloseButton) && (
      <div className={cx('card-header')}>
        {Boolean(title) && (
          <Text truncate size={16} lineHeight={24} weight={500} color='gray87' children={title} />
        )}
        {Boolean(withCloseButton) && (
          <CrossSVG className={cx('card-close')} onClick={onClose} aria-label={`Закрыть ${title}`} role='button' />
        )}
      </div>
    )}
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
