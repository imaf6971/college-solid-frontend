import { Component } from "solid-js";

const Dropdown: Component = () => {
  return (
    <span class="dropdown">
      <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        ТЕКУЩИЙ МЕСЯЦ
      </button>
    </span>
  );
};

export default Dropdown;
