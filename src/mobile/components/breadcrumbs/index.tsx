import { Link } from '@sima-land/ui-nucleons/link';
import React from 'react';
import styles from './breadcrumbs.module.scss';

export interface BreadcrumbsProps {
  items: {
    name: string
    url: string
  }[]
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav className={styles.root}>
    {items.map((item, index) => (
      <Link
        key={index}
        href={item.url}
        color='gray87'
        className={styles.item}
      >
        {item.name}
      </Link>
    ))}
  </nav>
);
