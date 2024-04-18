import { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Rating } from '@sima-land/ui-nucleons/rating';
import classnames from 'classnames/bind';
import styles from './review-info.m.scss';
import { on } from '@sima-land/ui-nucleons/helpers';
import { BoxShadow } from '@sima-land/ui-nucleons/styling';
import { CustomScrollbar } from '@sima-land/ui-nucleons/_internal/custom-scrollbar';

export interface ReviewInfoProps {
  rating: number;
  author: string;
  content?: ReactNode;
  onGoToReview?: () => void;
  notAffectRating?: boolean;
  className?: string;
  loading?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Отзыв.
 * @param props Свойства.
 * @return Элемент.
 */
export const ReviewInfo = ({
  rating,
  author,
  onGoToReview,
  content,
  className,
  notAffectRating,
  loading,
}: ReviewInfoProps) => {
  const [clamped, setClamped] = useState(false);
  const [opened, setOpened] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const checkClamp = useCallback(() => {
    const contentEl = contentRef.current;

    if (!opened && contentEl) {
      setClamped(contentEl.scrollHeight > contentEl.clientHeight);
    }
  }, [opened]);

  useEffect(() => {
    setClamped(false);
    setOpened(false);
  }, [content, author]);

  useEffect(checkClamp, [content, opened]);

  // @todo что делать если при изменении размеров изменилось состояние обрезания?
  useEffect(() => on(window, 'resize', checkClamp), [content, checkClamp]);

  return (
    <div className={cx('root', className, opened && BoxShadow.z2straight)}>
      {loading && (
        <Layout>
          <LoadingView />
        </Layout>
      )}

      {!loading && (
        <>
          <Layout className={cx('header')}>
            <div className={cx('rating')}>
              {notAffectRating ? 'Не влияет на рейтинг' : <Rating value={rating} />}
            </div>

            <div className={cx('author')}>{author}</div>

            {onGoToReview && (
              <Link
                className={cx('link')}
                pseudo
                onClick={onGoToReview}
                data-testid='gallery-modal:go-to-review-link'
              >
                Перейти к отзыву
              </Link>
            )}
          </Layout>

          {content && !opened && (
            <Layout>
              <div
                ref={contentRef}
                className={cx('content')}
                data-testid='review-info:collapsed-content'
              >
                {content}
              </div>
            </Layout>
          )}

          {content && opened && (
            <CustomScrollbar className={cx('content', 'opened')}>
              <Layout>
                <div data-testid='review-info:expanded-content'>{content}</div>
                <Link pseudo onClick={() => setOpened(false)} data-testid='review-info:collapse'>
                  Скрыть отзыв
                </Link>
              </Layout>
            </CustomScrollbar>
          )}

          {content && !opened && clamped && (
            <Layout>
              <Link pseudo onClick={() => setOpened(true)} data-testid='review-info:expand'>
                Показать полностью
              </Link>
            </Layout>
          )}
        </>
      )}
    </div>
  );
};

/**
 * Оступы для блоков отзыва.
 * @param props Свойства.
 * @return Элемент.
 */
function Layout({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx(className, 'layout')}>{children}</div>;
}

/**
 * Отображение загрузки данных отзыва.
 * @return Элемент.
 */
function LoadingView() {
  return (
    <div className={cx('loading')}>
      <div className={cx('head')}>
        <div className={cx('text', 'name')}></div>
        <Link pseudo disabled className={cx('button')}>
          Перейти к отзыву
        </Link>
      </div>
      <div className={cx('text')}></div>
      <div className={cx('text')}></div>
    </div>
  );
}
