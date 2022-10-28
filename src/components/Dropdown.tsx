import { Component } from "solid-js";
import { selectedMonth, setSelectedMonth, toLocalMonth } from "../services/Month"

const MonthDropdown: Component = () => {
  return (
    <span class="dropdown">
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {toLocalMonth(selectedMonth())}
      </button>
      <ul class="dropdown-menu">
        <li>
          <a onclick={() => setSelectedMonth('July')} class="dropdown-item">
            Июль
          </a>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </span>
  );
};

export default MonthDropdown;
