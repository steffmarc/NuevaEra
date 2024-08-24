import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <main>
        <h1 className='Title'>{greeting}</h1>
        <p className='Intro'>Explora nuestra exclusiva colección de muebles y transforma tu hogar con estilo y elegancia. En Nueva Era, te ofrecemos piezas únicas que combinan diseño moderno y confort, perfectas para cada rincón de tu casa. Descubrí cómo podemos ayudarte a hacer realidad tus sueños de decoración y renovación.</p>
    </main>
    </>
  )
}

export default ItemListContainer