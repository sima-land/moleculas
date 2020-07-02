import styles from './flag.scss';
import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import classnames from 'classnames/bind';
import Timer from '@dev-dep/ui-nucleons/timer';

const cx = classnames.bind(styles);

/**
 * @typedef {Object} FlagData Объект с данными шильдика.
 * @property {string} title Текст при наведении.
 * @property {string} link URL.
 * @property {string} textColor Цвет текста.
 * @property {string} bgColor Цвет фона.
 * @property {string} strokeColor Цвет иконки.
 * @property {Array} fields Массив полей шильдика.
 * @property {Object} definitions Определение полей шильдика.
 */

/**
 * Компонент шильдика.
 * @param {FlagData} props Свойства компонента.
 */
export default class Flag extends Component {
  state = {
    intervalId: null,
    timer: null,
  };

  /**
   * Рендер-функции для полей шильдиков.
   * @type {Object}
   */
  fieldRenderingFunctions = {
    text: (definition, index) => (
      <span key={index}>{definition.value}</span>
    ),
    icon: (definition, index) => (
      <img
        src={definition.value}
        alt={definition.title || ''}
        key={index}
      />
    ),
    timer: (definition, index) => (
      <Timer key={index} endTime={definition.value} format={definition.format} />
    ),
  };

  /**
   * Возвращает контент шильдика.
   * @return {ReactElement} Контент шильдика.
   */
  getContent () {
    const {
      fields,
      definitions,
    } = this.props;
    return Array.isArray(fields) && definitions
      ? (
        <span className={cx('content')}>
          {fields.map((field, index) => {
            const definition = definitions[field] || {};
            return isFunction(this.fieldRenderingFunctions[definition.type])
              ? this.fieldRenderingFunctions[definition.type](definition, index)
              : null;
          })}
        </span>
      )
      : null;
  }

  /**
   * Вывод компонента.
   * @return {ReactElement} Компонент шильдика.
   */
  render () {
    const {
      title,
      link,
      bgColor,
      strokeColor,
      fields = [],
    } = this.props;
    const wrapperStyles = {
      backgroundColor: bgColor,
      fill: strokeColor,
    };
    const isIconOnly = fields.length === 1 && fields[0] === 'icon';

    return (
      <span
        className={cx('wrap', isIconOnly && 'wrap-icon')}
        style={isIconOnly ? {} : wrapperStyles}
        title={title}
      >
        {link
          ? (
            <a href={link} className={cx('link')}>
              {this.getContent()}
            </a>
          )
          : this.getContent()
        }
      </span>
    );
  }
}
