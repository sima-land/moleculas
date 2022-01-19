import React, { useState } from 'react';
import { Screen } from '@sima-land/ui-nucleons/screen';
import { random } from 'lodash';
import { SelectScreen, SelectScreenLayout, SelectScreenOption } from '..';
import { TextField } from '@sima-land/ui-nucleons/text-field';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'mobile/SelectScreen',
  component: SelectScreen,
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
          label='Район'
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
