import { useCallback, useState } from 'react';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks/breakpoint';
import {
  AllRoundView as BaseAllRoundView,
  AllRoundViewProps,
  ViewState,
} from '../../../../desktop/components/gallery-modal/components/all-round-view';
import { useMounted } from '../../../../common/hooks';
import TouchSVG from '@sima-land/ui-quarks/icons/64x64/Colorful/TouchScrollX';
import styles from './all-round-view.module.scss';

/**
 * Просмотр 360.
 * @param props Свойства.
 * @return Элемент.
 */
export function AllRoundView(props: AllRoundViewProps) {
  const mounted = useMounted();
  const desktop = useBreakpoint('xs+');

  if (!mounted) {
    return null;
  }

  return <AfterMount desktop={desktop} {...props} />;
}

/**
 * Внутренний компонент который будет выведен только после монтирования.
 * @param props Свойства.
 * @return Элемент.
 */
function AfterMount({ desktop, ...props }: AllRoundViewProps & { desktop: boolean }) {
  const [state, setState] = useState<ViewState>(() => (desktop ? 'autoplay' : 'default'));
  const [tutorial, setTutorial] = useState(() => !desktop);

  const acceptTutorial = useCallback(() => {
    setTutorial(false);
    setState('autoplay');
  }, []);

  return (
    <div className={styles.root}>
      {!desktop && tutorial && (
        <div className={styles.tutorial} onPointerUp={acceptTutorial}>
          <TouchSVG />
        </div>
      )}

      <BaseAllRoundView {...props} controls={desktop} state={state} onStateChange={setState} />
    </div>
  );
}
