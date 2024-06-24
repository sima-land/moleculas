import { createRoot } from 'react-dom/client';
import { filterValidStories } from '@krutoo/showcase/runtime';
import { ShowcaseApp } from '@krutoo/showcase/runtime-showcase';
import foundStories from '#found-stories';
import '@krutoo/showcase/runtime-showcase/styles.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ShowcaseApp
    title='UI-moleculas'
    logoSrc='./public/logo.svg'
    headerLinks={[
      {
        name: 'GitHub',
        href: 'https://github.com/sima-land/moleculas',
      },
      {
        name: 'Figma',
        href: 'https://www.figma.com/design/QP9m2CcLXBaR0tFhXe2DS9/Web-UI-Kit?t=OQMs0zIKnG9E8qwa-1',
      },
    ]}
    stories={filterValidStories(foundStories).validStories}
  />,
);
