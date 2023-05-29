import { Layout } from '@sima-land/ui-nucleons/layout';
import React, { ReactNode, Ref } from 'react';
import styles from './scroll-section.module.scss';

/**
 * Секция с прокруткой по горизонтали по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function ScrollSection({
  children,
  innerRef,
}: {
  children?: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}) {
  return (
    <Layout disabledOn={['mxs', 'ms']}>
      <div ref={innerRef} className={styles.inner}>
        <div className={styles.gutter} />
        <div className={styles.content}>{children}</div>
        <div className={styles.gutter} />
      </div>
    </Layout>
  );
}
