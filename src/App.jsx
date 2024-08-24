import { useState } from 'react'
import './App.css'
import 'bootstrap'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Tu Hogar  ·  Tu Estilo  ·  Tu Nueva Era"/>
    </>
  )
}

export default App
