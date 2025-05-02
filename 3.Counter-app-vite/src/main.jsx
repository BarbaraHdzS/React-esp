//importaciones: react u reactDOM (librerias para crear componentes y renderizarlos en el DOM)
import React from "react";
import ReactDOM from "react-dom/client";

//componente inicial de la aplicacion
//funcion App que retorna JSX (JavaScript XML) que es una sintaxis de JavaScript que permite escribir HTML dentro de JavaScript
function App() {
    return <h1>Hello, world!</h1>;
    }

    //renderizamos la funcion App en el id root
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            {/* renderizas la funcion de arriba  */}
            <App />
        </React.StrictMode>
    );