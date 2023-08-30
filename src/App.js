import { useEffect, useState } from "react";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefas, setTarefas ] = useState({id: '', texto: "", status: ""});

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

  function statusTarefas(id, status)
  {
    const index = listaTarefas.findIndex((tarefas) => tarefas.id === id);
    listaTarefas[index].status = !status;
    setListaTarefas([...listaTarefas]);

  }

    useEffect(() => {
       setTarefas({ id: "", texto: "", status: "" });
    }, [listaTarefas] )

  return (
    <>
    <header>
      <h1>React DO</h1>
    </header>

      <div>
        <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefas.texto} onChange={(e) => setTarefas( { id: Math.random(), texto: e.target.value, status: false } ) } />
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>
          {listaTarefas.map(( item, index ) => (
              <li key={index}>{item.texto} <button onClick={ () => statusTarefas(item.id, item.status) }>{item.status ? 'Concluída' : 'Não Concluída'}</button> <button onClick={ () => excluirTarefas(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
