import Navigation from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/style.css";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import FlowerMachines from "./pages/Flower-machines";

// tip: rafce

function routeMainPage() {
  switch (window.location.pathname) {
    case "/":
      return <Home />;
    case "/o-nas":
      return <About />;
    case "/oferta":
      return "Oferta";
    case "/produkty":
      return "Produkty";
    case "/kwiatomaty":
      return <FlowerMachines />;
    case "/kontakt":
      return <Contact />;
    default:
      return <Home />;
  }
}

function App() {
  return (
    <>
      <Navigation />
      <div className="mainWrapper">
        <main>{routeMainPage()}</main>
      </div>
      <Footer />
    </>
  );
}

export default App;
