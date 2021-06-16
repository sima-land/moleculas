import React from 'react';
import { PromotionType } from './types';
import { Timer } from '@dev-dep/ui-nucleons/timer';
import { formatISO } from 'date-fns';
import styles from './banner-title.m.scss';

export interface BannerTitleProps {
  promotionType: PromotionType
  volumeDiscount?: number
  dueDate?: Date
}

export const BannerTitle = ({ promotionType, volumeDiscount, dueDate }: BannerTitleProps) => {
  let content: React.ReactNode = null;

  switch (promotionType) {
    case '3-by-2':
      content = '1+1=3';
      break;
    case 'special':
      if (dueDate) {
        content = (
          <CustomTimer dueDate={dueDate} />
        );
      }
      break;
    case 'volume-discount':
      if (volumeDiscount) {
        content = (
          <div className={styles.discount}>
            скидки до
            <div className={styles.percent}>{volumeDiscount}%</div>
          </div>
        );
      }
      break;
  }

  return (
    <>{content}</>
  );
};

export const CustomTimer = ({ dueDate }: { dueDate: Date }) => (
  <Timer
    date={formatISO(dueDate)}
    timeout={1000 * 60}
    format={({ days, hours, minutes }: any) => (
      <div className={styles.timer}>
        <TimerPart label='дней' value={Math.min(99, days)} />
        <Divider />
        <TimerPart label='часов' value={hours % 24} />
        <Divider />
        <TimerPart label='минут' value={minutes % 60} />
      </div>
    )}
  />
);

const TimerPart = ({ label, value }: { label: string, value: number }) => (
  <div className={styles.part}>
    <div>{`${value}`.padStart(2, '0')}</div>
    <div className={styles.label}>{label}</div>
  </div>
);

const Divider = () => (
  <div className={styles.divider}>:</div>
);
