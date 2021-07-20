import React from 'react';
import { MediaType } from '../types';
import { ImageOverlay } from './image-overlay';
import PlaySVG from '@sima-land/ui-quarks/icons/24x24/Filled/play';
import classNames from 'classnames/bind';
import styles from './thumbnail.module.scss';
import AllRoundSVG from '../icons/360.svg';

const cx = classNames.bind(styles);

export interface ThumbnailProps {
  type: MediaType
  src?: string
  alt?: string
  checked?: boolean
  onClick?: React.MouseEventHandler
  className?: string
}

export const Thumbnail = ({
  type,
  src,
  alt,
  checked,
  onClick,
  className,
}: ThumbnailProps) => (
  <button
    className={cx('root', type !== 'image' && 'iconic', checked && 'checked', className)}
    onClick={onClick}
    data-testid='gallery-modal:thumbnail'
  >
    {type === '360' && (
      <AllRoundSVG fill='currentColor' />
    )}
    {type === 'video' && (
      <PlaySVG width={32} height={32} fill='currentColor' />
    )}
    {src && (
      <ImageOverlay>
        <img src={src} alt={alt} />
      </ImageOverlay>
    )}
  </button>
);
