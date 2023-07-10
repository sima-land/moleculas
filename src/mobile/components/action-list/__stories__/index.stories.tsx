import { ActionList } from '..';
import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'mobile/ActionList',
  component: ActionList,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const close = () => {
    alert('Пока что закрывать не будем.');
  };

  const action = () => {
    alert('Заглушка здесь, только и всего.');
  };

  return (
    <Alert onClose={close}>
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
          <CleanButton onClick={close}>Закрыть</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Alert>
  );
}

Primary.storyName = 'Простой пример';
