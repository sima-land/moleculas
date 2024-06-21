import { Breadcrumbs } from '@sima-land/moleculas/desktop/components/breadcrumbs';
import { items } from './fixture';

export const meta = {
  category: 'desktop/Breadcrumbs',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
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
