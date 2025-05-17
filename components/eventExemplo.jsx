import { useState } from "react"

export default function EvantExamplo(){
    const [inputValue, setinputValue] = useState()

    const handleChance = (e) =>{
        setinputValue(e.target.value)
    }

    const hadleClick = () =>{
        console.log('botom clicado')
        
    }

    return(
        <div>   
            <h2>exemplo de exemplos</h2>
            <button onClick={hadleClick}>clique</button>
            <input onChange={handleChance} type="text"
            value={inputValue}
            placeholder="Digite algo..." />
            <p>Voce digitou: {inputValue} </p>
        </div>
    )
}