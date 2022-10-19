import { Component, createEffect, createSignal, For } from "solid-js";
import RatingItem from "../components/RatingItem";

const [todos, setTodos] = createSignal([]);

const Rating: Component = () => {

  createEffect(async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos = await result.json()
    setTodos(todos)
  });

  return (
    <div class="container">
      <ul class="list-group">
        <For each={todos()}>
          {(item) => <RatingItem item={item} />}
        </For>
      </ul>
    </div>
  );
};

export default Rating;
