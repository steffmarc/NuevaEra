import { useState, useEffect } from "react"
import "./Categories.css"

const Categories = () => {
    const [category, setCategory] = useState("")

    useEffect(()=>{
        document.title = `Categorías ${category}`
    }, [category])

    const categoryHandler = (category) => {
        setCategory(category)
    }


  return (
    <>
      <div className="btnCat">
      <button onClick={()=>categoryHandler("sillones")}>Sillones</button>
      <button onClick={()=>categoryHandler("mesasRatonas")}>Mesas ratonas</button>
      <button onClick={()=>categoryHandler("mesasLCD")}>Mesas LCD</button>
      </div>
    </>
  )
}

export default Categories