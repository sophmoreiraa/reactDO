import { useEffect, useState } from "react";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefas, setTarefas ] = useState({id: '', texto: ""});

  function addTarefa()
  {
    if( tarefas.texto !== "") {
      setListaTarefas([...listaTarefas, tarefas]);
    }
  }

  function excluirTarefas( id )
  {
     const novaLista = listaTarefas.filter( tarefa => tarefa.id !== id);
     setListaTarefas(novaLista);
  }

    useEffect(() => {
       setTarefas({ id: "", texto: ""});
    }, [listaTarefas] )

  return (
    <>
    <header>
      <h1>React DO</h1>
    </header>

      <div>
        <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefas.texto} onChange={(e) => setTarefas( { id: Math.random(), texto: e.target.value } ) } />
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listaTarefas.map(( item, index ) => (
              <li key={index}>{item.texto} <button onClick={ () => excluirTarefas(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
