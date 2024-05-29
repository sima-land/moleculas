import type { ProductInfoWaitListAddedLinkProps } from '../types';
import { Link } from '@sima-land/ui-nucleons/link';
import classNames from 'classnames';
import styles from './wait-list-added-link.m.scss';

const defaultContentBefore = <>Товар добавлен в </>;

const defaultChildren = <>лист{'\u00A0'}ожидания</>;

/**
 * Текст со ссылкой "Товар добавлен в лист ожидания".
 * @param props Свойства.
 * @return Элемент.
 */
export function WaitListAddedLink({
  contentBefore = defaultContentBefore,
  children = defaultChildren,
  color = 'basic-blue',
  className,
  rootRef,
  rootProps,
  'data-testid': testId = 'product-info:wait-list-added-link',
  ...restProps
}: ProductInfoWaitListAddedLinkProps) {
  return (
    <span ref={rootRef} {...rootProps} className={classNames(styles.root, rootProps?.className)}>
      {contentBefore}
      <Link
        {...restProps}
        color={color}
        className={classNames(styles['text-button'], className)}
        data-testid={testId}
      >
        {children}
      </Link>
    </span>
  );
}
