import React, { useState } from 'react'
import { p1,p2,p3,p4 } from './assets/images2/index2'
import phrases from "../phrases.json"

const images = [p1,p2,p3,p4]

function randomIndex(max) {
    return Math.floor(Math.random()*max)
  }

function App2({ onBack}) {
  const [frase,setPhrase] = useState(phrases[randomIndex(phrases.length)])
  const [imagen,setImagen] = useState(images[randomIndex(images.length)])

  function changePhrase () {
    setPhrase(phrases[randomIndex(phrases.length)])
    setImagen(images[randomIndex(images.length)])
  }
  return (
    <div className="wrapper" style={{ backgroundImage: `url('${imagen}')`}} >
      
      <div className="container">
        {/* encabezado o titulo */}
        <h1 className="heading">Galletas de la <br />Fortuna</h1><br />
        {/* contenido */}
        
        <button onClick={onBack} className='cambio_pagina'>cambiar diseño</button>
        <div className="card" style={{ backgroundImage: `url('../public/rectangle2.svg')`}}>  
          <div className="card_body">
            <q className="phrase">{frase.phrase}</q>
          </div>
          
        </div>
        <button onClick={changePhrase} className="btn"> Probar mi suerte</button><br />
        <cite className="author"> <b>Fuente: {frase.author}</b></cite>
        
      </div>
    </div>
  )
}
// import { formatPostcssSourceMap } from 'vite'

export default App2
