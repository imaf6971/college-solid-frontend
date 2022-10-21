import { Component, createResource, For } from "solid-js";
import RatingItem from "../components/RatingItem";

const fetchRating = async () =>
  (await fetch('localhost:8080/api/rating')).json();

export interface IRating {
  points: number,
  groupCode: string
}

const Rating: Component = () => {

  const [rating] = createResource<IRating[]>(fetchRating);

  return (
    <div class="pt-3 container col-md-6">
      <ul class="list-group">
        <For each={rating()!.sort((a, b) => a.points - b.points)}>
          {(item) => <RatingItem item={item} />}
        </For>
      </ul>
    </div>
  );
};

export default Rating;
