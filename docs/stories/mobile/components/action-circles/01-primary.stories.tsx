import { ActionCircles } from '@sima-land/moleculas/mobile/components/action-circles';
import { useState } from 'react';
import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';
import StatementSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Statement';
import ThumbsUpSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ThumbsUp';

export default {
  title: 'mobile/ActionCircles',
  component: ActionCircles,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Показать</Button>

      {open && (
        <Alert onClose={() => setOpen(false)}>
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
              <CleanButton onClick={() => setOpen(false)}>Закрыть</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Alert>
      )}
    </>
  );
}

Primary.storyName = 'Простой пример';
