export const Welcome = ({nome}) => {
    const weeKday = new Date().toLocaleDateString('pt-BR', {weekday: 'long'})
    return(
        
        <div>
            <h2>Bem vindo, {nome}</h2>
            <p>hoje é {weeKday}</p>
        </div>
    )
        
    
}