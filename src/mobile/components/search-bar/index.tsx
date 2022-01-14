import React, { useState, useRef, useEffect, forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './search-bar.module.scss';
import { isFunction, throttle } from 'lodash';
import { Link } from '@sima-land/ui-nucleons/link';
import { COLORS, Token } from '@sima-land/ui-nucleons/colors';
import { Dropdown } from '@sima-land/ui-nucleons/dropdown';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { useOutsideClick } from '@sima-land/ui-nucleons/hooks/';
import on from '@sima-land/ui-nucleons/helpers/on';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Filled/cross';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/search';
import MoreVertSVG from '@sima-land/ui-quarks/icons/24x24/Filled/more-vert';

export const cx = classnames.bind(classes);

export interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler;
  icon?: React.ElementType;
  iconColor?: Token;
}

export interface SearchBarProps {
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onClear?: React.MouseEventHandler;
  buttonText?: string;
  onButtonClick?: (...args: any[]) => any;
  endButtons?: any[]; // @todo: избавиться от any
  startButtons?: any[]; // @todo: избавиться от any
  withSearchIcon?: boolean;
  autoFocus?: boolean;
  description?: string;
}

/**
 * Компонент поисковой строки.
 * @param props Свойства компонента.
 * @param props.value Поисковый Запрос.
 * @param props.onChange Вызовется при изменении поискового запроса.
 * @param props.inputMode Тип клавиатуры.
 * @param props.placeholder Подсказка.
 * @param props.onClear Вызовется при нажатии на кнопку очистки.
 * @param props.buttonText Текст кнопки.
 * @param props.onButtonClick Обработчик нажатия на кнопку.
 * @param props.endButtons Кнопки(а) после поля.
 * @param props.startButtons Кнопки(а) до поля.
 * @param props.withSearchIcon Признак наличия иконки поиска слева.
 * @param props.autoFocus Признак автофокуса.
 * @param props.description Описание в поле ввода.
 * @return Элемент.
 */
export const SearchBar = ({
  inputMode,
  value,
  onChange,
  placeholder = 'Поиск',
  onClear,
  endButtons = [],
  startButtons = [],
  withSearchIcon = true,
  autoFocus = true,
  description,
}: SearchBarProps) => {
  const [shownDropdown, toggleDropdown] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const dropDownOpenerRef = useRef<HTMLDivElement>(null);

  const needHideEndButtons = endButtons.length > 1;

  useOutsideClick(dropDownRef, e => {
    !(dropDownOpenerRef.current as HTMLDivElement).contains(e.target as any) &&
      toggleDropdown(false);
  });

  useEffect(
    () =>
      needHideEndButtons
        ? on(
            window,
            'resize',
            throttle(() => toggleDropdown(false), 500),
          )
        : undefined,
    [needHideEndButtons],
  );

  return (
    <div className={cx('wrapper')}>
      {Boolean(startButtons.length) && (
        <div className={cx('before-field')}>
          <div className={cx('buttons-container')}>
            {startButtons.map((props, index) => (
              <Button {...props} key={index} />
            ))}
          </div>
        </div>
      )}
      <label className={cx('input-wrapper')}>
        {withSearchIcon && (
          <span className={cx('search-icon')}>
            <SearchSVG fill={COLORS.get('gray38')} aria-hidden />
          </span>
        )}
        <div className={cx('input-container')}>
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            className={cx('search-field')}
            placeholder={placeholder}
            autoFocus={autoFocus}
            data-testid='search-bar-input'
            type='text'
            inputMode={inputMode}
            tabIndex={0}
          />
          {description && (
            <div className={cx('description-container')}>
              <span className={cx('description')}>{description}</span>
            </div>
          )}
        </div>
        {isFunction(onClear) && value && (
          <Link
            onClick={event => {
              onClear(event);
              inputRef.current && inputRef.current.focus();
            }}
            pseudo
            aria-label='Очистить'
            data-testid='search-bar:clear-icon'
            className={cx('clear-icon')}
            children={<CrossSVG fill={COLORS.get('gray38')} aria-hidden />}
          />
        )}
      </label>
      {Boolean(endButtons.length) && (
        <>
          <div className={cx('after-field', needHideEndButtons && 'wide-screen')}>
            <div className={cx('buttons-container')}>
              {endButtons.map((props, index) => (
                <Button {...props} key={index} />
              ))}
            </div>
          </div>
          {needHideEndButtons && (
            <div className={cx('after-field', 'narrow-screen')}>
              <div className={cx('buttons-container')}>
                <Button
                  text='Больше'
                  ref={dropDownOpenerRef}
                  icon={MoreVertSVG}
                  onClick={() => toggleDropdown(!shownDropdown)}
                />
              </div>
              {shownDropdown && (
                <div ref={dropDownRef} className={cx('dropdown-container')}>
                  <Dropdown>
                    {endButtons.map(({ text, onClick }, index) => (
                      <DropdownItem
                        size='s'
                        key={index}
                        onClick={event => {
                          onClick(event);
                          toggleDropdown(false);
                        }}
                        children={text}
                      />
                    ))}
                  </Dropdown>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

/**
 * Компонент кнопки.
 * @param props Свойства.
 * @param props.text Текст кнопки.
 * @param props.onClick Обработчик клика.
 * @param props.icon Иконка.
 * @param props.iconColor Цвет иконки.
 * @return Элемент.
 */
const Button = forwardRef<HTMLDivElement | null, ButtonProps>(function Button(
  { text, icon: Icon, iconColor = 'gray87', onClick },
  ref,
) {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cx('button')}
      role='button'
      data-testid='search-bar-button'
      tabIndex={0}
      aria-label={Icon && text}
    >
      {Icon ? <Icon fill={COLORS.get(iconColor)} aria-hidden='true' /> : text}
    </div>
  );
});
