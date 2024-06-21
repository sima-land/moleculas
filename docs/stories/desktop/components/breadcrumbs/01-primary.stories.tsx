import { Breadcrumbs } from '@sima-land/moleculas/desktop/components/breadcrumbs';
import { items } from './fixture';

export default {
  title: 'desktop/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Breadcrumbs
        items={items}
        onSiblingsPopupOpen={() => {
          console.log('Popup с "соседними" ссылками открылся');
        }}
        isSiblingActive={sibling => sibling.isActive}
      />
    </>
  );
}

Primary.storyName = 'Простой пример';
