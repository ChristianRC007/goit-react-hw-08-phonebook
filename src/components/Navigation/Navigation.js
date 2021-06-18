import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        exact
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
