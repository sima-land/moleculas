import React from 'react';
import { PromotionType } from './types';
import { Timer } from '@sima-land/ui-nucleons/timer';
import { formatISO } from 'date-fns';
import styles from './banner-title.module.scss';

export interface BannerTitleProps {
  promotionType: PromotionType;
  volumeDiscount?: number;
  dueDate?: Date;
}

/**
 * Заголовок баннера.
 * @param props Свойства.
 * @return Элемент.
 */
export const BannerTitle = ({ promotionType, volumeDiscount, dueDate }: BannerTitleProps) => {
  let content: React.ReactNode = null;

  switch (promotionType) {
    case '3-by-2':
      content = '1+1=3';
      break;
    case 'special':
      if (dueDate) {
        content = <CustomTimer dueDate={dueDate} />;
      }
      break;
    case 'volume-discount':
      if (volumeDiscount) {
        content = (
          <div className={styles.discount} data-testid='promotion-card:banner-discount'>
            скидки до
            <div className={styles.percent}>{volumeDiscount}%</div>
          </div>
        );
      }
      break;
  }

  return <>{content}</>;
};

/**
 * Таймер.
 * @param props Свойства.
 * @return Элемент.
 */
export const CustomTimer = ({ dueDate }: { dueDate: Date }) => (
  <Timer
    date={formatISO(dueDate)}
    timeout={1000 * 60}
    format={({ days, hours, minutes }: any) => (
      <div className={styles.timer} data-testid='promotion-card:banner-timer'>
        <TimerPart label='дней' value={Math.min(99, days)} />
        <TimerDivider />
        <TimerPart label='часов' value={hours % 24} />
        <TimerDivider />
        <TimerPart label='минут' value={minutes % 60} />
      </div>
    )}
  />
);

/**
 * Часть таймера.
 * @param props Свойства.
 * @return Элемент.
 */
const TimerPart = ({ label, value }: { label: string; value: number }) => (
  <div className={styles.part}>
    <div>{`${value}`.padStart(2, '0')}</div>
    <div className={styles.label}>{label}</div>
  </div>
);

/**
 * Разделитель частей таймера.
 * @return Элемент.
 */
const TimerDivider = () => <div className={styles.divider}>:</div>;
