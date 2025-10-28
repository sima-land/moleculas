import { HTMLAttributes, useEffect, useState } from 'react';
import { PromotionType } from './types';
import { BannerTitle } from './banner-title';
import { Estimate } from './estimate';
import classNames from 'classnames';
import styles from './promotion-card.m.scss';
import { PromotionCardPlaceholder } from './placeholder';
import { useImageStub } from '../../../common/hooks';
import { ImgStub } from '../../../common/components/img-stub';

export interface PromotionCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Ссылка, переход по которой будет произведён при нажатии на карточку. */
  href?: string;

  /** Заголовок, выводится под баннером. */
  title: string;

  /** Подзаголовок. */
  subtitle?: string;

  /** Название акции.  */
  name?: string;

  /** Путь к изображению для баннера. */
  imageSrc: string;

  /** Дата окончания акции. */
  dueDate: Date;

  /** Тип акции. */
  type?: string;

  /** Скидка за объем, указывается при соответствующем типе акции. */
  volumeDiscount?: number;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const KNOWN_NAME: Readonly<Record<PromotionType, string>> = {
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
const isKnownType = (type?: string): type is PromotionType =>
  Boolean(type && Object.keys(KNOWN_NAME).includes(type));

/**
 * Карточка акции.
 * @param props Свойства.
 * @return Элемент.
 */
export const PromotionCard = ({
  type,
  href,
  imageSrc,
  title,
  subtitle,
  dueDate,
  volumeDiscount,
  name = isKnownType(type) ? KNOWN_NAME[type] : undefined,

  // div props
  className,
  'data-testid': testId = 'promotion-card',
  ...restProps
}: PromotionCardProps) => {
  // время нужно выводить только на клиенте - вводим состояние
  const [mounted, setMounted] = useState<boolean>(false);

  const { failed, handleError } = useImageStub(imageSrc);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={classNames(className, styles.root)} {...restProps} data-testid={testId}>
      <a href={href} className={styles.link}>
        <div className={styles.banner}>
          {failed && <ImgStub className={styles.stub} />}
          {!failed && (
            <img src={imageSrc} alt={title} className={styles.image} onError={handleError} />
          )}

          {!failed && isKnownType(type) && type !== 'gift' && (mounted || type !== 'special') && (
            <div className={styles['banner-content']}>
              <BannerTitle promotionType={type} volumeDiscount={volumeDiscount} dueDate={dueDate} />
            </div>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <h4 className={styles.title}>{title}</h4>

            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          <div className={styles.footer}>
            {name && (
              <div data-testid='promotion-card:name' className={styles.name}>
                {name}
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
