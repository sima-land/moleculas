import { useState, useCallback, FormEventHandler, ChangeEventHandler, useMemo } from 'react';
import type { PaginationControlsProps } from './types';
import { Input, InputProps } from '@sima-land/ui-nucleons/input';
import { Pagination, validatePaginationState } from '@sima-land/ui-nucleons/pagination';
import RightSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandRight';
import classNames from 'classnames/bind';
import styles from './pagination-controls.module.scss';

const cx = classNames.bind(styles);

/**
 * Блок управления пагинацией.
 * @param props Свойства.
 * @return Элемент.
 */
export function PaginationControls({
  // data props
  current: currentProp,
  total: totalProp,
  onPageChange,

  // view props
  flow = 'horizontal',
  Buttons = PageButtons,
  Form = PageForm,
  withForm: withFormProp,
  className,
  ...restProps
}: PaginationControlsProps) {
  const { current, total } = useMemo(
    () => validatePaginationState({ current: currentProp, total: totalProp }),
    [currentProp, totalProp],
  );
  const withForm = withFormProp ?? total >= 7;

  const handlePageChange = useCallback(
    (page: number) => {
      onPageChange?.(Math.max(1, Math.min(total, page)));
    },
    [onPageChange],
  );

  return (
    <div className={cx('layout', flow !== 'unset' && `flow-${flow}`, className)} {...restProps}>
      <div className={cx('slot-buttons')}>
        <Buttons current={current} total={total} onPageChange={handlePageChange} />
      </div>

      {withForm && (
        <div className={cx('slot-form')}>
          <Form current={current} total={total} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

/**
 * Кнопки страниц.
 * @param props Свойства.
 * @return Элемент.
 */
export function PageButtons({
  total,
  current,
  onPageChange,
}: {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <Pagination
      total={total}
      current={current}
      onPageChange={(event, button) => onPageChange(button.value)}
    />
  );
}

/**
 * Форма выбора страницы.
 * @param props Свойства.
 * @return Элемент.
 */
export function PageForm({ total, onPageChange }: any) {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback<FormEventHandler>(
    event => {
      event.preventDefault();

      const numeric = parseInt(value);

      if (!Number.isNaN(numeric)) {
        onPageChange?.(numeric);
        setValue('');
      }
    },
    [total, value, onPageChange],
  );

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    setValue(event.target.value.replace(/\D/g, ''));
  }, []);

  return (
    <form onSubmit={handleSubmit} className={cx('form')}>
      <span className={cx('label')}>К странице</span>
      <PageFormInput
        value={value}
        onChange={handleChange}
        adornmentEnd={
          <button
            disabled={value.length === 0}
            type='submit'
            className={cx('submit')}
            onMouseDown={event => event.preventDefault()}
          >
            <RightSVG fill='currentColor' />
          </button>
        }
      />
    </form>
  );
}

/**
 * Поле ввода номера страницы. Только стилизует Input.
 * @param props Свойства.
 * @return Элемент.
 */
export function PageFormInput({ className, ...restProps }: InputProps) {
  return <Input size='m' {...restProps} className={cx('input', className)} />;
}
