import { Breadcrumbs, BreadcrumbsItem } from '@sima-land/moleculas/common/components/breadcrumbs';

export default {
  title: 'common/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem href='#'>
          <BreadcrumbsItem.Body>Главная</BreadcrumbsItem.Body>
        </BreadcrumbsItem>

        <BreadcrumbsItem href='#'>
          <BreadcrumbsItem.Body>Каталог товаров</BreadcrumbsItem.Body>
        </BreadcrumbsItem>

        <BreadcrumbsItem href='#'>
          <BreadcrumbsItem.Body>Товары для автомобилей</BreadcrumbsItem.Body>
          <BreadcrumbsItem.Dropdown loading></BreadcrumbsItem.Dropdown>
        </BreadcrumbsItem>

        <BreadcrumbsItem href='#'>
          <BreadcrumbsItem.Body>Шины и Диски</BreadcrumbsItem.Body>
          <BreadcrumbsItem.Dropdown>
            <BreadcrumbsItem.Sibling href='#'>Какой-то текст здесь 1</BreadcrumbsItem.Sibling>
            <BreadcrumbsItem.Sibling disabled>Шины и Диски</BreadcrumbsItem.Sibling>
            <BreadcrumbsItem.Sibling href='#'>Какой-то текст здесь 2</BreadcrumbsItem.Sibling>
            <BreadcrumbsItem.Sibling href='#'>Какой-то текст здесь 3</BreadcrumbsItem.Sibling>
            <BreadcrumbsItem.Sibling href='#'>Какой-то текст здесь 4</BreadcrumbsItem.Sibling>
            <BreadcrumbsItem.Sibling href='#'>Какой-то текст здесь 5</BreadcrumbsItem.Sibling>
            <BreadcrumbsItem.Sibling href='#'>Какой-то текст здесь 6</BreadcrumbsItem.Sibling>
            <BreadcrumbsItem.Sibling href='#'>Какой-то текст здесь 7</BreadcrumbsItem.Sibling>
          </BreadcrumbsItem.Dropdown>
        </BreadcrumbsItem>

        <BreadcrumbsItem active>
          <BreadcrumbsItem.Body>Шины компании Pirelli</BreadcrumbsItem.Body>
        </BreadcrumbsItem>
      </Breadcrumbs>
    </>
  );
}

Primary.storyName = 'Простой пример';
