import { useEffect, useState } from "react";
import "./App.css";

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
      <div className="header-principal">
        <h1>Quais suas tarefas hoje?</h1>
      </div>      
    </header>

    <div className="data">
      <span>30/08</span>
      <br></br>
      <span>QUA</span>
    </div>
    

    <header>
      <div className="header-2">
      <h3>Título da nota</h3>
      </div>
    </header>

    <header>
      <div className="header-3">
      <h4>Subtítulo da nota</h4>
      </div>
    </header>

    <p>Última modificação hoje às 11:33</p>

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