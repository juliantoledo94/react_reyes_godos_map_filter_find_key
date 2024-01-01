import MiComponente from './MiComponente'
import React from 'react'

const App = () => {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
  return (
    <>
      <MiComponente nombre ={reyes[0].nombre} reinado ={reyes[0].reinado} vacas={reyes[0].vacasComidas}></MiComponente>
      <MiComponente nombre ={reyes[1].nombre} reinado ={reyes[1].reinado} vacas={reyes[1].vacasComidas}></MiComponente>
      <MiComponente nombre ={reyes[2].nombre} reinado ={reyes[2].reinado} vacas={reyes[2].vacasComidas}></MiComponente>
      <MiComponente nombre ={reyes[3].nombre} reinado ={reyes[3].reinado} vacas={reyes[3].vacasComidas}></MiComponente>
      <MiComponente nombre ={reyes[4].nombre} reinado ={reyes[4].reinado} vacas={reyes[4].vacasComidas}></MiComponente>
      <MiComponente nombre ={reyes[5].nombre} reinado ={reyes[5].reinado} vacas={reyes[5].vacasComidas}></MiComponente>
      <MiComponente nombre ={reyes[6].nombre} reinado ={reyes[6].reinado} vacas={reyes[6].vacasComidas}></MiComponente>
    </>
  )
}

export default App