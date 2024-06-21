import { PaginationControls } from '@sima-land/moleculas/common/components/pagination-controls';
import { useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'common/PaginationControls',
  title: 'Без формы',
  parameters: {
    layout: 'padded',
  },
};
export default function WithoutForm() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <PaginationControls withForm={false} current={page} total={6} onPageChange={setPage} />
    </Layout>
  );
}
