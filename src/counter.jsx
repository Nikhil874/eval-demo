import { useState } from "react"

export function Counter({initial}){
const [counter,setCounter]=useState(initial);
function handlefunction(value){
    setCounter(counter+value >0 ? counter+value : 0);
}
    return (
        <>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>handlefunction(1)}>ADD</button>
        <button onClick={()=>{handlefunction(-1)}}>SUB</button>
        </>
    )
}

