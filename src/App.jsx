import { BrowserRouter, Routes, Route } from "react-router-dom";

//page
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import ErrorPage from "./pages/Error";

//components
import { Header } from "./components/Layouts/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
