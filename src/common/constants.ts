import { ModifierType } from './types';

export const MODIFIER_TYPE: Record<ModifierType, ModifierType> = {
  text: 'text',
  image: 'image',
  color: 'color',
} as const;
