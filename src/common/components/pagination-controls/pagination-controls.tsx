import { useState, useCallback, FormEventHandler, ChangeEventHandler } from 'react';
import type { PaginationControlsProps } from './types';
import { Input, InputProps } from '@sima-land/ui-nucleons/input';
import { Pagination } from '@sima-land/ui-nucleons/pagination';
import { TextButton, TextButtonProps } from '@sima-land/ui-nucleons/text-button';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Search';
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
  current = 1,
  total = 1,
  onPageChange,

  // view props
  flow = 'horizontal',
  Buttons = PageButtons,
  Form = PageForm,
  withForm = total >= 7,
  className,
  ...restProps
}: PaginationControlsProps) {
  const handlePageChange = useCallback(
    (page: number) => {
      onPageChange?.(Math.max(1, Math.min(total, page)));
    },
    [onPageChange],
  );

  return (
    <div className={cx('layout', `flow-${flow}`, className)} {...restProps}>
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
      <PageFormSubmit type='submit' />
      <PageFormInput value={value} onChange={handleChange} />
    </form>
  );
}

/**
 * Кнопка отправки формы страницы. Только стилизует TextButton.
 * @param props Свойства.
 * @return Элемент.
 */
export function PageFormSubmit({ className, ...restProps }: TextButtonProps) {
  return (
    <TextButton
      size='s'
      color='basic-gray87'
      children='Перейти на страницу'
      {...restProps}
      className={cx('submit', className)}
    />
  );
}

/**
 * Поле ввода номера страницы. Только стилизует Input.
 * @param props Свойства.
 * @return Элемент.
 */
export function PageFormInput({ className, ...restProps }: InputProps) {
  return (
    <Input
      placeholder='1-999'
      size='m'
      adornmentEnd={<SearchSVG fill={COLORS.get('basic-gray38')} />}
      {...restProps}
      className={cx('input', className)}
    />
  );
}
