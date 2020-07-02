import React from 'react';
import Icon from '@dev-dep/ui-nucleons/icon';
import leftArrowIcon from '../../../common/icons/full-left-arrow.svg';
import rightArrowIcon from '../../../common/icons/full-right-arrow.svg';
import classnames from 'classnames/bind';
import classes from './recommendation-carousel-button.scss';

const cx = classnames.bind(classes);

/**
 * Компонент кнопки карусели.
 * @param {Object} props Свойства компонента.
 * @param {'backward'|'forward'} props.type Тип кнопки.
 * @param {Function} props.onUse Обработчик взаимодействия с кнопкой.
 * @return {ReactElement} Компонент.
 */
const RecommendationCarouselButton = ({ type, onUse }) => (
  <button
    onClick={onUse}
    className={cx(
      'control',
      (type === 'backward') && 'backward'
    )}
    aria-label={type === 'backward' ? 'назад' : 'вперед'}
  >
    <Icon
      size={24}
      role='presentation'
      icon={
        type === 'backward'
          ? leftArrowIcon
          : rightArrowIcon
      }
    />
  </button>
);

export default RecommendationCarouselButton;
