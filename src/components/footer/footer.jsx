import logo from "../../assets/footer.webp";
import "./footer.css";

/**
 * ? FOOTER
 * * Renders the footer component with the provided brand name.
 *
 * @param {Object} props - The props object containing the brand name.
 * @param {string} props.brand - The name of the brand.
 * @return {JSX.Element} The rendered footer component.
 */
const Footer = ({ brand }) => {

  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />

      <p>
        © 2020 {brand}.
        All rights reserved
      </p>
    </footer>
  )
}

export default Footer
