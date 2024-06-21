import {
  SelectScreenLayout,
  SelectScreenOption,
} from '@sima-land/moleculas/mobile/components/select-screen';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { CSSProperties, useState } from 'react';
import { Input } from '@sima-land/ui-nucleons/input';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';

export default {
  title: 'mobile/SelectScreenLayout',
  component: SelectScreenLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

const styles = {
  item: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
    gridTemplateRows: '24px 20px',
    gap: '4px 16px',
  } satisfies CSSProperties,

  icon: {
    width: '48px',
    height: '48px',
    background: '#eee',
    gridColumn: '1 / 3',
    gridRow: '1 / 2',
    borderRadius: '50%',
  } satisfies CSSProperties,

  shortName: {
    fontSize: '16px',
    lineHeight: '24px',
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
  } satisfies CSSProperties,

  name: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#9e9e9e',
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
  } satisfies CSSProperties,
};

export function SizeXL() {
  const [opened, toggleModal] = useState<boolean>(false);
  const [selectedId, selectItem] = useState<number>(0);

  const items: Array<{ name: string; shortName: string }> = [
    { shortName: 'RUB', name: 'Российский рубль' },
    { shortName: 'USD', name: 'Американский доллар' },
    { shortName: 'EUR', name: 'Единая европейская валюта' },
  ];

  return (
    <>
      <MobileLayout style={{ padding: '16px 0' }}>
        <Input
          style={{ width: '100%' }}
          label='Район (нажмите чтобы выбрать)'
          value={items[selectedId].name}
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
                  size='xl'
                  key={id}
                  selected={id === selectedId}
                  onClick={() => {
                    selectItem(id);
                    toggleModal(false);
                  }}
                >
                  <div style={styles.item}>
                    <div style={styles.icon} />
                    <div style={styles.shortName}>{item.shortName}</div>
                    <div style={styles.name}>{item.name}</div>
                  </div>
                </SelectScreenOption>
              ))}
            </SelectScreenLayout>
          </ModalBody>
        </Modal>
      )}
    </>
  );
}

SizeXL.storyName = 'Большие опции';
