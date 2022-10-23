import { ParentComponent } from "solid-js";

const Center: ParentComponent<{}> = (props) => {
  return (
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">{props.children}</div>
    </div>
  );
};

export default Center;
