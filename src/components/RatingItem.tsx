import { Component } from "solid-js";
import { IRating } from "../pages/Rating";

const RatingItem: Component<{item: IRating}> = (props) => {

  return (
    <li class="list-group-item">
      {props.item.points} {props.item.groupCode}
    </li>
  );
};

export default RatingItem;
