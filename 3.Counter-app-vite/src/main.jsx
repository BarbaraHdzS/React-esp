
import React from "react";
import ReactDOM from "react-dom/client";
import {FirstApp} from "./FirstApp";
import './style.css'; //importamos el archivo de estilos css
import { CounterApp } from "./CounterApp";


    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            {/* Este es el padre */}
            <CounterApp value={8} />
        </React.StrictMode>
    );