import React, { useRef } from 'react';
import Types from 'prop-types';
import classnames from 'classnames/bind';
import classes from './search-bar.scss';
import Link from '@dev-dep/ui-nucleons/link/deprecated';
import safeCall from '../../../common/helpers/safe-call';
import CrossSVG from '@dev-dep/ui-quarks/icons/16x16/Filled/cross';
import { COLORS } from '@dev-dep/ui-nucleons/constants';

export const cx = classnames.bind(classes);

/**
 * Компонент поисковой строки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.searchQuery=''] Поисковый запрос.
 * @param {boolean} [props.withClearButton] Нужна ли кнопка очистки поисковой строки.
 * @param {Function} [props.onSearchChange] Вызовется при изменении поискового запроса.
 * @param {Function} [props.onSearchClick] Вызовется при клике на поле поиска.
 * @param {Function} [props.onSearchKeyDown] Вызовется при нажатии на кнопку.
 * @param {Function} [props.onFocus] Вызовется при фокусе на поле поиска.
 * @param {Function} [props.onBlur] Вызовется при потере фокуса полем поиска.
 * @param {Function} [props.onClear] Вызовется при нажатии на кнопку очистки.
 * @param {Function} props.buttonText Текст кнопки.
 * @param {Function} props.onButtonClick Обработчик нажатия на кнопку.
 * @return {ReactElement} Компонент.
 */
export const SearchBar = ({
  searchQuery = '',
  withClearButton,
  onSearchChange,
  onSearchClick,
  onSearchKeyDown,
  onFocus,
  onBlur,
  onClear,
  buttonText,
  onButtonClick,
}) => {
  const rootRef = useRef(null);
  return (
    <div
      ref={rootRef}
      className={cx('wrapper', 'with-find-button')}
    >
      <label className={cx('input-wrapper', 'smaller')}>
        <input
          value={searchQuery}
          onKeyDown={safeCall(onSearchKeyDown)}
          onChange={safeCall(onSearchChange)}
          onClick={safeCall(onSearchClick)}
          onFocus={safeCall(onFocus)}
          onBlur={safeCall(onBlur)}
          className={cx('search-field')}
          placeholder='Найдите нужное'
          autoFocus
        />
        {Boolean(withClearButton) && (
          <span className={cx('with-adornment', 'end')}>
            <Link
              onClick={onClear}
              role='button'
              aria-label='Очистить'
              children={(
                <CrossSVG
                  fill={COLORS.get('gray38')}
                  aria-hidden
                />
              )}
            />
          </span>
        )}
      </label>
      {
        buttonText && onButtonClick
          && (
            <div
              onClick={onButtonClick}
              className={cx('button')}
              role='button'
            >
              {buttonText}
            </div>
          )
      }
    </div>
  );
};

SearchBar.propTypes = {

  /**
   * Поисковый запрос.
   */
  searchQuery: Types.string,

  /**
   * Нужна ли кнопка очистки.
   */
  withClearButton: Types.bool,

  /**
   * Функция-обработчик изменения инпута.
   */
  onSearchChange: Types.func,

  /**
   * Функция-обработчик нажатия на инпут.
   */
  onSearchClick: Types.func,

  /**
   * Функция-обработчик нажатия клавиши на клавиатуре.
   */
  onSearchKeyDown: Types.func,

  /**
   * Функция-обработчик при получении инпутом фокуса.
   */
  onFocus: Types.func,

  /**
   * Функция-обработчик при потере инпутом фокуса.
   */
  onBlur: Types.func,

  /**
   * Функция-обработчик сброса запроса в инпуте.
   */
  onClear: Types.func,

  /**
   * Функция-обработчик нажатия на кнопку.
   */
  onButtonClick: Types.func,

  /**
   * Текст кнопки.
   */
  buttonText: Types.string,
};
