import { createSignal } from "solid-js"
import { Months, MonthStrings } from "./Month"

export interface Event {
  'title': string
}

export interface EventModule {
  'number': string,
  'title': string,
  'events': Event[]
}

export interface EventPlan {
  month: string,
  modules: EventModule[]
}

const plan: EventPlan[] = [
  {
    month: 'October',
    modules: [{
      'number': '1.1',
      "title": "Hello world",
      events: [{
        'title': 'abc'
      }]
    }]
  }
]

export const fetchEventPlan = (month: MonthStrings) => {
  return plan.find((planMonth) => planMonth.month === month)
}


