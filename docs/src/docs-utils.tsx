import { CSSProperties, ReactNode, useState } from 'react';
import styles from './docs-utils.m.scss';

interface ControlSelect {
  type: 'select';
  hidden?: boolean;
  label: string;
  options: Array<string | { value: string; displayName?: string }>;
  bind: [string, (nextValue: any) => void];
}

interface ControlToggle {
  type: 'toggle';
  hidden?: boolean;
  label: string;
  bind: [boolean, (nextValue: any) => void];
}

/**
 * Визуальная песочница с возможностью размещения полей ввода для управления состоянием.
 * @param props Свойства.
 * @return Элемент.
 */
export function Sandbox({
  controls = [],
  children,
  areaStyle,
}: {
  children?: ReactNode;
  controls?: Array<ControlToggle | ControlSelect>;
  areaStyle?: CSSProperties;
}) {
  return (
    <div className={styles.sandbox}>
      <div className={styles.controls}>
        {controls
          .filter(c => !c.hidden)
          .map((control, index) => {
            switch (control.type) {
              case 'select':
                return <SandboxSelect key={index} {...control} />;
              case 'toggle':
                return <SandboxToggle key={index} {...control} />;
              default:
                return null;
            }
          })}
      </div>
      <div className={styles.area} style={areaStyle}>
        {children}
      </div>
    </div>
  );
}

/**
 * Выбор из списка.
 * @param props Свойства.
 * @return Элемент.
 */
function SandboxSelect({ label, options, bind: [value, onChange] }: ControlSelect) {
  const [id] = useState(`control-${Math.random().toString(16).slice(2)}`);

  return (
    <div className={styles.select}>
      <SandboxControlLabel htmlFor={id}>{label}</SandboxControlLabel>
      <div>
        <select
          className={styles.field}
          id={id}
          value={value}
          onChange={e => onChange?.(e.target.value as any)}
        >
          {options.map((option, i) => (
            <option key={i} value={typeof option === 'string' ? option : option.value}>
              {typeof option === 'string' ? option : option.displayName ?? option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

/**
 * Переключатель.
 * @param props Свойства.
 * @return Элемент.
 */
function SandboxToggle({ label, bind: [value, onChange] }: ControlToggle) {
  const [id] = useState(`control-${Math.random().toString(16).slice(2)}`);

  return (
    <div className={styles.toggle}>
      <input
        className={styles.field}
        id={id}
        type='checkbox'
        checked={value}
        onChange={e => onChange?.(e.target.checked)}
      />
      <SandboxControlLabel htmlFor={id}>{label}</SandboxControlLabel>
    </div>
  );
}

/**
 * Ярлык.
 * @param props Свойства.
 * @return Элемент.
 */
function SandboxControlLabel({ htmlFor, children }: { htmlFor: string; children?: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}
