import { ActionList } from '@sima-land/moleculas/mobile/components/action-list';
import { useState } from 'react';
import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'mobile/ActionList',
  component: ActionList,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [open, setOpen] = useState(false);

  const action = () => {
    alert('Заглушка здесь, только и всего.');
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Показать</Button>

      {open && (
        <Alert onClose={() => setOpen(false)}>
          <AlertBody>
            <ActionList>
              <ActionList.Item as='anchor' href='https://www.sima-land.ru'>
                Подробнее
              </ActionList.Item>

              <ActionList.Item as='button' onClick={action}>
                Повторить заказ
              </ActionList.Item>

              <ActionList.Item as='button' onClick={action}>
                Что-то третье
              </ActionList.Item>

              <ActionList.Item as='button' color='additional-red' onClick={action}>
                Отменить заказ
              </ActionList.Item>
            </ActionList>
          </AlertBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Закрыть</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Alert>
      )}
    </>
  );
}

Primary.storyName = 'Простой пример';
