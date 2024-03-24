import "./collapse.css";

/**
 * ? COLLAPSE
 * * Renders a collapsible section with a title and content.
 *
 * @param {Object} props - The properties for the collapsible section.
 * @param {string} props.title - The title of the collapsible section.
 * @param {string} props.content - The content to be displayed when the section is expanded.
 * @return {JSX.Element} - The rendered collapsible section component.
 */
const Collapse = ({ title, content }) => {

  return (
    <section className="collapse">

      <header>
        <h2>{title}</h2>
        <i className="fa-solid fa-chevron-down"></i>
      </header>

      <p>{content}</p>

    </section>
  )
}

export default Collapse
