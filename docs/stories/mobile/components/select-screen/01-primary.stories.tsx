import {
  SelectScreenLayout,
  SelectScreenOption,
} from '@sima-land/moleculas/mobile/components/select-screen';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { useState } from 'react';
import { Input } from '@sima-land/ui-nucleons/input';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';

export const meta = {
  category: 'mobile/SelectScreenLayout',
  title: 'Простой пример',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function Primary() {
  const items: string[] = [
    'Верх-Исетский',
    'Чкаловский',
    'Железнодорожный',
    'Кировский',
    'Орджоникидзевский',
    'Октябрьский',
    'Ленинский',
  ];

  const [opened, toggleModal] = useState<boolean>(false);
  const [selectedId, selectItem] = useState<number>(1);

  return (
    <>
      <MobileLayout style={{ padding: '16px 0' }}>
        <Input
          style={{ width: '100%' }}
          label='Район'
          value={items[selectedId]}
          rootProps={{
            onClick: e => {
              e.preventDefault();
              toggleModal(true);
            },
          }}
        />
      </MobileLayout>

      {opened && (
        <Modal size='fullscreen'>
          <TopBar
            divided
            title='Район'
            buttons={navigationButtons({ onBack: () => toggleModal(false) })}
          />

          <ModalBody>
            <SelectScreenLayout style={{ padding: '16px 0' }}>
              {items.map((item, id) => (
                <SelectScreenOption
                  key={id}
                  selected={id === selectedId}
                  onClick={() => {
                    selectItem(id);
                    toggleModal(false);
                  }}
                >
                  {item}
                </SelectScreenOption>
              ))}
            </SelectScreenLayout>
          </ModalBody>
        </Modal>
      )}
    </>
  );
}
