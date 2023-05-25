import { Layout } from '@sima-land/ui-nucleons/layout';
import React, { ReactNode } from 'react';
import styles from './scroll-section.module.scss';

/**
 * Секция с прокруткой по горизонтали по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function ScrollSection({ children }: { children?: ReactNode }) {
  return (
    <Layout disabledOn={['mxs', 'ms']}>
      <div className={styles.inner}>{children}</div>
    </Layout>
  );
}
