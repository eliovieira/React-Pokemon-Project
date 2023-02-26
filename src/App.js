import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";
import Search from "./pages/Search";

// components
import Navbar from "./components/Navbar";
import logo from "./images/logo-pokemon.png";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="title">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} height="140" width="381" />
          </Link>
        </div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/pokemon/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
      <div className="footer">
        Made by Élio Vieira
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  );
}

export default App;
