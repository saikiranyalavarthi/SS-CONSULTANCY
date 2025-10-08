import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navabr";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Consultant from "./pages/Consultant";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* add top padding to prevent overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="Consultant" element={<Consultant />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
