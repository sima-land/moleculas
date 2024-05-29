import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';
import { StrokedSVG, type StrokedSVGProps } from '@sima-land/ui-nucleons/stroked-svg';
import { type MouseEventHandler, useState } from 'react';
import { type WithTestId } from '@sima-land/ui-nucleons/types';
import classNames from 'classnames';
import styles from './image-button.m.scss';

/**
 * Кнопка-иконка на изображении.
 * @param props Свойства.
 * @return Элемент.
 */
export function ImageButton({
  icon,
  fill,
  onClick,
  hint,
  hintDirection = 'left',
  position,
  'data-testid': testId,
}: WithTestId & {
  icon: StrokedSVGProps['component'];
  fill?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  hint?: string;
  hintDirection?: 'top' | 'left' | 'bottom' | 'right';
  position?: {
    x: 'left' | 'right';
    y: 'top' | 'bottom';
  };
}) {
  const commonProps: Omit<StrokedSVGProps, 'component'> = {
    role: 'banner',
    fill,
    strokeWidth: 1.5,
    className: classNames(
      styles['image-button'],
      position && styles.positioned,
      position && styles[`${position.x}-${position.y}`],
    ),
    onClick,
    'data-testid': testId,
  };

  // состояние
  const [open, setOpen] = useState<boolean>(false);

  // позиционирование
  const { refs, ...floating } = useHintFloating({
    open,
    onOpenChange: setOpen,
    placement: hintDirection,
  });

  // пользовательское взаимодействие
  const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

  return (
    <>
      <StrokedSVG ref={refs.setReference} component={icon} {...getReferenceProps(commonProps)} />
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
