import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue,setInputValue] =useState(1)

let sum =useMemo(()=>{
  let sum=0;
  for(let i=1;i<=inputValue;i++){
    sum=sum+i;
  }
  return sum;

},[inputValue])
  
  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value)
      }}placeholder='Find the sum from 1 to n'></input> 
      <br/>
        Sum from 1 to {inputValue} is {sum}
      <br/>

      <button onClick={()=>{
        setCount(count+1)
      }}>Counter {count}</button>

      
    </div>
  )
}

export default App
