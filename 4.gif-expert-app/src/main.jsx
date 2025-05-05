import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

//para que los estilos se apliquen a toda la aplicacion
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //punto de entrada, solo este 
  <>
    <GifExpertApp/>
  </>
)
