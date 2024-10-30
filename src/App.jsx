import { img1,img2,img3, img4 } from "./assets/images";
import phrases from "../phrases.json"
import { useState } from "react";
import '../src/App.css';
import App2 from './App2.jsx'

const images = [img1, img2, img3,img4]

function randomIndex(max) {
  return Math.floor(Math.random()*max)
}

function App() {
  const [frase,setPhrase] = useState(phrases[randomIndex(phrases.length)])
  const [imagen,setImagen] = useState(images[randomIndex(images.length)])
  const [currentApp, setCurrentApp] = useState('app1')

  function changePhrase () {
    setPhrase(phrases[randomIndex(phrases.length)])
    setImagen(images[randomIndex(images.length)])
  }

  if (currentApp === 'app2'){
    return <App2 onBack={() => setCurrentApp('app1')}/>
  }
  return (
    <div className="wrapper" style={{ backgroundImage: `url('${imagen}')`}} >
      
      <div className="container">
        {/* encabezado o titulo */}
        <h1 className="heading">Galletas de la <br />Fortuna</h1><br />
        {/* contenido */}
        
        <button onClick={() => setCurrentApp('app2')} className="cambio_pagina">cambiar diseño</button>
        <div className="card">  
          <div className="card_body">
            <q className="phrase">{frase.phrase}</q>
            <cite className="author"> <b>- {frase.author}</b></cite>
            <img src="../public/doble-comillas.png" alt="" className="comillas"/>
          </div>
        </div>
        {/* boton */}
        <button onClick={changePhrase} className="btn">ver otro</button>
      </div>
    </div>
  )
}

export default App
