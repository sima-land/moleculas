import React, { AnchorHTMLAttributes, useEffect, useState } from 'react';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';
import classNames from 'classnames/bind';
import styles from './modifiers.module.scss';

interface TextContent {
  type: 'text';
  text: string;
}

interface ColorContent {
  type: 'color';
  color: string;
}

interface ImageContent {
  type: 'image';
  src: string;
}

export type ModifierContent = TextContent | ColorContent | ImageContent;

export interface ModifierProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Вывести выбранным. */
  active?: boolean;

  /** Вывести отключенным. */
  disabled?: boolean;

  /** Вывести зачеркнутым. */
  crossedOut?: boolean;

  /** Содержимое. */
  content: ModifierContent;

  /** Высота по дизайн-гайдам. */
  size?: 's' | 'm';

  /** Кол-во. */
  count?: number;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export type MoreButtonProps = Omit<ModifierProps, 'content' | 'crossedOut' | 'active' | 'count'> & {
  count: number;
};

const cx = classNames.bind(styles);

/**
 * Кнопка модификатора (аналога товара).
 * @param props Свойства.
 * @return Элемент.
 */
export function Modifier({
  size = 'm',
  active,
  crossedOut,
  disabled,
  content,
  count,
  className,
  'data-testid': testId = 'modifier',
  ...props
}: ModifierProps) {
  // текст хинта
  const [hint, setHint] = useState<string>('');

  // состояние хинта
  const [open, setOpen] = useState<boolean>(false);

  // позиционирование хинта
  const { refs, ...floating } = useHintFloating({ open, onOpenChange: setOpen });

  // пользовательское взаимодействие для хинта
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  // определение необходимости активации хинта
  useEffect(() => {
    const textElement = refs.reference.current;

    if (!(textElement instanceof HTMLElement) || content.type !== 'text') {
      return;
    }

    // eslint-disable-next-line require-jsdoc
    const defineHint = () => setHint(isTruncated(textElement) ? content.text : '');

    defineHint();

    const observer = new ResizeObserver(defineHint);

    observer.observe(textElement);

    return () => observer.disconnect();
  }, [(content as TextContent).text]);

  return (
    <>
      <a
        {...props}
        className={cx('root', `size-${size}`, { active, disabled }, className)}
        data-testid={testId}
      >
        {content.type === 'color' && (
          <span className={cx('color')} role='banner' style={{ background: content.color }}></span>
        )}

        {content.type === 'image' && (
          <span
            className={cx('image')}
            role='banner'
            style={{ backgroundImage: `url(${content.src})` }}
          />
        )}

        {content.type === 'text' && (
          <span ref={refs.setReference} className={cx('text')} {...getReferenceProps()}>
            {content.text}
          </span>
        )}

        {typeof count === 'number' && (
          <span className={cx('counter')}>{count > 99 ? '99+' : count}</span>
        )}

        {crossedOut && (
          <svg width='100%' height='100%' className={cx('diagonal')}>
            <line x1='0' y1='100%' x2='100%' y2='0' stroke='var(--modifier-border-color)' />
          </svg>
        )}
      </a>

      {hint && (
        <Hint
          open={open}
          hintRef={refs.setFloating}
          arrowRef={refs.setArrow}
          {...getFloatingProps()}
        >
          {hint}
        </Hint>
      )}
    </>
  );
}

/**
 * Кнопка "+N" для показа полного списка модификаторов.
 * @param props Свойства.
 * @return Элемент.
 */
export function MoreButton({
  count,
  className,
  'data-testid': testId = 'more-modifiers',
  ...rest
}: MoreButtonProps) {
  return (
    <Modifier
      role='button'
      aria-label='Показать все аналоги'
      {...rest}
      className={cx('more', className)}
      content={{ type: 'text', text: `+${count}` }}
      data-testid={testId}
    />
  );
}

/**
 * Определяет, обрезан ли текст в элементе.
 * @param el Элемент.
 * @return Обрезан ли текст в элементе.
 */
function isTruncated(el: Pick<HTMLElement, 'scrollWidth' | 'clientWidth'>) {
  return el.scrollWidth > el.clientWidth;
}