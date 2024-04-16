import { Breadcrumbs, BreadcrumbsItem } from '@sima-land/moleculas/common/components/breadcrumbs';
import { SyntheticEvent, useCallback, useState } from 'react';
import { Category, breadcrumbs } from './fixture';
import { Panel } from '@sima-land/ui-nucleons/panel';
import { Layout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'common/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
};

export function HandlingEvents() {
  const [messages, setMessages] = useState<string[]>(() => []);

  const sendMessage = useCallback((item: string) => {
    setMessages(list => [...list, item]);
  }, []);

  const onItemClick = useCallback(
    (data: Category) => (event: SyntheticEvent) => {
      event.preventDefault();

      if (!data.active) {
        sendMessage(`Выбрана категория "${data.name}"`);
      }
    },
    [],
  );

  const onDropdownOpen = useCallback(
    (data: Category) => () => {
      sendMessage(`Открыт дропдаун категории "${data.name}"`);
    },
    [],
  );

  const renderSibling = useCallback(
    (data: Category, itemId: number) => (
      <BreadcrumbsItem.Sibling key={itemId} active={data.active} onClick={onItemClick(data)}>
        {data.name}
      </BreadcrumbsItem.Sibling>
    ),
    [],
  );

  return (
    <Layout>
      <Breadcrumbs>
        {breadcrumbs.map((item, itemId) => (
          <BreadcrumbsItem
            key={itemId}
            href={item.url}
            active={item.active}
            onClick={onItemClick(item)}
          >
            <BreadcrumbsItem.Body>{item.name}</BreadcrumbsItem.Body>

            {item.siblings && (
              <BreadcrumbsItem.Dropdown
                onOpen={onDropdownOpen(item)}
                loading={!item.siblings.length}
              >
                {item.siblings.map(renderSibling)}
              </BreadcrumbsItem.Dropdown>
            )}
          </BreadcrumbsItem>
        ))}
      </Breadcrumbs>

      <Panel style={{ fontSize: '12px', marginTop: '32px' }}>
        {messages.length === 0 && <div>...</div>}
        {messages.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Panel>
    </Layout>
  );
}

HandlingEvents.storyName = 'Обработка событий';
