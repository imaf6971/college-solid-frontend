import { Component, For } from "solid-js";

const RatingPlaceholder: Component = () => {

  return (
    <For each={[...Array(5).keys()]}>
      {_ =>
        <li class="list-group-item placeholder-glow">
          <span class="placeholder col-12 rounded"></span>
        </li>
      }
    </For>
  );
};

export default RatingPlaceholder;
