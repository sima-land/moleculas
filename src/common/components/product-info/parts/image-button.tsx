import { type ImageButtonProps } from '../types';
import { type StrokedSVGProps, StrokedSVG } from '@sima-land/ui-nucleons/stroked-svg';
import { Hint, useHintFloating, useHintOnHover } from '@sima-land/ui-nucleons/hint';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './image-button.m.scss';

/**
 * Кнопка-иконка на изображении.
 * @param props Свойства.
 * @return Элемент.
 */
export function ImageButton({
  icon,
  hint,
  hintDirection = 'left',
  position,
  'data-testid': testId,
  className,
  ...restProps
}: ImageButtonProps) {
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

  const rootProps: Omit<StrokedSVGProps, 'component'> = {
    role: 'banner',
    ...restProps,
    strokeWidth: 1.5,
    className: classNames(
      styles.root,
      position && styles[`${position.x}-${position.y}`],
      className,
    ),
    'data-testid': testId,
  };

  return (
    <>
      <StrokedSVG ref={refs.setReference} component={icon} {...getReferenceProps(rootProps)} />

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
