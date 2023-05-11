import { useState } from "react"

export default function useCounter (initialValue){
    let [value, setValue] = useState(initialValue);

    const setCounter = (type) => {
      const skip = [5,7,8];
      
        if(type === '+') {
          let nextCount = value + 1;
          while (skip.includes(nextCount)) {
            nextCount++;
          }
          setValue(nextCount);
        }
        else if(type === '-'){
          let nextCount = value - 1;
          while (skip.includes(nextCount)) {
            nextCount--;
          }
           setValue(nextCount);
        }
    }
    return [value, setCounter];
}