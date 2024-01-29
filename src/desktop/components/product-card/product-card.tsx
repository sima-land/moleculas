import { Children, forwardRef, isValidElement, cloneElement, useState } from 'react';
import { ProductCardChildren, ProductCardProps, ReduceBaseInfoOptions } from './types';
import { Parts } from '../../../common/components/product-info';
import { Plate, PlateProps } from '@sima-land/ui-nucleons/plate';
import { useLayer } from '@sima-land/ui-nucleons/helpers';
import classNames from 'classnames/bind';
import styles from './product-card.module.scss';

const cx = classNames.bind(styles);

/**
 * Карточка данных товара с расширенной инф-ой при наведении.
 * @param props Свойства.
 * @return Элемент.
 */
export function ProductCard({
  // @todo не совсем правильно заставлять работать с внутренностями реакта - надо придумать что-то более простое
  reduceBaseInfo: reduceBaseInfoProp = reduceBaseInfo,
  reduceHoverInfo: reduceHoverInfoProp = reduceHoverInfo,
  children,
  className,
  ...props
}: ProductCardProps) {
  const [hovered, toggle] = useState<boolean>(false);

  return (
    <div
      {...props}
      data-testid='product-card'
      className={cx('root', className)}
      onMouseEnter={() => toggle(true)}
      // ВАЖНО: вешаем onMouseLeave на корневой элемент так как в Chrome проблемы если вешать на "product-card:info"
      onMouseLeave={() => toggle(false)}
    >
      <div data-testid='product-card:info'>{reduceBaseInfoProp(children)}</div>

      {hovered && <HoverCard>{reduceHoverInfoProp(children)}</HoverCard>}
    </div>
  );
}

export const HoverCard = forwardRef<HTMLDivElement | null, PlateProps>((props, ref) => {
  const layer = useLayer() + 1;

  return (
    <Plate
      {...props}
      style={{ ...props.style, zIndex: layer }}
      ref={ref}
      rounds='m'
      shadow='z4'
      className={cx('card', props.className)}
      data-testid='product-card:hover-card'
    />
  );
});

/**
 * Фильтрует содержимое карточки для вывода состояния без наведения.
 * @param element Элемент.
 * @param options Опции.
 * @return Элемент.
 */
export function reduceBaseInfo(
  element: ProductCardChildren,
  { hideImageButtons = true, hideFooter = true }: ReduceBaseInfoOptions = {},
) {
  return cloneElement(element, {
    children: Children.map(element.props.children, child => {
      let result;

      if (isValidElement(child)) {
        switch (true) {
          // игнорируем или фильтруем кнопки-иконки на изображении
          case Boolean(child.type === Parts.Image && hideImageButtons):
            result = cloneElement<any>(child, {
              children:
                typeof hideImageButtons === 'function'
                  ? Children.toArray(child.props.children).filter(hideImageButtons)
                  : undefined,
            });
            break;

          // игнорируем футер
          case Boolean(child.type === Parts.Footer && hideFooter):
            result = null;
            break;

          // остальное оставляем без изменений
          default:
            result = child;
            break;
        }
      }

      return result;
    }),
  });
}

/**
 * Получив содержимое карточки фильтрует/меняет его для вывода в карточке при наведении.
 * @param element Содержимое.
 * @return Элемент.
 */
export function reduceHoverInfo(element: ProductCardChildren) {
  return cloneElement(element, {
    children: Children.map(element.props.children, child => {
      let result;

      if (isValidElement(child)) {
        switch (child.type) {
          // при наведении у изображения строго непрозрачность = 1
          case Parts.Image:
            result = cloneElement<any>(child, { opacity: 1 });
            break;

          // остальное оставляем без изменений
          default:
            result = child;
            break;
        }
      }

      return result;
    }),
  });
}
