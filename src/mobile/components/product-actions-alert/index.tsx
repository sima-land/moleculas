import React from 'react';
import { Link } from '@dev-dep/ui-nucleons/link';
import { Alert, Props as AlertProps } from '@dev-dep/ui-nucleons/alert';
import { Clean } from '@dev-dep/ui-nucleons/clean-buttons';
import classnames from 'classnames/bind';
import styles from './product-actions-alert.module.scss';

const cx = classnames.bind(styles);

export interface ProductActionsAlertProps {
  buttons?: Array<{ text: string, icon: React.ReactNode, onClick?: React.MouseEventHandler, href?: string }>
  alertProps?: AlertProps
  onClose?: React.MouseEventHandler
}

/**
 * Компонент действий.
 * @param props Свойства компонента.
 * @param props.buttons Конфигурация кнопок.
 * @param props.alertProps Свойства компонента Alert.
 * @param props.onClose Обработчик закрытия.
 * @return Элемент.
 */
export const ProductActionsAlert = ({ buttons, alertProps, onClose }: ProductActionsAlertProps) => (
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
        buttons && buttons.map(({ text, icon, onClick, href }, key) => (
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
