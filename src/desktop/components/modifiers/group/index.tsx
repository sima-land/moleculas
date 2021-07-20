import React, { Component, createRef } from 'react';
import debounce from 'lodash/debounce';
import prop from 'lodash/fp/prop';
import { ModifierButton, ModifierButtonProps, Modifier } from '../button';
import on from '@sima-land/ui-nucleons/helpers/on';
import classes from './modifiers-group.module.scss';
import classnames from 'classnames/bind';

type ModifierPredicate<T> = (item: Modifier) => T;

interface State {
  needShowAll: boolean
  hasHiddenNodes: boolean
  lastVisibleChildIndex: number | null
}

export interface ModifiersGroupProps {
  items?: Modifier[]
  onSelectItem?: (item: Modifier, selected: boolean) => void
  getItemType?: ModifierPredicate<ModifierButtonProps['type']>
  getItemCount?: ModifierPredicate<number>
  getItemColor?: ModifierPredicate<string>
  getItemContent?: ModifierPredicate<string>
  isSelectedItem?: ModifierPredicate<boolean>
  getItemImage?: ModifierPredicate<string>
  isMarkdown?: ModifierPredicate<boolean>
  onClickShowAll?: () => void
  'data-tetsid'?: string
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
 * Возвращает компонент списка модификаторов.
 * @param {Object} props Свойства компонента.
 * @param {Array} props.items Список модификаторов.
 * @param {Function} [props.getItemType] Возвращает тип модификатора ("text" или "image", по умолчанию "text").
 * @param {Function} [props.getItemCount] Возвращает число с количеством модификатора (по умолчанию свойство "count").
 * @param {Function} [props.getItemColor] Возвращает цвет модификатора (по умолчанию свойство "color").
 * @param {Function} [props.getItemContent] Возвращает содержимое модификатора (по умолчанию свойство "content").
 * @param {Function} [props.isSelectedItem] Показывает, выбран ли модификатор (по умолчанию свойство "selected").
 * @param {Function} [props.onSelectItem] Будет вызвана при выборе модификатора, получит сам модификатор.
 * @param {Function} [props.getItemImage] Возвращает URL изображения модификатора (по умолчанию свойство "image").
 * @param {boolean} [props.needShowAll] Флаг необходимости отображения всех модификаторов.
 * @param {Function} [props.onClickShowAll] Сработает при нажатии на кнопку отображения всех модификаторов.
 * @param {Function} [props.isMarkdown] Имеет ли товар уценку.
 */
export class ModifiersGroup extends Component<ModifiersGroupProps, State> {
  removeGlobalListener: any;

  state = {
    // нажата ли кнопка показа всех модификаторов
    needShowAll: (this.props as any).needShowAll || false,

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
  componentDidMount () {
    this.windowWidth = document.documentElement.offsetWidth;
    this.removeGlobalListener = on(window, 'resize', this.resetVisibleNodesData);
    this.checkVisibleNodes();
  }

  /**
   * @inheritdoc
   */
  componentDidUpdate () {
    this.checkVisibleNodes();
  }

  /**
   * @inheritdoc
   */
  componentWillUnmount () {
    this.removeGlobalListener();
  }

  /**
   * Сбрасывает информацию о видимых и невидимых дочерних узлах контейнера.
   */
  resetVisibleNodesData = debounce(() => {
    if (document.documentElement.offsetWidth !== this.windowWidth) {
      this.windowWidth = document.documentElement.offsetWidth;
      this.setState({
        hasHiddenNodes: true,
        lastVisibleChildIndex: null,
      });
    }
  }, 250, { leading: true });

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
            const isShowingButtonFit = rightContainerBound - rightBound >= ((showingButtonEl as any).clientWidth * 1.5);
            this.setState({
              // если хватает места - ставим кнопку после последнего, иначе - вместо
              lastVisibleChildIndex: lastVisibleElIndex + (isShowingButtonFit ? 1 : 0),
              hasHiddenNodes: true,
            });
          }
        }
        else {
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
  render () {
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
      'data-tetsid': testId = 'data-tetsid',
    } = this.props;

    const { needShowAll, hasHiddenNodes, lastVisibleChildIndex } = this.state;
    const needHideModifiers = !needShowAll && lastVisibleChildIndex !== null;

    return (
      <div
        className={cx('modifiers-group', !needShowAll && 'height-limited')}
        ref={this.containerRef}
        data-testid={testId}
      >
        {Array.isArray(items) && items.map((item, index) => {
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
            className={cx('show-all-button', 'guttered', lastVisibleChildIndex === null && 'invisible')}
            onClick={this.handleShowAllClick}
            data-testid='modifier-group:show-all-button'
          />
        )}
      </div>
    );
  }
}
