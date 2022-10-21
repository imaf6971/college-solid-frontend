import { Component, createEffect, createResource, createSignal, For, Show } from "solid-js";
import RatingItem from "../components/RatingItem";
import RatingPlaceholder from "../components/RatingPlaceholder";

const fetchRating = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { points: 1, groupCode: 'PM-191/2' },
    { points: 2, groupCode: 'IS-201/1' }
  ]
}

export interface IRating {
  points: number,
  groupCode: string
}

const Rating: Component = () => {

  const [rating, setRating] = createSignal<IRating[]>([])
  const [ratingResource] = createResource<IRating[]>(fetchRating);

  createEffect(() => {
    if (!ratingResource.loading) {
      setRating(() => ratingResource()!.sort((a, b) => b.points - a.points))
    }
  })

  return (
    <div class="pt-3 container col-md-6">
      <ul class="list-group">
        <Show when={!ratingResource.loading} fallback={<RatingPlaceholder />}>
          <For each={rating()}>
            {(item) => <RatingItem item={item} />}
          </For>
        </Show>
      </ul>
    </div>
  );
};

export default Rating;
