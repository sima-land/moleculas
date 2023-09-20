import type { ComponentType, HTMLAttributes } from 'react';

export interface PaginationData {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}

export interface PaginationControlsProps
  extends Partial<PaginationData>,
    HTMLAttributes<HTMLDivElement> {
  flow?: 'horizontal' | 'vertical' | 'unset';
  withForm?: boolean;
  Buttons?: ComponentType<{
    total: number;
    current: number;
    onPageChange: (page: number) => void;
  }>;
  Form?: ComponentType<{
    total: number;
    current: number;
    onPageChange: (page: number) => void;
  }>;
}
