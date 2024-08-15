import { useState } from "react"


function App() {
 
  return (
    <div>  
      <HeaderWithButton />
      <Header title="Subham"/>
    </div>
  )
}
function HeaderWithButton(){
  const [title,setTitle] = useState("Subham")
 
 function changeTitle(){
  setTitle(Math.random())
}

  return (
    <>
       <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={title}/>
      
    </>
  )



}

function Header({title}){
  return <div>
    {title}
  </div>
}



export default App
