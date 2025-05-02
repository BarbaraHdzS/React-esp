
import React from "react";
import ReactDOM from "react-dom/client";
import {FirstApp} from "./FirstApp";
import './style.css'; //importamos el archivo de estilos css


    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            {/* Este es el padre */}
            <FirstApp title="hola, soy veggeta" subTitle={123}/>
        </React.StrictMode>
    );