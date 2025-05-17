import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)
    return(
        <div>
            <h2>contador</h2>
            <p>Voce clicou {count} vezes</p>
 
            <button onClick={()=>{
                setCount(count+1)
            }}>
                click aqui 
            </button>

            <button onClick={()=>{
                setCount(count-1)
            }}>
                remover
            </button>
        </div>
    )
}