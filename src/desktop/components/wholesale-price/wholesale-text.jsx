import React, { Component, createRef } from 'react';
import isFunction from 'lodash/isFunction';
import withGlobalListeners from '@dev-dep/ui-nucleons/hoc/with-global-listeners';
import PositioningPopup from '@dev-dep/ui-nucleons/popups/positioning-popup';
import classnames from 'classnames/bind';
import style from './wholesale-price.scss';

export const cx = classnames.bind(style);

/**
 * Компонент текста цены крупного опта с описанием.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.description] Описание условий акции крупного опта.
 * @param {string} [props.className] Дополнительный класс компонента.
 * @param {Function} [props.onDetailsClick] Дополнительные действия при клике открытия описания.
 */
export class WholesaleText extends Component {
  state = {
    isPopupOpen: false,
  };
  openerRef = createRef();
  textWrapperRef = createRef();
  removeGlobalListener;

  /**
   * @inheritDoc
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
    const ref = this.textWrapperRef && this.textWrapperRef.current;
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
      description,
      onDetailsClick,
      text,
    } = this.props;
    return (
      <div ref={this.textWrapperRef} className={cx('wholesale-text-wrapper')}>
        <span
          className={cx('wholesale-text')}
          onClick={() => {
            if (!this.state.isPopupOpen) {
              Boolean(description) && isFunction(onDetailsClick) && onDetailsClick();
            }
            this.setState({ isPopupOpen: !this.state.isPopupOpen });
          }}
          ref={this.openerRef}
          role={Boolean(description) && isFunction(onDetailsClick) ? 'button' : 'note'}
          children={text}
        />
        {Boolean(description) && this.state.isPopupOpen && (
          <PositioningPopup
            withArrow
            className={cx('popup')}
            opener={this.openerRef}
            parent={this.textWrapperRef}
            horizontalPosition='center'
            basePopupClass={cx('notice-popup')}
          >
            <div className={cx('popup-body')} dangerouslySetInnerHTML={{ __html: description }} />
          </PositioningPopup>
        )}
      </div>
    );
  }
}

export default withGlobalListeners(WholesaleText);
