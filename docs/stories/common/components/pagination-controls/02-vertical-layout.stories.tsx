import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'common/PaginationControls',
  component: PaginationControls,
  parameters: {
    layout: 'padded',
  },
};

export function VerticalLayout() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls flow='vertical' current={page} total={99} onPageChange={setPage} />
    </Layout>
  );
}

VerticalLayout.storyName = 'Вертикальная раскладка';
