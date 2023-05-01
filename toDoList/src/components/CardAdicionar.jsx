import { useState } from "react"


export default function CardAdicionar({adicionarTarefa}){
    const [novaTarefa, setNovaTarefa] = useState("");

    function addTask() {
        event.preventDefault();
        if(!!novaTarefa){
            adicionarTarefa(novaTarefa)
            setNovaTarefa('')
        }
    }    
    return(
       <div>
             <input 
            type="text" 
            placeholder="Adicione uma tarefa" 
            value={texto} 
            onChange={(e) => setNovaTarefa(e.target.value)} 
        />
        <button onClick={addTask}>Adicionar</button>
       </div> 
      
    )
}