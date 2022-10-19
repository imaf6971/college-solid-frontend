import { Component } from "solid-js";

const RatingItem: Component<{item: any}> = (props) => {

  return (
    <li class="list-group-item">
      {props.item.id} {props.item.title}
    </li>
  );
};

export default RatingItem;
