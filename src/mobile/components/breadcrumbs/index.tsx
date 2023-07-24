import { Link } from '@sima-land/ui-nucleons/link';
import styles from './breadcrumbs.module.scss';

export interface BreadcrumbsProps {
  items: {
    name: string;
    url?: string;
  }[];
}

/**
 * Хлебные крошки.
 * @param props Свойства.
 * @return Элемент.
 */
export const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav className={styles.root}>
    {items.map((item, index) => (
      <Link
        key={index}
        href={item.url}
        pseudo={!item.url}
        color='basic-gray87'
        className={styles.item}
        data-testid='breadcrumb'
      >
        {item.name}
      </Link>
    ))}
  </nav>
);
