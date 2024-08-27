import { Badge, BadgeField } from '@sima-land/moleculas/common/components/badge';
import { CSSProperties } from 'react';

export const meta = {
  category: 'common/Badge',
  title: 'Иконка',
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  container: {
    display: 'flex',
    gap: 4,
    maxWidth: 320,
    flexDirection: 'column',
    alignItems: 'flex-start',
  } satisfies CSSProperties,
};

const FIELD = {
  icon: {
    type: 'svg-url',
    value: 'public/images/placeholder_black.svg',
  } satisfies BadgeField,

  textShort: {
    type: 'text',
    value: 'Товар партнёра',
  } satisfies BadgeField,

  textLong: {
    type: 'text',
    value: 'Специальная коллекция сезонных товаров по низкой цене',
  } satisfies BadgeField,
};

export default function IconView() {
  const props = {
    color: '#000',
    href: 'https://sima-land.ru',
  };

  return (
    <div style={styles.container}>
      <Badge {...props} fields={[FIELD.icon]} />

      <Badge {...props} fields={[FIELD.icon, FIELD.textShort]} />

      <Badge {...props} fields={[FIELD.textShort, FIELD.icon]} />

      <Badge {...props} fields={[FIELD.icon, FIELD.textLong]} />

      <Badge {...props} fields={[FIELD.textLong, FIELD.icon]} />
    </div>
  );
}
