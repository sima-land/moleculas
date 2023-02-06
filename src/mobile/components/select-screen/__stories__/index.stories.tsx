import React, { useState } from 'react';
import { Screen } from '@sima-land/ui-nucleons/screen';
import { random } from 'lodash';
import { SelectScreenLayout, SelectScreenOption } from '..';
import { TextField } from '@sima-land/ui-nucleons/text-field';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'mobile/SelectScreenLayout',
  component: SelectScreenLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Экран выбора опции из списка (обычно открывается по нажатию на поле)',
      },
    },
  },
};

export const Primary = () => {
  const items: string[] = [
    'Верх-Исетский',
    'Чкаловский',
    'Железнодорожный',
    'Кировский',
    'Орджоникидзевский',
    'Октябрьский',
    'Ленинский',
  ];

  const [opened, toggleScreen] = useState<boolean>(false);
  const [selectedId, selectItem] = useState<number>(random(0, items.length));

  return (
    <>
      <MobileLayout style={{ padding: '16px 0' }}>
        <TextField
          variant='mobile'
          style={{ width: '100%' }}
          label='Район (нажмите чтобы выбрать)'
          value={items[selectedId]}
          onClick={e => {
            e.preventDefault();
            toggleScreen(true);
          }}
        />
      </MobileLayout>

      {opened && (
        <Screen>
          <Screen.Header divided title='Район' onBack={() => toggleScreen(false)} />

          <Screen.Body>
            <SelectScreenLayout style={{ padding: '16px 0' }}>
              {items.map((item, id) => (
                <SelectScreenOption
                  key={id}
                  selected={id === selectedId}
                  onClick={() => {
                    selectItem(id);
                    toggleScreen(false);
                  }}
                >
                  {item}
                </SelectScreenOption>
              ))}
            </SelectScreenLayout>
          </Screen.Body>
        </Screen>
      )}
    </>
  );
};

Primary.storyName = 'Простой пример';

export const SizeXL = () => {
  const [opened, toggleScreen] = useState<boolean>(false);
  const [selectedId, selectItem] = useState<number>(0);

  const items: Array<{ name: string; shortName: string }> = [
    { shortName: 'RUB', name: 'Российский рубль' },
    { shortName: 'USD', name: 'Американский доллар' },
    { shortName: 'EUR', name: 'Единая европейская валюта' },
  ];

  const styles: Record<string, React.CSSProperties> = {
    item: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gridTemplateRows: '24px 20px',
      gap: '4px 16px',
    },
    icon: {
      width: '48px',
      height: '48px',
      background: '#eee',
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      borderRadius: '50%',
    },
    shortName: {
      fontSize: '16px',
      lineHeight: '24px',
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
    },
    name: {
      fontSize: '14px',
      lineHeight: '20px',
      color: '#9e9e9e',
      gridColumn: '2 / 3',
      gridRow: '2 / 3',
    },
  };

  return (
    <>
      <MobileLayout style={{ padding: '16px 0' }}>
        <TextField
          variant='mobile'
          style={{ width: '100%' }}
          label='Валюта (нажмите чтобы выбрать)'
          value={items[selectedId].name}
          onClick={e => {
            e.preventDefault();
            toggleScreen(true);
          }}
        />
      </MobileLayout>

      {opened && (
        <Screen>
          <Screen.Header divided title='Валюта' onBack={() => toggleScreen(false)} />

          <Screen.Body>
            <SelectScreenLayout style={{ padding: '16px 0' }}>
              {items.map((item, id) => (
                <SelectScreenOption
                  size='xl'
                  key={id}
                  selected={id === selectedId}
                  onClick={() => {
                    selectItem(id);
                    toggleScreen(false);
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
          </Screen.Body>
        </Screen>
      )}
    </>
  );
};

SizeXL.storyName = 'Большие опции';
