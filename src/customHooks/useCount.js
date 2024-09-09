import { useState } from "react";

export const useCount = (minValue, maxValue) => {
   const [count, setCount] = useState (minValue)

   const increase = () => {
       if(count < maxValue) {
           setCount(count + 1)
       }
   }

   const decrease = () => {
       if(count > minValue) {
           setCount(count - 1)
       }
   }

   return {count, increase, decrease}

}