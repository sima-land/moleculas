import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'common/PaginationControls',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls current={page} total={99} onPageChange={setPage} />
    </Layout>
  );
}
