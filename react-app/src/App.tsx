import Navigation from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/style.css";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import FlowerMachines from "./pages/Flower-machines";
import { Routes, Route } from "react-router-dom";

// tip: rafce

function App() {
  return (
    <>
      <Navigation />
      <div className="mainWrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/oferta" element={"Oferta"} />
            <Route path="/produkty" element={"Produkty"} />
            <Route path="/kwiatomaty" element={<FlowerMachines />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
