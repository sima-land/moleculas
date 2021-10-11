import React, { useEffect, useState } from 'react';
import { PromotionType } from './types';
import { BannerTitle } from './banner-title';
import { Estimate } from './estimate';
import WatchSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/watch';
import classNames from 'classnames';
import styles from './index.module.scss';
import { PromotionCardPlaceholder } from './placeholder';

export interface PromotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  title: string
  subtitle?: string
  postfix?: string
  imageSrc: string
  dueDate: Date
  promotionType?: PromotionType
  volumeDiscount?: number
}

const PromotionName: Record<PromotionType, string> = {
  gift: 'Подарок',
  special: 'Спецпредложение',
  '3-by-2': '3 по цене 2',
  'volume-discount': 'Скидка за объём',
} as const;

/**
 * Карточка акции.
 * @param props Свойства.
 * @return Элемент.
 */
export const PromotionCard = ({
  promotionType,
  href,
  imageSrc,
  title,
  subtitle,
  dueDate,
  volumeDiscount,
  postfix = promotionType ? PromotionName[promotionType] : undefined,

  // div props
  className,
  ...restProps
}: PromotionCardProps) => {
  // время нужно выводить только на клиенте - вводим состояние
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={classNames(className, styles.root)} {...restProps}>
      <a href={href} className={styles.link}>
        <div className={styles.banner}>
          <img src={imageSrc} alt={title} className={styles.image} />

          {promotionType && (mounted || promotionType !== 'special') && (
            <div className={styles['banner-content']}>
              <BannerTitle
                promotionType={promotionType}
                volumeDiscount={volumeDiscount}
                dueDate={dueDate}
              />
            </div>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <h4 className={styles.title}>
              {title}
            </h4>

            {subtitle && (
              <p className={styles.subtitle}>
                {subtitle}
              </p>
            )}
          </div>

          <div className={styles.footer}>
            {mounted && (
              <time className={styles.timer}>
                <WatchSVG className={styles['timer-svg']} />
                <Estimate dueDate={dueDate} />
              </time>
            )}

            {postfix && (
              <div className={styles.postfix}>
                {postfix}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

PromotionCard.Placeholder = PromotionCardPlaceholder;
