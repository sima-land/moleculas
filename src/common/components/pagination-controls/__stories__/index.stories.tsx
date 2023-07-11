import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { getPaginationItems, Pagination } from '@sima-land/ui-nucleons/pagination';
import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { useState } from 'react';
import { PageFormInput, PaginationControls } from '..';

export default {
  title: 'common/PaginationControls',
  component: PaginationControls,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls current={page} total={99} onPageChange={setPage} />
    </Layout>
  );
}

Primary.storyName = 'Простой пример';

export function VerticalLayout() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls flow='vertical' current={page} total={99} onPageChange={setPage} />
    </Layout>
  );
}

VerticalLayout.storyName = 'Вертикальная раскладка';

export function Customization() {
  const [page, setPage] = useState(1);

  const MyButtons = ({ current, total, onPageChange }: any) => (
    <Pagination
      current={current}
      total={total}
      getItems={payload => getPaginationItems(payload, { arrows: false })}
      onPageChange={(event, button) => onPageChange(button.value)}
    />
  );

  const MyForm = ({ onPageChange }: any) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
      <>
        <PageFormInput
          rootProps={{
            onMouseDownCapture: event => {
              event.preventDefault();
              setOpen(true);
            },
          }}
        />

        {open && (
          <Alert onClose={() => setOpen(false)}>
            <TopBar title='Перейти на страницу' />
            <AlertBody
              style={{ display: 'flex', justifyContent: 'center', padding: '40px 40px 80px' }}
            >
              <Stepper
                canAdd={false}
                canSubtract={false}
                onChange={e => setValue(e.target.value.replace(/\D/g, ''))}
                onKeyDown={e => {
                  if (e.code === 'Enter') {
                    onPageChange(parseInt(value));
                    setOpen(false);
                  }
                }}
              />
            </AlertBody>
          </Alert>
        )}
      </>
    );
  };

  return (
    <Layout style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <PaginationControls
        flow='vertical'
        current={page}
        total={99}
        onPageChange={setPage}
        Buttons={MyButtons}
        Form={MyForm}
      />
    </Layout>
  );
}

Customization.storyName = 'Кастомизация';
