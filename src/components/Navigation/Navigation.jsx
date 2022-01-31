import { Outlet } from 'react-router-dom';
import { NavLink, Nav } from './Navigation.styled';

function Navigation() {
  return (
    <>
      <Nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="movies"> Movie </NavLink>
      </Nav>
      <Outlet />
    </>
  );
}

export default Navigation;
