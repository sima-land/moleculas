import React, { useState, useRef } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { Plate } from '@sima-land/ui-nucleons/plate';
import { Link } from '@sima-land/ui-nucleons/link';
import { times } from 'lodash';
import { useOutsideClick } from '@sima-land/ui-nucleons/hooks';
import classnames from 'classnames/bind';
import styles from './breadcrumbs.module.scss';
import DownSVG from './square-arrow-down.svg';

export interface Sibling {
  name: string
  url?: string
  [key: string]: any
}

export interface Breadcrumb extends Sibling {
  siblings?: {
    state: 'initial' | 'fetching' | 'ready'
    data?: Sibling[]
  }
}

export interface BreadcrumbsProps {
  items: Breadcrumb[]
  isSiblingActive?: (sibling: Sibling) => boolean
  onSiblingsPopupOpen?: (item: Breadcrumb) => void
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Список "хлебных крошек".
 * @param props Свойства.
 * @return Элемент.
 */
export const Breadcrumbs = ({
  items,
  onSiblingsPopupOpen,
  isSiblingActive,
  'data-testid': testId = 'breadcrumbs',
}: BreadcrumbsProps) => (
  <nav className={cx('root')} data-testid={testId}>
    {items.map((breadcrumb, index) => (
      <Breadcrumb
        key={index}
        data={breadcrumb}
        onSiblingsPopupOpen={() => onSiblingsPopupOpen?.(breadcrumb)}
        isSiblingActive={sibling => Boolean(isSiblingActive?.(sibling))}
      />
    ))}
  </nav>
);

/**
 * Элемент списка "хлебных крошек".
 * @param props Свойства.
 * @return Элемент.
 */
const Breadcrumb = ({
  data,
  onSiblingsPopupOpen,
  isSiblingActive,
}: {
  data: Breadcrumb
  isSiblingActive: (sibling: Breadcrumb) => boolean
  onSiblingsPopupOpen: () => void
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const selfName = (
    <Link color='gray87' href={data.url}>
      {data.name}
    </Link>
  );

  const [withPopup, togglePopup] = useState<boolean>(false);

  useOutsideClick(popupRef, () => togglePopup(false));

  return (
    <div data-testid='breadcrumb' className={cx('breadcrumb')}>
      {selfName}

      {data.siblings && (
        <>
          <DownSVG
            data-testid='breadcrumb:siblings-opener'
            className={cx('toggle-icon')}
            onClick={() => {
              togglePopup(true);
              onSiblingsPopupOpen();
            }}
          />

          <CSSTransition
            in={withPopup}
            timeout={200}
            unmountOnExit
            classNames={{
              enter: cx('fade-enter'),
              enterActive: cx('fade-enter-active'),
              exit: cx('fade-exit'),
              exitActive: cx('fade-exit-active'),
            }}
          >
            <Plate ref={popupRef} shadow='z3' rounds='m' className={cx('popup')}>
              <div className={cx('popup-header')}>
                {selfName}
                <DownSVG
                  data-testid='breadcrumb:siblings-closer'
                  className={cx('toggle-icon', 'close')}
                  onClick={() => togglePopup(false)}
                />
              </div>

              <ul className={cx('siblings')}>
                {data.siblings.state === 'fetching' && (
                  <>
                    {times(8).map(index => (
                      <div key={index} className={cx('sibling-placeholder')} />
                    ))}
                  </>
                )}

                {data.siblings.state === 'ready' && (
                  <>
                    {data.siblings.data?.map((sibling, index) => (
                      <li
                        key={index}
                        className={cx('sibling')}
                        data-testid='breadcrumb-sibling'
                      >
                        {isSiblingActive(sibling) ? (
                          <span className={cx('active')}>
                            {sibling.name}
                          </span>
                        ) : (
                          <Link
                            color='gray87'
                            className={cx('link')}
                            href={sibling.url}
                            children={sibling.name}
                          />
                        )}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </Plate>
          </CSSTransition>
        </>
      )}
    </div>
  );
};
