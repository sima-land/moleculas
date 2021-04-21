import React, { useEffect, useRef, useState } from 'react';
import { getOriginCorrection } from '@dev-dep/ui-nucleons/with-tooltip/utils';
import classnames from 'classnames/bind';
import styles from './with-hint.scss';
import { Hint } from '../hint';

const cx = classnames.bind(styles);

/**
 * Компонент вывода "хинта" рядом с заданным элементом.
 * @param {Object} props Свойства.
 * @return {ReactElement} Элемент.
 */
export const WithHint = ({ text, children }) => {
  const hintRef = useRef();
  const openerRef = useRef();
  const [shown, toggle] = useState(false);

  useEffect(() => {
    if (shown && hintRef.current && openerRef.current) {
      const hint = hintRef.current;
      const hintRect = hint.getBoundingClientRect();
      const openerRect = openerRef.current.getBoundingClientRect();
      const correct = getOriginCorrection(hint);

      hint.classList.remove(cx('hidden'));
      hint.style.left = `${correct.x + openerRect.left - hintRect.width - 4}px`;
      hint.style.top = `${correct.y + openerRect.top + (openerRect.height / 2) - (hintRect.height / 2)}px`;
    }
  }, [shown, text]);

  return (
    <>
      {children(openerRef, toggle)}

      {shown && text && (
        <Hint ref={hintRef} className={cx('hint', 'hidden')}>
          {text}
        </Hint>
      )}
    </>
  );
};
