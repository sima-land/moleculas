import React from 'react';
import { Box } from '@dev-dep/ui-nucleons/box';
import { Text } from '@dev-dep/ui-nucleons/text';
import { Link } from '@dev-dep/ui-nucleons/link';

export interface AdultBlockProps {
  isAuthUser?: boolean
  onClick?: React.MouseEventHandler
  marginTop?: number
}

const textBlocks = {
  forGuest: {
    condition: 'Если вам уже есть 18 лет, авторизуйтесь, чтобы перейти к товару.',
    action: 'Авторизоваться',
  },
  forAuthorized: {
    condition: 'Подтвердите, что вы старше 18 лет, чтобы посмотреть товар.',
    action: 'Подтвердить',
  },
};

/**
 * Компонент блока-заглушки описания товара для взрослых.
 * @param props Свойства компонента.
 * @param props.isAuthUser Пользователь авторизован.
 * @param props.onClick Обработчик клика на ссылку.
 * @param props.alignItems Расположение блоков.
 * @param props.marginTop Отступ сверху.
 * @return Компонент.
 */
const AdultBlock = ({
  isAuthUser,
  onClick,
  marginTop = 0,
}: AdultBlockProps) => {
  const actualTextBlocks = isAuthUser ? textBlocks.forAuthorized : textBlocks.forGuest;
  return (
    <Box
      display='flex'
      direction='column'
      flex='grow'
      marginTop={marginTop}
    >
      <Box marginBottom={1}>
        <Text size={16} weight={600}>Товар для взрослых</Text>
      </Box>
      <Text size={12} lineHeight={20}>{actualTextBlocks.condition}</Text>
      <Box marginTop={6}>
        <Link onClick={onClick} pseudo>
          <Text size={16} weight={600} lineHeight={32}>{actualTextBlocks.action}</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default AdultBlock;
