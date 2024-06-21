import type { Breadcrumb } from '@sima-land/moleculas/desktop/components/breadcrumbs';

export const items: Breadcrumb[] = [
  {
    name: 'Root',
    url: '/root_path',
  },
  {
    name: 'First Level',
    url: '/first_level_path',
    siblings: {
      state: 'ready',
      data: [
        {
          name: 'First Level Previous Sibling',
          url: '/first_level_previous_sibling_path',
        },
        {
          name: 'First Level',
          url: '/first_level_path',
          isActive: true,
        },
        {
          name: 'First Level Next Sibling',
          url: '/first_level_next_sibling_path',
        },
        {
          name: 'First Level Next Sibling',
          url: '/first_level_next_sibling_path',
        },
        {
          name: 'First Level Next Sibling',
          url: '/first_level_next_sibling_path',
        },
        {
          name: 'First Level Next Sibling',
          url: '/first_level_next_sibling_path',
        },
        {
          name: 'First Level Next Sibling',
          url: '/first_level_next_sibling_path',
        },
      ],
    },
  },
  {
    name: 'Second Level very long title here',
    url: '/second_level_path',
    siblings: {
      state: 'ready',
      data: [
        {
          name: 'Second Level Previous Sibling',
          url: '/second_level_previous_sibling_path',
        },
        {
          name: 'Second Level',
          url: '/second_level_path',
          isActive: true,
        },
      ],
    },
  },
  {
    name: 'Third Level',
    url: '/third_level_path',
    siblings: {
      state: 'ready',
      data: [
        {
          name: 'Third Level',
          url: '/third_level_path',
          isActive: true,
        },
        {
          name: 'Third Level Next Sibling',
          url: '/third_level_next_sibling_path',
        },
      ],
    },
  },
  {
    name: 'Fourth Level',
    url: '/first_level_path',
    siblings: {
      state: 'fetching',
      data: [
        {
          name: 'Fourth Level Previous Sibling',
          url: '/fourth_level_previous_sibling_path',
        },
        {
          name: 'Fourth Level',
          url: '/fourth_level_path',
          isActive: true,
        },
        {
          name: 'Fourth Level Next Sibling',
          url: '/fourth_level_next_sibling_path',
        },
        {
          name: 'Fourth Level Next Sibling',
          url: '/fourth_level_next_sibling_path',
        },
        {
          name: 'Fourth Level Next Sibling',
          url: '/Fourth_level_next_sibling_path',
        },
        {
          name: 'Fourth Level Next Sibling',
          url: '/fourth_level_next_sibling_path',
        },
        {
          name: 'Fourth Level Next Sibling',
          url: '/fourth_level_next_sibling_path',
        },
      ],
    },
  },
  {
    name: 'Fifth Level',
    url: '/fifth_level_path',
    siblings: {
      state: 'ready',
      data: [
        {
          name: 'Fifth Level Previous Sibling',
          url: '/fifth_level_previous_sibling_path',
        },
        {
          name: 'Fifth Level',
          url: '/fifth_level_path',
          isActive: true,
        },
      ],
    },
  },
  {
    name: 'Sixth Level',
    url: '/sixth_level_path',
    siblings: {
      state: 'ready',
      data: [
        {
          name: 'Sixth Level',
          url: '/sixth_level_path',
          isActive: true,
        },
        {
          name: 'Sixth Level Next Sibling',
          url: '/sixth_level_next_sibling_path',
        },
      ],
    },
  },
];
