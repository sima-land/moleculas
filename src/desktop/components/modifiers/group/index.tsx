import React, { Component, createRef } from 'react';
import { debounce } from 'lodash';
import prop from 'lodash/fp/prop';
import { ModifierButton, ModifierButtonProps, Modifier } from '../button';
import on from '@sima-land/ui-nucleons/helpers/on';
import classes from './modifiers-group.module.scss';
import classnames from 'classnames/bind';

type ModifierPredicate<T> = (item: Modifier) => T;

interface ModifiersGroupState {
  needShowAll: boolean;
  hasHiddenNodes: boolean;
  lastVisibleChildIndex: number | null;
}

export interface ModifiersGroupProps {
  /** Список модификаторов. */
  items?: Modifier[];

  /** Флаг необходимости отображения всех модификаторов. */
  needShowAll?: boolean;

  /** Будет вызвана при выборе модификатора, получит сам модификатор. */
  onSelectItem?: (item: Modifier, selected: boolean) => void;

  /** Возвращает тип модификатора ("text" или "image", по умолчанию "text"). */
  getItemType?: ModifierPredicate<ModifierButtonProps['type']>;

  /** Возвращает число с количеством модификатора (по умолчанию свойство "count"). */
  getItemCount?: ModifierPredicate<number>;

  /** Возвращает цвет модификатора (по умолчанию свойство "color"). */
  getItemColor?: ModifierPredicate<string>;

  /** Возвращает содержимое модификатора (по умолчанию свойство "content"). */
  getItemContent?: ModifierPredicate<string>;

  /** Показывает, выбран ли модификатор (по умолчанию свойство "selected"). */
  isSelectedItem?: ModifierPredicate<boolean>;

  /** Возвращает URL изображения модификатора (по умолчанию свойство "image"). */
  getItemImage?: ModifierPredicate<string>;

  /** Имеет ли товар уценку. */
  isMarkdown?: ModifierPredicate<boolean>;

  /** Сработает при нажатии на кнопку отображения всех модификаторов. */
  onClickShowAll?: () => void;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(classes);

/**
 * Внешний отступ кнопки.
 */
const MODIFIER_GUTTER = 4;

/**
 * Создает функцию, находящую индекс элемента, который не должен быть виден.
 * @param container Контейнер.
 * @return Функция.
 */
export const createHiddenNodeIndexFinder = (container: HTMLElement) => (childNode: HTMLElement) => {
  let childOffsetTop = childNode.offsetTop;

  if (childNode.classList.contains(cx('invisible'))) {
    childOffsetTop -= MODIFIER_GUTTER;
  }

  return childOffsetTop - container.offsetTop >= container.clientHeight;
};

const defaultGetItemType = prop('type');
const defaultGetItemCount = prop('count');
const defaultGetItemColor = prop('color');
const defaultGetItemContent = prop('content');
const defaultIsSelectedItem = prop('selected');
const defaultGetItemImage = prop('image');
const defaultGetIsMarkdown = prop('isMarkdown');

/**
 * Компонент списка модификаторов.
 */
export class ModifiersGroup extends Component<ModifiersGroupProps, ModifiersGroupState> {
  removeGlobalListener: any;

  state = {
    // нажата ли кнопка показа всех модификаторов
    needShowAll: this.props.needShowAll || false,

    // есть ли дочерние узлы контейнера, которые скрыты из за ограничения его высоты
    hasHiddenNodes: true,

    // индекс последнего видимого элемента в ограниченном по высоте контейнере
    lastVisibleChildIndex: null,
  };

  windowWidth = 0;
  containerRef = createRef<HTMLDivElement>();
  showingButtonRef = createRef<HTMLDivElement>();

  /**
   * @inheritdoc
   */
  componentDidMount() {
    this.windowWidth = document.documentElement.offsetWidth;
    this.removeGlobalListener = on(window, 'resize', this.resetVisibleNodesData);
    this.checkVisibleNodes();
  }

  /**
   * @inheritdoc
   */
  componentDidUpdate() {
    this.checkVisibleNodes();
  }

  /**
   * @inheritdoc
   */
  componentWillUnmount() {
    this.removeGlobalListener();
  }

  /**
   * Сбрасывает информацию о видимых и невидимых дочерних узлах контейнера.
   */
  resetVisibleNodesData = debounce(
    () => {
      if (document.documentElement.offsetWidth !== this.windowWidth) {
        this.windowWidth = document.documentElement.offsetWidth;
        this.setState({
          hasHiddenNodes: true,
          lastVisibleChildIndex: null,
        });
      }
    },
    250,
    { leading: true },
  );

  /**
   * Обновляет информацию о видимых и невидимых дочерних узлах контейнера,
   * необходимую для показа кнопки раскрытия полного списка модификаторов.
   */
  checkVisibleNodes = () => {
    // если не указан индекс последнего видимого узла
    if (this.state.lastVisibleChildIndex === null) {
      const containerEl = this.containerRef.current;
      const showingButtonEl = this.showingButtonRef.current;

      if (containerEl && showingButtonEl) {
        const childList = [...(containerEl as any).children];
        const firstHiddenNodeIndex = childList.findIndex(createHiddenNodeIndexFinder(containerEl));

        if (firstHiddenNodeIndex !== -1) {
          const lastVisibleElIndex = firstHiddenNodeIndex - 1;
          const lastVisibleNode = childList[lastVisibleElIndex];

          if (lastVisibleNode) {
            const rightBound = lastVisibleNode.getBoundingClientRect().right;
            const rightContainerBound = (containerEl as any).getBoundingClientRect().right;

            // проверяем, хватает ли кнопке места (с запасом в половину) после последнего видимого дочернего элемента
            const isShowingButtonFit =
              rightContainerBound - rightBound >= (showingButtonEl as any).clientWidth * 1.5;
            this.setState({
              // если хватает места - ставим кнопку после последнего, иначе - вместо
              lastVisibleChildIndex: lastVisibleElIndex + (isShowingButtonFit ? 1 : 0),
              hasHiddenNodes: true,
            });
          }
        } else {
          this.setState({ hasHiddenNodes: false });
        }
      }
    }
  };

  /**
   * Обработчик нажатия на кнопку отображения всех модификаторов.
   */
  handleShowAllClick = () => {
    const { onClickShowAll } = this.props;

    this.setState({ needShowAll: true });

    onClickShowAll && onClickShowAll();
  };

  /**
   * @inheritdoc
   */
  render() {
    const {
      items,
      onSelectItem,
      getItemType = defaultGetItemType,
      getItemCount = defaultGetItemCount,
      getItemColor = defaultGetItemColor,
      getItemContent = defaultGetItemContent,
      isSelectedItem = defaultIsSelectedItem,
      getItemImage = defaultGetItemImage,
      isMarkdown = defaultGetIsMarkdown,
      'data-testid': testId = 'modifiers-group',
    } = this.props;

    const { needShowAll, hasHiddenNodes, lastVisibleChildIndex } = this.state;
    const needHideModifiers = !needShowAll && lastVisibleChildIndex !== null;

    return (
      <div
        className={cx('modifiers-group', !needShowAll && 'height-limited')}
        ref={this.containerRef}
        data-testid={testId}
      >
        {Array.isArray(items) &&
          items.map((item, index) => {
            const isDisplayed = !needHideModifiers || index < (lastVisibleChildIndex as any);

            return (
              <ModifierButton
                key={index}
                type={getItemType(item)}
                count={getItemCount(item)}
                color={getItemColor(item)}
                content={getItemContent(item)}
                selected={isSelectedItem(item)}
                image={getItemImage(item)}
                onClick={() => onSelectItem && onSelectItem(item, isSelectedItem(item))}
                className={cx('guttered', !isDisplayed && 'not-display')}
                isMarkdown={isMarkdown(item)}
              />
            );
          })}

        {Array.isArray(items) && hasHiddenNodes && !needShowAll && (
          <ModifierButton
            squared
            ref={this.showingButtonRef}
            content={`+${items.length - (lastVisibleChildIndex as any)}`}
            className={cx(
              'show-all-button',
              'guttered',
              lastVisibleChildIndex === null && 'invisible',
            )}
            onClick={this.handleShowAllClick}
            data-testid='modifier-group:show-all-button'
          />
        )}
      </div>
    );
  }
}
