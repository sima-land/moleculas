import { MediaLayout, MediaHeader, MediaMain, MediaAside, MediaFooter } from './layout';
import { Preset, HeaderLayout } from './parts';
import { ScrollSection } from './parts/scroll-section';
import { ThumbnailsProps, Thumbnail, Thumbnails } from './parts/thumbnails';
import { MediaContentProps, MediaContent } from './parts/media';
import { ReviewProps, Review } from './parts/review';
import { ProductBriefProps, ProductBrief } from './parts/product-brief';

export type { MediaContentProps, ThumbnailsProps, ProductBriefProps, ReviewProps };

export {
  // layout
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,

  // main content
  MediaContent,

  // header content
  HeaderLayout,

  // aside content
  Thumbnails,
  Thumbnail,

  // footer content
  Review,
  ProductBrief,

  // utils
  Preset,
  ScrollSection,
};
