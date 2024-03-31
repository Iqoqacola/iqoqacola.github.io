import { About } from "./components/Layouts/About";
import { Footer } from "./components/Layouts/Footer";
import { Header } from "./components/Layouts/Header";
import { Hero } from "./components/Layouts/Hero";
import { Project } from "./components/Layouts/Project";

export default function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Footer></Footer>
    </>
  );
}