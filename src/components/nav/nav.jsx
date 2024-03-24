import { Link, useLocation } from "react-router-dom";
import nav from "../../assets/nav.json";
import "./nav.css";

/**
 * ? NAV
 * * Renders a navigation component with a logo & a list of links.
 *
 * @param {Object} props - The props object containing the `src` & `alt` properties.
 * @param {string} props.src - The source URL for the logo image.
 * @param {string} props.alt - The alternate text for the logo image.
 * @return {JSX.Element} The rendered navigation component.
 */
const Nav = ({ src, alt }) => {
  const location    = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav">
      <Link to='/' className={currentPath === '/' ? 'active' : ''}>
        <img src={src} alt={alt} />
      </Link>

      <ul>
        { nav.map(({ link, content }) =>

        <li key={link}>
          <Link to={link} className={currentPath === link ? 'active' : ''}>
            {content}
          </Link>
        </li>

        )}
      </ul>
    </nav>
  )
}

export default Nav
