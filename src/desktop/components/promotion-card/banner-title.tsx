import { COLORS } from '@sima-land/ui-nucleons/colors';
import { ReactNode } from 'react';
import { PromotionType } from './types';
import { Timer } from '@sima-land/ui-nucleons/timer';
import { formatISO } from 'date-fns';
import styles from './banner-title.m.scss';

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
  let content: ReactNode = null;

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
  <svg viewBox='0 0 40 40' fill={COLORS.get('basic-gray76')}>
    <text x='20' y='70%' className={styles.value} textAnchor='middle'>
      {`${value}`.padStart(2, '0')}
    </text>
    <text x='20' y='10%' dy='100%' className={styles.label} textAnchor='middle'>
      {label}
    </text>
  </svg>
);

/**
 * Разделитель частей таймера.
 * @return Элемент.
 */
const TimerDivider = () => (
  <svg viewBox='0 0 26 40' fill={COLORS.get('basic-gray76')}>
    <text x='13' y='70%' className={styles.divider} textAnchor='middle'>
      :
    </text>
  </svg>
);
