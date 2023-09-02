import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Suspense } from 'react';

function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
