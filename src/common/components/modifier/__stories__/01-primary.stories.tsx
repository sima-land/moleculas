import { Modifier } from '@sima-land/moleculas/common/components/modifier';

export default {
  title: 'common/Modifier',
  component: Modifier,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Modifier content={{ type: 'text', text: 'Какой-то текст' }} count={17} />
    </>
  );
}

Primary.storyName = 'Простой пример';
