import data from "../../assets/data.json";
import logo from "../../assets/footer.webp";

import "./footer.css";

/**
 * ? FOOTER
 * * Renders the footer component with the provided brand name.
 *
 * @return {JSX.Element} The rendered footer component.
 */
const Footer = () => {

  return (
    <footer className="footer">

      <img
        src={logo}
        alt={data.logo}
      />

      <p>
        © {data.footer_year} {data.brand}. {data.footer_text}
      </p>

    </footer>
  )
}

export default Footer
