import React from 'react';
import { getMonth, getDate, getYear } from 'date-fns';

export interface EstimateProps {
  dueDate: Date;
}

const MONTH_SHORT_NAME = [
  'янв',
  'фев',
  'мар',
  'апр',
  'мая',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
] as const;

/**
 * Получив число возвращает его строковое отображение.
 * @param n Число.
 * @return Отображение.
 */
const toTimePart = (n: number): string => `${n}`.padStart(2, '0');

/**
 * Оставшееся время.
 * @param props Свойства.
 * @return Элемент.
 */
export const Estimate = ({ dueDate }: EstimateProps) => {
  const now = new Date();

  let content: React.ReactNode = null;

  if (getYear(dueDate) !== getYear(now)) {
    const text = [getDate, (d: Date) => getMonth(d) + 1, getYear]
      .map(fn => toTimePart(fn(dueDate)))
      .join('.');

    content = `До ${text}`;
  } else {
    content = `До ${getDate(dueDate)} ${MONTH_SHORT_NAME[getMonth(dueDate)]}`;
  }

  return <>{content}</>;
};
