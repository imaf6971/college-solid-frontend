import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import NavBar from './components/NavBar';
import Rating from './pages/Rating';

const App: Component = () => {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/rating" component={Rating} />
    </Routes>
    </>
  );
};

export default App;
