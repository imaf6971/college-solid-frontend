import { Component } from "solid-js";
import Dropdown from "../components/Dropdown";

const EventPlan: Component<{}> = (props) => {

  return (
    <div class="container">
      <div>
        <h1>План Мероприятий за
          <Dropdown />
        </h1>
      </div>
      <div class="col-md-6">
        <h2>1.1 Hello world</h2>
      </div>

    </div>
  );
};

export default EventPlan;
