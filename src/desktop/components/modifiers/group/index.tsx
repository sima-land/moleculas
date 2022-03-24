import React, {
  Children,
  forwardRef,
  isValidElement,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';
import { ModifierButton, ModifierButtonProps } from '../button';
import { useViewState } from './utils';
import classNames from 'classnames/bind';
import styles from './modifiers-group.module.scss';

export interface ModifiersGroupProps {
  /** Кнопки модификаторов. */
  children?: ReactNode;

  /** Надо ли сразу показывать весь список не ограничивая двумя строками. */
  defaultOpened?: boolean;

  /** Будет вызвана после нажатия на кнопку показа всех модификаторов. */
  onShowAll?: MouseEventHandler<HTMLDivElement>;
}

interface GroupItemProps {
  children?: React.ReactNode;
  hidden?: boolean;
  invisible?: boolean;
}

interface OpenButtonProps {
  count: number;
  onClick?: ModifierButtonProps['onClick'];
}

const cx = classNames.bind(styles);

/**
 * Блок списка кнопок модификаторов.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModifiersGroup = ({
  children,
  defaultOpened = false,
  onShowAll,
}: ModifiersGroupProps) => {
  const [opened, setOpened] = useState<boolean>(defaultOpened);
  const rootRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLDivElement>(null);

  const showAll = useCallback<MouseEventHandler<HTMLDivElement>>(
    event => {
      setOpened(true);
      onShowAll?.(event);
    },
    [onShowAll],
  );

  const viewState = useViewState(rootRef, openerRef);

  const items = Children.toArray(children).reduce<ReactNode[]>((result, child, index) => {
    if (isValidElement(child) && child.type === ModifierButton) {
      const needHideItems = viewState.lastVisibleIndex !== -1 && !opened;
      const isDisplayed = !needHideItems || index < viewState.lastVisibleIndex;

      result.push(
        <GroupItem key={index} hidden={!isDisplayed}>
          {child}
        </GroupItem>,
      );
    }

    return result;
  }, []);

  return (
    <div ref={rootRef} className={cx('root', { opened })}>
      {items}

      {!opened && (
        <GroupItem ref={openerRef} invisible={viewState.lastVisibleIndex === -1}>
          <OpenButton count={items.length - viewState.lastVisibleIndex} onClick={showAll} />
        </GroupItem>
      )}
    </div>
  );
};

const GroupItem = forwardRef<HTMLDivElement, GroupItemProps>(
  ({ children, hidden, invisible }, ref) => (
    <div ref={ref} className={cx('item', { hidden, invisible })} data-testid='modifier-group:item'>
      {children}
    </div>
  ),
);

const OpenButton = ({ count, onClick }: OpenButtonProps) => (
  <ModifierButton
    squared
    onClick={onClick}
    content={`+${count}`}
    className={cx('opener')}
    data-testid='modifier-group:show-all-button'
  />
);
