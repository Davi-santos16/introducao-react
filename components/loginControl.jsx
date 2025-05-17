import { useState } from "react";

export default function LoginControl() {
    
    const [isLoggein, setIsLoggein] = useState(false)

    return(
        <>
          <h2>Controle de Login</h2> 


          {
            isLoggein ? (
                <div>
                    <p>Bem vindo de volta</p>
                    <button onClick={()=>{setIsLoggein(false)}}>Sair</button>
                    
                </div>
                
            ):(
                <div>
                    <p>por favor, faça o Login</p>
                    <button onClick={()=>{setIsLoggein(true)}}>entrar</button>
                </div>
            )
        } 
        </>
        
    )
}