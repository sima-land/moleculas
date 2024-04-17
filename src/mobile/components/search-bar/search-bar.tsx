import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  ElementType,
  MouseEventHandler,
  ChangeEventHandler,
  MutableRefObject,
} from 'react';
import { COLORS, Token } from '@sima-land/ui-nucleons/colors';
import { Dropdown } from '@sima-land/ui-nucleons/dropdown';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { useOutsideClick } from '@sima-land/ui-nucleons/hooks';
import { on } from '@sima-land/ui-nucleons/helpers';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Filled/CircleCross';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Magnifier';
import MoreVertSVG from '@sima-land/ui-quarks/icons/24x24/Filled/MoreVert';
import classnames from 'classnames/bind';
import styles from './search-bar.module.scss';

export const cx = classnames.bind(styles);

export interface ButtonProps {
  text: string;
  onClick: MouseEventHandler;
  icon?: ElementType;
  iconColor?: Token;
}

export interface SearchBarProps {
  /** Поисковый Запрос. */
  value?: string;

  /** Вызовется при изменении поискового запроса. */
  onChange: ChangeEventHandler<HTMLInputElement>;

  /** Тип клавиатуры. */
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Подсказка. */
  placeholder?: string;

  /** Вызовется при нажатии на кнопку очистки. */
  onClear?: MouseEventHandler;

  /** Кнопки(а) после поля. */
  endButtons?: any[]; // @todo: избавиться от any

  /** Кнопки(а) до поля. */
  startButtons?: any[]; // @todo: избавиться от any

  /** Признак наличия иконки поиска слева. */
  withSearchIcon?: boolean;

  /** Признак авто-фокуса. */
  autoFocus?: boolean;

  /** Описание в поле ввода. */
  description?: string;

  /** Ref для элемента текстового поля. */
  inputRef?: MutableRefObject<HTMLInputElement | null>;
}

/**
 * Компонент поисковой строки.
 * @param props Свойства.
 * @return Элемент.
 */
export const SearchBar = ({
  value,
  onChange,
  inputMode,
  placeholder = 'Поиск',
  onClear,
  endButtons = [],
  startButtons = [],
  withSearchIcon = true,
  autoFocus = true,
  description,
  inputRef: inputRefProp,
}: SearchBarProps) => {
  const [shownDropdown, toggleDropdown] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownOpenerRef = useRef<HTMLDivElement>(null);

  const needHideEndButtons = endButtons.length > 1;

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    inputRefProp,
    () => inputRef.current,
  );

  useOutsideClick(dropdownRef, e => {
    !dropdownOpenerRef.current?.contains(e.target as any) && toggleDropdown(false);
  });

  useEffect(
    () => (needHideEndButtons ? on(window, 'resize', () => toggleDropdown(false)) : undefined),
    [needHideEndButtons],
  );

  // eslint-disable-next-line require-jsdoc
  const preventFieldBlur: MouseEventHandler = e => {
    if (
      inputRef.current &&
      inputRef.current !== e.target && // не предотвращаем события на самом поле (например выделение текста)
      document.activeElement === inputRef.current
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className={cx('root')}>
      {Boolean(startButtons.length) && (
        <div className={cx('before-field')}>
          <div className={cx('buttons-container')}>
            {startButtons.map((props, index) => (
              <Button {...props} key={index} />
            ))}
          </div>
        </div>
      )}
      <label
        className={cx('input-wrapper')}
        onMouseDown={preventFieldBlur}
        data-testid='search-bar:input-wrapper'
      >
        {withSearchIcon && (
          <span className={cx('search-icon')}>
            <SearchSVG fill={COLORS.get('basic-gray38')} aria-hidden />
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
        {value && onClear && (
          <button
            onClick={onClear}
            aria-label='Очистить'
            data-testid='search-bar:clear-icon'
            className={cx('clear-button')}
          >
            <CrossSVG fill={COLORS.get('basic-gray38')} aria-hidden />
          </button>
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
                  ref={dropdownOpenerRef}
                  icon={MoreVertSVG}
                  onClick={() => toggleDropdown(!shownDropdown)}
                />
              </div>
              {shownDropdown && (
                <div ref={dropdownRef} className={cx('dropdown-container')}>
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
  { text, icon: Icon, iconColor = 'basic-gray87', onClick },
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
