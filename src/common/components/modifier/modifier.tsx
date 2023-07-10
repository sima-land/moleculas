import { ImgHTMLAttributes, useEffect, useState } from 'react';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';
import { useImageStub } from '../../hooks';
import { ModifierProps, MoreButtonProps, TextContent } from './types';
import ImageBrokenSVG from '@sima-land/ui-quarks/icons/40x40/Stroked/ImageBroken';
import classNames from 'classnames/bind';
import styles from './modifier.module.scss';

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
  markdown,
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

        {content.type === 'image' && <Image src={content.src} />}

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

        {markdown && <span className={styles.corner}>У</span>}
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
 * Картинка с заглушкой в случае ошибки загрузки.
 * @param props Свойства.
 * @return Элемент.
 */
function Image({ src, onError, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const { failed, handleError } = useImageStub(src, onError);

  return (
    <span className={cx('image-wrapper', { fail: failed })}>
      {failed && <ImageBrokenSVG />}
      <img className={cx('image')} {...rest} src={src} onError={handleError} />
    </span>
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
