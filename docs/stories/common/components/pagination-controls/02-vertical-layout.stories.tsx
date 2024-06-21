import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'common/PaginationControls',
  title: 'Вертикальная раскладка',
  parameters: {
    layout: 'padded',
  },
};

export default function VerticalLayout() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls flow='vertical' current={page} total={99} onPageChange={setPage} />
    </Layout>
  );
}
