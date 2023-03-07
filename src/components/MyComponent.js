import React from "react";

class MyComponent extends React.Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Jamon"],
      calorias: 400,
    };
    return (
      <React.Fragment>
        <h1>{'Receta: ' + receta.nombre}</h1>
        <h2>{'Calorias: ' + receta.calorias}</h2>
        <ol>
        {
            receta.ingredientes.map((ingrediente, i) => {
                console.log(ingrediente);
                return <li key={i}>
                    {ingrediente}
                </li>
            })
        }
        </ol>
        <hr></hr>
      </React.Fragment>
    );
  }
}

export default MyComponent;
