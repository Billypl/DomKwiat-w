import Navigation from "./components/NavBar";

// tip: rafce

function detectPageLink() {
  switch (window.location.pathname) {
    case "/":
      return "Strona główna";
    case "/o-nas":
      return "O nas";
    case "/oferta":
      return "Oferta";
    case "/produkty":
      return "Produkty";
    case "/kwiatomaty":
      return "Kwiatomaty";
    case "/kontakt":
      return "Kontakt";
    default:
      return "Strona główna";
  }
}

function App() {
  return (
    <>
      <Navigation />
      {detectPageLink()}
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
