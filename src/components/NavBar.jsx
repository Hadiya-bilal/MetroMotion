import { NavLink } from 'react-router-dom';
import '../assets/styles.css';

const NavBar = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="nav-link">
        <i className="icon-home"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/schedule" className="nav-link">
        <i className="icon-schedule"></i>
        <span>Schedule</span>
      </NavLink>
      <NavLink to="/tickets" className="nav-link">
        <i className="icon-ticket"></i>
        <span>Tickets</span>
      </NavLink>
      <NavLink to="/profile" className="nav-link">
        <i className="icon-account"></i>
        <span>My Account</span>
      </NavLink>
    </nav>
  );
};

export default NavBar;