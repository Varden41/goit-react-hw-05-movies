import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId">
          <Route path="cast" />
          <Route name="reviews" />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
