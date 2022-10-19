import { A } from "@solidjs/router";
import { Component } from "solid-js";

const NavBar: Component = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Колледж "ТИСБИ"</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <A class="nav-link" href="/event-plan">План мероприятий</A>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/events">Мероприятия</A>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/rating">Рейтинг</A>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
