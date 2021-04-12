import React from 'react';
import Types from 'prop-types';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Alert } from '@dev-dep/ui-nucleons/alert';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import styles from './product-actions-content.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

/**
 * Компонент действий.
 * @param { Object } props Свойства компонента.
 * @param { Array } props.buttons Конфигурация кнопок.
 * @param { Object } props.alertProps Свойства компонента Alert.
 * @param { Function } props.onClose Обработчик закрытия.
 * @return { React.ReactElement } Компонент действий с заказом.
 */
const ProductActionsContent = ({
  buttons,
  alertProps,
  onClose,
}) => (
  <Alert
    {...alertProps}
    footer={(
      <Clean.Group>
        <Clean.Button onClick={onClose}>Закрыть</Clean.Button>
      </Clean.Group>
    )}
  >
    <div className={cx('buttons')}>
      {
        buttons?.map(({ text, icon, onClick, href }, key) => (
          <Link
            href={href}
            className={cx('button')}
            key={key}
            color='gray87'
            onClick={onClick}
          >
            <div className={cx('icon-wrapper')}>{icon}</div>
            {text}
          </Link>
        ))
      }
    </div>
  </Alert>
);

export default ProductActionsContent;

ProductActionsContent.propTypes = {

  /**
   * Конфигурация кнопок.
   */
  buttons: Types.array,

  /**
   * Свойства компонента Alert.
   */
  alertProps: Types.object,

  /**
   * Обработчик закрытия.
   */
  onClose: Types.func,
};
