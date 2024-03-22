import "./collapse.css";

const Collapse = ({ title, content }) => {

  return (
    <section className="collapse">
      <header>
        <h2>{title}</h2>
        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </header>

      <p>{content}</p>
    </section>
  )
}

export default Collapse
