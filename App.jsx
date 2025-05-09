import Greeting from "./components/greeting.jsx"
import Hello from "./components/Hello.jsx"
import JsxExample from "./components/JsxExample.jsx"
import { Welcome } from "./components/welcome.jsx"
import Greeting from "./components/greeting.jsx"

export function App() {

    return (
        <div className="App">

            <h1>Olá mundo</h1>
            <Hello nome={"Davi"}/>
            <JsxExample/>
            <Welcome nome={"davi"}/>

            <Greeting name='joao' age={35}/>
            
        </div>
    )
}