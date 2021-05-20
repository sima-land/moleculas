import React, { Component, createRef } from 'react';
import isFunction from 'lodash/isFunction';
import on from '@dev-dep/ui-nucleons/helpers/on';
import PositioningPopup from '../__temp__/popups/positioning-popup';
import classnames from 'classnames/bind';
import style from './wholesale-price.scss';

export interface WholesaleTextProps {
  description: string
  onDetailsClick?: () => void
  text?: string
}

export const cx = classnames.bind(style);

/**
 * Компонент текста цены крупного опта с описанием.
 */
class WholesaleText extends Component<WholesaleTextProps, any> {
  state = {
    isPopupOpen: false,
  };
  openerRef = createRef<HTMLSpanElement>();
  textWrapperRef = createRef<HTMLDivElement>();
  removeGlobalListener: any;

  /**
   * @inheritDoc
   */
  constructor (props: WholesaleTextProps) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  /**
   * Обработчик клика вне компонента.
   * @param {Event} event Событие клика.
   */
  handleOutsideClick (event: any) {
    const ref = this.textWrapperRef && this.textWrapperRef.current;
    if (event && event.target && ref && !(ref as any).contains(event.target)) {
      this.setState({ isPopupOpen: false });
    }
  }

  /**
   * @inheritdoc
   */
  componentDidMount () {
    const { description } = this.props;

    if (description) {
      this.removeGlobalListener = on(window, 'click', this.handleOutsideClick);
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
    const { description, onDetailsClick, text } = this.props;
    return (

      <div ref={this.textWrapperRef} className={cx('wholesale-text-wrapper')}>
        <span className={cx('wholesale-text')}
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
export default WholesaleText;
