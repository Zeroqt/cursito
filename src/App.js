import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";

function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );
  return presentacion;
}

function App() {
  var nombre = "Michel Herrera";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Primera pagina de la super aplicacion.</p>

        {HolaMundo(nombre, 12)}

        <section className="componentes">
          <MyComponent></MyComponent>
        </section>
      </header>
    </div>
  );
}

export default App;
