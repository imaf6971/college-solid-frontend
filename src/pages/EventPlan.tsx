import { Component, createEffect, createSignal, For, onMount } from "solid-js";
import MonthDropdown from "../components/Dropdown";
import { EventPlan, fetchEventPlan } from "../services/EventTypes";
import { selectedMonth } from "../services/Month";

const EventPlanPage: Component<{}> = (props) => {

  const [monthPlan, setMonthPlan] =
    createSignal<EventPlan>(fetchEventPlan(selectedMonth())!)

  createEffect(() => {
    const mth = selectedMonth()
    setMonthPlan(() => fetchEventPlan(mth)!)
  })

  return (
    <div class="container">
      <div>
        <h1>План Мероприятий за
          <MonthDropdown />
        </h1>
      </div>
      <div class="col-md-6">
        <For each={monthPlan().modules}>
          {(module) =>
            <div>
              <h2>{module.number} {module.title}</h2>
              <ul>
                <For each={module.events}>
                  {(event) => <li>{event.title}</li>}
                </For>
              </ul>
            </div>}
        </For>
      </div>
    </div>
  );
};

export default EventPlanPage;
