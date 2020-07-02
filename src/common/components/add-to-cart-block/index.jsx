import classnames from 'classnames/bind';
import React, { Component, Fragment } from 'react';
import isInteger from 'lodash/isInteger';
import isNumber from 'lodash/isNumber';
import isFunction from 'lodash/isFunction';
import Amount from '@dev-dep/ui-nucleons/amount/amount';
import Button from '@dev-dep/ui-nucleons/button';
import Box from '@dev-dep/ui-nucleons/box';
import Icon from '@dev-dep/ui-nucleons/icon';
import spinnerIcon from '../../icons/white-spinner.svg';
import { cleanQtyString } from '../../helpers/clean-qty-string';
import styles from './add-to-cart-block.scss';

const cx = classnames.bind(styles);

/**
 * Блок добавления товара в корзину.
 * @param {Object} props Свойства компонента.
 * @param {number} props.quantity Количество товара в корзине.
 * @param {string} [props.className] Дополнительный класс.
 * @param {string} props.additionStepText Текст под полем ввода количества товара.
 * @param {Function} props.onAdd Обработчик увеличения количества товара в корзине.
 * @param {Function} props.onSubtract Обработчик уменьшения количества товара в корзине.
 * @param {Function} props.onChange Обработчик изменения количества товара.
 * @return {ReactElement} Блок добавления товара в корзину.
 */
export default class AddToCartBlock extends Component {
  state = {
    currentQuantity: isInteger(this.props.quantity) ? this.props.quantity.toString() : '',
  };
  needUpdateCurrentQuantity = false;

  /**
   * После обновления компонента обновляет количество товара, если оно изменилось.
   * @param {Object} prevProps Предыдущие свойства компонента.
   */
  componentDidUpdate (prevProps) {
    const { quantity, isFetching } = this.props;

    if (prevProps.quantity !== quantity || (this.needUpdateCurrentQuantity && !isFetching)) {
      this.needUpdateCurrentQuantity = false;
      this.setState({
        currentQuantity: quantity === null ? '' : quantity,
      });
    }
  }

  /**
   * Обработчик изменения значения инпута.
   * @param {string} value Значение.
   */
  onChange = ({ target: { value } }) => {
    const { isFloatQty } = this.props;
    const qty = cleanQtyString(value, isFloatQty);
    this.setState({
      currentQuantity: qty,
    });
  };

  /**
   * Обработчик изменения значения колличества.
   * @param {Event} event Объект события.
   */
  onChangeQty = ({ target: { value } }) => {
    const { quantity, onChange } = this.props;
    const inputQty = value.replace(',', '.');

    const parsedInputQty = parseFloat(inputQty) || 0;
    const isChanged = parsedInputQty !== parseFloat(String(quantity).replace(',', '.'));

    if (isChanged && isFunction(onChange)) {
      onChange(inputQty);
      this.needUpdateCurrentQuantity = true;
    } else if (inputQty === '') {
      this.setState({
        currentQuantity: 0,
      });
    }
  };

  /**
   * Возвращает компонент.
   * @return {ReactElement} Компонент.
   */
  render () {
    const {
      onAdd,
      onSubtract,
      additionStepText,
      className,
      isFetching,
      hasPlusButton = true,
      asTile,
      qty,
    } = this.props;
    const {
      currentQuantity,
    } = this.state;

    return (
      <div className={cx('wrapper', className)}>
        {!isNumber(qty) && (
          <div className={cx('cell')}>
            <Button
              className={cx('cart-button')}
              onClick={onAdd}
            >
              {isFetching
                ? (
                  <Icon
                    className={cx('button-spinner')}
                    icon={spinnerIcon}
                    size={24}
                    viewBox='0 0 24 24'
                  />
                ) : <Fragment>В&nbsp;корзину</Fragment>
              }
            </Button>
          </div>
        )}
        {isNumber(qty) && (
          <Amount
            size='small'
            value={currentQuantity}
            onAdd={onAdd}
            onSubtract={onSubtract}
            onChange={this.onChange}
            onBlur={this.onChangeQty}
            onKeyDown={event => event.keyCode === 13 && this.onChangeQty(event)}
            aria-label='Количество товара'
            canAdd={!isFetching}
            renderPlus={hasPlusButton ? undefined : renderStub}
            canSubtract={!isFetching}
            disabled={isFetching}
          />
        )}
        {Boolean(additionStepText) && (
          <Box marginLeft={asTile ? 4 : 0} marginTop={asTile ? 0 : 2}>
            <p className={cx('min-quantity')}>
              {additionStepText}
            </p>
          </Box>
        )}
      </div>
    );
  }
}

/**
 * Рендер компонента заглушки.
 * @return {ReactElement} Заглушка вместо.
 */
export const renderStub = () => <Box padding={4} />;
