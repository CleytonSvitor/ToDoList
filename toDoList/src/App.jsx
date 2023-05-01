import CardAdicionar from "./components/CardAdicionar.jsx"
import { useState } from "react";


function App() {
  
  const [list, setList] = useState([
    { id: 1, texto: "Comprar pão na padaria", finalizado: false },
    { id: 2, texto: "Comprar bolo na padaria", finalizado: true }
  ])

  const adicionarTarefa = ((texto) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      texto: texto,
      finalizado: false,
    });
    setList(newList)
    listaFiltrada = list.filter(item => item.finalizado)
  })
  
  return (
     <><h1>todo list</h1></>
  )
}
export default App
