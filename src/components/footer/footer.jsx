import logo from "../../assets/footer.webp";
import "./footer.css";

const Footer = ({ brand }) => {

  return (
    <footer>
      <img src={logo} alt="Logo" />

      <p>
        © 2020 {brand}.
        All rights reserved
      </p>
    </footer>
  )
}

export default Footer
