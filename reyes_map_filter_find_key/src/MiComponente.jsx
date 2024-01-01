import React from 'react'
import "./App.css"

const MiComponente = ({reyes}) => {
    const url="https://www.html6.es/img/rey_";
    const resultado = reyes.map(e => 
        <div key={e.nombre} className='rey'>
         <span className='nombre'>{e.nombre.toUpperCase()} </span> ha comido {e.reinado * e.vacasComidas *365} vacas en sus {e.reinado} años de reinado
         <div>
            <img src={url+e.nombre.toLowerCase()+".png"} />
         </div>
         </div>)
  return (
    <>
    
    {resultado}
    
    </>
  )
}

export default MiComponente