import { PseudoInput } from '@sima-land/moleculas/mobile/components/pseudo-input';

export default {
  title: 'mobile/PseudoInput',
  component: PseudoInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Компонент псевдо поля',
      },
    },
  },
};

export function Primary() {
  return (
    <>
      <PseudoInput text='Искать туфли' />
    </>
  );
}

Primary.storyName = 'Простой пример';
