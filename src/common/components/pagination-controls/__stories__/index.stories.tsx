import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';

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

export function ChangeLayout() {
  const [page, setPage] = useState(1);
  const desktop = useBreakpoint('xs+');

  return (
    <Layout>
      <PaginationControls
        current={page}
        total={99}
        onPageChange={setPage}
        flow={desktop ? 'horizontal' : 'vertical'}
      />
    </Layout>
  );
}

ChangeLayout.storyName = 'Смена раскладки по breakpoint';

export function WithoutForm() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls withForm={false} current={page} total={6} onPageChange={setPage} />
    </Layout>
  );
}

WithoutForm.storyName = 'Без формы';

export function TestRanges() {
  const MyPagination = ({ total }: { total: number }) => {
    const [page, setPage] = useState(1);

    return <PaginationControls current={page} total={total} onPageChange={setPage} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {Array(16)
        .fill(0)
        .map((zero, index) => index)
        .slice(5)
        .concat(99, 999, 9999)
        .map(count => (
          <div key={count}>
            <h5>Total: {count}</h5>
            <MyPagination total={count} />
          </div>
        ))}
    </div>
  );
}

TestRanges.storyName = 'Тест: варианты данных';
