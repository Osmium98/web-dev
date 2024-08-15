import { useEffect, useState } from "react"


function App() {
const [todos,setTodos] =useState([]);


useEffect(()=>{

  setInterval(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res)=>{
      const json = await res.json();
      setTodos(json.todos);
    })
  },1000)
  
},[])



 return <div>

  {todos.map(({title,description})=><Todos title={title} description={description}/>)}
  
  </div>

  function Todos({title,description}){
    return (
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    )
  }
}






export default App
