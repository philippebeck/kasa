import { Link, useLocation } from "react-router-dom";

import data from "../../assets/data.json";
import logo from '../../assets/nav.webp';

import "./nav.css";

/**
 * ? NAV
 * * Renders a navigation component with a logo & a list of links.
 *
 * @return {JSX.Element} The rendered navigation component.
 */
const Nav = () => {

  const location    = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav">

      <Link 
        to='/' 
        className={currentPath === '/' ? 'active' : ''}
      >
        <img src={logo} alt={data.logo} />
      </Link>

      <ul>
        { data.nav.map(({ link, content }) =>

        <li key={link}>
          <Link 
            to={link} 
            className={currentPath === link ? 'active' : ''}
          >
            {content}
          </Link>
        </li>

        )}
      </ul>

    </nav>
  )
}

export default Nav
