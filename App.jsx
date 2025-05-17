import Hello from "./components/Hello.jsx"
import JsxExample from "./components/JsxExample.jsx"
import { Welcome } from "./components/welcome.jsx"
import Greeting from "./components/greeting.jsx"
import Counter from "./components/counter.jsx"
import LoginControl from "./components/loginControl.jsx"
import TodoList from "./components/TodoList.jsx"
import EvantExamplo from "./components/eventExemplo.jsx"
import CounterEffect from "./components/CounterEffect.jsx"
import FormExample from "./components/FormExample.jsx"
import Message from "./components/Message.jsx"
import MessageList from "./components/MessageList.jsx"


export function App() {

    return (
        <div className="App">

            {/* <h1>Olá mundo</h1>
            <Hello nome={"Davi"}/>
            <JsxExample/>
            <Welcome nome={"davi"}/>
            <Greeting name='Davi' age={17}/>  */}
            {/* <Counter/> */}
            {/* <LoginControl/>     */}
            {/* <TodoList/> */}
            {/* <EvantExamplo/> */}
            {/* <CounterEffect/> */}
            {/* <FormExample/> */}
            {/* <Message text={'Olá mundo!'} onDismiss={()=>{alert("Mensagem fechada")}}/> */}
            <MessageList/>


           
        </div>
    )
}