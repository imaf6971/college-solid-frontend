import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import NavBar from './components/NavBar';
import EventPlan from './pages/EventPlan';
import Rating from './pages/Rating';

const App: Component = () => {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/rating" component={Rating} />
      <Route path="/event-plan" component={EventPlan} />
    </Routes>
    </>
  );
};

export default App;
