import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="align-items-center d-flex flex-column">
      <h2>Este proyecto se realizo usando la Api</h2>
      <Link className="btn linkApi" to="web.dragonball-api.com">Dragon Ball Api</Link>
    </footer>
  );
}

export default Footer
