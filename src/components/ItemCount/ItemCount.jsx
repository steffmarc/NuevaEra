import React from 'react'

import { useState } from 'react'

const ItemCount = ({stock}) => {

const [counter, setCounter] = useState(0)

const increase = () => {
    if(counter < stock){
        setCounter(counter + 1)
    }
}

const decrease = () => {
    if(counter > 1){
        setCounter(counter - 1)
    }
}

return (
    <>
        <button onClick={increase}> + </button>
        <p>{counter} </p>
        <button onClick={decrease}> - </button>
    </>
    )
}

export default ItemCount