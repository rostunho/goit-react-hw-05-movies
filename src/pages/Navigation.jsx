import { NavLink, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="movies"> Movie </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
