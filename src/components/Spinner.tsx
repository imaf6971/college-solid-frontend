import { Component } from "solid-js";

const Spinner: Component<{}> = (props) => {

  return (
    <div class="spinner-border">
      <span class="visually-hidden">Загрузка...</span>
    </div>
  );
};

export default Spinner
