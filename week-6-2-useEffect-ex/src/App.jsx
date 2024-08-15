import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [selectId,setSelectId] = useState(1);

  return (
    <div>
      <button onClick={()=>{
        setSelectId(1);
      }}>1</button>
      <button onClick={()=>{
        setSelectId(2);
      }}>2</button>
      <button onClick={()=>{
        setSelectId(3);
      }}>3</button>
      <button onClick={()=>{
        setSelectId(4);
      }}>4</button>
      <Todos id={selectId} />
    </ div>
  )
}

function Todos({id}){
  const [todos, setTodos] = useState([])


  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todo)
  })
  },[id])
  

  return (
    
    <div>
    Id:{id}
    <h1>{todos.title}</h1>
    <h3>{todos.description}</h3>
    </div>
  )
}


export default App
