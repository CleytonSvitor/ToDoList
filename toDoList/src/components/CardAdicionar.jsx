import { useState } from "react"


function CardAdicionar(props){
    const [novaTarefa, setNovaTarefa] = useState("");

    function addTask() {
        props.addTask(setNovaTarefa);
        setNovaTarefa("")
    }    
    return(
        <div>
            <input
             placeholder="adicionar tarefa"
             type="text"
            value={novaTarefa}
            onChange={(event) => setNovaTarefa(event.target.value)}
            />
            <button onClick={addTask}>Adicionar Tarefa</button>
        </div>
    )
}