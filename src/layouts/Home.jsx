import { Link } from "react-router-dom";
import Nav from "./Nav";
import Slider from "./Slider";
import Footer from "./Footer";

function Home() {
  return (
    <section className="containerMain">
      <div>
        <Nav />
      </div>
      <main className="container">
        <section className="slider">
         <Slider/>
        </section>
        <section className="log">
          <Link to="./Login">Click para administrar</Link>
        </section>
      </main>
      <footer >
         <Footer/>
      </footer>
    </section>
  );
}

export default Home;
