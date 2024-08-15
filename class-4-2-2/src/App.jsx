import { useRef, useState } from "react"
import Todo from "./Components/Todo"


const App = () => {
  const [data,setData] =useState([])
  const inputRef = useRef(null)
 
  return (
    <div>
      <Todo/>
  
    </div>
  )
}

export default App
