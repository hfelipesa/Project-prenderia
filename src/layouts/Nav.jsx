import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <section className="logo">
        <img src="src/assets/img/logoProject.png" alt="" />
      </section>
      <div className="containerinfo">
        <Link to="./Nosotros">NOSOTROS</Link>
        <Link to="./Contacto">CONTACTO</Link>
      </div>
    </nav>
  );
}

export default Nav;
