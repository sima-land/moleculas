import { Layout } from '@sima-land/ui-nucleons/layout';
import { ReactNode, Ref } from 'react';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import styles from './scroll-section.m.scss';

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
      <div ref={scrollRef} className={styles.inner} {...{ [BSL_IGNORE_ATTR]: true }}>
        <div className={styles.gutter} />
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
        <div className={styles.gutter} />
      </div>
    </Layout>
  );
}
