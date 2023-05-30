import { MediaLayout, MediaHeader, MediaMain, MediaAside, MediaFooter } from './layout';
import { Preset, HeaderLayout } from './parts';
import { ScrollSection } from './parts/scroll-section';
import { Thumbnail, ThumbnailProps } from './parts/thumbnail';
import { Thumbnails, ThumbnailsProps } from './parts/thumbnails';
import { MediaContentProps, MediaContent } from './parts/media-content';
import { MediaViewProps, MediaView } from './parts/media-view';
import { ReviewProps, Review } from './parts/review';
import { ProductBriefProps, ProductBrief } from './parts/product-brief';

export type {
  // main content - multiple
  MediaContentProps,

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

  // main content - multiple
  MediaContent,

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
