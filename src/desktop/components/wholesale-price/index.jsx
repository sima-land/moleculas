import React, { Component, createRef } from 'react';
import isFunction from 'lodash/isFunction';
import infoIcon from '../../../common/icons/info.svg';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';
import PositioningPopup from '@dev-dep/ui-nucleons/popups/positioning-popup';
import Icon from '@dev-dep/ui-nucleons/icon';
import Price from '@dev-dep/ui-nucleons/price';
import Text from '@dev-dep/ui-nucleons/text';
import classnames from 'classnames/bind';
import style from './wholesale-price.scss';

export const cx = classnames.bind(style);

/**
 * Компонент цены крупного опта с описанием.
 * @param {Object} props Свойства компонента.
 * @param {number} props.price Цена крупного опта.
 * @param {string} props.currencyGrapheme Графема валюты.
 * @param {string} [props.description] Описание условий акции крупного опта.
 * @param {string} [props.className] Дополнительный класс компонента.
 * @param {string} [props.text] Текст крупного опта.
 * @param {Function} [props.onDetailsClick] Дополнительные действия при клике открытия описания.
 */
export class WholesalePrice extends Component {
  state = {
    isPopupOpen: false,
  };
  openerRef = createRef();
  iconWrapperRef = createRef();
  removeGlobalListener;

  /**
   * @inheritdoc
   */
  constructor (props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  /**
   * Обработчик клика вне компонента.
   * @param {Event} event Событие клика.
   */
  handleOutsideClick (event) {
    const ref = this.iconWrapperRef && this.iconWrapperRef.current;
    if (event && event.target && ref && !ref.contains(event.target)) {
      this.setState({ isPopupOpen: false });
    }
  }

  /**
   * @inheritdoc
   */
  componentDidMount () {
    const { addGlobalListener, description } = this.props;
    if (description && isFunction(addGlobalListener)) {
      this.removeGlobalListener = addGlobalListener('click', this.handleOutsideClick);
    }
  }

  /**
   * @inheritdoc
   */
  componentWillUnmount () {
    if (isFunction(this.removeGlobalListener)) {
      this.removeGlobalListener();
    }
  }

  /**
   * @inheritdoc
   */
  render () {
    const {
      price,
      currencyGrapheme,
      description,
      onDetailsClick,
      className,
      text = 'опт',
    } = this.props;
    return (
      <div className={cx(className)}>
        <Text lineHeight={20} size={14} color='gray38'>
          <Price
            value={price}
            currencyGrapheme={currencyGrapheme}
            currencyGraphemeClass={cx('currency-grapheme')}
          />
          &nbsp;/ <span className={cx('wholesale-text')}>{text}</span>
        </Text>
        {Boolean(description) && (
          <div ref={this.iconWrapperRef} className={cx('icon-wrapper')}>
            <span
              onClick={() => {
                if (!this.state.isPopupOpen) {
                  isFunction(onDetailsClick) && onDetailsClick();
                }
                this.setState({ isPopupOpen: !this.state.isPopupOpen });
              }}
              ref={this.openerRef}
              className={cx('icon')}
              role='button'
              aria-label='Подробнее'
            >
              <Icon
                icon={infoIcon}
                size={16}
                inline
                role='presentation'
              />
            </span>
            {this.state.isPopupOpen && (
              <PositioningPopup
                withArrow
                className={cx('popup')}
                opener={this.openerRef}
                parent={this.iconWrapperRef}
                horizontalPosition='center'
                basePopupClass={cx('notice-popup')}
              >
                <div className={cx('popup-body')} dangerouslySetInnerHTML={{ __html: description }} />
              </PositioningPopup>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withGlobalListeners(WholesalePrice);
