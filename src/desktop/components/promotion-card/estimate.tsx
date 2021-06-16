import React from 'react';
import { formatISO, getMonth, differenceInDays, getDate, getYear } from 'date-fns';
import { Timer } from '@dev-dep/ui-nucleons/timer';

export interface EstimateProps {
  dueDate: Date
}

const MONTH_NAME = [
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

  if (differenceInDays(dueDate, now) < 1) {
    content = (
      <Timer
        date={formatISO(dueDate)}
        format={
          d => [
            d.hours % 24,
            d.minutes % 60,
            d.seconds % 60,
          ].map(toTimePart).join(' : ')
        }
      />
    );
  } else if (getYear(dueDate) !== getYear(now)) {
    const text = [getDate, getMonth, getYear]
      .map(fn => toTimePart(fn(dueDate)))
      .join('.');

    content = `До ${text}`;
  } else {
    content = `До ${getMonth(dueDate)} ${MONTH_NAME[getMonth(dueDate)]}`;
  }

  return (
    <>{content}</>
  );
};
