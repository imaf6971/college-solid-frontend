import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import NavBar from './components/NavBar';
import EventPlanPage from './pages/EventPlan';
import Rating from './pages/Rating';

const App: Component = () => {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/rating" component={Rating} />
      <Route path="/event-plan" component={EventPlanPage} />
    </Routes>
    </>
  );
};

export default App;
