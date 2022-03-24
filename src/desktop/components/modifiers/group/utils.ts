import { RefObject, useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import on from '@sima-land/ui-nucleons/helpers/on';

export interface ViewState {
  phase: 'default' | 'ready';
  lastVisibleIndex: number;
}

export const initialViewState: ViewState = {
  phase: 'default',
  lastVisibleIndex: -1,
} as const;

/**
 * Хук состояния отображения блока модификаторов.
 * @param containerRef Ref элемента-контейнера.
 * @param openerRef Ref элемента кнопки, показывающей весь список модификаторов.
 * @return Состояние.
 */
export function useViewState(
  containerRef: RefObject<HTMLElement>,
  openerRef: RefObject<HTMLElement>,
): ViewState {
  const [viewState, setViewState] = useState<ViewState>(initialViewState);

  useEffect(() => {
    const off = on(window, 'resize', () => {
      setViewState(initialViewState);
    });

    return off;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (viewState.phase === 'default') {
      setViewState(defineViewState(containerRef, openerRef));
    }
  }, [viewState.phase, containerRef, openerRef]);

  return viewState;
}

/**
 * Определяет индекс последней видимой кнопки-модификатора для свернутого списка модификаторов.
 * @param containerRef Ref элемента-контейнера.
 * @param openerRef Ref элемента кнопки, показывающей весь список модификаторов.
 * @return Состояние.
 */
export function defineViewState(
  containerRef: RefObject<HTMLElement>,
  openerRef: RefObject<HTMLElement>,
): ViewState {
  const state: ViewState = {
    phase: 'ready',
    lastVisibleIndex: -1,
  };

  const container = containerRef.current;
  const opener = openerRef.current;

  if (container && opener) {
    const parentRect = container.getBoundingClientRect();
    const childList = [...container.children];

    const firstHiddenNodeIndex = childList
      .filter(child => child !== opener)
      .findIndex(child => {
        const childRect = child.getBoundingClientRect();
        return childRect.top - parentRect.top >= parentRect.height;
      });

    if (firstHiddenNodeIndex !== -1) {
      const lastVisibleIndex = firstHiddenNodeIndex - 1;
      const lastVisible = childList[lastVisibleIndex];

      if (lastVisible) {
        const rightBound = lastVisible.getBoundingClientRect().right;
        const rightContainerBound = container.getBoundingClientRect().right;

        // проверяем, хватает ли кнопке места (с запасом в половину) после последнего видимого дочернего элемента
        const isOpenerFit: boolean = rightContainerBound - rightBound >= opener.clientWidth * 1.5;

        // если хватает места - ставим кнопку после последнего, иначе - вместо
        state.lastVisibleIndex = lastVisibleIndex + Number(isOpenerFit);
      }
    }
  }

  return state;
}
