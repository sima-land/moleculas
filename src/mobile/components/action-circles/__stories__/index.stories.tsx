import { ActionCircles } from '..';
import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import StatementSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Statement';
import ThumbsUpSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ThumbsUp';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'mobile/ActionCircles',
  component: ActionCircles,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const onClose = () => {
    alert('Пока что закрывать не будем.');
  };

  return (
    <Alert onClose={onClose}>
      <AlertBody>
        <ActionCircles>
          <ActionCircles.Item
            title='Оформить претензию'
            icon={<StatementSVG />}
            href='https://www.sima-land.ru'
          />
          <ActionCircles.Item
            title='Оставить отзыв'
            icon={<ThumbsUpSVG />}
            onClick={() => alert('Отлично, кнопка работает!')}
          />
        </ActionCircles>
      </AlertBody>

      <BottomBar divided>
        <CleanGroup>
          <CleanButton onClick={onClose}>Закрыть</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Alert>
  );
}

Primary.storyName = 'Простой пример';
