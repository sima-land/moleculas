import { MediaLayout, MediaHeader, MediaMain, MediaAside, MediaFooter } from './layout';
import { Preset, HeaderLayout } from './parts';
import { ScrollSection } from './parts/scroll-section';
import { Thumbnail, ThumbnailProps } from './parts/thumbnail';
import { Thumbnails, ThumbnailsProps } from './parts/thumbnails';
import { MediaViewProps, MediaView } from './parts/media-view';
import { ReviewProps, Review } from './parts/review';
import { ProductBriefProps, ProductBrief } from './parts/product-brief';
import { MediaArea } from './parts/media-area';

export type {
  // main content - single
  MediaViewProps,

  // aside content
  ThumbnailProps,
  ThumbnailsProps,

  // footer content
  ReviewProps,
  ProductBriefProps,
};

export {
  // layout
  MediaLayout,
  MediaHeader,
  MediaMain,
  MediaAside,
  MediaFooter,
  MediaArea,

  // main content - single
  MediaView,

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
