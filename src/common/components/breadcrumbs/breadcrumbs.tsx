import { type SVGAttributes, type ReactNode, useState, useRef, useEffect } from 'react';
import { type BreadcrumbItemProps, type BreadcrumbProps } from './types';
import { Link, type LinkProps } from '@sima-land/ui-nucleons/link';
import { Plate } from '@sima-land/ui-nucleons/plate';
import { defineSlots } from '@sima-land/ui-nucleons/helpers';
import { useOutsideClick } from '@sima-land/ui-nucleons/hooks';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import styles from './breadcrumbs.m.scss';

/**
 * Список "хлебных крошек".
 * @param props Свойства.
 * @return Элемент.
 */
export function Breadcrumbs({
  children,
  className,
  'data-testid': testId = 'breadcrumbs',
  ...restProps
}: BreadcrumbProps) {
  return (
    <div {...restProps} className={classNames(styles.root, className)} data-testid={testId}>
      {children}
    </div>
  );
}

/**
 * Элемент списка "хлебных крошек".
 * @param props Свойства.
 * @return Элемент.
 */
export function BreadcrumbsItem({
  active,
  children,
  'data-testid': testId = 'breadcrumb',
  ...restProps
}: BreadcrumbItemProps) {
  const { body, dropdown } = defineSlots(children, {
    body: BreadcrumbsItemBody,
    dropdown: BreadcrumbsItemDropdown,
  });

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setOpen(false));

  // ВАЖНО: выносим кусок верстки чтобы использовать его в двух местах
  const name = (
    <span className={styles.name}>
      <Link color='basic-gray87' {...(active && { pseudo: true })} {...restProps}>
        {body}
      </Link>
      {dropdown && <DownSVG className={styles.icon} onClick={() => setOpen(a => !a)} />}
    </span>
  );

  return (
    <div className={styles.item} data-testid={testId}>
      {/* ВАЖНО: inner нужен для того чтобы позиционировать dropdown (иначе надо учитывать разделитель "/") */}
      <div className={styles.inner}>
        {name}
        <CSSTransition
          in={dropdown && open}
          timeout={200}
          unmountOnExit
          classNames={{
            enter: styles['fade-enter'],
            enterActive: styles['fade-enter-active'],
            exit: styles['fade-exit'],
            exitActive: styles['fade-exit-active'],
          }}
        >
          <Plate ref={ref} rounds='m' shadow='z3' className={styles.dropdown}>
            {name}
            <div className={styles['dropdown-body']}>{dropdown}</div>
          </Plate>
        </CSSTransition>
      </div>
    </div>
  );
}

BreadcrumbsItem.Body = BreadcrumbsItemBody;
BreadcrumbsItem.Dropdown = BreadcrumbsItemDropdown;
BreadcrumbsItem.Sibling = BreadcrumbsItemSibling;

/**
 * Основное содержимое "хлебной крошки".
 * @param props Свойства.
 * @return Элемент.
 */
export function BreadcrumbsItemBody({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

/**
 * Содержимое выпадающего списка "хлебной крошки".
 * @param props Свойства.
 * @return Элемент.
 */
export function BreadcrumbsItemDropdown({
  loading,
  children,
  onOpen,
}: {
  children?: ReactNode;
  loading?: boolean;
  onOpen?: VoidFunction;
}) {
  useEffect(() => onOpen?.(), []);

  return (
    <>
      {loading ? (
        <div className={styles.stubs}>
          {/* ВАЖНО: по гайдам нужно именно 8 штук */}
          <div className={styles.stub} />
          <div className={styles.stub} />
          <div className={styles.stub} />
          <div className={styles.stub} />
          <div className={styles.stub} />
          <div className={styles.stub} />
          <div className={styles.stub} />
          <div className={styles.stub} />
        </div>
      ) : (
        children
      )}
    </>
  );
}

/**
 * Соседняя "хлебная крошка", выводится в выпадающем списке.
 * @param props Свойства.
 * @return Элемент.
 */
export function BreadcrumbsItemSibling({
  children,
  className,
  active,
  'data-testid': testId = 'breadcrumb:sibling',
  ...restProps
}: LinkProps & { active?: boolean }) {
  return (
    <Link
      color='basic-gray87'
      className={classNames(styles.sibling, className)}
      data-testid={testId}
      {...(active && { disabled: true, pseudo: true })}
      {...restProps}
    >
      {children}
    </Link>
  );
}

/** @inheritdoc */
function DownSVG(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' {...props}>
      <path d='M4 6L8 10L12 6' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
