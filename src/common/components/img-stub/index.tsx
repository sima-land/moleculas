import { CSSProperties, HTMLAttributes } from 'react';
import RepeatSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Repeat';
import classNames from 'classnames/bind';
import styles from './img-stub.module.scss';

export interface ImgStubStyle extends CSSProperties {
  '--img-stub-size'?: string;
}

export interface ImgStubProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ImgStubStyle;
}

const cx = classNames.bind(styles);

/**
 * Баннер-заглушка для больших картинок которые не загрузились из-за ошибки.
 * @param props Свойства.
 * @return Элемент.
 */
export function ImgStub({ className, ...rest }: ImgStubProps) {
  return (
    <div {...rest} className={cx('root', className)} role='banner'>
      <svg className={styles.text} viewBox='0 0 160 160'>
        <text x='50%' y='14.5%' className={styles.line}>
          Изображение
        </text>
        <text x='50%' y='24.5%' className={styles.line}>
          не загрузилось :(
        </text>

        <text x='50%' y='80%' className={styles.line}>
          Попробуйте
        </text>
        <text x='50%' y='90%' className={styles.line}>
          обновить страницу
        </text>
      </svg>
      <RepeatSVG className={styles.icon} />
    </div>
  );
}
