import { createSignal } from "solid-js";

export enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export type MonthStrings = keyof typeof Months;

export const toLocalMonth = (month: MonthStrings): string => {
  switch (month) {
    case "April": return 'Апрель'
    case 'August': return 'Август'
    case 'December': return 'Декабрь'
    case 'February': return 'Февраль'
    case 'January': return 'Январь'
    case 'July': return 'Июль'
    case 'June': return 'Июнь'
    case 'March': return 'Март'
    case 'May': return 'Май'
    case 'November': return 'Ноябрь'
    case 'October': return 'Октябрь'
    case 'September': return 'Сеньтябрь'
    default: return 'НЕИЗВЕСТНЫЙ МЕСЯЦ'
  }
}

export const getCurrentMonth = (): MonthStrings => {
  const currentDate = new Date();
  return Months[currentDate.getMonth()] as MonthStrings
}

export const [selectedMonth, setSelectedMonth] = createSignal(getCurrentMonth())
