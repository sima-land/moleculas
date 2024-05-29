import { ProductImage } from './image';
import { ImageButton } from './image-button';
import { ProductInfoBadges } from './badges';
import { ProductInfoPrices } from './prices';
import { ProductInfoTitle } from './title';
import { ProductInfoSecondaryInfo } from './secondary-info';
import { ProductInfoTrademarkLink } from './trademark-link';
import { ProductInfoRatingCounter } from './rating-couter';
import { ProductInfoFooter } from './footer';
import { ProductInfoFooterContext } from '../utils';
import { ProductInfoCartControl } from './cart-control';
import { WaitListAddedLink } from './wait-list-added-link';
import { WaitListAddLink } from './wait-list-add-link';
import { AdultConfirmButton } from './adult-confirm-button';

export const Parts = {
  // основные компоненты-слоты и компоненты-запчасти
  Image: ProductImage,
  ImageButton,
  Badges: ProductInfoBadges,
  Prices: ProductInfoPrices,
  Title: ProductInfoTitle,
  SecondaryInfo: ProductInfoSecondaryInfo,
  TrademarkLink: ProductInfoTrademarkLink,
  RatingCounter: ProductInfoRatingCounter,

  // компоненты-слоты и компоненты-запчасти, предназначенные для вывода футера
  Footer: ProductInfoFooter,
  FooterContext: ProductInfoFooterContext,
  CartControl: ProductInfoCartControl,
  AdultConfirmButton,
  WaitListAddButton: WaitListAddLink,
  WaitListAddedLink,
} as const;
