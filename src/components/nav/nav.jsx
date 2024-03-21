import { Link } from "react-router-dom";
import nav from "../../assets/nav.json";
import "./nav.css";

const Nav = ({ src, alt }) => {

  return (
    <nav>
      <Link href="/">
        <img src={src} alt={alt} />
      </Link>

      <ul>
        { nav.map(({ link, content }) =>

        <li key={link}>
          <Link href={link}>{content}</Link>
        </li>

        )}
      </ul>
    </nav>
  )
}

export default Nav
