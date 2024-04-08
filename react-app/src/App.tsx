import Navigation from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/style.css";
import Footer from "./components/Footer";

// tip: rafce

function detectPageLink() {
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
      return "Kwiatomaty";
    case "/kontakt":
      return "Kontakt";
    default:
      return <Home />;
  }
}

function App() {
  return (
    <>
      <Navigation />
      <div className="mainWrapper">{detectPageLink()}</div>
      <Footer />
    </>
  );
}

// function App() {
//   let items = ["1", "2", "3", "4", "5"];
//   const onSelectedItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Numbers"
//         onSelectedItem={onSelectedItem}
//       />
//     </div>
//   );
// }

export default App;
