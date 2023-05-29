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
  scrollRef,
  contentRef,
}: {
  children?: ReactNode;
  scrollRef?: Ref<HTMLDivElement>;
  contentRef?: Ref<HTMLDivElement>;
}) {
  return (
    <Layout disabledOn={['mxs', 'ms']}>
      <div ref={scrollRef} className={styles.inner}>
        <div className={styles.gutter} />
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
        <div className={styles.gutter} />
      </div>
    </Layout>
  );
}
