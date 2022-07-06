import React, { createContext, ReactNode, useContext } from 'react';
import { Link, LinkProps } from '@sima-land/ui-nucleons/link';
import { HintProps } from '@sima-land/ui-nucleons/hint';
import { Price } from '@sima-land/ui-nucleons/price';
import { StrokedSVG, StrokedSVGProps } from '@sima-land/ui-nucleons/stroked-svg';
import { WithHint } from '@sima-land/ui-nucleons/with-hint';
import { ImageOverlay } from '../../../desktop/components/gallery-modal/components/image-overlay';
import { BadgeList, BadgeListProps } from '../badge-list';
import { ProductInfoContext } from './utils';
import AdultSVG from '../../icons/eighteen-plus.svg';
import classnames from 'classnames/bind';
import styles from './product-info.module.scss';

const cx = classnames.bind(styles);

export interface ImageProps {
  src?: string;
  alt?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
  opacity?: number;
}

/**
 * Кнопка-иконка на изображении.
 * @param props Свойства.
 * @return Элемент.
 */
const ImageButton = ({
  icon,
  fill,
  onClick,
  hint,
  hintDirection = 'left',
  'data-testid': testId,
  position,
}: {
  icon: StrokedSVGProps['component'];
  fill?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  hint?: string;
  hintDirection?: HintProps['direction'];
  'data-testid'?: string;
  position?: {
    x: 'left' | 'right';
    y: 'top' | 'bottom';
  };
}) => {
  const commonProps: StrokedSVGProps & { 'data-testid'?: string } = {
    role: 'banner',
    component: icon,
    fill,
    strokeWidth: 1.5,
    className: cx(
      'image-button',
      position && 'positioned',
      position && `${position.x}-${position.y}`,
    ),
    onClick,
    'data-testid': testId,
  };

  return hint ? (
    <WithHint hint={hint} direction={hintDirection}>
      {(ref, toggle) => (
        <StrokedSVG
          {...commonProps}
          ref={ref as any}
          onMouseEnter={() => toggle(true)}
          onMouseLeave={() => toggle(false)}
        />
      )}
    </WithHint>
  ) : (
    <StrokedSVG {...commonProps} />
  );
};

/**
 * Слот - изображение товара.
 * @param props Свойства.
 * @return Элемент.
 */
const Image = ({ src, alt, href, onClick, children, opacity }: ImageProps) => {
  const { restriction } = useContext(ProductInfoContext);
  const defaultOpacity = restriction ? 0.4 : undefined;

  return (
    <ImageOverlay className={cx('image-overlay')}>
      {restriction === 'adult' ? (
        <>
          <img
            alt={alt}
            src={src}
            className={cx('image', 'adult')}
            data-testid='product-info:adult-image'
          />
          <AdultSVG className={cx('adult-icon')} />
        </>
      ) : (
        <>
          <a
            href={href}
            className={cx('image-link')}
            onClick={onClick}
            data-testid='product-info:image-link'
          >
            <img
              alt={alt}
              src={src}
              className={cx('image')}
              style={{ opacity: typeof opacity === 'number' ? opacity : defaultOpacity }}
              data-testid='product-info:image'
            />
          </a>

          {children && <div className={cx('image-buttons')}>{children}</div>}
        </>
      )}
    </ImageOverlay>
  );
};

/**
 * Слот для вывода шильдиков.
 * @param props Свойства.
 * @return Элемент.
 */
const Badges = (props: BadgeListProps) => <BadgeList className={cx('badges')} {...props} />;

/**
 * Слот для вывода цен.
 * @param props Свойства.
 * @return Элемент.
 */
const Prices = ({
  price,
  oldPrice,
  currencyGrapheme,
  unavailableReason = 'Товар недоступен',
}: {
  price: number;
  oldPrice?: number;
  currencyGrapheme?: string;
  unavailableReason?: string;
}) => {
  const { restriction } = useContext(ProductInfoContext);

  return (
    <div
      className={cx('prices', { 'height-limit': !restriction || restriction === 'adult' })}
      data-testid='product-info:prices'
    >
      {(!restriction || restriction === 'adult') && (
        <>
          <Price
            value={price}
            currencyGrapheme={currencyGrapheme}
            className={cx('price')}
            data-testid='product-info:price'
          />

          {restriction !== 'adult' && oldPrice && (
            <Price
              value={oldPrice}
              currencyGrapheme={currencyGrapheme}
              className={cx('old-price')}
              crossedOut
              data-testid='product-info:old-price'
            />
          )}
        </>
      )}

      {restriction === 'unavailable' && unavailableReason}
    </div>
  );
};

/**
 * Слот для вывода ссылки - названия товара.
 * @param props Свойства.
 * @return Элемент.
 */
const Title = ({ children, href, onClick }: Pick<LinkProps, 'children' | 'href' | 'onClick'>) => {
  const { restriction } = useContext(ProductInfoContext);

  return restriction === 'adult' ? (
    <span className={cx('adult-info')} data-testid='product-info:adult-warning'>
      Подтвердите, что вы старше 18 лет, чтобы посмотреть товар.
    </span>
  ) : (
    <Link
      onClick={onClick}
      className={cx('link', 'line-clamp')}
      href={href}
      color='basic-gray87'
      data-testid='product-info:name-link'
    >
      {children}
    </Link>
  );
};

/** Слот для вывода ссылки торговой марки.
 * @param props Свойства.
 * @return Элемент.
 */
const TrademarkLink = ({
  href,
  children,
  onClick,
}: Pick<LinkProps, 'href' | 'children' | 'onClick'>) => (
  <Link
    className={cx('trademark-link')}
    href={href}
    children={children}
    onClick={onClick}
    color='basic-blue'
    data-testid='product-info:trademark-link'
  />
);

const FooterContext = createContext<{ className?: string }>({
  className: undefined,
});

/**
 * Слот - футер.
 * @param props Свойства.
 * @return Элемент.
 */
const Footer: React.FC = ({ children }) => {
  const { className = cx('footer') } = useContext(FooterContext);

  return (
    <div className={className} data-testid='product-info:footer'>
      {children}
    </div>
  );
};

/**
 * Блок управления корзиной.
 * @param props Свойства.
 * @return Элемент.
 */
const CartControl = ({
  children,
  stepText,
  markupText,
  loading,
}: {
  children?: React.ReactNode;
  stepText?: string;
  markupText?: string;
  loading?: boolean;
}) => (
  <div className={cx('control-wrapper', { loading })}>
    <div className={cx('control')}>{!loading && children}</div>

    {(loading || stepText) && (
      <div className={cx('unit-text')} data-testid='product-info:cart-step'>
        {!loading && stepText}
      </div>
    )}

    {!loading && markupText && (
      <div className={cx('bottom-text')} data-testid='product-info:cart-info'>
        {markupText}
      </div>
    )}
  </div>
);

/**
 * Кнопка "подтвердить".
 * @param props Свойства.
 * @return Элемент.
 */
const AdultConfirmButton = ({ className, ...props }: LinkProps) => (
  <Link
    {...props}
    pseudo
    color='basic-blue'
    className={cx('text-button', className)}
    data-testid='product-info:adult-confirm-button'
  >
    Подтвердить
  </Link>
);

/**
 * Кнопка "В лист ожидания".
 * @param props Свойства.
 * @return Элемент.
 */
const WaitListAddButton = ({ className, ...props }: LinkProps) => (
  <Link
    {...props}
    pseudo
    color='basic-blue'
    className={cx('text-button', className)}
    data-testid='product-info:wait-list-add-button'
  >
    В лист ожидания
  </Link>
);

/**
 * Текст со ссылкой "Товар добавлен в лист ожидания".
 * @param props Свойства.
 * @return Элемент.
 */
const WaitListAddedLink = ({ className, ...props }: LinkProps) => (
  <span className={cx('wait-list-added-text')}>
    Товар добавлен в{' '}
    <Link
      {...props}
      color='basic-blue'
      className={cx('text-button', className)}
      data-testid='product-info:wait-list-added-link'
    >
      лист{'\u00A0'}ожидания
    </Link>
  </span>
);

function SecondaryInfo({ children }: { children: ReactNode }) {
  return <div className={cx('secondary-info')}>{children}</div>;
}

export const Parts = {
  // основные компоненты-слоты и компоненты-запчасти
  Image,
  ImageButton,
  Badges,
  Prices,
  Title,
  TrademarkLink,
  SecondaryInfo,

  // компоненты-слоты и компоненты-запчасти, предназначенные для вывода футера (dcе что ниже ссылки на торговую марку)
  Footer,
  FooterContext,
  CartControl,
  AdultConfirmButton,
  WaitListAddButton,
  WaitListAddedLink,
} as const;
