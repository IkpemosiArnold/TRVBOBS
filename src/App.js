import Homepage from "./Homepage";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import { Route, Routes, useLocation } from "react-router-dom";
import "./style.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
