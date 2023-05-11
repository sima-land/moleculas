import React, { AnchorHTMLAttributes, useEffect, useState } from 'react';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';
import classNames from 'classnames/bind';
import styles from './modifier.module.scss';

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
  active?: boolean;
  disabled?: boolean;
  crossedOut?: boolean;
  content: ModifierContent;
  size?: 's' | 'm';
  count?: number;
}

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
      <a {...props} className={cx('root', `size-${size}`, { active, disabled }, className)}>
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
 * Определяет, обрезан ли текст в элементе.
 * @param el Элемент.
 * @return Обрезан ли текст в элементе.
 */
function isTruncated(el: Pick<HTMLElement, 'scrollWidth' | 'clientWidth'>) {
  return el.scrollWidth > el.clientWidth;
}
