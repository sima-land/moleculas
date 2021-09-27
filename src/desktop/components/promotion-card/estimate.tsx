import React from 'react';
import { getMonth, getDate, getYear } from 'date-fns';

export interface EstimateProps {
  dueDate: Date
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

const toTimePart = (n: number): string => `${n}`.padStart(2, '0');

export const Estimate = ({ dueDate }: EstimateProps) => {
  const now = new Date();

  let content: React.ReactNode = null;

  if (getYear(dueDate) !== getYear(now)) {
    const text = [getDate, getMonth, getYear]
      .map(fn => toTimePart(fn(dueDate)))
      .join('.');

    content = `До ${text}`;
  } else {
    content = `До ${getDate(dueDate)} ${MONTH_SHORT_NAME[getMonth(dueDate)]}`;
  }

  return (
    <>{content}</>
  );
};
