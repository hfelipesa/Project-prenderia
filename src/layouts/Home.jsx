import Nav from "./Nav";
import Slider from "./Slider";
import Footer from "./Footer";
import Login from "./Login";

function Home() {
  return (
    <section className="containerMain">
      <div>
        <Nav/>
      </div>
      <main className="container">
        <section className="slider">
         <Slider/>
        </section>
        <section className="log">
          <Login/>
        </section>
      </main>
      <footer >
         <Footer/>
      </footer>
    </section>
  );
}

export default Home;
