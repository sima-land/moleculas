import { HTMLAttributes, useEffect, useState } from 'react';
import { PromotionType } from './types';
import { BannerTitle } from './banner-title';
import { Estimate } from './estimate';
import classNames from 'classnames';
import styles from './promotion-card.m.scss';
import { PromotionCardPlaceholder } from './placeholder';

export interface PromotionCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Ссылка, переход по которой будет произведён при нажатии на карточку. */
  href?: string;

  /** Заголовок, выводится под баннером. */
  title: string;

  /** Подзаголовок. */
  subtitle?: string;

  /** Название акции.  */
  promotionName?: string;

  /** Путь к изображению для баннера. */
  imageSrc: string;

  /** Дата окончания акции. */
  dueDate: Date;

  /** Тип акции. */
  promotionType?: string;

  /** Скидка за объем, указывается при соответствующем типе акции. */
  volumeDiscount?: number;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const PROMOTION_NAME: Readonly<Record<PromotionType, string>> = {
  gift: 'Подарок',
  special: 'Спецпредложение',
  '3-by-2': '3 по цене 2',
  'volume-discount': 'Скидка за объём',
};

/**
 * Проверяет тип акции.
 * @param type Тип.
 * @return Признак.
 */
const isKnownPromotionType = (type?: string): type is PromotionType =>
  Boolean(type && Object.keys(PROMOTION_NAME).includes(type));

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
  promotionName = isKnownPromotionType(promotionType) ? PROMOTION_NAME[promotionType] : undefined,

  // div props
  className,
  'data-testid': testId = 'promotion-card',
  ...restProps
}: PromotionCardProps) => {
  // время нужно выводить только на клиенте - вводим состояние
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={classNames(className, styles.root)} {...restProps} data-testid={testId}>
      <a href={href} className={styles.link}>
        <div className={styles.banner}>
          <img src={imageSrc} alt={title} className={styles.image} />

          {isKnownPromotionType(promotionType) &&
            promotionType !== 'gift' &&
            (mounted || promotionType !== 'special') && (
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
            <h4 className={styles.title}>{title}</h4>

            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          <div className={styles.footer}>
            {promotionName && (
              <div data-testid='promotion-card:name' className={styles.name}>
                {promotionName}
              </div>
            )}

            {mounted && (
              <time data-testid='promotion-card:due-date'>
                <Estimate dueDate={dueDate} />
              </time>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

/** @deprecated Лучше использовать прямой импорт PromotionCardPlaceholder. */
PromotionCard.Placeholder = PromotionCardPlaceholder;
