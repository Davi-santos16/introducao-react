import { useState } from "react";


export default function (){
    const Task = [
        {id: 1, text: 'Aprendendo React'},
        {id: 2, text: 'Construindo um Projeto'},
        {id: 3, text: 'Publicar no GitHub'},
        {id: 4, text: 'coloca no linkdin'}
    ]

    return(
        <div>
            <h2>Lista de tarefas</h2>

            <ul>
               {
                Task.map((Task, index)=>{
                    return(<li key={index}>{Task.text}</li>)

                })
               }
            </ul>
        </div>
    )
}