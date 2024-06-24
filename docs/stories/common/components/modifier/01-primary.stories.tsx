import { Modifier } from '@sima-land/moleculas/common/components/modifier';

export const meta = {
  category: 'common/Modifier',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <>
      <Modifier content={{ type: 'text', text: 'Какой-то текст' }} count={17} />
    </>
  );
}
