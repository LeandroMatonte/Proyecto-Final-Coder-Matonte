import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  const productos_1 = [
    {
      id: 1,
      titulo: "prod1",
      descripcion: "descripcion 1",
    },
    {
      id: 2,
      titulo: "prod2",
      descripcion: "descripcion 2",
    },
    {
      id: 3,
      titulo: "prod3",
      descripcion: "descripcion 3",
    },
    {
      id: 4,
      titulo: "prod4",
      descripcion: "descripcion 4",
    },
    {
      id: 5,
      titulo: "prod5",
      descripcion: "descripcion 5",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="App">
        <section className="App-section">
          <ItemListContainer slides={productos_1} />
        </section>
      </div>
    </>
  );
};

export default App;
