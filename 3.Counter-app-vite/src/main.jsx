//importaciones: react u reactDOM (librerias para crear componentes y renderizarlos en el DOM)
import React from "react";
import ReactDOM from "react-dom/client";

import { HelloWorldApp } from "./HelloWorldApp";
import {FirstApp} from "./FirstApp";


    //renderizamos la funcion App en el id root
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            {/* renderizas la funcion de arriba  */}
            <HelloWorldApp />
            <FirstApp />
        </React.StrictMode>
    );