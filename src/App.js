import Menu from "./Menu";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import "./style.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
