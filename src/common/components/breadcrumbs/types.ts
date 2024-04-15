import type { LinkProps } from '@sima-land/ui-nucleons/link';
import type { WithTestId } from '@sima-land/ui-nucleons/types';
import type { HTMLAttributes } from 'react';

export interface BreadcrumbProps extends WithTestId, HTMLAttributes<HTMLElement> {}

export interface BreadcrumbItemProps extends LinkProps, WithTestId {
  active?: boolean;
}
