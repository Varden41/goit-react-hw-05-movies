import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/movies"></NavLink>
        </li>
      </ul>
    </div>
  );
};
