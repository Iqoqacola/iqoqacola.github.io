import Header from "./components/Layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-richBlack overflow-x-hidden">
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
